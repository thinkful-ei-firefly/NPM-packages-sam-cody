/* global shoppingList, store, api */

import store from './store.js';
import api from './api.js';
import shoppingList from './shopping-list';
import css from './styles/index.css'; 

import $ from 'jquery';

$(document).ready(function() {
  shoppingList.bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message));
});

