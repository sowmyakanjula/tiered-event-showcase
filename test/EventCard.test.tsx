import { render, screen } from '@testing-library/react';
import EventCard, { Event } from '../components/EventCard';

describe('EventCard', () => {
  it('renders event details', () => {
    const event: Event = {
      id: 1,
      name: 'Sample',
      description: 'An event',
      tier: 2,
      event_date: '2024-05-15',
    };

    render(<EventCard event={event} />);

    expect(screen.getByText('Sample')).toBeInTheDocument();
    expect(screen.getByText('An event')).toBeInTheDocument();
    expect(
      screen.getByText(new Date('2024-05-15').toLocaleDateString())
    ).toBeInTheDocument();
    expect(screen.getByText('Gold tier')).toBeInTheDocument();
  });
});
