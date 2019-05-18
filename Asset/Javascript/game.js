var targetNumber = 39;

  $(".col-md-3").text(targetNumber);

  $(".rounded float-left").on("click", function() {
    int random = (int)(Math.random() * 50 + 1);

  var imageCrystal = $("<img>");
  imageCrystal.addClass("rounded float-left");
  imageCrystal.addClass("rounded float-right");
  imageCrystal.attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRovb4ppsf3MjJgbw2KLvfAZivud0Az0KXX156dP9mMPh-JVJRq");
  imageCrystal.attr("data-crystalvalue",numberOptions[i]);
  $("#crystal").append(imageCrystal);
}

var numberOptions = [10, 5, 3, 9, ]

for(var i=0;i<numberOptions.length;i++){


