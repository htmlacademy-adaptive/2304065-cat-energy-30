let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toogle');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});

initMap();

async function initMap() {
  await ymaps3.ready;

  const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

  const map = new YMap(
      document.getElementById('map'),
      {
          location: {
              center: [30.323037, 59.938631],
              zoom: 16
          }
      }
  );

  const el = document.createElement('img');
    el.className = "my-marker";
    el.src = "../images/icons/map-pin.svg";

    map.addChild((scheme = new YMapDefaultSchemeLayer()));
    map.addChild(new YMapDefaultFeaturesLayer());
    map.addChild(new YMapMarker({coordinates: [30.323037, 59.938631]}, el));
    const parent = el.parentElement;
    if (window.matchMedia("(min-width: 768px)").matches) {
      parent.style.width = "113px";
    } else {
      parent.style.width = "57px";
    }
}
