if (Meteor.isClient) {

    Template.home.rendered = function() {

    var container = document.getElementById('container');
    var renderer = new FSS.CanvasRenderer();
    var scene = new FSS.Scene();
    var light = new FSS.Light('#111122', '#37474f');
    var geometry = new FSS.Plane(1450, 900, 20, 14);
    geometry.dirty = true;
    var material = new FSS.Material('#e8e8e8', '#e8e8e8');
    var mesh = new FSS.Mesh(geometry, material);
    var now, start = Date.now();
    function initialise() {
      scene.add(mesh);
      scene.add(light);
      container.appendChild(renderer.element);
      window.addEventListener('resize', resize);
    }
    function resize() {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    }
    function animate() {
      now = Date.now() - start;
      light.setPosition(300*Math.sin(now*0.001), 200*Math.cos(now*0.0005), 60);
      renderer.render(scene);
      requestAnimationFrame(animate);
    }
    initialise();
    resize();
    animate();


   }
}
