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

function getAlbumById (id){
  for (let i =0 ;i < albums.length; i++) {
    const album = albums[i];
    if (removeSpace(album.title) == id) return album;
  }
}

// production
function main (){
  console.log("calling main");
    for (let i =0 ;i < albums.length; i++) {
      const album = albums[i];
      document.getElementById('flexy').append(getAlbumHTML(album));
      document.getElementById('mod').appendChild(getModalStructure(album));
      
      $(document).ready(function() {
        $(".amod").click(function () { 
          iframeBuilder(removeSpace(album.title));
        });
      });
  }
}
function refresh (){
  console.log("calling refresh");
  document.getElementById('flexy').innerHTML ="";
    for (let i =0 ;i < albums.length; i++) {
      const album = albums[i];
      document.getElementById('flexy').append(getAlbumHTML(album));

      $(document).ready(function() {
        $(".amod").click(function () { 
          iframeBuilder(removeSpace(album.title));
        });
      });
  }
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

  var modalheader = elemBuilder("div","modal-header");
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
  //add
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
  console.log("i am here");
  switch (string) {
    case "title": 
      albums.sort((a, b) => {
      var nameA = a.title.charAt(1); // ignore upper and lowercase
      var nameB = b.title.charAt(1); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
  } )
    break;
    case "artist":
    albums.sort((c, d) => {
      var nameC = c.artist.charAt(1); // ignore upper and lowercase
      var nameD = d.artist.charAt(1); // ignore upper and lowercase
      if (nameC < nameD) {
        return -1;
      }
      if (nameC > nameD) {
        return 1;
      }
  })
  break;
  }
  refresh();
  console.log(albums);
}

$(document).ready(function() {
  $("#orderbytitle").click(function () {
    orderBy("title");
  });
  $("#orderbyartist").click(function () {
    orderBy("artist");
  });
});