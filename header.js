class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header class="container-fluid">
          <h1>
            <a href="index.html">
              Danche Choi
            </a>
          </h1>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);