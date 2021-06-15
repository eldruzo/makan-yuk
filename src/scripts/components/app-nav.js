class AppNav extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute('title');
    this.render();
  }

  render() {
    this.innerHTML = `
            <div id="hamburger">
                <button><i class="material-icons">menu</i></button>
            </div>
            <div id="app-name">
                ${this.title}
            </div>
            <ul id="nav-menu">
                <li><a href="#/home"><i class="material-icons">home</i> Home</a></li>
                <li><a href="#/search"><i class="material-icons">search</i> Search</a></li>
                <li><a href="#/favorite"> <i class="material-icons">favorite</i>Favorite</a></li><!--link ke ?page=favorite-->
                <li><a target="__blank" href="https://www.linkedin.com/in/eldruzo/"><i class="material-icons">info</i>About Us</a></li>
            </ul>
    `;
  }
}
customElements.define('app-nav', AppNav);
