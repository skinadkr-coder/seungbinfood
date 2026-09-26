(function () {
  var active = document.querySelector('.tabbar a.active');
  if (!active) return;
  active.scrollIntoView({ inline: 'center', block: 'nearest' });
})();
