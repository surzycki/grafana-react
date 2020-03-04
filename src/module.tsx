import './css/panel.dark.scss';
import './css/panel.light.scss';

import { PanelProps, PanelPlugin } from '@grafana/data';
import React, { PureComponent } from 'react';
import { Canvas } from 'react-three-fiber'

// TODO: make styles local for panel
//loadPluginCss({
//  dark: 'plugins/grafana-panel-template-react-ts-webpack/css/panel.dark.css',
//  light: 'plugins/grafana-panel-template-react-ts-webpack/css/panel.light.css',
//});

export class ReactPanelTemplate extends PureComponent<PanelProps> {
  _panelPath: string;

  render() {
    return (
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
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
