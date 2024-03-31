class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <h1>
          Danche Choi
        </h1>
      `;
    }
  }
  
  customElements.define('header-component', Header);