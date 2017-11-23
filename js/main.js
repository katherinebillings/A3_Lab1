(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  var Img = document.querySelectorAll('.data-ref'),
  model = document.querySelector('.modelName'),
  price = document.querySelector('.priceInfo'),
  details = document.querySelector('.modelDetails');

  function changeModel () {
    //debugger;
    //changeModel text
    let objectIndex = carData[this.id];

    model.firstChild.nodeValue = objectIndex.model;
    price.firstChild.nodeValue = objectIndex.price;
    details.firstChild.nodeValue = objectIndex.description;

    //opacity change
    
    Img.forEach(function(element, index) {
      element.classList.remove("focusMini");
    });
    this.classList.add("focusMini");

    //console.log(this.id);
  }

  Img.forEach(function(element, index) {
        //loop through and do stuff to each element at the top of the page
        element.addEventListener('click', changeModel, false);
      });
})();
