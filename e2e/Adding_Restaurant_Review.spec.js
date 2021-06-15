/* eslint-disable no-undef */
const assert = require('assert');

Feature('Adding Review');

Before((I) => {
  I.amOnPage('/#/search');
});

Scenario('Adding one review to restaurant', async (I) => {
  I.seeElement('app-list-item a');

  const firstRestaurant = locate('app-list-item a').first();

  I.click(firstRestaurant);

  const ReviewData = {
    name: 'BangJago',
    review: 'Punten numpang e2e test',
  };

  I.fillField('#name', ReviewData.name);
  I.fillField('#review', ReviewData.review);

  I.seeElement('#simpan');
  I.click('#simpan');

  const locateLastRestaurantReviewName = locate('.review-card .review-name').last();
  const getLastRestaurantReviewName = await I.grabTextFrom(locateLastRestaurantReviewName);
  assert.strictEqual(ReviewData.name, getLastRestaurantReviewName);

  const locateLastRestaurantReviewContent = locate('.review-card .review-content').last();
  const getLastRestaurantReviewContent = await I.grabTextFrom(locateLastRestaurantReviewContent);
  assert.strictEqual(ReviewData.review, getLastRestaurantReviewContent);
});
