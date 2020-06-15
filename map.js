//cú pháp khởi tạo map
//setView([lat,lng]
var map = L.map('map').setView( [10.747555, 106.736077] , 7);
// khởi tạo tile map
/* var tilemap =  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' , {
    maxZoom:11,
    minZoom:5
}).addTo(map); */
var tilemap =  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' , {
    maxZoom:17,
    minZoom:0
});
//cách 2 add layer to map
map.addLayer(tilemap);

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	minZoom:0
});

map.addLayer(OpenTopoMap);

//tạo layer control
//basemap là group tập hợp các tile map
/* B1: tạo layer group */
var BaseMapGroup =  L.layerGroup([tilemap, OpenTopoMap]);
/* B2: add các group vào control */


var base = {
    "Lớp thứ nhất": tilemap,
    'Lớp thứ hai' : OpenTopoMap
}


var Control = L.control.layers(base);
map.addControl(Control);