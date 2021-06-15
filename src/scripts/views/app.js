import '../components/app-nav';
// eslint-disable-next-line no-unused-vars
import AppList from '../components/app-list';
// eslint-disable-next-line no-unused-vars
import AppListItemDetail from '../components/app-list-item-detail';
import DrawerInitiator from '../utils/drawer-initiator';
// eslint-disable-next-line no-unused-vars
import AppLikeButton from '../components/app-like-button';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, skipButton,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._skipButton = skipButton;

    this._initialAppShell();
    this._initialSkipButton();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  _initialSkipButton() {
    this._skipButton.addEventListener('click', () => {
      this._content.setAttribute('tabindex', '0');
      this._content.focus();
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
