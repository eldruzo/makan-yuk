import UrlParser from '../../routes/url-parser';
import RestaurantAppSource from '../../data/restaurantapp-source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import ReviewFormInitiator from '../../utils/form-review-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    document.querySelector('app-hero').style.display = 'none';
    return `
            <div>
                <app-list-item-detail><app-list-item-detail>
            </div>
            <div>
                <app-like-button></app-like-button>
            </div>
        `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantAppSource.getRestaurantDetail(url.id);

      const restaurantDetailShow = document.querySelector('app-list-item-detail');

      restaurantDetailShow.restaurant = restaurant;

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('app-like-button'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
      });

      ReviewFormInitiator.init({
        form: document.getElementById('form-review'),
        id: restaurant.id,
        reviews: document.querySelector('.reviews'),
      });
    } catch (error) {
      document.querySelector('app-list-item-detail').innerHTML = `
        <app-image
          image="no-internet.png" 
          caption="Error : ${error}"
        ></app-image
      `;
    }
  },
};

export default Detail;
