class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <a href="index.html">
        <h1>
          Danche Choi
        </h1>
      </a>
      `;
    }
  }
  
  customElements.define('header-component', Header);