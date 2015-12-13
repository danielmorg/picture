// === Nos aseguramos de que el DOM esté cargado 
window.onload = function() {
    document.addEventListener("deviceready", onDeviceReady, false);
};


// === Lanzamos el evento cuando el dipositivo esta preparado
function onDeviceReady() {
    alert('device is ready');
}  
  

// === Invocamos a la función en Javascript (Evento onclick en el HTML)  
function hacerFoto() {
    
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.DATA_URL});

    function onSuccess(imageData){
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64, " + imageData;
        console.log("imagen actualizada");
    };

    function onFail(message){
        console.log("Ha habido un error a causa de " + message);
    };
    
    navigator.vibrate(3000);
};


// === La misma function en jQuery (Evento click integrado)
/*var x = $(document);
x.ready(inicializar);

function inicializar() {
    var x = $('.btn');
    x.click(hacerFoto);
};

function hacerFoto() {
     navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.DATA_URL});

    function onSuccess(imageData){
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64, " + imageData;
        console.log("imagen actualizada");
    };

    function onFail(message){
        console.log("Ha habido un error a causa de " + message);
    };
    
    navigator.vibrate(3000);
};*/
    
   

   /* function onPhotoSuccess(imageData) { 
    var image = document.getElementById(‘myImage’);
    image.src = "data:image/jpeg;base64, "+ imageData; 
    }

    function capturePhoto() {    
       navigator.camera.getPicture(onPhotoSuccess, onPhotoFail, { quality: 50 });    
    } 
    
    function onPhotoFail(message) {      
       alert(‘Failed because: ‘ + message);    
    }*/
 







