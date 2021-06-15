/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before((I) => {
  I.amOnPage('/#/search');
});

Scenario('Like one restaurant', async (I) => {
  I.seeElement('app-list-item a');

  const firstRestaurant = locate('app-list-item a').first();

  const locatefirstRestaurant = locate('app-list-item .name').first();
  const firstRestaurantName = await I.grabTextFrom(locatefirstRestaurant);

  I.click(firstRestaurant);

  const buttonLabelLiked = await I.grabAttributeFrom('app-like-button button', 'aria-label');
  assert.strictEqual(buttonLabelLiked, 'tandai restoran sebagai favorit');

  I.seeElement('app-like-button');
  I.click('app-like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('app-list-item');

  const LikedRestaurantName = await I.grabTextFrom('app-list-item .name');

  assert.strictEqual(firstRestaurantName, LikedRestaurantName);
});

Scenario('Like one restaurant and unliked it', async (I) => {
  I.seeElement('app-list-item a');

  const firstRestaurant = locate('app-list-item a').first();

  const locatefirstRestaurant = locate('app-list-item .name').first();
  const firstRestaurantName = await I.grabTextFrom(locatefirstRestaurant);

  I.click(firstRestaurant);

  const buttonLabelLiked = await I.grabAttributeFrom('app-like-button button', 'aria-label');
  assert.strictEqual(buttonLabelLiked, 'tandai restoran sebagai favorit');

  I.seeElement('app-like-button');
  I.click('app-like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('app-list-item');

  const LikedRestaurantName = await I.grabTextFrom('app-list-item .name');

  assert.strictEqual(firstRestaurantName, LikedRestaurantName);

  const favoriteRestaurant = locate('app-list-item a').first();

  I.click(favoriteRestaurant);

  const buttonLabelLike = await I.grabAttributeFrom('app-like-button button', 'aria-label');
  assert.strictEqual(buttonLabelLike, 'hapus restoran dari favorit');

  I.seeElement('app-like-button');
  I.click('app-like-button');

  I.amOnPage('/#/favorite');

  I.see('Tidak ada restoran yang difavoritkan', '.caption-handler h2');
});
