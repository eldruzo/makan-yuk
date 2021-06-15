import CONFIG from '../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class AppListItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    let restaurantName = this._restaurant.name;
    if (restaurantName.length > 17) {
      restaurantName = `${restaurantName.substring(0, 15)}...`;
    }
    this.innerHTML = `
            <div class="post" data-name="${this._restaurant.name}">
                <div class="post-thumbnail">
                    <img 
                        class="lazyload"
                        crossorigin="anonymous" 
                        width="100%"
                        data-src="${CONFIG.LOW_IMAGE_URL(this._restaurant.pictureId)}" 
                        alt="restoran ${this._restaurant.name} yang berlokasi di ${this._restaurant.city}"
                        onclick="window.open('/#/detail/${this._restaurant.id}','_self')"
                    >
                    <span>
                        <i class="material-icons" aria-label="lokasi di">location_on</i>${this._restaurant.city}
                    </span>
                </div>
                <div class="post-content">
                    <h2><span class="name" aria-label="${this._restaurant.name}">${restaurantName}</span> &emsp; <i class="medium material-icons" aria-label="memiliki review bintang">star</i>&nbsp;${this._restaurant.rating}</h2>
                    <p align="justify" id="description"> <span aria-label="Deskripsi singkat mengenai restoran "></span> ${this._restaurant.description}...<span aria-label="Masuk ke halaman detail untuk selengkapnya"></span></p>
                    <p align="center"><a href="/#/detail/${this._restaurant.id}">Detail <i class="material-icons" aria-label="restoran">arrow_forward</i></a></p>
                </div>
            </div>
    `;
  }
}
customElements.define('app-list-item', AppListItem);
