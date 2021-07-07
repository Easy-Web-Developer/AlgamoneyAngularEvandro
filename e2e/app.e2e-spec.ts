import { AlgamoneyUiEvandroPage } from './app.po';

describe('algamoney-ui-evandro App', () => {
  let page: AlgamoneyUiEvandroPage;

  beforeEach(() => {
    page = new AlgamoneyUiEvandroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
