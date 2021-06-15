/* eslint-disable no-param-reassign */
import RestaurantAppSource from '../../data/restaurantapp-source';
import { arrayKeySort } from '../../utils/array-construct-changer';
import '../../components/app-hero';

const Home = {
  async render() {
    document.querySelector('app-hero').style.display = 'block';
    return `
            <section class="content">
                <h1 class="content-title">
                  <i class="material-icons" aria-label="daftar">star</i>
                  &emsp;Recommended&emsp;
                  <i class="material-icons" aria-label="wajib dikunjungi">star</i>
                </h1>
                <app-list id="restaurant-best" class="content-main"></app-list>
                <div class="content-button">
                    <a href="#/search" class="button button-orange">Selengkapnya</a>
                </div>
            </section>
        `;
  },

  async afterRender() {
    try {
      const bestRestaurantList = document.getElementById('restaurant-best');

      document.querySelector('.content-button').style.display = 'none';

      bestRestaurantList.style.display = 'grid';

      const restaurants = (await RestaurantAppSource.getRestaurantList()).slice(0, 12);
      const ShowSortedRestaurantsByRating = arrayKeySort(restaurants.slice(), 'rating', true);

      bestRestaurantList.restaurants = ShowSortedRestaurantsByRating;

      document.querySelector('.content-button').style.display = 'block';
    } catch (error) {
      document.querySelector('app-list').style.display = 'block';
      document.querySelector('app-list').innerHTML = `
          <app-image
            image="no-internet.png" 
            caption="Error : ${error}"
          ></app-image
      `;
    }
  },
};

export default Home;
