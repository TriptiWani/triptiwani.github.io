var app = app || {};

app.rotation = 0;
app.controller = {
    rotationSpeed: 0.02,
    bouncingSpeed: 0.02
};
app.rotSpeed = 0.02;

app.init = function(){
  app.scene = new THREE.Scene();

  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera = new THREE.PerspectiveCamera( 60, app.width/app.height, 0.1, 1000); // feild of view, scene ratio, near position, far position

//position of camera
  app.camera.position.x = 38;
  app.camera.position.y = 15;
  app.camera.position.z = 32;
  // app.camera.position.set(0,20,35);

  app.camera.lookAt(app.scene.position); // what is the location camera is looking at

  app.renderer = new THREE.WebGLRenderer();
  app.renderer.setSize(app.width, app.height);
  app.renderer.setClearColor( 0xFFFFFF);

  // app.axes = new THREE.AxisHelper( 40);
  // app.scene.add( app.axes );

    // var planeGeometry = new THREE.PlaneGeometry( 60, 20 );
    // var planeMaterial = new THREE.MeshLambertMaterial( {
    //   color: 0xCFD8DC,
    //   opacity     : 0.5,
    //   transparent : true,
    //   map: THREE.ImageUtils.loadTexture("/images/test.png") //hex color, kind of grey
    // });
    //
    // app.plane = new THREE.Mesh( planeGeometry, planeMaterial); //bring together shape and material
    // app.plane.rotation.x = -0.5 * Math.PI ;
    // app.plane.position.x = 0;
    // app.plane.position.y = 0;
    // app.plane.position.z = 0;
    // app.plane.receiveShadow = true ;

  // app.scene.add( app.plane) ;

  var sphereGeometry = new THREE.SphereGeometry( 20, 60,60);
  var sphereGeometryTripti = new THREE.SphereGeometry( 25, 60,60);
  var sphereMaterialFrontEnd = new THREE.MeshLambertMaterial( {
    color: 0xFFFFFF,
    wireframe: false,
    opacity     : 0.8,
    transparent : true,
    map: THREE.ImageUtils.loadTexture("/images/FE.png")
  });

  var sphereMaterialBackEnd = new THREE.MeshLambertMaterial( {
    color: 0xFFFFFF,
    wireframe: false,
    opacity     : 1,
    transparent : true,
    map: THREE.ImageUtils.loadTexture("/images/Me1.png")

  });

  var sphereMaterialCssStyle = new THREE.MeshLambertMaterial( {
    color: 0xFFFFFF,
    wireframe: false,
    opacity     : 0.8,
    transparent : true,
    map: THREE.ImageUtils.loadTexture("/images/CSS.png")
  });

  var sphereMaterialMe = new THREE.MeshLambertMaterial( {
    color: 0xFFFFFF,
    wireframe: false,
    opacity     : 0.8,
    transparent : true,
    map: THREE.ImageUtils.loadTexture("/images/BE.png")
  });

  app.sphereFrontEnd = new THREE.Mesh(sphereGeometry,sphereMaterialFrontEnd );
  app.sphereFrontEnd.position.set( 10,0,0);
  app.sphereFrontEnd.castShadow = false;// app.sphere.castShadow = true;
  app.scene.add(app.sphereFrontEnd);

  app.sphereBackEnd = new THREE.Mesh(sphereGeometryTripti,sphereMaterialBackEnd );
  app.sphereBackEnd.position.set( 0,10,0);
  app.sphereBackEnd.castShadow = false;// app.sphere.castShadow = true;
  app.scene.add(app.sphereBackEnd);

  app.sphereCss = new THREE.Mesh(sphereGeometry,sphereMaterialCssStyle );
  app.sphereCss.position.set( 0,0,10);
  app.sphereCss.castShadow = false;// app.sphere.castShadow = true;
  app.scene.add(app.sphereCss);

  app.sphereMe = new THREE.Mesh(sphereGeometry,sphereMaterialMe );
  app.sphereMe.position.set( 0,-10,0);
  app.sphereMe.castShadow = false;// app.sphere.castShadow = true;
  app.scene.add(app.sphereMe);

  // var cubeGeometry = new THREE.BoxGeometry (4,4,4);
  // var cubeMaterial = new THREE.MeshLambertMaterial( {
  //   color: 0xFFFFFF, //0x6491b9,
  //   wireframe: false,
  //   transparent : false,
  //   map: THREE.ImageUtils.loadTexture("/images/me.png")
  // });
  // var greenMaterial = new THREE.MeshLambertMaterial( {
  //   color: 0x6491b9,
  //   wireframe: false,
  //   transparent : false,
  //   //map: THREE.ImageUtils.loadTexture("/images/me.png")
  // });
  // app.cube = new THREE.Mesh( cubeGeometry, cubeMaterial);

  // var tripti = [
  //   cubeMaterial, greenMaterial, greenMaterial,
  //   greenMaterial, greenMaterial, greenMaterial
  //   // new THREE.MeshLambertMaterial({
  //   //   map: THREE.ImageUtils.loadTexture("/images/me.png")
  //   // })
  // ];
  //
  // app.cube = new THREE.Mesh(
  //   cubeGeometry,
  //   new THREE.MeshFaceMaterial( tripti )
  // );
  //
  //
  //
  // app.cube.position.set( 0, 0, 0);
  // app.cube.castShadow = false;
  // app.scene.add( app.cube);

  app.bggeometry = new THREE.SphereGeometry(200, 32, 32);
       // create the material, using a texture of startfield
   app.bgmaterial  = new THREE.MeshBasicMaterial();
   app.bgmaterial.map  = THREE.ImageUtils.loadTexture('images/background1.jpg');
   app.bgmaterial.side  = THREE.BackSide;
       // create the mesh based on geometry and material
   app.bgmesh  = new THREE.Mesh(app.bggeometry, app.bgmaterial);

   app.scene.add(app.bgmesh);

  app.spotlight = new THREE.SpotLight( 0xFFFFFF );
  app.spotlight.position.set( -20, 60, 10);
  app.spotlight.castShadow = false;// app.spotlight.castShadow = true;

  app.scene.add(app.spotlight);

  app.light = new THREE.AmbientLight();
  app.light.color.setRGB( 0.2, 0.2, 0.2 );
  app.scene.add(app.light);
  app.controls = new THREE.OrbitControls( app.camera, app.renderer.domElement);
  app.controls.enabled = false;

  document.getElementById("output").appendChild(app.renderer.domElement);

  // app.renderer.render( app.scene, app.camera); //show the scene using this camera
  app.animate();

};

app.animate = function(){
  // checkRotation();
  app.step += app.controller.bouncingSpeed;
  app.sphereFrontEnd.rotation.y += app.controller.rotationSpeed;
  app.sphereBackEnd.rotation.y += app.controller.rotationSpeed;
  app.sphereCss.rotation.y += app.controller.rotationSpeed;
  // app.sphereMe.rotation.y += app.controller.rotationSpeed;

  app.rotation += app.controller.rotationSpeed;
  app.camera.position.y = 10;
  app.camera.position.x = Math.sin(app.rotation) * 100;
  app.camera.position.z = Math.cos(app.rotation) * 100; // add this for extra zooming: + Math.sin(rotation) * 100;
  app.camera.lookAt( app.scene.position ); // the origin

  // app.cube.rotation.x += app.controller.rotationSpeed;
  // app.cube.rotation.y += app.controller.rotationSpeed;
  // app.cube.rotation.z += app.controller.rotationSpeed;

  app.renderer.render( app.scene, app.camera);
  requestAnimationFrame(app.animate);
};

var checkRotation = function(){

  var x = app.camera.position.x,
    y = app.camera.position.y,
    z = app.camera.position.z;

  // if (keyboard.pressed("left")){
    app.camera.position.x = x * Math.cos(app.rotSpeed) + z * Math.sin(app.rotSpeed);
    app.camera.position.z = z * Math.cos(app.rotSpeed) - x * Math.sin(app.rotSpeed);
  // } else if (keyboard.pressed("right")){
  //   app.camera.position.x = x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed);
  //   app.camera.position.z = z * Math.cos(rotSpeed) + x * Math.sin(rotSpeed);
  // }

  app.camera.lookAt(app.scene.position);

};


window.addEventListener('resize', app.onResize, false);

window.onload = app.init;
