function Cat(name, image) {
  this.name = name;
  this.image = image;
  this.counter = 0;
};

var model = {
  currentCat: null,
  cats: []
}

model.cats[0] = new Cat('Sitten Kitten', 'images/Sitten%20Kitten.jpg');
model.cats[1] = new Cat('Dramatic Kitten', 'images/Dramatic%20Kitten.jpg');
model.cats[2] = new Cat('Box Cat', 'images/Box%20Cat.jpg');
model.cats[3] = new Cat('Grumpy Cat', 'images/Grumpy%20Cat.jpg');
model.cats[4] = new Cat('Scaredy Cat', 'images/Scaredy%20Cat.jpg');
