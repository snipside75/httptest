import { Untitled10Page } from './app.po';

describe('untitled10 App', function() {
  let page: Untitled10Page;

  beforeEach(() => {
    page = new Untitled10Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
