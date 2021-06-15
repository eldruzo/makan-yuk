/* eslint-disable no-param-reassign */
const SearchInitiator = {
  init({
    inputText, content, results, data,
  }) {
    this.searchResult(inputText, content, results, data);
  },

  searchResult(inputText, content, results, data) {
    inputText.addEventListener('keyup', () => {
      if (inputText.value !== '') {
        content.style.display = 'none';
        const filter = data
          .filter((restaurant) => restaurant.name.toUpperCase()
            .includes((inputText.value)
              .toUpperCase()));

        if (filter.length > 0) {
          results.restaurants = filter;

          results.style.display = 'grid';
        } else {
          results.style.display = 'block';
          results.innerHTML = `
            <app-image
              image="no-data.png" 
              caption="Data tidak ditemukan"
            ></app-image
          `;
        }
      } else {
        results.style.display = 'none';
        content.style.display = 'grid';
      }
    });
  },
};

export default SearchInitiator;
