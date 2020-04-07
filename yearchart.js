am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);

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
         obj[genre] = searchArray(yearlist[y],genre);
         chart.data.sort((a,b) => a.year - b.year);
    }
 chart.data.push(obj);
}
console.log(chart.data);
    
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0;
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
    
    // Create series
    function createSeries(field, name) {
      var series = chart.series.push(new am4charts.LineSeries());
      series.dummyData = {
        field: field
      }
      series.dataFields.valueY = field + "_hi";
      series.dataFields.openValueY = field + "_low";
      series.dataFields.categoryX = "year";
      series.name = name;
      series.tooltipText = "[font-size: 18]{name}[/]\n{categoryX}: [bold]{" + field + "}[/]";
      series.strokeWidth = 1;
      series.fillOpacity = 1;
      series.tensionX = 0.8;
      
      return series;
    }
    
    var simplified = genrelist.sort((a,b) => findAmount(b) - findAmount(a));

    for (a=0; a < 4;a++) {
        createSeries(simplified[a], simplified[a]);
    }
    
    // Legend
    chart.legend = new am4charts.Legend();
    chart.legend.itemContainers.template.togglable = false;
    chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;
    chart.legend.position = "right"
    chart.legend.reverseOrder = true;
    
    // Cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.maxTooltipDistance = 0;
    
    // Responsive
    chart.responsive.enabled = true;
    chart.responsive.useDefault = false;
    chart.responsive.rules.push({
      relevant: am4core.ResponsiveBreakpoints.widthL,
      state: function(target, stateId) {
        if (target instanceof am4charts.Legend) {
          var state = target.states.create(stateId);
          state.properties.position = "bottom";
          return state;
        }
        return null;
      }
    });
    
    // Prepare data for the river-stacked series
    chart.events.on("beforedatavalidated", updateData);
    function updateData() {
      
      var data = chart.data;
      if (data.length == 0) {
        return;
      }
    
      for (var i = 0; i < data.length; i++) {
        var row = data[i];
        var sum = 0;
    
        // Calculate open and close values
        chart.series.each(function(series) {
          var field = series.dummyData.field;
          var val = Number(row[field]);
          row[field + "_low"] = sum;
          row[field + "_hi"] = sum + val;
          sum += val;
        });
    
        // Adjust values so they are centered
        var offset = -sum;
        chart.series.each(function(series) {
          var field = series.dummyData.field;
          //row[field + "_low"] = 0;
          row[field + "_hi"] = sum;
        });
    
      }
    
    }
    
    });