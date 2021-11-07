import { ArcRotateCamera} from "@babylonjs/core/Cameras/arcRotateCamera"
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera"
import { Engine } from "@babylonjs/core/Engines/engine"
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight"
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder"
import { Scene } from "@babylonjs/core/scene"
import { Vector3 } from "@babylonjs/core/Maths/math.vector"
import {StandardMaterial} from "@babylonjs/core/Materials/standardMaterial"
import { SampleMaterial } from "./Materials/SampleMaterial"
import {BoundMesh} from "./Meshes/boundMesh"
import { Mesh } from "@babylonjs/core"
import {Tools} from "@babylonjs/core"
const view = document.getElementById("view") as HTMLCanvasElement
const engine = new Engine(view, true)

// const scene = new Scene(engine)

// // const camera = new ArcRotateCamera(
// //     "camera",
// //     Math.PI / 2,
// //     Math.PI / 3.2,
// //     2,
// //     Vector3.Zero(),
// //     scene)
// var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
// camera.setTarget(Vector3.Zero());

// camera.attachControl(view)

// const light = new HemisphericLight(
//     "light",
//     new Vector3(0, 1, 0),
//     scene)

// const myMaterial = new StandardMaterial("myMaterial", scene);

// const sphere:Mesh = MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);
// sphere.position.y = 1;

// const material =  new StandardMaterial("material", scene);

// sphere.material = material;
// sphere.showBoundingBox =true;


// gine.runRenderLoop(() => {
//     scene.render();
// })
// This creates a basic Babylon Scene object (non-mesh)
var scene = new Scene(engine);

//This creates an arcRotate camera
var camera = new ArcRotateCamera("camera", Tools.ToRadians(90), Tools.ToRadians(65), 12, Vector3.Zero(), scene);

// This attaches the camera to the canvas
camera.attachControl(view, true);

// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

// Default intensity is 1. Let's dim the light a small amount
light.intensity = 0.7;

// Our built-in 'sphere' shape.
var sphere = MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);

// Move the sphere upward 1/2 its height
sphere.position.y = 1;

// Our built-in 'ground' shape.
var ground = MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

sphere.showBoundingBox = true;

engine.runRenderLoop(() => {
    scene.render();
});