const map = L.map('map').setView([48.0, 9.0], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);
const poi = [
  {name:'Berlin', coords:[52.520008,13.404954]},
  {name:"Jenn's House", coords:[52.481,13.437]},
  {name:'Berlin Südkreuz', coords:[52.4753,13.3656]},
  {name:'München Hbf', coords:[48.1403,11.5585]},
  {name:'St. Gallen', coords:[47.424,9.372]},
  {name:'Wasserauen', coords:[47.2848,9.409]},
  {name:'Berggasthaus Ebenalp', coords:[47.2829,9.4149]},
  {name:'Berggasthaus Meglisalp', coords:[47.2699,9.38]},
  {name:'Appenzell Bahnhof', coords:[47.331,9.408]},
  {name:'Gasthaus Hof', coords:[47.3297,9.4186]},
  {name:'Herisau', coords:[47.386,9.277]},
  {name:'Arth-Goldau', coords:[47.048,8.55]},
  {name:'Lugano', coords:[46.003,8.949]},
  {name:'Hotel Bellavista', coords:[46.016,9.236]},
  {name:'Lake Como', coords:[45.816666,9.083333]},
  {name:'Milan Malpensa Airport', coords:[45.63,8.723]}
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
 i   if(e.key==='Enter' || e.key===' '){
      li.click();
    }
  });
  const link = li.querySelector('.gmap-link');
  if(link){
    link.addEventListener('click', e => e.stopPropagation());
  }
=;
