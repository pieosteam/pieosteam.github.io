var rand = Math.floor(Math.random() * 1000); // keeps collisions at bay
var maxWidth = 0;
var maxHeight = 0;
var newWidth = 0;
var newHeight = 0;

// offset between window and image
// used for centering
var offsetx = 0;
var offsety = 0;

function init131() {
  var images = document.querySelectorAll(".clicktoenlarge");
  var body = document.querySelector("body");
  var body_rect = body.getBoundingClientRect(); // used to calculate the maximum allowable (80%)
  maxWidth = Math.floor(window.innerWidth * 0.8); // maximum allowable width based on screen size
  maxHeight = Math.floor(window.innerHeight * 0.8); // maximum allowable height based on screen size

  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var rect = image.getBoundingClientRect();
    var hover_text = document.createElement("div");

    hover_text.style.textAlign = "center";
    hover_text.style.width = rect.width + "px";
    image.style.transition = ".8s opacity";
    image.style.cursor = "pointer";
    hover_text.innerHTML = "click to enlarge";
    image.addEventListener("click", function() {
      var div = document.createElement("div"); // max allowable parent
      var overlay = document.createElement("div");
      var close = document.createElement("div");
      var img = document.createElement("img");

      div.style.cssText =
        "position:fixed;z-index:2000;border:solid 6px #777;border-radius:8px;overflow:hidden;background:white;text-align:center;";
      overlay.style.cssText =
        "background:#444;opacity:.8;position:fixed;top:0px;width:100%;height:1000px;z-index:1000;left:0px;";
      close.style.cssText =
        "background:#222;color:white;cursor:pointer;position:absolute;top:0px;right:0px;font-size:10pt;width:20px;height:20px;border-radius:50%;text-align:center;";

      overlay.className = "overlay_" + rand;
      div.className = "clicktoenlarge_" + rand;

      // only do this if the image size is larger than the max allowable
      img.src = this.src;

      // image is larger than the allowable space of 80%
      if (this.naturalWidth > maxWidth || this.naturalHeight > maxHeight) {
        newWidth = maxWidth;
        newHeight = maxHeight;

        div.style.width = maxWidth + "px";
        div.style.height = maxHeight + "px";
      } else {
        newWidth = this.naturalWidth;
        newHeight = this.naturalHeight;

        div.style.width = this.naturalWidth + "px";
        div.style.height = this.NaturalHeight + "px";
      }

      img.style.maxHeight = div.style.height;
      div.style.width = img.style.width + "px";

      offsetx = Math.floor((window.innerWidth - newWidth) / 2);
      offsety = Math.floor((window.innerHeight - newHeight) / 2);
      div.style.top = offsety + "px";
      div.style.left = offsetx + "px";

      close.innerHTML = "x";
      close.addEventListener("click", function() {
        var overlay = document.querySelector(".overlay_" + rand);
        var clicktoenlarge = document.querySelector(".clicktoenlarge_" + rand);
        body.removeChild(overlay);
        body.removeChild(clicktoenlarge);
      });

      div.appendChild(close);
      div.appendChild(img);
      body.appendChild(div);
      body.appendChild(overlay);
    });
    image.addEventListener("mouseover", function() {
      this.style.opacity = ".7";
      this.style.boxSizing = "border-box";
    });
    image.addEventListener("mouseout", function() {
      this.style.opacity = "1";
    });

    if (image.nextSibling) {
      image.parentNode.insertBefore(hover_text, image.nextSibling);
    } else {
      image.parentNode.appendChild(hover_text);
    }
  }
}

window.addEventListener("load", function() {
  init131();
});
