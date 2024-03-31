class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <h1>
          <a href="index.html">
            Danche Choi
          </a>
        </h1>
      `;
    }
  }
  
  customElements.define('header-component', Header);