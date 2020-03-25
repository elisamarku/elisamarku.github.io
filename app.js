let flexy = document.querySelector('#flex-container');

for (var i=0; i < mydata.length; i++) {

    let albumCard = document.createElement(div);
    let a = document.createElement("a"); 
    a.href = mydata.albums[i].imgLink;
    let img = document.createElement("img");
    img.src = mydata.albums[i].imgSrc;
    img.width = "100%";
    img.height = "100%";
    a.appendChild(img);
    albumCard.appendChild(a);
    flexy.appendChild(albumCard);

  }