var catClickerView = {
  init: function () {
    this.$catClicker = $('#cat-clicker');
    this.$catName = $('#cat-name');
    this.$catImage = $('#cat-image');
    this.$catCounter = $('#cat-counter');

    this.$catClicker.on('click', this.$catImage , function (e) {
      octopus.incrementCounter();
    });

    this.render();
  },
  render: function () {
    var currentCat = octopus.getCurrentCat();
    this.$catCounter.html(currentCat.counter);
    this.$catImage.attr('src', currentCat.image);
    this.$catName.html(currentCat.name);
  }
}

var catListView = {
  init: function () {
    this.$catTable = $('#cat-table');

    this.render();
  },
  render: function () {
    var cats = octopus.getCats();
    this.$catTable.html('');

    for(var i = 0; i < cats.length; i++) {

      var cat = cats[i];
      var row = document.createElement('tr');
      var img = '<img class="thumb" src="' + cat.image + '">';
      var html = '';

      html += '<td>' + img + '</td>';
      html += '<td>' + cat.name + '</td>';

      row.innerHTML = html;

      row.addEventListener('click', (function (cat) {
        return function () {
          octopus.setCurrentCat(cat);
          catClickerView.render();
        };
      })(cat));

      this.$catTable.append(row);
    }
    
  }
}
