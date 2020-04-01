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
  var a = elemBuilder("a","","",album.imgLink);
  var img = elemBuilder("img","albumart");
  img.src = album.imgSrc;
  img.href = album.imgLink;
  a.append(img);
  div.append(a);
  return div;
}


