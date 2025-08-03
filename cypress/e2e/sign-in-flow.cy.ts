describe('sign-in flow', () => {
  it('redirects root to sign-in', () => {
    cy.request({
      url: '/',
      followRedirect: false,
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(302);
      expect(resp.redirectedToUrl).to.contain('/sign-in');
    });
  });
});
