/* eslint-disable class-methods-use-this */
import CONFIG from '../globals/config';

class AppListItemDetail extends HTMLElement {
  connectedCallback() {
    this.renderDetailSkeleton();
  }

  renderDetailSkeleton() {
    this.innerHTML = `
        <section class="content">
            <h1 class="content-title"><i class="material-icons" aria-label="Ini adalah">star</i>&emsp;Detail Restoran&emsp;<i class="material-icons" aria-label="yang anda pilih">star</i></h1>
            <div class="detail">
                <div class="skeleton-detail-image"></div>
                <div class="detail-info">
                    <div class="skeleton-detail-title"></div>
                    <div class="skeleton-detail-location"></div>
                    <div class="skeleton-detail-categorie"></div>
                    <div class="skeleton-detail-description"></div>
                </div>
            </div>
        </section>
        <section class="content">
            <h1 class="content-title"><i class="material-icons" aria-label="Ini adalah">star</i>&emsp;Daftar Menu&emsp;<i class="material-icons" aria-label="yang ada">star</i></h1>
            <div class="menu">
                <div>
                    <div class="skeleton-menu-title"></div>
                    <div class="skeleton-menu-content"></div>
                </div>
                <div>
                    <div class="skeleton-menu-title"></div>
                    <div class="skeleton-menu-content"></div>
                </div>
            </div>
        </section>
        <section class="content">
            <h1 class="content-title"><i class="material-icons" aria-label="Ini adalah">star</i>&emsp;Review&emsp;<i class="material-icons" aria-label="pelanggan">star</i></h1>
            <div class="reviews">
                <div class="skeleton-review-card">
                    <div class="skeleton-review-name"></div>
                    <div class="skeleton-review-content"></div>
                    <div class="skeleton-review-date"></div>
                </div>
                <div class="skeleton-review-card">
                    <div class="skeleton-review-name"></div>
                    <div class="skeleton-review-content"></div>
                    <div class="skeleton-review-date"></div>
                </div>
            </div>
        </section>
        <section class="content">
            <h1 class="content-title"><i class="material-icons" aria-label="Berikut form">star</i>&emsp;Tambah Review&emsp;<i class="material-icons" aria-label="yang bisa anda isi jika anda pernah ke restoran ini">star</i></h1>
            <div class="skeleton-form-review">
                <form method="post">
                    <div class="skeleton-form-group">
                        <div class="skeleton-label"></div>
                        <div class="skeleton-input"></div>
                    </div>
                    <div class="skeleton-form-group">
                        <div class="skeleton-label"></div>
                        <div class="skeleton-input"></div>
                    </div>
                    <div style="text-align:center" class="skeleton-button-container">
                        <div></div>
                        <div></div>
                    </div>
                </form>
            </div>
        </section>
    `;
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
            <section class="content">
                <h1 class="content-title"><i class="material-icons" aria-label="Ini adalah">star</i>&emsp;Detail Restoran&emsp;<i class="material-icons" aria-label="yang anda pilih">star</i></h1>
                <div class="detail">
                    <div class="detail-image">
                        <img 
                            crossorigin="anonymous" 
                            src="${CONFIG.BASE_IMAGE_URL(this._restaurant.pictureId)}" 
                            width="100%" 
                            alt="Restoran ${this._restaurant.name}"
                        >
                    </div>
                    <div class="detail-info">
                        <h2>${this._restaurant.name} &emsp; <i class="medium material-icons" aria-label="memiliki review bintang">star</i>&nbsp;${this._restaurant.rating}</h2>
                        <p align="justify">
                            <i class="material-icons" aria-label="restoran ini berlokasi di">location_on</i>&emsp; ${this._restaurant.address}, ${this._restaurant.city} <br/>
                            <i class="material-icons" aria-label="kategori restoran ini adalah">dashboard</i>&emsp; ${this.renderCategories()} <br/><br/>
                            <b>Deskripsi </b><br/>
                            &emsp;${this._restaurant.description}
                        </p>
                    </div>
                </div>
            </section>
            <section class="content">
                <h1 class="content-title"><i class="material-icons" aria-label="Ini adalah">star</i>&emsp;Daftar Menu&emsp;<i class="material-icons" aria-label="yang ada">star</i></h1>
                <div class="menu">
                    <div>
                        ${this.renderFoodsMenu()}
                    </div>
                    <div>
                        ${this.renderDrinksMenu()}
                    </div>
                </div>
            </section>
            <section class="content">
                <h1 class="content-title"><i class="material-icons" aria-label="Ini adalah">star</i>&emsp;Review&emsp;<i class="material-icons" aria-label="pelanggan">star</i></h1>
                <div class="reviews">
                    ${this.renderReviews()}
                </div>
            </section>
            <section class="content">
                <h1 class="content-title"><i class="material-icons" aria-label="Berikut form">star</i>&emsp;Tambah Review&emsp;<i class="material-icons" aria-label="yang bisa anda isi jika anda pernah ke restoran ini">star</i></h1>
                <div id="form-review">
                    ${this.renderFormReview()}
                </div>
            </section>
        `;
  }

  renderCategories() {
    let Categories = '';
    const getCategoriesData = this._restaurant.categories;
    getCategoriesData.forEach((categorie) => {
      Categories += `
                ${categorie.name},
            `;
    });
    return Categories;
  }

  renderFoodsMenu() {
    let FoodsMenu = `
            <div  class="card-title"><i class="material-icons" aria-label="daftar">restaurant_menu</i> &nbsp; Makanan</div> <br/>
            <ul>
        `;
    const getFoodsData = this._restaurant.menus.foods;
    getFoodsData.forEach((food) => {
      FoodsMenu += `
                <li>${food.name}</li>
            `;
    });
    FoodsMenu += `
            </ul>
        `;
    return FoodsMenu;
  }

  renderDrinksMenu() {
    let DrinksMenu = `
            <div class="card-title"><i class="material-icons" aria-label="daftar">local_drink</i> &nbsp; Minuman </div><br/>
            <ul>
        `;
    const getDrinksData = this._restaurant.menus.drinks;
    getDrinksData.forEach((drink) => {
      DrinksMenu += `
                <li>${drink.name}</li>
            `;
    });
    DrinksMenu += `
            </ul>
        `;
    return DrinksMenu;
  }

  renderReviews() {
    let ShowReviews = '';
    const getReviewsData = this._restaurant.consumerReviews;
    getReviewsData.forEach((review) => {
      ShowReviews += `
                <div class="review-card">
                    <p> 
                        <i class="material-icons aria-label="berikut review dari ">account_circle</i>
                        <span class="review-name">${review.name}</span> <br/><br/>
                        "
                            <i><span class="review-content">${review.review}</span></i>
                        " <br/> 
                        <span aria-label="pada tanggal"></span> <br/>
                        <small>
                            <span class="review-date">${review.date}</span>
                        </small>
                    </p>
                </div>
            `;
    });
    return ShowReviews;
  }

  renderFormReview() {
    return `
            <form method="post" id="form-review">
                <div class="form-group">
                    <label for="name">Nama</label>
                    <input type="text" id="name" placeholder="Nama Anda..." required>
                </div>
                <div class="form-group">
                    <label for="review">Review</label>
                    <input type="text" id="review" placeholder="Review Anda..." required>
                </div>
                <div style="text-align:center">
                    <button type="submit" class="button button-primary" aria-label="simpan review" id="simpan">Tambah Review</button>
                    <button type="reset"  class="button button-danger" aria-label="hapus seluruh input">Hapus</button>
                </div>
            </form>
        `;
  }
}
customElements.define('app-list-item-detail', AppListItemDetail);
