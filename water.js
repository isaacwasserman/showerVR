var container = $('#water-container')

var droplet = ['<a-entity ',
               '><a-cylinder ',
               ' class="droplet" material="color:blue;opacity:0.5" radius="0.004" height="0.015" position="',
               ' 0.48 ', 
               '">', 
               '</a-cylinder><a-animation attribute="rotation" from="0 0 0" to="0 0 -30" duration="1000" fill="forwards"></a-animation></a-entity>'];

var animation = ['<a-animation easing="linear" attribute="position" duration="1000" from="', 
                 '" to="', 
                 '"></a-animation>']

function getRandom(min, max) {
  return (Math.random() * (max - min) + min).toFixed(3);
}

var idNum = 1;

var frequency = 1;

var animationSpeed = 1000;
var deletionDelay = 1000;
var deletionFrequency = frequency;

setInterval(function(){
    var DropletID = 'id="droplet' + idNum + '"';
    var containerID = 'id="droplet-container' + idNum + '"'

    var x = getRandom(-0.09,-0.17);
    var z = getRandom(-0.04,0.04);
    
    var newX = parseFloat(x) + 0.2;
    var newY = "-0.71";

    var animationInsert = animation[0] + x + " 0.48 " + z + animation[1] + newX + " " + newY + " " + z + animation[2];

    var newDroplet = droplet[0] + containerID + droplet[1] + DropletID + droplet[2] + x + droplet[3] + z + droplet[4] + animationInsert + droplet[5];

  //  console.log(newDroplet);

    container.append(newDroplet);

    idNum++;
  
},frequency);

setInterval(function(){
    var DropletID = 'id="droplet' + idNum + '"';
    var containerID = 'id="droplet-container' + idNum + '"'

    var x = getRandom(-0.09,-0.17);
    var z = getRandom(-0.04,0.04);
    
    var newX = parseFloat(x) + 0.2;
    var newY = "-0.71";

    var animationInsert = animation[0] + x + " 0.48 " + z + animation[1] + newX + " " + newY + " " + z + animation[2];

    var newDroplet = droplet[0] + containerID + droplet[1] + DropletID + droplet[2] + x + droplet[3] + z + droplet[4] + animationInsert + droplet[5];

  //  console.log(newDroplet);

    container.append(newDroplet);

    idNum++;
  
},frequency);

setInterval(function(){
    var DropletID = 'id="droplet' + idNum + '"';
    var containerID = 'id="droplet-container' + idNum + '"'

    var x = getRandom(-0.09,-0.17);
    var z = getRandom(-0.04,0.04);
    
    var newX = parseFloat(x) + 0.2;
    var newY = "-0.71";

    var animationInsert = animation[0] + x + " 0.48 " + z + animation[1] + newX + " " + newY + " " + z + animation[2];

    var newDroplet = droplet[0] + containerID + droplet[1] + DropletID + droplet[2] + x + droplet[3] + z + droplet[4] + animationInsert + droplet[5];

  //  console.log(newDroplet);

    container.append(newDroplet);

    idNum++;
  
},frequency);

setTimeout(function(){
  setInterval(function(){
    document.getElementsByClassName("droplet")[0].parentNode.removeChild(document.getElementsByClassName("droplet")[0]);
  },deletionFrequency);
  setInterval(function(){
    document.getElementsByClassName("droplet")[0].parentNode.removeChild(document.getElementsByClassName("droplet")[0]);
  },deletionFrequency);
  setInterval(function(){
    document.getElementsByClassName("droplet")[0].parentNode.removeChild(document.getElementsByClassName("droplet")[0]);
  },deletionFrequency);
},deletionDelay);