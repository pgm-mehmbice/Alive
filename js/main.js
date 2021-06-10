(() => {
  const app = {
    initialize() {
      console.log("1. Application started!");
      this.cacheElements();
      this.buildUI();
      this.MenuClickEventListener();
      // this.sidebarClickEventListener();
    },

    cacheElements() {
      console.log("2. Chache all exisiting DOM elements!");
      this.$hamburgermenu = document.querySelector('.hamburgermenu');
      this.$hambutten = document.querySelector('.hambutten');
      this.$fototitel = document.querySelector('.fototitel');
      this.$fototitelprijs = document.querySelector('.fototitelprijs');
      this.$fotos = document.querySelector('.fotos');
      this.$fototitelprijsboeket = document.querySelector('.fototitelprijsboeket');
      // this.$winkelmandje = document.querySelector('.winkelmandje');
      // this.$winkelmandjeSidebar = document.querySelector('.winkelmandjeSidebar');
    },

    buildUI() {
      console.log("3. Build the user interface!");
      this.$hamburgermenu.innerHTML = this.createHTMLForNavbar();
      this.$fototitel.innerHTML = this.createHTMLForFotoTitel();
      this.$fototitelprijs.innerHTML = this.createHTMLForFotoTitelPrijs();
      this.$fotos.innerHTML = this.createHTMLForFotos();
      this.$fototitelprijsboeket.innerHTML = this.createHTMLForUrlType();
      // this.$winkelmandje.innerHTML = this.sidebarClickEventListener();
    },

    createHTMLForNavbar() {
      console.log("creating HTML for navbar");
      let tempStr = '';

      tempStr +=`<ul>`
      hamburgermenu.forEach(hammenu => {
        tempStr += `
        <li class="nav"><a href="${hammenu.link}">${hammenu.name}</a></li>`
      });
      tempStr += `</ul>`
      return tempStr;
    },

    MenuClickEventListener() {
      console.log('Menu Click Event Listener');
      this.$hambutten.addEventListener('click', (evt) => {
        if (this.$hamburgermenu.classList.contains('open')) {
          this.$hamburgermenu.classList.remove('open');
        } else {
          this.$hamburgermenu.classList.add('open');
        } 
      })
    },

    createHTMLForFotoTitel() {
      console.log("creating HTML for Foto Title");
      let tempStr = '';

      fototitel.forEach(fotti => {
        tempStr += `
        <div class="fotoblok"><a href="${fotti.link}">
        <img src="${fotti.foto}"> 
        <h3>${fotti.titel}</h3></a></div>`  
      });
      return tempStr;
    },

    createHTMLForFotoTitelPrijs() {
      console.log("creating HTML for Foto Title Prijs");
      let tempStr = '';

      fototitelprijs.forEach(fottipr => {
        tempStr += `
        <div class="fotoblokprijs"><a href="${fottipr.href}">
        <img src="${fottipr.foto}"> 
        <div class="fototext"><h3>${fottipr.titel}</h3></a>
        <p>${fottipr.prijs}</p></div></div>`
      });
      return tempStr;
    },

    createHTMLForFotos() {
      console.log("creating HTML for Fotos");
      let tempStr = '';

      fotos.forEach(fo => {
        tempStr += `
        <div class="fotosblok"><a href="${fo.link}">
        <img src="${fo.foto}"></a></div>`  
      });
      return tempStr;
    },

    createHTMLForUrlType() {
      console.log("creating HTML For Url Type");

      const search = window.location.search;
      const params = new URLSearchParams(search);
      const urlType = params.get('type');
      tempStr = '';

      if (urlType !== null) {
        let item;
        for (let i = 0; i < fototitelprijs.length; i++) {
          item = fototitelprijs[i];
        }
        tempStr += `
        <div class="fotoblokprijs"><a href="${item.href}">
        <img src="${item.foto}"> 
        <div class="fototext"><h3>${item.titel}</h3></a>
        <p>${item.prijs}</p></div></div>`
      }
      return tempStr;
    },


    // sidebarClickEventListener() {
    //   console.log('sidebar Click Event Listener');
    //   this.$winkelmandje.addEventListener('click', (evt) => {
    //     if (this.$winkelmandjeSidebar.classList.contains('open')) {
    //       this.$winkelmandjeSidebar.classList.remove('open');
    //     } else {
    //       this.$winkelmandjeSidebar.classList.add('open');
    //     } 
    //   })
    // },

  };
  app.initialize();
})();