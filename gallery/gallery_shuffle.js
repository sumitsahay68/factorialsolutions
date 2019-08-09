function randomize(array){
    var i = 0;
    var j = 0;
    var temp = null;

    for (i = array.length - 1; i > 0; i --) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return temp;
}
function gallery_shuffle(){
  var files = []; 
  fileName = findFirstFile("*.jpeg"); // Find the first file matching the filter 
  while(fileName.length) 
  { 
      files.push(filename); 
      fileName = findNextFile();  // Find the next file matching the filter 
  }
  files = randomize(files);
      var ctr = 0;
      var ind;
      for(ctr=0;ctr<files.length;ctr++)
      {
          //process file here
          var x = "gallery-image";
          var image_id = x.concat((ctr+1).toString());
          document.getElementById(image_id).setAttribute('src',f);
          if(ctr++>=15)
           break;
      }
}
