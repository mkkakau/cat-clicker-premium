var octopus = {
  init: function () {
    model.currentCat = model.cats[0];
    // TODO: Init list of cats
    catListView.init();
    // TODO: Init cat clicker
    catClickerView.init();
  },

  getCats: function () {
    return model.cats;
  },

  getCurrentCat: function () {
    return model.currentCat;
  },

  setCurrentCat: function (cat) {
    model.currentCat = cat;
  },

  incrementCounter: function () {
    model.currentCat.counter++;
    catClickerView.render();
  }
}

octopus.init();
