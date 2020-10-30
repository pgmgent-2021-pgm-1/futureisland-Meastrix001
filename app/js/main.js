(() => {

  const app = {
    initialize() {
      console.log('app STARTED')
      this.cacheElements();
      this.buildUI();
    },

    cacheElements() {
      console.log('Elements Cached');
      this.$navBarLayout = document.querySelector('.navBarLayout');
      this.$artistsLayout = document.querySelector('.artistsLayout');
      this.$countDownTimer = document.querySelector('.timer');
      this.$socialMedia = document.querySelector('.social');
      this.$info = document.querySelector('.info');
      this.$knowmore = document.querySelector('.knowMore');
      this.$newsletter = document.querySelector('.newsletter');
    },

    buildUI() {
      console.log('building UI')
      this.$navBarLayout.innerHTML = this.createHTMLForNavBar();
      this.$artistsLayout.innerHTML = this.createHTMLForArtists();
      this.$countDownTimer.innerHTML = this.createHTMLCountDownTimer();
      this.$socialMedia.innerHTML = this.createHTMLSocialMediaList();
      this.$info.innerHTML = this.createHTMLInfoList();
      this.$knowmore = this.createHTMLKnowMoreList();
      this.$newsletter = this.createHTMLForNewsLetter();
    },
    createHTMLForNavBar() {
      console.log('createNavBar')
      let tempStr = '';
      navBarInfo.forEach((info, index) => {
        tempStr += `
        <li class="navBarInfo"> <a href="${info}">${info} </a></li>`;
      });
      return tempStr;
    },

    createHTMLForArtists() {
      console.log('createNavBar')
      let tempStr = '';
      artists.forEach((info, index) => {
        tempStr += `
      <div class="artistsInfo" style="background: url(${info.picture.small}); background-size: cover; background-repeat: no-repeat;">${info.name}</div>`;
      });
      return tempStr;

    },
    createHTMLCountDownTimer() {
      let countDownDate = new Date(1625148000000).getTime();

      let x = setInterval(function () {

        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        if((days+"").length === 2){
          days = "0"+days;}
        if((days+"").length === 1){
          days = "00"+days;}
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if(( hours+"").length === 1){
          hours = "0"+ hours;}
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        if((minutes+"").length === 1){
          minutes = "0"+minutes;}
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if((seconds+"").length === 1){
          seconds = "0"+seconds;}

        document.querySelector(".timer").innerHTML = days + "d " + hours + "h " +
          minutes + "m " + seconds + "s ";
        if (distance < 0) {
          clearInterval(x);
          document.querySelector(".timer").innerHTML = "EXPIRED";
        }
      }, 1000);
    },
    createHTMLSocialMediaList() {
      console.log('create List Of social Media Links')
      let tempStr = '';
      tempStr += '<ul class="socialMediaInfo">'
      socialInfo.forEach((si, index) => {
        tempStr += `
          <li> <a href="${si.link}">${si.site}</a></li>`;
      });
      tempStr += '</ul>'
      return tempStr;
    },
    createHTMLInfoList() {
      console.log('create List of info links of rockwerchter')
      let tempStr = '';
      tempStr += '<ul class="wertcherinfo>'
      rockwerchterinfo.forEach((info, index) => {
        tempStr += `
          <li> <a href="${info.link}">${info.text}</a></li>`;
      });
      tempStr += '</ul>'
      return tempStr;
    },
    createHTMLKnowMoreList() {
      console.log('create List of info links of rockwerchter')
      let tempStr = '';
      tempStr += '<ul class="knowmorelist>'
      knowmorelist.forEach((info, index) => {
        tempStr += `
          <li> <a href="${info.link}">${info.text}</a></li>`;
      });
      tempStr += '</ul>'
      return tempStr;
    },
   createHTMLForNewsLetter() {
      console.log('Know more list')
      let tempStr = '';
      tempStr += '<ul>'
      newsletter.forEach((knowM, index) => {
        tempStr += `
        <div> <li>${knowM.title} </li></div>`;
      });
      tempStr += '</ul>'
      return tempStr;
    },

  };
  app.initialize();
})();