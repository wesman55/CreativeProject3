<template>
<div>
  <h1>Welcome to Board Game Bonanza</h1>
  <img class = "home" src= "\images\home.jpg">
  <div class = "description">
    <p>Board Game Bonanza is a world-renowned board game vendor. We offer a wide
    variety of board games from classics , to fantasy games, to card games and much much more!
    Browse our inventory, read board games reviews, and contact us using the links below.<br><br>
    Thank you for choosing <strong>Board Game Bonanza</strong></p>
  </div>
  <section class="services-grid">
    <div class="box">
      <router-link to="/browse">
      <img class = "image" src="/images/browse.jpg" alt="Browse">
      <h6>Browse</h6>
      </router-link>
    </div>
    <div class="box">
      <router-link to="/reviews">
      <img class = "image" src="/images/review.jpg" alt="Reviews">
      <h6>Reviews</h6>
      </router-link>
    </div>
    <div class="box">
      <router-link to="/contact">
      <img class = "image" src="/images/contact.jpg" alt="Contact Us">
      <h6>Contact Us</h6>
      </router-link>
    </div>
  </section>
  <img class = "home2" src= "\images\home2.jpg">
</div>
</template>

<style>
h1 {
  font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif;
  font-size: 36pt;
  margin-top: 30px;
  margin-bottom: 30px;
}
.home {
  height: auto;
  width: 75%;
}
.description {
  font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif;
  background-color: #F6F6F6;
  border: 5px solid #000000;
  text-align: center;
  margin: 30px;
  font-size: 18pt;
  padding-left: 5px;
  padding-right: 5px;
}

.box{
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.services-grid {
  display: grid;
  grid-template: auto auto auto auto auto / 1fr 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  margin-right: 20px;
  margin-left: 20px;
}

.image {
  width: 100%;
}
.home2 {
  height: auto;
  width: auto;
  margin-top: 20px;
  margin-bottom: 0px;
}

@media only screen and (max-width: 990px) {
  h1 {
    font-size: 20pt;
  }
  h6 {
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
}

@media only screen and (min-width: 991px) {
h6 {
font-family: 'Roboto', sans-serif;
font-weight: 900;
color: white;
text-transform: uppercase;
margin: 0;
position: absolute;
top: 50%;
left: 50%;
font-size: 2rem;
transform: translate(-50%, -50%);
text-align: center;
}
}
</style>
