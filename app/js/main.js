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
      this.$knowmore.innerHTML = this.createHTMLKnowMoreList();
      this.$newsletter.innerHTML = this.createHTMLForNewsLetter();
    },
    createHTMLForNavBar() {
      console.log('creating the NavBar')
      let tempStr = '';
      navBarInfo.forEach((info, index) => {
        tempStr += `
        <li class="navBarInfo"> <a href="${info}">${info} </a></li>`;
      });
      return tempStr;
    },

    createHTMLForArtists() {
      console.log('Creating the artists boxes')
      let tempStr = '';
      artists.forEach((info, index) => {
        tempStr += `
      <div class="artistsInfo" style="background: url(${info.picture.small}); background-size: cover; background-repeat: no-repeat;">${info.name}</div>`;
      });
      return tempStr;

    },
    createHTMLCountDownTimer() {
      console.log('Creating countDown timer')
      let countDownDate = new Date(1625148000000).getTime();

      let x = setInterval(function () {

        let now = new Date().getTime();
        let tempStr
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24))
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if((days+"").length === 2){
          days = "0"+days}
        if((days+"").length === 1){
          days = "00"+days;}
        if(( hours+"").length === 1){
          hours = "0"+ hours;}
        if((minutes+"").length === 1){
          minutes = "0"+minutes;}
          if((seconds+"").length === 1){
            seconds = "0"+seconds;}

          tempStr= `${days}d ${hours}h
          ${minutes}m ${seconds}s `


        document.querySelector(".timer").innerHTML = tempStr

        if (distance < 0) {
          clearInterval(x);
          document.querySelector(".timer").innerHTML = "See You Next Year!";
        }
      }, 1000);
    },
    createHTMLSocialMediaList() {
      console.log('creating List Of social Media Links')
      let tempStr = '';
      tempStr += '<ul class="socialMediaInfo">'
      socialInfo.forEach((si, index) => {
        tempStr += `
          <li> <a href="${si.link}" class="${si.icon}"></a></li>`;
      });
      tempStr += '</ul>'
      return tempStr;
    },
    createHTMLInfoList() {
      console.log('creating List of info links of rockwerchter')
      let tempStr = '';
      rockwerchterinfo.forEach((info, index) => {
        tempStr += `
          <li> <a href="${index} ${info.link}">${info.text}</a></li>`;
      });
      return tempStr;
    },
    createHTMLKnowMoreList() {
      console.log('creating Know more list ')
      let tempStr = '';
      knowmorelist.forEach((info, index) => {
        tempStr += `<li> <a href=" ${info.link}">${info.text}</a></li>`;
      });
      return tempStr;
    },
    createHTMLForNewsLetter() {
      console.log('Creating news letter input')
      let tempStr = '';
      newsletter.forEach((knowM, index) => {
        tempStr += `<h2>${knowM.title}</h2>`
        tempStr += `<p>${knowM.text}</p>`
        tempStr += `<input>${knowM.sub}</input>`;
      });
      return tempStr;
    },

  };
  app.initialize();
})();