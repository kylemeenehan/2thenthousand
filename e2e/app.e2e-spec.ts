import { TwotenthousandPage } from './app.po';

describe('twotenthousand App', () => {
  let page: TwotenthousandPage;

  beforeEach(() => {
    page = new TwotenthousandPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
