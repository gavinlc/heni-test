import { getGreeting } from '../support/app.po';

describe('harvard-art', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to Harvard Print Gallery!');
  });
});
