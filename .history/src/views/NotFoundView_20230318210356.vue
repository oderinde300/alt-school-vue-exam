<template>
  <main class="bl_page404">
    <h1>Error 404. The page does not exist</h1>
    <p>
      Sorry! The page you are looking for can not be found. Perhaps the page you
      requested was moved or deleted. It is also possible that you made a small
      typo when entering the address. Go to the main page.
    </p>
    <div class="bl_page404__wrapper">
      <img
        src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/cloud_warmcasino.png?raw=true"
        alt="cloud_warmcasino.png"
      />
      <div class="bl_page404__el1"></div>
      <div class="bl_page404__el2"></div>
      <div class="bl_page404__el3"></div>
      <a class="bl_page404__link" href="/">go home</a>
    </div>
  </main>
</template>

<script>
export default {
  name: "NotFoundview",
};
</script>

<style scoped>
/*======================
    404 page
=======================*/

.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: "Arvo", serif;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}
.contant_box_404 {
  margin-top: -50px;
}
</style>
