(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  var Img = document.querySelectorAll('.data-ref'),
  model = document.querySelector('.modelName'),
  price = document.querySelector('.priceInfo'),
  details = document.querySelector('.modelDetails'),
  appliedClass;

  function changeModel () {
    //debugger;
    //changeModel text
    let objectIndex = carData[this.id];

    model.firstChild.nodeValue = objectIndex.model;
    price.firstChild.nodeValue = objectIndex.price;
    details.firstChild.nodeValue = objectIndex.description;

    //opacity change
    debugger
    for (var i = 0; i < Img.length; i++) {
      if (this.id !== Img.dataset.index) {
        i.classList.remove("focusMini");
      }
    }
    this.classList.remove("nonActive");
    this.classList.add("focusMini");

    appliedClass = this.id;

    console.log(this.id);
  }

  Img.forEach(function(element, index) {
        //loop through and do stuff to each element at the top of the page
        element.addEventListener('click', changeModel, false);
      });
})();
