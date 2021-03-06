/*jslint node: true */

// Controllers
var meals = require('./controllers/meals');
var restaurants = require('./controllers/restaurants');
var migrations = require('./controllers/migrations');
var deployments = require('./controllers/deployments');

module.exports = function (server) {
  'use strict';

  // Meals
  server.post('/meal', meals.add);
  server.get('/meal', meals.getAll);
  server.get('/meal/category/:category', meals.getByCategory);
  server.get('/meal/closest', meals.getClosest);
  server.get('/meal/:_id', meals.getSingle);

  // Restaurants
  server.post('/restaurant', restaurants.add);
  server.get('/restaurant', restaurants.getAll);
  server.get('/restaurant/closest', restaurants.getClosest);
  server.get('/restaurant/:_id', restaurants.getSingle);
  server.put('/restaurant/:_id', restaurants.updateSingle); // Mostly for scrapers
  server.get('/restaurant/id/:id', restaurants.getByYelpId); // Mostly for scrapers

  // Migration scripts
  server.get('/migrations/add_coordinate_to_meal', migrations.addCoordinateToMeal);
  server.get('/migrations/remove_restaurants_without_meals', migrations.removeRestaurantsWithoutMeals);

  // Deployment
  server.post('/deployments/add', deployments.add);

};
