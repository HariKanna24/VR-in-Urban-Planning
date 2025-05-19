<html>

<head>
  <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
</head>

<body>
  <a-scene>
    <!-- Add a camera -->
      
    <a-gltf-model src="street_model/scene.gltf" position="5 0 10" rotation="5 5 5" scale="0.15 0.15 0.15">
    
    <a-gltf-model src="street_lamp/scene.gltf" position="5 1 2" rotation="-1 2 2" scale="0.25 0.25 0.25"></a-gltf-model>
    
    <a-gltf-model src="car2/scene.gltf" position="5 1 2" rotation="-1 2 2" scale="0.25 0.25 0.25"></a-gltf-model>

    
    <a-gltf-model src="building/scene.gltf" position="5 1 2" rotation="-1 2 2" scale="0.25 0.25 0.25"></a-gltf-model>

    
    <!-- <a-camera position="0 1.6 0"></a-camera> -->
    
    <a-plane position="0 0 -4" rotation="-90 0 0" width="25" height="25" color="#17202A"></a-plane>

        <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
  
     
    </a-scene>
</body>

</html>