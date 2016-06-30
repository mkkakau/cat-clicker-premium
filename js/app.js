function CatClickerViewModel() {
  this.name = ko.observable('Box Cat');
  this.imgSrc = ko.observable('images/Box Cat.jpg');
  this.clickCount = ko.observable(0);

  this.incrementCounter = function () {
    this.clickCount(this.clickCount() + 1);
  };
}
ko.applyBindings(new CatClickerViewModel());
