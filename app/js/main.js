(() => {

  const app = {
    initialize() {
      console.log('app STARTED')
      this.cacheElements();
      this.buildUI();
      this.setEventListeners();
    },

    cacheElements() {
      console.log('Elements Cached');
      this.$navBarDatePlace = document.querySelector('.navBarDatePlace');
      this.$navBarLayout = document.querySelector('.navBarLayout');
      this.$artistsLayout = document.querySelector('.artistsLayout');
      this.$countDownTimer = document.querySelector('.timer');
      this.$socialMedia = document.querySelector('.social');
      this.$info = document.querySelector('.info');
      this.$knowmore = document.querySelector('.knowMore');
      this.$newsletter = document.querySelector('.newsletter');
      this.$artistDetails = document.querySelector('.artistDetails')
    },

    buildUI() {
      console.log('building UI')
      this.$navBarDatePlace.innerHTML = this.createHTMLforNavBarDatePlace();
      this.$navBarLayout.innerHTML = this.createHTMLForNavBar();
      this.$artistsLayout.innerHTML = this.createHTMLForArtists();
      this.$countDownTimer.innerHTML = this.createHTMLCountDownTimer();
      this.$socialMedia.innerHTML = this.createHTMLSocialMediaList();
      this.$info.innerHTML = this.createHTMLInfoList();
      this.$knowmore.innerHTML = this.createHTMLKnowMoreList();
      this.$newsletter.innerHTML = this.createHTMLForNewsLetter();

    },
        createHTMLforNavBarDatePlace() {
      console.log('creating the NavBar');
      let tempStr = '';
      navDate.forEach((info, index) => {
        tempStr += `<li class="navBarDateInfo">${info.date}</li>`;
        tempStr += `<li class="navBarDateInfo">${info.place}</li>`;
        tempStr += `<li class="navBarDateInfo">${info.who}</li>`;
        tempStr += `<li class="navBarDateInfo">${info.country}</li>`;
      });
      return tempStr;
    },
    createHTMLForNavBar() {
      console.log('creating the NavBar');
      let tempStr = '';
      navBarInfo.forEach((info, index) => {
        tempStr += `
        <li class="navBarInfo"> <a href="${info.link}" target="_blank">${info.title} </a></li>`;
      });
      return tempStr;
    },
    createHTMLForArtists(day) {
      
      console.log('Creating the artists boxes');
      let tempStr = '';
      artists.forEach((info, index) => {
        const daysInMil = new Date(info.from);
        const millInDay = daysInMil.getDay();
        switch (millInDay) {
          case 0: day = "Zondag"; break;      
          case 1: day = "Maandag"; break;
          case 2: day = "Dinsdag"; break;
          case 3: day = "Woensdag"; break;
          case 4: day = "Donderdag"; break;
          case 5: day = "Vrijdag"; break;
          case 6: day = "Zaterdag"; break; 
        }
        tempStr +=`<div class="artistsInfo" style="background: url(${info.picture.small}); background-size: cover; background-repeat: no-repeat;" data-id="${info.id}"><p>${info.name}</p> <div class="artistsInfoDetails"><h2>${day}</h2><h3>${info.place}</h3></div></div>`;
              
      });
      return tempStr;
    },

    createHTMLCountDownTimer() {
      console.log('Creating countDown timer');
      let countDownDate = new Date(1625148000000).getTime();

      let x = setInterval(function () {

        let now = new Date().getTime();
        let tempStr;
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if ((days + "").length === 2) {
          days = "0" + days
        };
        if ((days + "").length === 1) {
          days = "00" + days;
        };
        if ((hours + "").length === 1) {
          hours = "0" + hours;
        };
        if ((minutes + "").length === 1) {
          minutes = "0" + minutes;
        };
        if ((seconds + "").length === 1) {
          seconds = "0" + seconds;
        };

        tempStr = `${days}d ${hours}h
          ${minutes}m ${seconds}s `

        document.querySelector(".timer").innerHTML = tempStr

        if (distance < 0) {
          clearInterval(x);
          document.querySelector(".timer").innerHTML = "See You Next Year!";
        }
      }, 1000);
    },
    createHTMLSocialMediaList() {
      console.log('creating List Of social Media Links');
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
      console.log('creating List of info links of rockwerchter');
      let tempStr = '';
      tempStr = '<h2>Info</h2>';
      rockwerchterinfo.forEach((info, index) => {
        tempStr += `
          <li> <a href="${info.link}">${info.text}</a></li>`;
      });
      return tempStr;
    },
    createHTMLKnowMoreList() {
      console.log('creating Know more list ');
      let tempStr = '';
      tempStr = '<h2>Know More?</h2>';
      knowMoreList.forEach((info, index) => {
        tempStr += `<li> <a href="${info.link}" target="_blank">${info.text}</a></li>`;
      });
      return tempStr;
    },
    createHTMLForNewsLetter() {
      console.log('Creating news letter input');
      let tempStr = '';
      newsletter.forEach((knowM, index) => {
        tempStr += `<h2>${knowM.title}</h2>`
        tempStr += `<p>${knowM.text}</p>`
        tempStr += `<input placeholder="  Email"><button type="submit">${knowM.sub}</i></button></input>`;
      });
      return tempStr;
    },
    setEventListeners() {
      //show artist details when clicked
      let $artistsLayout = document.querySelectorAll('.artistsInfo');
      $artistsLayout.forEach((ad) => {
        ad.addEventListener('click', (evt) => {
          let id = evt.target.dataset.id || evt.target.parentNode.dataset.id

          this.generateHTMLForDetails(id);
        })
      })
    },

    generateHTMLForDetails(id) {
      const artistData = artists.find((a) => a.id === id);
      console.log('creating details');
      //create details for artist
      this.$artistDetails.innerHTML = `
      <div class=artistDetailBackground>
      <div class="showArtistDetails">
      <button type="button" class="exitButton">X</button> 
      <img src="${artistData.picture.large}">
      <h1>${artistData.name}</h1>
      <h2>${artistData.synopsis}</h2>
        <iframe class="artistVideo"width="802" height="502" src="${artistData.media.youtube}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
        <h3>KNOW MORE? </h3> 
        <ul class="artistSocialLinks">
        <li><a href=${artistData.social.website}>${artistData.social.website}</a></li>
        <li><a href=${artistData.social.facebook}>${artistData.social.facebook}</a></li>
        <li><a href=${artistData.social.twitter}>${artistData.social.twitter}</a></li>
        <li><a href=${artistData.social.instagram}>${artistData.social.instagram}</a></li>
        <ul>
        <div class="detailsRWSocial">
        <p class="detailsRWSocial1">SHARE</p>
        <p class="detailsRWSocial2" a href=" https://www.rockwerchter.be/en/line-up/wiki/big-thief# ">FACEBOOK</p>
        <p class="detailsRWSocial3" a href=" https://www.rockwerchter.be/en/line-up/wiki/big-thief# ">TWITTER</p>
        </div>
          `;
          //EXIT BUTTON - AFBLIJVEN!!
          const $exitDetailsButton = document.querySelector('.exitButton')
          $exitDetailsButton.addEventListener('click', (event) => {
           this.$artistDetails.innerHTML = '';
         })
    },
    
  };
  app.initialize();
})();