$(function(){

	let center = [ -36.844031443295954,174.76693511009216];

	let map = L.map('map').setView(center,17);

	L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VtaW5oYSIsImEiOiJjajZsZ3J2eXcxcmRoMnhtcW1ndDk1bDFoIn0.PpGjhQLuoYSwFYEMSaIw1g').addTo(map);

	//Vicinity circle

	L.circle(center, {
						radius: 200,
						color: 'salmon',
						weight: 1,
						fill:false

	}).addTo(map);

	
	//service markets
	let services = [
						{
							latlng:[-36.843001119463224,174.76607680320737],
							description:'cafe Crema',
							iconImage:'assets/cafe.svg'
						},
						{
							latlng:[-36.844795591172215,174.7691023349762],
							description:'Esquires',
							iconImage:'assets/cafe.svg'
						}
					];

	//easy way!
	_(services).each(function(service){

		let serviceIcon = L.icon({
									iconUrl:service.iconImage,
									iconSize:[40,40]
								});

		let marker = L.marker(service.latlng,{icon:serviceIcon}).addTo(map);
		marker.bindPopup('<div>'+service.description+'<div>')

	});

	//bus stops
	let busStops = [
						{
							latlng:[-36.84488145000694,174.76522922515866],
							description:'Grey Lynn'
						},
						{
							latlng:[-36.84342183670524,174.76389884948728],
							description:'Northern Express'
						},
						{
							latlng:[-36.84460670139648,174.76666688919067],
							description:'Northern Express'
						},
						{
							latlng:[-36.8437223476038,174.7656261920929],
							description:'Northern Express'
						}
					];

	_(busStops).each(function(busStop){

		L.circle(busStop.latlng, {
						radius: 2,
						color: 'yellow',
				}).addTo(map);

		var busStopIcon = L.divIcon({
						className:'bus-stop',
						iconAnchor:[-5,15],
						iconSize:[100,30],
						html:'<div></div><div></div>'

		});

		let marker = L.marker(busStop.latlng,{icon:busStopIcon}).addTo(map);

	});

	// for(let i=0; i<services.length; i++){
	// 	//put marker on map
	// 	let service = services[i];
	// 	L.marker(service.latlng).addTo(map);
	// }

          
          


});
