import { BlogInangularPage } from './app.po';

describe('blog-inangular App', function() {
  let page: BlogInangularPage;

  beforeEach(() => {
    page = new BlogInangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
