var Cat = function() {
  this.name = ko.observable('Box Cat');
  this.imgSrc = ko.observable('images/Box Cat.jpg');
  this.clickCount = ko.observable(0);
  this.nicknames = ko.observableArray(['1', '2', '3', '4']);

  this.level = ko.computed(function () {
    var clicks = this.clickCount();
    if (clicks < 10) {
      return 'Newborn';
    }
    else if (clicks < 50) {
      return 'Infant';
    }
    else if (clicks < 100) {
      return 'Child';
    }
    else if (clicks < 200) {
      return 'Teen';
    }
    else if (clicks < 500) {
      return 'Adult';
    }
    else {
      return 'Ninja';
    }
  }, this);
};

var CatClickerViewModel = function() {
  var self = this;

  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function () {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
};

ko.applyBindings(new CatClickerViewModel());
