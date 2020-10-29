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
      this.$socialMedia = document.querySelector('.info');
      this.$socialMedia = document.querySelector('.Know More');
      this.$socialMedia = document.querySelector('.Newsletter');
    },

    buildUI() {
      console.log('building UI')
      this.$navBarLayout.innerHTML = this.createHTMLForNavBar();
      this.$artistsLayout.innerHTML = this.createHTMLForArtists();
      this.$countDownTimer.innerHTML = this.createCountDownTimer();
      this.$socialMedia.innerHTML = this.createSocialMediaList();
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
    createCountDownTimer() {
      let countDownDate = new Date(1625148000000).getTime();

      let x = setInterval(function () {

        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector(".timer").innerHTML = days + "d " + hours + "h " +
          minutes + "m " + seconds + "s ";
        if (distance < 0) {
          clearInterval(x);
          document.querySelector(".timer").innerHTML = "EXPIRED";
        }
      }, 1000);
    },
    createSocialMediaList() {
      console.log('create List Of social Media Links')
      let tempStr = '';
      tempStr += '<ul>'
      socialInfo.forEach((info, index) => {
        tempStr += `
          <li class="socialMediaInfo ${info.site}"> <a href="${info.link}">${info.site}</a></li>`;
      });
      tempStr += '</ul>'
      return tempStr;
    }
  };
  app.initialize();
})();