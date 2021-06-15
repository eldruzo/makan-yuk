import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    document.querySelector('app-hero').style.display = 'none';
    return `
            <section class="content">
                <h1 class="content-title"><i class="material-icons" aria-label="ini adalah">filter_list</i>&emsp;Restoran Favorit &emsp;<i class="material-icons" aria-label="yang anda simpan">filter_list </i></h1>
                <app-list id="restaurant-data" class="content-main"></app-list>
            </section>   
        `;
  },

  async afterRender() {
    const RestaurantList = document.querySelector('#restaurant-data');
    RestaurantList.style.display = 'block';
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

      if (restaurants.length > 0) {
        RestaurantList.restaurants = restaurants;
        RestaurantList.style.display = 'grid';
      } else {
        RestaurantList.innerHTML = `
          <app-image
            image="no-data.png" 
            caption="Tidak ada restoran yang difavoritkan"
          ></app-image
        `;
      }
    } catch (error) {
      RestaurantList.innerHTML = `
          <app-image
            image="no-internet.png" 
            caption="${error}"
          ></app-image
      `;
    }
  },
};

export default Favorite;
