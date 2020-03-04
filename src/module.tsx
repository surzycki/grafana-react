import './css/panel.dark.scss';
import './css/panel.light.scss';

import { PanelProps, PanelPlugin } from '@grafana/data';
import React, { PureComponent } from 'react';
import * as THREE from "three";

// TODO: make styles local for panel
//loadPluginCss({
//  dark: 'plugins/grafana-panel-template-react-ts-webpack/css/panel.dark.css',
//  light: 'plugins/grafana-panel-template-react-ts-webpack/css/panel.light.css',
//});

export class ReactPanelTemplate extends PureComponent<PanelProps> {
  _panelPath: string;

  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(200, 200);
    document.getElementById("hello").appendChild(renderer.domElement);
    //document.body.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }

  render() {
    return (
      <div id="hello"/>
    );
  }

  get panelPath() {
    if (this._panelPath === undefined) {
      // TODO: get plugin id from window
      // Change grafana-panel-template-react-ts-webpack with your panel id
      this._panelPath = `public/plugins/grafana-panel-template-react-ts-webpack/`;
    }
    return this._panelPath;
  }
}

export const plugin = new PanelPlugin(ReactPanelTemplate);
