google.load('visualization', '1.1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Country');
  data.addColumn('number', 'Value');
  data.addColumn({type:'string', role:'tooltip', p:{html:true}});
  data.addRows([    
    ['Denmark',1,'The first time I left the US was to study abroad here in Odense. And now I\'m living in Copenhagen working at Microsoft!' ],
    ['Sweden',1,'I visited Stockholm and took a cruise to Estonia!'],
    ['Estonia',1,'Came here on a cruise and bought a pair of skinny jeans. Then came back later to study for a semester.'],
    ['Lithuania',1,'Arrived on the date of an amazing 1-night biennial folk song/dance festival.'],
    ['Germany',1, "While living in Aachen for 8 months I fell in love with Dönner Überbacken, essentially a cheesy casserole of kebab meat."],
    ['Austria',1,'Spent the 4th of July here and celebrated a sweet woman\'s 80th birthday.'],
    ['United Kingdom',1,'Visited London, Cardiff, and Edinburgh. Saw the filming of scenes of Doctor Who!!!'],
    ['France',1,'Visited Paris, ate snails, and played laser tag.'],
    ['Spain',1,'The home of my beautiful girlfriend and the place I first experienced the sea. Unfortunately, it is also home to Ambar, the worst beer I\'ve ever tasted.'],
    ['Poland',1,'Bison Grass Vodka sounds weird but tastes great.'],
    ['Belgium',1,'The beer here is strong. I speak from experience.'],
    ['Czech Republic',1,'The beer is literally cheaper than water. Almost free.'],
    ['Netherlands',1,'The Anne Frank house distills the unfathamable horrors of holocaust into an uncomfortably relateable journey through the life of a single family. Also, I ate Ethiopian and Nepalese food.'],
    ['Luxembourg',1,'Probably the most beautiful one-day stop you could make traveling between countries.'],
    ['Italy',1,'I was skeptical, but neapolitan pizza really is the greatest on earth. And eating fresh pasta on an island overlooking the sea isn\'t too bad either.'],
    ['Finland',1,'Crossed "See the Northern Lights" off my bucket list, drove a dogsled, enjoyed a true Finnish sauna complete with an ice-water plunge and rolling in the snow, and found out how delicious reindeer taste.'],
    ['Latvia',1,'Finally tried Rocky Mountain Oysters (bull testicles) while listening to locals perform Rockabilly music.'],
    ['Ireland',1,'Spent 90% of my time in pubs listening to live music and 10% driving through the incredible countryside.']
  ]);

  var options = {
        region: '150',
        displayMode: 'regions',
        colorAxis: {colors: ['#1abc9c','#1abc9c']},
        legend: 'none',
        tooltip: {showColorCode: 'false', isHtml: true},
        keepAspectRatio: true,
        width: '100%',
      };
  
  var geochart = new google.visualization.GeoChart(
      document.getElementById('visualization'));
  geochart.draw(data, options);
}

$(window).resize(function(){
	document.getElementById('visualization').innerHTML = "";
	drawVisualization();
});
