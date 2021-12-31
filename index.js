var base = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var map = L.map('rev_map', {
    center: [53.34009, 22.96185],
    zoom: 8,
    layers: [base]
});

var Layer1 = L.geoJSON().addTo(map),
    Layer2 = L.geoJSON().addTo(map),
    Layer3 = L.geoJSON().addTo(map),
    Layer4 = L.geoJSON().addTo(map),
    Layer5 = L.geoJSON().addTo(map),
    Layer6 = L.geoJSON().addTo(map),
    Layer7 = L.geoJSON().addTo(map),
    Layer8 = L.geoJSON().addTo(map),
    Layer9 = L.geoJSON().addTo(map);

var overlayMaps = {
    "Przedsiębiorczość": Layer1,
    "Aktywność zawodowa": Layer2,
    "Edukacja": Layer3,
    "Transport": Layer4,
    "Gospodarka niskoemisyjna": Layer5,
    "Ochrona środowiska": Layer6,
    "Aktywność społeczna": Layer7,
    "Miejsca użyteczności publicznej": Layer8,
    "Rozwój lokalny": Layer9,
};
var layersControl = L.control.layers(null, overlayMaps, { collapsed: false }).addTo(map);

layersControl.setPosition('topleft');


var RevIcon = L.Icon.extend({
    options: {
        iconSize: [65, 65],
        iconAnchor: [30, 65],
        popupAnchor: [-3, -76],
    }
});

var icon1 = new RevIcon({ iconUrl: 'https://rpo.wrotapodlasia.pl/resource/image/236/333/11770/17503/0x0.png' }),
    icon2 = new RevIcon({ iconUrl: 'https://rpo.wrotapodlasia.pl/resource/image/236/333/11770/17502/0x0.png' }),
    icon3 = new RevIcon({ iconUrl: 'https://rpo.wrotapodlasia.pl/resource/image/236/333/11770/17504/0x0.png' }),
    icon4 = new RevIcon({ iconUrl: 'https://rpo.wrotapodlasia.pl/resource/image/236/333/11770/17505/0x0.png' }),
    icon5 = new RevIcon({ iconUrl: 'https://rpo.wrotapodlasia.pl/resource/image/236/333/11770/17506/0x0.png' });
    icon6 = new RevIcon({ iconUrl: 'https://rpo.wrotapodlasia.pl/resource/image/236/333/11770/17507/0x0.png' });
    icon7 = new RevIcon({ iconUrl: 'https://rpo.wrotapodlasia.pl/resource/image/236/333/11770/17508/0x0.png' });
    icon8 = new RevIcon({ iconUrl: 'https://rpo.wrotapodlasia.pl/resource/image/236/333/11770/17509/0x0.png' });
    icon9 = new RevIcon({ iconUrl: 'https://rpo.wrotapodlasia.pl/resource/image/236/333/11770/17510/0x0.png' });

    

function zoomToFeature(e) {

    if (e.target._bounds) {
        map.fitBounds(e.target.getBounds());
    } else {
        map.setView(e.latlng, 17);
    };
    var layer = e.target;
    info.update(layer.feature.properties);

};

function highlightFeature(e) {
    var layer = e.target;
    info.update(layer.feature.properties);
};

function resetHighlight(e) {

    info.update();
};

function onEachFeature(feature, layer) {
    layer.on({
        //mouseover: highlightFeature,
        //mouseout: resetHighlight,
        click: zoomToFeature,
    });
    switch (feature.properties.sphere) {
        case '1': return Layer1.addLayer(layer);
        case '2': return Layer2.addLayer(layer);
        case '3': return Layer3.addLayer(layer);
        case '4': return Layer4.addLayer(layer);
        case '5': return Layer5.addLayer(layer);
        case '6': return Layer6.addLayer(layer);
        case '7': return Layer7.addLayer(layer);
        case '8': return Layer8.addLayer(layer);
        case '9': return Layer9.addLayer(layer);
    };

};

function displayProject(unit) {
    L.geoJSON(unit, {
        style: function (feature) {
          if (feature.properties.PRtype){
            switch (feature.properties.PRtype) {
                case 'LPR': return { color: "#cc393d" };
                case 'GPR': return { color: '#2e5984' };  
            }
             } else if (feature.properties.sphere){
             switch (feature.properties.sphere) {
                case '1': return { color: "#2E3192" };
                case '2': return { color: "#F26522" };
                case '3': return { color: "#007338" };
                case '4': return { color: "#812990" };
                case '5': return { color: "#FFCB08" };
                case '6': return { color: "#93AE25" };
                case '7': return { color: "#007EC4" };
                case '8': return { color: "#ED1C24" };
                case '9': return { color: "#C6168D" };
           }
             }
        },
        pointToLayer: function (feature, latlng) {
            switch (feature.properties.sphere) {
                case '1': return L.marker(latlng, { icon: icon1 });
                case '2': return L.marker(latlng, { icon: icon2 });
                case '3': return L.marker(latlng, { icon: icon3 });
                case '4': return L.marker(latlng, { icon: icon4 });
                case '5': return L.marker(latlng, { icon: icon5 });
                case '6': return L.marker(latlng, { icon: icon6 });
                case '7': return L.marker(latlng, { icon: icon7 });
                case '8': return L.marker(latlng, { icon: icon8 });
                case '9': return L.marker(latlng, { icon: icon9 });
            }
        },
        onEachFeature: onEachFeature
    }).addTo(map);
};





var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {


    if (props) {
        if (props.PRtype) {
            this._div.innerHTML = '<h2>Informacje o gminie</h2>' + '<b><p>' + props.name + '</b></p><p>Tytuł programu: '+ props.PRname + '</p><p>Podstawa prawna: ' 
            + props.PRLegalBasis + '</p><p><a href="'+props.link+'"target="_blank" title="Strona otworzy się w nowej karcie"> Link do programu rewitalizacji </a></p>';

        } else if(props.picture){
            this._div.innerHTML = '<div class="sphere map-axis'+ props.sphere + '"><h3>Tytuł projektu: ' + props.title + '</b></h3><p>Beneficjent: ' + props.beneficiary + '</p></div><p>'
            + props.description +'</p><p><a href="'+props.link+'"target="_blank" title="Strona otworzy się w nowej karcie">Dowiedz sie więcej o projekcie </a></p><div><img class="projectImg" src="'+props.picture+'" alt="'+props.pictureAlt+'"> </div>';
        } else {
            this._div.innerHTML = '<div class="sphere map-axis'+ props.sphere + '"><p><b>Tytuł projektu: ' + props.title + '</b></p><p>Beneficjent: ' + props.beneficiary + '</p></div><p>' + props.description +'</p></div>';
        }

    } else {
        this._div.innerHTML = '<b>Poznaj najciekawsze projekty dofinansowane z Regionalnego Programu Operacyjnego Województwa Podlaskiego na lata 2014-2020</b>';
    }
};

info.addTo(map);
/*
var legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');

    div.innerHTML = '<i style="background:#cc393d"></i> LPR <br/><i style="background:#2e5984"></i> GPR';

    return div;
};

legend.addTo(map);
*/

displayProject(project1);
displayProject(project2);
displayProject(project3);
displayProject(project4);
displayProject(project5);
displayProject(project6);
displayProject(project7);
displayProject(project8);
displayProject(project9);
displayProject(project10);
displayProject(project11);
displayProject(project12);
