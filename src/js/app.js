var Cat = function(catName, imageSource) {
  this.name = ko.observable(catName);
  this.imgSrc = ko.observable(imageSource);
  this.clickCount = ko.observable(0);

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

  this.catList = ko.observableArray();
  this.catList().push(new Cat('Box Cat', 'images/Box Cat.jpg'));
  this.catList().push(new Cat('Dramatic Kitten', 'images/Dramatic Kitten.jpg'));
  this.catList().push(new Cat('Grumpy Cat', 'images/Grumpy Cat.jpg'));
  this.catList().push(new Cat('Scaredy Cat', 'images/Scaredy Cat.jpg'));
  this.catList().push(new Cat('Sitten Kitten', 'images/Sitten Kitten.jpg'));

  this.currentCat = ko.observable(this.catList()[0]);

  this.setCurrentCat = function(data) {
    self.currentCat(data);
  };

  this.incrementCounter = function () {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
};

ko.applyBindings(new CatClickerViewModel());
