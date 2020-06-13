window.addEventListener('load', function () {
  let logo = document.getElementById('logo');
  logo.onclick = function(e) {
    console.log(e.target);
  };
});
