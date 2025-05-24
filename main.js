const map = L.map('map').setView([48.0, 9.0], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);
const poi = [
  {name:'Berlin', coords:[52.520008,13.404954]},
  {name:'Appenzell', coords:[47.331417,9.408623]},
  {name:'Lake Como', coords:[45.816666,9.083333]}
];
poi.forEach(p => L.marker(p.coords).addTo(map).bindPopup(p.name));
document.getElementById('locate-btn').addEventListener('click', () => {
  map.locate({setView:true, maxZoom:16});
});
map.on('locationfound', e => {
  L.marker(e.latlng).addTo(map).bindPopup('You are here').openPopup();
  L.circle(e.latlng, e.accuracy).addTo(map);
});
map.on('locationerror', e => alert('Location unavailable: ' + e.message));
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('service-worker.js');
}

const themeBtn = document.getElementById('theme-btn');
const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'dark'){
  document.body.classList.add('dark');
}
themeBtn.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
});

document.querySelectorAll('#locations li').forEach(li => {
  li.addEventListener('click', () => {
    const lat = parseFloat(li.dataset.lat);
    const lng = parseFloat(li.dataset.lng);
    map.setView([lat, lng], 10);
  });
  li.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' '){
      const lat = parseFloat(li.dataset.lat);
      const lng = parseFloat(li.dataset.lng);
      map.setView([lat, lng], 10);
    }
  });
});
