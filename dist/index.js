
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
function openbox(id) {
  display = document.getElementById(id).style.display;

  if (display == 'flex') {
    document.getElementById(id).style.display = 'none';
  } else {
    document.getElementById(id).style.display = 'flex';
  }
}

function openinput(id) {
  display = document.getElementById(id).style.display;

  if (display == 'block') {
    document.getElementById(id).style.display = 'none';
  } else {
    document.getElementById(id).style.display = 'block';
  }
}
function closeinput(id) {
  display = document.getElementById(id).style.display;
  document.getElementById(id).style.display = 'none';
}
function closebox(id) {
  display = document.getElementById(id).style.display;
  document.getElementById(id).style.display = 'none';
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy89IHNyYy9jb21wb25lbnRzL0NhdGFsb2cvYXNpZGViYXIvYXNpZGViYXIuanNcclxuLy89IHNyYy9jb21wb25lbnRzL0Fib3V0L2Fib3V0LmpzIl0sImZpbGUiOiJpbmRleC5qcyJ9
