//basic cube geometry with mesh

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(w, h);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE. SRGBColorSpace;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, //fov
  w/h, //aspect
  0.1, //near
  1000  //far
);
camera.position.z = 5;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

const geometry = new THREE.BoxGeometry;
// const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
// const geometry = new THREE.IcosahedronGeometry(0.9, 5);
const material = new THREE.MeshStandardMaterial({
    color: '#fff',
    flatShading: true
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const wireMat = new THREE.MeshBasicMaterial({
    color: '#51e0e0',
    wireframe: true
})


const wireMesh = new THREE.Mesh(geometry, wireMat);
wireMesh.scale.setScalar(1.25);
mesh.add(wireMesh);

const hemiLight = new THREE.HemisphereLight('#51e0e0', '#757ae0');
scene.add(hemiLight);

// function animate() {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }

// animate();
function animate(t){
    // console.log(t);
    requestAnimationFrame(animate);
    // mesh.scale.setScalar(Math.cos(t * 0.001) + 9.0);
    mesh.rotation.y = (t * 0.0001);
    controls.update();
    renderer.render(scene, camera);
}

animate();