/* eslint-disable no-undef */
import 'regenerator-runtime';
import '../styles/main.sass';
import '../styles/responsive.sass';
import './components/app-image';
import './components/app-footer';
import './components/app-skip-content';
import App from './views/app';
import swRegister from './utils/sw-register';
import NotificationHelper from './utils/notification-helper';

const app = new App({
  button: document.querySelector('app-nav #hamburger'),
  drawer: document.querySelector('#nav-menu'),
  content: document.querySelector('#content-skip'),
  skipButton: document.querySelector('#skip-content'),
});

window.addEventListener('hashchange', () => { app.renderPage(); });
window.addEventListener('load', () => {
  document.getElementById('preload').style.display = 'none';
  app.renderPage();
  document.querySelector('footer #year').innerHTML = (new Date()).getFullYear();
  NotificationHelper.sendNotification({
    title: 'MakanYuk',
    options: {
      body: 'Selamat datang di aplikasi katalog restoran MakanYuk',
    },
  });
  swRegister();
});
