(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  var Img = document.querySelectorAll('.data-ref');

  const httpRequest = new XMLHttpRequest();

  function changeModel () {
    //1. make an AJAX call to the databse; handle any errors first
    if (!httpRequest) {
      alert('giving up, your browser sucks!');
      return false;
    }

    httpRequest.onreadystatechange = processRequest;
    httpRequest.open('GET', './includes/functions.php?carModel=' +this.id);
    httpRequest.send();
  }

  function processRequest() {
    // handle the stages of our AJAX call
    let reqIndicator = document.querySelector('.request-state');
    reqIndicator.textContent = httpRequest.readyState;

    //debugger;

    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {// request worked, all is good
        //debugger;
        let data = JSON.parse(httpRequest.responseText);
        processResult(data);
      } else {
        alert('There was a problem with the request');
      }
    }
  }

  function processResult(data) {
    //debugger;
    const { modelName, pricing, modelDetails} = data;
    // statement chaining lets you go lots of stuff on one line
    let model = document.querySelector('.modelName').textContent = modelName;
    let price = document.querySelector('.priceInfo').innerHTML = pricing;
    let details = document.querySelector('.modelDetails').textContent = modelDetails;
    //debugger;
    //changeModel text
    let objectIndex = carData[this.id];

    //model.firstChild.nodeValue = objectIndex.model;
    //price.firstChild.nodeValue = objectIndex.price;
    //details.firstChild.nodeValue = objectIndex.description;

    //opacity change

    Img.forEach(function(element, index) {
      element.classList.remove("focusMini");
    });
    // the backticks are a new ES6 thing called a template string (look it up)
    document.querySelector(`#${data.model}`).classList.add("focusMini");

    //console.log(this.id);
  }

  Img.forEach(function(element, index) {
        //loop through and do stuff to each element at the top of the page
        element.addEventListener('click', changeModel, false);
      });
})();
