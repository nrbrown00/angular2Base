import { Angular2AuthFiddlePage } from './app.po';

describe('angular2-auth-fiddle App', () => {
  let page: Angular2AuthFiddlePage;

  beforeEach(() => {
    page = new Angular2AuthFiddlePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
