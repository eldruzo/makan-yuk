import './app-list-item';

class AppList extends HTMLElement {
  connectedCallback() {
    this.renderSkeletonListItem();
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._restaurants.forEach((restaurant) => {
      const restItemElement = document.createElement('app-list-item');
      restItemElement.restaurant = restaurant;
      this.appendChild(restItemElement);
    });
  }

  renderSkeletonListItem() {
    this.HTMLSkeletonListItemContainer = '';
    for (let i = 1; i <= 12; i += 1) {
      this.HTMLSkeletonListItemContainer += `
                <div class="post-skeleton">
                    <div class="post-skeleton-thumbnail"></div>
                    <div class="post-skeleton-content">
                        <div class="post-skeleton-title"></div>
                        <div class="post-skeleton-description"></div>
                        <div class="post-skeleton-button"></div>
                    </div>
                </div>
            `;
    }
    this.innerHTML = this.HTMLSkeletonListItemContainer;
  }
}
customElements.define('app-list', AppList);
