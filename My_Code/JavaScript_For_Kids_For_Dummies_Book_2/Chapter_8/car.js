var dreamCar = {
    make: "Ford Escort",
    model: "1985",
    color: "blue",
    year: 1983,
    bodyStyle: "Luxury Car",
    price: 15000,
    borderRadius: "30%"
    
   };

   alert("The type of dreamCar is: " + typeof dreamCar, "Ford Escorts")

 document.getElementById("pricetag").innerHTML = dreamCar.price;
 document.getElementById("modelyear").innerHTML = dreamCar.year;
 document.getElementById("body").style.backgroundColor = dreamCar.color;
 document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;
 document.getElementById("body").innerHTML = dreamCar.make + "  " + dreamCar.model;
 document.getElementById("body").style.borderRadius = dreamCar.borderRadius