const CONFIG = {
  AUTH_KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  LOW_IMAGE_URL: (id) => `${CONFIG.BASE_URL}images/small/${id}`,
  BASE_IMAGE_URL: (id) => `${CONFIG.BASE_URL}images/medium/${id}`,
  HIGH_IMAGE_URL: (id) => `${CONFIG.BASE_URL}images/large/${id}`,
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'restaurant-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
