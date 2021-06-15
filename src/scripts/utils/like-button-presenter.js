const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) this._renderUnlikeRestaurantButton();
    else this._renderLikeRestaurantButton();
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderLikeRestaurantButton() {
    this._likeButtonContainer.button = {
      button: 'favorite_border',
      label: 'tandai restoran sebagai favorit',
    };

    this._likeButtonContainer.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderUnlikeRestaurantButton() {
    this._likeButtonContainer.button = {
      button: 'favorite',
      label: 'hapus restoran dari favorit',
    };

    this._likeButtonContainer.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
