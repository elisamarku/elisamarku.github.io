am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create(document.getElementById("yearchartdiv"), am4charts.XYChart);

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
     genrelist = genrelist.sort((a,b) => findAmount(a) - findAmount(b));
  }
  //get genres
  var yearlist = [];
  
for (let b=0; b < albums.length; b++) {
       const album = albums[b];
       if (!yearlist.includes(album.year)) {
         yearlist.push(album.year);
     }
  }
console.log(yearlist);
function searchArray (year, genre){
    let count = 0;
    for (a in albums) {
        var album = albums[a];
        if (album.year == year && album.genre == genre){
            count++;
        }
    }
    return count;
}
//add data
for (y in yearlist) {
    var obj = new Object();
    obj.year = yearlist[y];
    for (g in genrelist) {   
         var genre = genrelist[g];
         if (searchArray(yearlist[y],genre) != 0){
         obj[genre] = searchArray(yearlist[y],genre);
        }
    }
 chart.data.push(obj);
 chart.data.sort((a,b) => a.year - b.year);
}
console.log(chart.data);
    
    
// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 40;


var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    for (a in genrelist) {
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = genrelist[a];
        series.dataFields.categoryX = "year";
        series.name = genrelist[a];
        series.tooltipText = "{name}: [bold]{valueY}[/]";
        series.stacked = true;
    }

// Add cursor
chart.cursor = new am4charts.XYCursor();

//redraw
function redraw() {
    chart.appear();
    chart.series.each(function(series) {
      series.appear();
    });
  }
  $("#two").click(function () {
    redraw(); 
});
});
