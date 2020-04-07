am4core.ready(function() {
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create(
    document.getElementById("chartdiv"),
    am4charts.PieChart
  );


// get amount
function findAmount (genre) {
  var count = albums.filter(a => a.genre == genre);
  return count.length;
}
//get genres
var genrelist = [];

   for (let b=0; b < albums.length; b++) {
     const album = albums[b];
     if (!genrelist.includes(album.genre)) {
       genrelist.push(album.genre);
   }
}
//add data
for (g in genrelist) {
  var object = { amount : findAmount(genrelist[g]), genre : genrelist[g] };
  chart.data.push(object);
  chart.data.sort((a,b) => a.amount - b.amount);
  }


// Set inner radius
chart.innerRadius = am4core.percent(40);

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "amount";
pieSeries.dataFields.category = "genre";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;
pieSeries.labels.template.text = "{category}";
pieSeries.slices.template.tooltipText = "{value.value}";

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

//redrawing 
function redraw() {
  chart.appear();
  chart.series.each(function(series) {
    series.appear();
  });
}

$("#one").click(function () {
  redraw();
});
$("#three").click(function () {
  redraw();
});
$("#analytics").click(function () {
  redraw();
});

});// end am4core.ready()