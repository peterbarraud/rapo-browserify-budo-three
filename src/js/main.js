// DOM is ready
require('domready')(function () {
    var threeD = require('three');
    var camera, scene, renderer;
    var geometry, material, mesh;


    sayhello.addEventListener("click", function(){
        init();
        animate();
    });
    var init = function (){
        
           camera = new threeD.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
           camera.position.z = 1;
        
           scene = new threeD.Scene();
        
           geometry = new threeD.BoxGeometry( 0.2, 0.2, 0.2 );
           material = new threeD.MeshNormalMaterial();
        
           mesh = new threeD.Mesh( geometry, material );
           scene.add( mesh );
        
           renderer = new threeD.WebGLRenderer( { antialias: true } );
           renderer.setSize( window.innerWidth, window.innerHeight );
           document.body.appendChild( renderer.domElement );
        
       }
        
    var animate = function() {
    
        requestAnimationFrame( animate );
    
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
    
        renderer.render( scene, camera );
    
    }    
});