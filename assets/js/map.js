google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  var data = google.visualization.arrayToDataTable([
    ['Country'],
    ['Denmark'],
    ['Sweden'],
    ['Estonia'],
    ['Lithuania'],
    ['Germany'],
    ['Austria'],
    ['United Kingdom'],
    ['France'],
    ['Spain'],
    ['Belgium'],
    ['Czech Republic'],
    ['Poland']
  ]);

  var options = {
        region: '150',
        displayMode: 'regions',
        datalessRegionColor: '#1abc9c',        
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