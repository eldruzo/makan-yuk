import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantAppSource {
  static async getRestaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addRestaurantReview({ id, name, review }) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_ADD_REVIEW, {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.AUTH_KEY,
      },
      method: 'POST',
      body: JSON.stringify({
        id,
        name,
        review,
      }),
    });
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}
export default RestaurantAppSource;
