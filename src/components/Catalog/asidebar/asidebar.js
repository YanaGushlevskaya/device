var tooltipSlider = document.getElementById("slider-tooltips");

noUiSlider.create(tooltipSlider, {
  start: [0, 5000],
  step: 100,
  connect: true,
  tooltips: [true, true],
  range: {
    min: 0,
    max: 10000
  },
  format: {
    to: function(value) {
      return value;
    },
    from: function(value) {
      return value.replace(",-", " ");
    }
  }
});
