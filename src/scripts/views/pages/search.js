/* eslint-disable quote-props */
import RestaurantAppSource from '../../data/restaurantapp-source';
import '../../components/app-search';
import SearchInitiator from '../../utils/search-initiator';

const Search = {
  async render() {
    document.querySelector('app-hero').style.display = 'none';
    return `
            <section class="content">
                <h1 class="content-title"><i class="material-icons" aria-label="ini adalah">filter_list</i>&emsp;Daftar Restoran&emsp;<i class="material-icons" aria-label="yang tersedia">filter_list </i></h1>
                <app-search></app-search>
                <app-list id="restaurant-data" class="content-main"></app-list>
                <app-list id="restaurant-results" class="content-main"></app-list>
            </section>   
        `;
  },

  async afterRender() {
    const RestaurantList = document.querySelector('#restaurant-data');

    document.querySelector('app-search').style.display = 'none';
    document.getElementById('restaurant-results').style.display = 'none';

    try {
      const restaurants = await RestaurantAppSource.getRestaurantList();

      RestaurantList.style.display = 'grid';
      RestaurantList.restaurants = restaurants;

      SearchInitiator.init({
        inputText: document.querySelector('app-search #pencarian'),
        content: document.getElementById('restaurant-data'),
        results: document.getElementById('restaurant-results'),
        data: restaurants,
      });

      document.querySelector('app-search').style.display = 'block';
    } catch (error) {
      document.getElementById('restaurant-data').style.display = 'block';
      document.getElementById('restaurant-data').innerHTML = `
        <app-image
          image="no-internet.png" 
          caption="Error : ${error}"
        ></app-image
      `;
    }
  },
};

export default Search;
