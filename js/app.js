function CatClickerViewModel() {
  this.name = ko.observable('Box Cat');
  this.imgSrc = ko.observable('images/Box Cat.jpg');
  this.clickCount = ko.observable(0);

  this.level = ko.computed(function () {
    var clicks = this.clickCount();
    if (clicks < 10) {
      return 'Newborn';
    }
    else if (clicks >= 10 && clicks < 50) {
      return 'Infant';
    }
    else {
      return 'Teen';
    }
  }, this);
  this.incrementCounter = function () {
    this.clickCount(this.clickCount() + 1);
  };
}
ko.applyBindings(new CatClickerViewModel());
