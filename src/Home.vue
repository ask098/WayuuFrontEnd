<template>
  <div id="home" class="main">
      <!-- Home Section -->
      <div class="overlay"></div>
      <div class="container">
          <div class="row">
              <h1>{{ msg }}</h1>
              <div class="wow fadeInUp col-md-6 col-sm-5 col-xs-10 col-xs-offset-1 col-sm-offset-0" data-wow-delay="0.2s">
                   <img src="./images/home-img.png" class="img-responsive" alt="Home">
              </div>
              <div class="col-md-6 col-sm-7 col-xs-12">
                   <div class="home-thumb">
                        <h1 class="wow fadeInUp" data-wow-delay="0.6s">{{ deschome }}</h1>
                        <p class="wow fadeInUp" data-wow-delay="0.8s">{{ contenido }}</p>
                        <a href="#pricing" class="wow fadeInUp section-btn btn btn-success smoothScroll" data-wow-delay="1s">{{ donloadmsg }}</a>
                   </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
        msg: 'hola',
      deschome: 'wayuu app',
      contenido: 'La mejor forma de centralizar sus escuelas',
      donloadmsg: 'Download App'
    }
  }
}
</script>

