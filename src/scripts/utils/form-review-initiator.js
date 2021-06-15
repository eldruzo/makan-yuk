/* eslint-disable no-alert */
import RestaurantAppSource from '../data/restaurantapp-source';

const ReviewFormInitiator = {
  async init({ form, id, reviews }) {
    this._form = form;
    this._id = id;
    this._reviews = reviews;

    this._FormBind();
  },

  _FormBind() {
    this._form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await this._addReview({
        name: document.getElementById('name').value,
        review: document.getElementById('review').value,
      });
    });
  },

  async _addReview({ name, review }) {
    try {
      const addReviewResult = await RestaurantAppSource.addRestaurantReview({
        id: this._id,
        name,
        review,
      });

      const getLatestReview = addReviewResult[addReviewResult.length - 1];

      // alert dibuat sendiri

      this._showNewReview(getLatestReview);
      setTimeout(() => { window.location.reload(true); }, 3000);
    } catch (error) {
      // alert error dibuat sendiri
    }
  },

  _showNewReview(newReview) {
    this._reviews.insertAdjacentHTML('beforeend', `
      <div class="review-card">
        <p> 
            <i class="material-icons aria-label="berikut review dari ">account_circle</i>
            <span class="review-name">${newReview.name}</span> <br/><br/>
            "
                <i><span class="review-content">${newReview.review}</span></i>
            " <br/> 
            <span aria-label="pada tanggal"></span> <br/>
            <small>
                <span class="review-date">${newReview.date}</span>
            </small>
        </p>
      </div>
    `);
  },
};

export default ReviewFormInitiator;
