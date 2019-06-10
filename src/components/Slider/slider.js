/* let slider = function() {
  // Set time delay of slider
  let delay = 3000;
  // Set variables
  let numImages = $(".slider-wrapper").length;
  let previousImage = numImages;
  let currentImage = 1;
  let nextImage = 2;

  // Find width of container div
  let sliderWidth = $(".container--slider").width();

  // Give images same width as slider
  let sizeImages = function() {
    $(".slider-wrapper").width(sliderWidth);
  };
  sizeImages();

  // Create as many navigation dots as there are pictures
  for (let i = 1; i <= numImages; i++) {
    $("#dots")
      .find("ul")
      .append($('<li class="dot ' + i + '""></li>'));
  }

  // Set initial position of images
  let resetImages = function() {
    $(".slider-wrapper").css({ left: sliderWidth + "px" });
    $(".slider-wrapper")
      .first()
      .css({ left: "0px" });
    $(".1").addClass("active");
  };
  resetImages();

  // Slide to next image
  let slideNextImageLeft = function() {
    $(".slider-wrapper-" + nextImage).css({ left: sliderWidth + "px" });
    $(".slider-wrapper-" + currentImage).animate(
      { left: sliderWidth * -1 },
      1000
    );
    $(".slider-wrapper-" + nextImage).animate({ left: "0px" }, 1000);
    currentImage = nextImage;
    increaseImages();
  };

  // Slide to the previous image
  let slidePreviousImageRight = function() {
    $(".slider-wrapper-" + previousImage).css({
      left: sliderWidth * -1 + "px"
    });
    $(".slider-wrapper-" + currentImage).animate(
      { left: sliderWidth },
      1000
    );
    $(".slider-wrapper-" + previousImage).animate({ left: "0px" }, 1000);
    currentImage = previousImage;
    increaseImages();
  };

  // Shift which images are next and previous
  let increaseImages = function() {
    if (currentImage === numImages) {
      nextImage = 1;
      previousImage = currentImage - 1;
    } else {
      nextImage = currentImage + 1;
      if (currentImage === 1) {
        previousImage = numImages;
      } else {
        previousImage = currentImage - 1;
      }
    }
    // Change dots status
    $("#dots")
      .find("li")
      .removeClass("active");
    $("#dots")
      .find("." + currentImage)
      .addClass("active");
  };
  // Set initial slider interval
  moveImages = setInterval(function() {
    slideNextImageLeft();
  }, delay);

  // When next button is clicked
  $(".next").click(function() {
    clearInterval(moveImages);
    moveImages = setInterval(function() {
      slideNextImageLeft();
    }, delay);
    slideNextImageLeft();
  });

  // When previous button is clicked
  $(".previous").click(function() {
    clearInterval(moveImages);
    moveImages = setInterval(function() {
      slideNextImageLeft();
    }, delay);
    slidePreviousImageRight();
  });

  // When a navigation dot is clicked
  $(".dot").click(function() {
    buttonPressed = $("li").index(this) + 1;
    if (buttonPressed !== currentImage) {
      clearInterval(moveImages);
      moveImages = setInterval(function() {
        slideNextImageLeft();
      }, delay);
      if (currentImage < buttonPressed) {
        nextImage = buttonPressed;
        slideNextImageLeft();
      } else {
        previousImage = buttonPressed;
        slidePreviousImageRight();
      }
    }
  });
};

$(document).ready(function() {
  slider();
}); */

  