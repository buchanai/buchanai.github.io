/*-------------------------------------------------------------------------------------
Created By: Ian Buchanan
AJAX call to the Star Wars API (SWAPI)
-------------------------------------------------------------------------------------*/	

	document.addEventListener("DOMContentLoaded", getPerson);
	
	function getPerson(){
		document.getElementById('characterSubmit').addEventListener('click', function(event){
			var req = new XMLHttpRequest();
			var whose = {who:null};
			whose.who = document.getElementById('them').value;//call helper function to get the character's id.
			req.open('GET', 'http://swapi.co/api/people/' + whose.who + '/', true);
			req.addEventListener('load', function(){
				if(req.status >= 200 && req.status < 400){
					var response = JSON.parse(req.responseText);
					document.getElementById('name').textContent = response.name;
					document.getElementById('height').textContent = response.height;
					document.getElementById('mass').textContent = response.mass;
					document.getElementById('hair').textContent = response.hair_color;
					document.getElementById('gender').textContent = response.gender;
				}else{
					console.log("What did you do? Something went wrong! The status is: " + req.status.Text);
				}
			});
			req.send(null);
			event.preventDefault();
		});
	};
	
	document.addEventListener("DOMContentLoaded", getPlanet);
	
	function getPlanet(){
		document.getElementById('planetSubmit').addEventListener('click', function(event){
			var req = new XMLHttpRequest();
			var where = {who:null};
			where.who = document.getElementById('places').value;//call helper function to get the character's id.
			req.open('GET', 'http://swapi.co/api/planets/' + where.who + '/', true);
			req.addEventListener('load', function(){
				if(req.status >= 200 && req.status < 400){
					var response = JSON.parse(req.responseText);
					document.getElementById('pname').textContent = response.name;
					document.getElementById('rotate').textContent = response.rotation_period;
					document.getElementById('orbital').textContent = response.orbital_period;
					document.getElementById('diameter').textContent = response.diameter;
					document.getElementById('climate').textContent = response.climate;
					document.getElementById('population').textContent = response.population;
				}else{
					console.log("What did you do? Something went wrong! The status is: " + req.status.Text);
				}
			});
			req.send(null);
			event.preventDefault();
		});
	};	
