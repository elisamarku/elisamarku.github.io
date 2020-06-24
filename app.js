main();
//toolbox 
function elemBuilder(elemTag, elemClass, text = "", href = "") {
  let elem = document.createElement(elemTag);
  elem.className = elemClass;
  if (text !== "") elem.text = text;
  if (href !== "") elem.href = href;
  return elem;
}

function removeSpace (string){
  return string.replace(/\s+/g, '').replace(/\'+/g, "").replace(/\&+/g,"").replace(/\,+/g,"");
}

// TODO: refactor to filter function in albums array
function getAlbumById (id){
  for (let i =0 ;i < albums.length; i++) {
    const album = albums[i];
    if (removeSpace(album.title) == id) return album;
  }
}

function shuffle(albums) {
  var currentIndex = albums.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = albums[currentIndex];
    albums[currentIndex] = albums[randomIndex];
    albums[randomIndex] = temporaryValue;
  }
  return albums;
}

function fillContainer(album) {
  document.getElementById('flexy').append(getAlbumHTML(album));

  $(".amod").click(function () { 
    iframeBuilder(removeSpace(album.title));
  });
}
 
// production
function main (){
  //shuffle(albums);
  console.log("calling main");

  albums.forEach(function (album) {
    fillContainer(album);
    document.getElementById('mod').appendChild(getModalStructure(album));
  })

}

function refresh (){
  console.log("calling refresh");
  document.getElementById('flexy').innerHTML ="";
  albums.forEach(fillContainer);
}

function getAlbumHTML (album) {
  var div = elemBuilder("div","al");
  var amod = elemBuilder("div", "amod");
  var img = elemBuilder("img","albumart");
  img.src = album.imgSrc;
  img.setAttribute("data-toggle","modal");
  img.setAttribute("data-target", "#" + removeSpace(album.title));
  amod.append(img);
  div.append(amod);
  return div;
}

function getModalStructure (album){
  var modalfade = elemBuilder("div","modal fade");
  modalfade.setAttribute("id", removeSpace(album.title));
  modalfade.setAttribute("tabindex","-1");
  modalfade.setAttribute("role","dialog");

  var modaldialog = elemBuilder("div","modal-dialog modal-dialog-centered modal-lg");
  modaldialog.setAttribute("role","document");

  var modalcontent = elemBuilder("div","modal-content");

  var close = elemBuilder("div","close");

  var button = elemBuilder("button","close");
  button.setAttribute("data-dismiss","modal");
  button.setAttribute("aria-label","Close");

  var span = elemBuilder("span");
  span.setAttribute("aria-hidden","true");
  span.innerHTML = "&times;";

  var modalbody = elemBuilder("div","modal-body");
  modalbody.append(getModalBody(album));
  //appending
  button.append(span);
  close.append(button);
  modalcontent.append(close);
  modalcontent.append(modalbody);
  modaldialog.append(modalcontent);
  modalfade.append(modaldialog);

  return modalfade;
}

function getModalBody (album) {
  //iframe prep
  var iframe = document.createElement("iframe");
  iframe.setAttribute("frameborder","0");
  iframe.setAttribute("allowtransparency", "true");
  iframe.setAttribute("allow","encrypted-media");
  var iframeId = removeSpace(album.title).slice(3); 
  iframe.setAttribute("id", iframeId);
  iframe.width = "70%";
  iframe.height = "80";

  //flex container
  var container = elemBuilder("div", "container-fluid");
  var row = elemBuilder("div","row");
  var col1 = elemBuilder("div", "col");
  var col2 = elemBuilder("div" , "col");

  //image
  var img = elemBuilder("img","modalimg");
  img.src = album.imgSrc;

  //main 
  var title = elemBuilder("h1", "bigTitle");
  title.innerHTML = album.title;
  var artist = elemBuilder("h4", "bigArtist");
  artist.innerHTML = album.artist;
  //table
  table = tableMaker(album);

  //append all
  col1.append(img);
  col1.append(iframe);
  col2.append(title);
  col2.append(artist)
  col2.append(table);
  row.append(col1);
  row.append(col2);
  container.append(row);
  
  return container;
}
function iframeBuilder (albumId) {
  var album = getAlbumById(albumId);
  var spotifyID = album.spotify.slice(14);
  document.getElementById(albumId.slice(3)).setAttribute("src","https://open.spotify.com/embed/album/" + spotifyID);
}

function tableMaker(album) {

  var table = elemBuilder("table"," table table-borderless");
  var tbody = document.createElement("tbody");
  for (var key in album) {
    if (key == "year" || key == "genre"){

      var tr = document.createElement("tr");
      var th = document.createElement("th");
      th.setAttribute("scope","row");
      var td = document.createElement("td");
      th.innerHTML = key;
      td.innerHTML = album[key];
      tr.append(th);
      tr.append(td);
      tbody.append(tr);
    }
  }
  table.append(tbody);
  return table;
}

// actions

function orderBy (string) {
albums = [...clone];

  switch (string) {
    case "title": 
      albums.sort((a, b) => {
      var one = a.title;
      var two = b.title; 
      return one.localeCompare(two, 'en');
  } )
    break;
    case "artist":
    albums.sort((c, d) => {
      var one = c.artist;
      var two = d.artist; 
      return one.localeCompare(two, 'en');
  })
  break;
  }
  refresh();
}

var clone = [...albums]; // to refresh the array before filtering again
function filterBy (string, argument) {
  albums = [...clone];
  switch (argument) {
    case "genre": 
    if (string == "all") {
      break;
    }
    albums = albums.filter(a => a.genre==string );
    break;

    case "year":
    //get year range
    var start = parseInt(string.slice(0,4));
    var end = parseInt(string.slice(5,9));
    let list = [];
    if (string.length < 9 && string.length != 4) {
      alert("Please insert a valid year or year range.");
      break;
    }
    list.push(start);
    for (let s = start; s< end; s++) {
      list.push(s);
    }
    console.log(list);
    //filter 
    albums = albums.filter(a => list.includes(parseInt(a.year)));
    break;
  }
  //console.log(albums);
  refresh();
}

function genreList () {

  var genrelist = [];
  genrelist.push("all");
   for (let b=0; b < albums.length; b++) {
     const album = albums[b];
     if (!genrelist.includes(album.genre)) {
       genrelist.push(album.genre);
   }
  }
   for (let genre=0; genre < genrelist.length; genre++){
    var a = document.createElement("div");
    var b = document.createElement("a");
    b.id=removeSpace(genrelist[genre]);
    b.setAttribute("href", "#");
    b.innerHTML=genrelist[genre];
    a.append(b);
    document.getElementById("collapseGenre").append(a);

    var fullid = "#" + removeSpace(genrelist[genre]);
    $(fullid).click(function () {
      filterBy(genrelist[genre], "genre");
    });
   }
   document.getElementById("filterbygenre").setAttribute("id","filterbygenrevisited"); //to keep the color
}

$(document).ready(function() {
  $("#orderbytitle").click(function () {
    orderBy("title");
  });
  $("#orderbyartist").click(function () {
    orderBy("artist");
  });
  $("#filterbygenre").click(function () {
    document.getElementById("collapseGenre").innerHTML = "";
    genreList();
  });
  $("#yearRange").keypress(function(event) {
      if (event.which == 13) {
        event.preventDefault();
          var value = document.getElementById("yearRange").value;
          filterBy(value, "year");
       }
  });
});
