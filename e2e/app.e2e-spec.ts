import { WebmetronomePage } from './app.po';

describe('webmetronome App', function() {
  let page: WebmetronomePage;

  beforeEach(() => {
    page = new WebmetronomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
