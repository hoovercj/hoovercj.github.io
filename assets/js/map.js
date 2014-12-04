google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  var data = google.visualization.arrayToDataTable([
    ['Country',"I've visited here!"],
    ['Denmark',1],
    ['Sweden',1],
    ['Estonia',1],
    ['Lithuania',1],
    ['Germany',1],
    ['Austria',1],
    ['United Kingdom',1],
    ['France',1],
    ['Spain',1],
    ['Belgium',1],
    ['Czech Republic',1],
    ['Poland',1]
  ]);

  var options = {
        region: '150',
        displayMode: 'regions',
        colorAxis: {colors: ['#1abc9c','#1abc9c',]},
        legend: 'none',
        tooltip: {trigger: 'none'},
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