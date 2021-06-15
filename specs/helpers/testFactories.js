import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/extensions
// eslint-disable-next-line no-unused-vars
import AppLikeButton from '../../src/scripts/components/app-like-button';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  document.body.innerHTML = '<app-like-button></app-like-button';
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('app-like-button'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
