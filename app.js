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

// production
function main (){
  console.log("calling main");
    for (let i =0 ;i < albums.length; i++) {
      const album = albums[i];
      document.getElementById('flexy').append(getAlbumHTML(album));
      document.getElementById('mod').appendChild(getModalStructure(album));
  }
}
function refresh (){
  console.log("calling refresh");
  document.getElementById('flexy').innerHTML ="";
    for (let i =0 ;i < albums.length; i++) {
      const album = albums[i];
      document.getElementById('flexy').append(getAlbumHTML(album));
  }
}
function getAlbumHTML (album) {
  var div = elemBuilder("div","al");
  var amod = elemBuilder("div", "amod");
  var img = elemBuilder("img","albumart");
  img.src = album.imgSrc;
  var details = elemBuilder("div", "details");
  var text = elemBuilder("button","btn btn-link");
  details.setAttribute("data-toggle","modal");
  details.setAttribute("data-target", "#" + removeSpace(album.title));
  text.innerHTML = "view details";
  details.append(text);
  amod.append(img);
  amod.append(details);
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
  //iframe
  var spotifyID = album.spotify.slice(14);
  var iframe = document.createElement("iframe");
  iframe.setAttribute("src","https://open.spotify.com/embed/album/" + spotifyID);
  iframe.setAttribute("frameborder","0");
  iframe.setAttribute("allowtransparency", "true");
  iframe.setAttribute("allow","encrypted-media");
  iframe.width = "70%";
  iframe.height = "80";

  //flex container
  var container = elemBuilder("div", "container-fluid");
  var row = elemBuilder("div","row");
  var div1 = elemBuilder("div", "col");
  var div2 = elemBuilder("div" , "col");

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
  div1.append(img);
  //div1.append(iframe);
  div2.append(title);
  div2.append(artist)
  div2.append(table);
  row.append(div1);
  row.append(div2);
  container.append(row);

  
  return container;
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