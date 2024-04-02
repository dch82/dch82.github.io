class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <h1>
          <a href="https://dch82.github.io/">
            Danche Choi
          </a>
        </h1>
      `;
    }
  }
  
  customElements.define('header-component', Header);