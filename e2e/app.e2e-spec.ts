import { ClasesInterfazPage } from './app.po';

describe('clases-interfaz App', function() {
  let page: ClasesInterfazPage;

  beforeEach(() => {
    page = new ClasesInterfazPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
