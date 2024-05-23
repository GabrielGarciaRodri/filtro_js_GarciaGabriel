import { LitElement, css, html } from 'lit'
export class MyElement extends LitElement {
  static get properties() {
    return {
      
    }
  }

  constructor() {
    super()
    this.docsHint = 'Click on the Vite and Lit logos to learn more'
  }

  render() {
    return html`
    `
  }

}

window.customElements.define('my-element', MyElement)
