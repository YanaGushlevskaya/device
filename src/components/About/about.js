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
