function elemBuilder(elemTag, elemClass, text = "", href = "") {
  let elem = document.createElement(elemTag);
  elem.className = elemClass;
  if (text !== "") elem.text = text;
  if (href !== "") elem.href = href;
  return elem;
}

for (let i =0 ;i < albums.length; i++) {
  const album = albums[i];
  document.getElementById('flexy').append(getAlbumHTML(album));

}

function getAlbumHTML (album) {
  var div = elemBuilder("div","al");
  var amod = elemBuilder("div", "amod");
  var img = elemBuilder("img","albumart");
  img.src = album.imgSrc;
  var details = elemBuilder("div", "details");
  var text = elemBuilder("button","btn btn-link");
  details.setAttribute("data-toggle","modal");
  details.setAttribute("data-target", "#detailsModal");
  text.innerHTML = "view details";
  details.append(text);
  amod.append(img);
  amod.append(details);
  div.append(amod);
  return div;
}


