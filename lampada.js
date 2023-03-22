const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function lampOn(){ 
    if(!isLampBroken()){
        lamp.src="https://image.freepik.com/photos-gratuite/allumer-ampoule-tungstene-image-photo-realiste_45716-10.jpg"      
    }
}

function lampOff(){
    if(!isLampBroken()){
        lamp.src="https://fernandoleonid.github.io/mini-projetos-js/01-lamp/img/desligada.jpg"         
    }
}

function lampBroken(){
    lamp.src="https://media.istockphoto.com/photos/broken-glass-light-bulb-on-white-background-picture-id113157464?k=6&m=113157464&s=612x612&w=0&h=cb5BtuB69EF3_Eljbvr_2Clj1c2eNdJJD9rKs6pYPAc="
}

function isLampBroken(){
   return lamp.src.indexOf('Broken') > -1
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken)