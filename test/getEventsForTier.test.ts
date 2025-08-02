describe('getEventsForTier', () => {
  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    delete (global as any).fetch;
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  });

  it('throws if missing configuration', async () => {
    jest.resetModules();
    const { getEventsForTier } = await import('../lib/events');
    await expect(getEventsForTier(1)).rejects.toThrow('Missing Supabase configuration');
  });

  it('fetches events with correct headers', async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://supabase.test';
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'anon';
    const mockData = [{ id: 1, name: 'Test', description: 'Desc', tier: 1 }];
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    });
    (global as any).fetch = mockFetch;

    jest.resetModules();
    const { getEventsForTier } = await import('../lib/events');
    const data = await getEventsForTier(1);

    expect(mockFetch).toHaveBeenCalledWith(
      'https://supabase.test/rest/v1/events?select=*&tier=lte.1&order=event_date.asc',
      {
        headers: {
          apikey: 'anon',
          Authorization: 'Bearer anon',
        },
      }
    );
    expect(data).toEqual(mockData);
  });

  it('throws on Supabase error', async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://supabase.test';
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'anon';
    const mockFetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
      text: jest.fn().mockResolvedValue('fail'),
    });
    (global as any).fetch = mockFetch;

    jest.resetModules();
    const { getEventsForTier } = await import('../lib/events');

    await expect(getEventsForTier(1)).rejects.toThrow('Supabase error: 500 fail');
  });
});
