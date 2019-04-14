var images = [];

// get images, place them in an array & randomize the order
let img = null;
img = 'lolcatsdotcom4ej6uicg0a44q7iv.jpg';
images.push(img);
images.push(img);
img = 'lolcatsdotcom4wgztlakqxu5qdqx.jpg';
images.push(img);
images.push(img);
img = 'lolcatsdotcom28zswcrgdritu5ym.jpg';
images.push(img);
images.push(img);
img = 'lolcatsdotcomaptplf8mvc1o2ldb.jpg';
images.push(img);
images.push(img);
img = 'lolcatsdotcomnapkin.jpg';
images.push(img);
images.push(img);
img = 'lolcatsdotcomnx99tujujt4qhlz3.jpg';
images.push(img);
images.push(img);
img = 'lolcatsdotcompf8w6i8liikl5j5x.jpg';
images.push(img);
images.push(img);
img = 'lolcatsdotcomzec0u606asp4civ0.jpg';
images.push(img);
images.push(img);
// randomizeImages();

// output images then hide them
var output = "<ol>";
for (var i = 0; i < 16; i++) {
  output += "<li>";
  output += "<img src = '" + images[i] + "'/>";
  output += "</li>";
}
output += "</ol>";
document.getElementById("container").innerHTML = output;
$("img").hide();

var guess1 = "";
var guess2 = "";
var count = 0;

$("li").click(function() {
  console.log($(this));
  console.log($(this).children('img'));

  if ((count < 2) && ($(this).children("img").hasClass("face-up")) ===
    false) {

    // increment guess count, show image, mark it as face up
    count++;
    $(this).children("img").show();
    $(this).children("img").addClass("face-up");

    //guess #1
    if (count === 1) {
      guess1 = $(this).children("img").attr("src");
    }

    //guess #2
    else {
      guess2 = $(this).children("img").attr("src");

      // since it's the 2nd guess check for match
      if (guess1 === guess2) {
        $("li").children("img[src='" + guess2 + "']").addClass("match");
      }

      // else it's a miss
      else {
        setTimeout(function() {
          $("img").not(".match").hide();
          $("img").not(".match").removeClass("face-up");
        }, 1000);
      }

      // reset
      count = 0;
      console.log('setTimout 60000...');
      setTimeout(function() {console.log('timeout function....')}, 60000);
    }
  }
});

// randomize array of images
function randomizeImages() {
  Array.prototype.randomize = function() {
    var i = this.length,
      j, temp;
    while (--i) {
      j = Math.floor(Math.random() * (i - 1));
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
  };

  images.randomize();
}
