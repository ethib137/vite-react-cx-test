import React from 'react'
import * as ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css'

const Main = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

class WebComponent extends HTMLElement {
	connectedCallback() {
		ReactDOM.render(React.createElement(Main), this);
	}
}

const ELEMENT_ID = 'vite-react-sample';

if (!customElements.get(ELEMENT_ID)) {
	customElements.define(ELEMENT_ID, WebComponent);
}