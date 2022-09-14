let z = 0;

function nextPic() {
    if (z < 47) {
        z += 1;
        document.getElementById("picture").style.backgroundImage = `url(memes/${z}.jpg)`;
    } else {
            z = 0;
            document.getElementById("picture").style.backgroundImage = `url(memes/${z}.jpg)`;
           }
}



function lastPic() {
  if (z > 0) {
    z -= 1;	
    document.getElementById("picture").style.backgroundImage = `url(memes/${z}.jpg)`;
  } else {
  z = 47;
      document.getElementById("picture").style.backgroundImage = `url(memes/${z}.jpg)`;
     }
}