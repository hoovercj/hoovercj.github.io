google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Country');
  data.addColumn('number', 'Value');
  data.addColumn({type:'string', role:'tooltip'});
  data.addRows([    
    ['Denmark',1,'My Exchange Semester in Odense'],
    ['Sweden',1,'I visited Stockholm and took a cruise to Estonia!'],
    ['Estonia',1,'Came here on a cruise and bought a pair of skinny jeans'],
    ['Lithuania',1,'Arrived on the date of a 1-night biennial folk song/dance festival'],
    ['Germany',1, "I'm living and studying here right now!"],
    ['Austria',1,'Spent the 4th of July here.'],
    ['United Kingdom',1,'Visited London, Cardiff, and Edinburgh. Saw them film scenes of Doctor Who!!!'],
    ['France',1,'Visited Paris, ate snails, and played laser tag'],
    ['Spain',1,'The home of my girlfriend. And where I first experienced "the sea"'],
    ['Belgium',1,'The beer here is strong. Trust me.'],
    ['Czech Republic',1,'The beer is literally cheaper than water. Almost free.'],
    ['Poland',1,'Bison Grass Vodka sounds weird but tastes great.']
  ]);

  var options = {
        region: '150',
        displayMode: 'regions',
        colorAxis: {colors: ['#1abc9c','#1abc9c']},
        legend: 'none',
        tooltip: {showColorCode: 'false'},
        keepAspectRatio: true,
        width: '100%'
      };
  
  var geochart = new google.visualization.GeoChart(
      document.getElementById('visualization'));
  geochart.draw(data, options);
}

$(window).resize(function(){
  drawVisualization();
});