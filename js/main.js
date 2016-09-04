var app = app || {};

app.step = 0;

app.numParticles = 2000;
app.particleDistribution = 300;

app.controller = {
    rotationSpeed: 0.02,
    bouncingSpeed: 0.02
};

app.init = function() {
  // console.log("hello World");

  app.scene = new THREE.Scene();

  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera = new THREE.PerspectiveCamera( 60, app.width/app.height, 0.1, 1000); // feild of view, scene ratio, near position, far position

//position of camera
  app.camera.position.x = -30;
  app.camera.position.y = 40;
  app.camera.position.z = 30;

  app.camera.lookAt(app.scene.position); // what is the location camera is looking at

  app.renderer = new THREE.WebGLRenderer(); //kind of engine which puts everything together and render view

  app.renderer.setSize(app.width, app.height);
  app.renderer.setClearColor( 0x000000); //bg color
  // app.renderer.shadowMap.enabled = true; // disbaled by default

  // app.axes = new THREE.AxisHelper( 40);
  // app.scene.add( app.axes );

  // var planeGeometry = new THREE.PlaneGeometry( 120, 20 );
  // var planeMaterial = new THREE.MeshLambertMaterial( {
  //   color: 0xCFD8DC //hex color, kind of grey
  // });
  //
  // app.plane = new THREE.Mesh( planeGeometry, planeMaterial); //bring together shape and material
  // app.plane.rotation.x = -0.5 * Math.PI ;
  // app.plane.position.x = 15;
  // app.plane.position.y = 0;
  // app.plane.position.z = 0;
  // app.plane.receiveShadow = true ;
  //
  // app.scene.add( app.plane) ;

  var cubeGeometry = new THREE.BoxGeometry (4,4,4);
  var cubeMaterial = new THREE.MeshLambertMaterial( {
    color: 0xFF8F00,
    wireframe: false,
    // map: THREE.ImageUtils.loadTexture("/images/snowflake.png")
  });

  app.cube = new THREE.Mesh( cubeGeometry, cubeMaterial);

  app.cube.position.set( 0, 0, 0);
  app.cube.castShadow = false;
  // app.cube.castShadow = true;

  app.scene.add( app.cube);

  var sphereGeometry = new THREE.SphereGeometry( 8, 30,30);
  var sphereMaterial = new THREE.MeshLambertMaterial( {
    color: 0xFFFFFF,
    wireframe: false,
    map: THREE.ImageUtils.loadTexture("/images/earth.jpg")
  });

  app.sphere = new THREE.Mesh(sphereGeometry,sphereMaterial );
  app.sphere.position.set( 20,4,2);
  app.sphere.castShadow = false;// app.sphere.castShadow = true;
  app.scene.add(app.sphere);

  app.spotlight = new THREE.SpotLight( 0xFFFFFF );
  app.spotlight.position.set( -20, 60, 10);
  app.spotlight.castShadow = false;// app.spotlight.castShadow = true;

  app.scene.add(app.spotlight);

  app.light = new THREE.AmbientLight();
  app.light.color.setRGB( 0.2, 0.2, 0.2 );
  app.scene.add(app.light);

  app.particleSystem = app.createParticleSystem();
  app.scene.add( app.particleSystem);

  app.controls = new THREE.OrbitControls( app.camera, app.renderer.domElement);

  app.gui = new dat.GUI();
  app.gui.add( app.controller, 'rotationSpeed' , 0 , 0.2);
  app.gui.add( app.controller, 'bouncingSpeed', 0 , 2.0);

  app.stats = app.addStats();

  document.getElementById("output").appendChild(app.renderer.domElement);

  // app.renderer.render( app.scene, app.camera); //show the scene using this camera
  app.animate();

};

app.animate = function(){

  app.stats.update();
  app.cube.rotation.x += app.controller.rotationSpeed;
  app.cube.rotation.y += app.controller.rotationSpeed;
  app.cube.rotation.z += app.controller.rotationSpeed;

  app.step += app.controller.bouncingSpeed;
  // app.sphere.position.x = 20 + (10 * Math.cos(app.step));
  // app.sphere.position.y = 4 + (10 * Math.abs(Math.sin(app.step)));
  // // app.sphere.position.z = 20 + (10 * Math.cos(app.step));

  app.sphere.rotation.y += app.controller.rotationSpeed;

  app.animateParticles();

  app.renderer.render( app.scene, app.camera);
  requestAnimationFrame(app.animate);
};

app.randRange = function(min,max) {
  var  range = max-min;
  return min + (Math.random() * range);
};

app.createParticleSystem = function() {
  var particles = new THREE.Geometry(); // basic collection of vertices (i.e. points)
  for (var p = 0; p < app.numParticles; p++) {

    var x = app.randRange(-app.particleDistribution, app.particleDistribution);
    var y = app.randRange(-app.particleDistribution, app.particleDistribution);
    var z = app.randRange(-app.particleDistribution, app.particleDistribution);

    var particle = new THREE.Vector3( x,y,z); //creates this specific vertex

    particle.vx = app.randRange( -0.2,0.2); //particle.vx = app.randRange( -0.2,0.2);
    particle.vy = app.randRange( -0.2,0.2);
    particle.vz = app.randRange( -0.2,0.2);


    particles.vertices.push( particle);

  }

  var particleMaterial = new THREE.PointsMaterial( {
    color: 0xFFFFFF,
    size: 10,
    blending: THREE.AdditiveBlending,
    transparent: true,
    alphaTest: 0.5,
    map: THREE.ImageUtils.loadTexture("/images/snowflake.png")
  });

  var particleSystem = new THREE.Points(particles, particleMaterial);

  return particleSystem;
};

app.animateParticles = function() {
  var verts = app.particleSystem.geometry.vertices;
  for (var i = 0; i < verts.length; i++) {
    var vert = verts[i];

    // if (vert.y < -app.particleDistribution){
    //   vert.y = app.randRange( -app.particleDistribution, app.particleDistribution);
    // }
    // vert.y -= app.controller.rotationSpeed;

    var dist = Math.sqrt( vert.x*vert.x + vert.y * vert.y + vert.z * vert.z);

    var force = (10.0/(dist * dist)) * -0.05;

    vert.vx += force * vert.x;
    vert.vy += force * vert.y;
    vert.vz += force * vert.z;

    vert.x += vert.vx * app.controller.rotationSpeed * 20;
    vert.y += vert.vy * app.controller.rotationSpeed * 20;
    vert.z += vert.vz * app.controller.rotationSpeed * 20;

  }
  app.particleSystem.geometry.verticesNeedUpdate = true;
};

app.onResize = function() {
  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera.aspect = app.width / app.height;
  app.camera.updateProjectionMatrix();

  app.renderer.setSize( app.width, app.height);
};

app.addStats = function() {
  var stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';

  document.getElementById("stats").appendChild( stats.domElement);

  return stats;
};

window.addEventListener('resize', app.onResize, false);

window.onload = app.init; // not using jquery here, using DOM
