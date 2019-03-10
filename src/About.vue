<template>
    <!-- About Section -->

<div id="about">
     <div class="container">
          <div class="row">

               <div class="col-md-12 col-sm-12">
                    <div class="wow bounceIn section-title">
                         <h1>{{ welcome }}</h1>
                         <hr>
                    </div>
               </div>

               <div class="wow fadeInUp col-md-6 col-sm-12" data-wow-delay="0.4s">
                   <h2>{{ ourteam}}</h2>
                   <h3 class="wow fadeInUp" data-wow-delay="0.8s">{{ msg1}}</h3>
                   <p class="wow fadeInUp" data-wow-delay="0.4s">{{msg2}} <a href="https://jarcidco.com" target="_blank">jarcidco</a> {{ msg3}}</p>
               </div>

               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s">
                    <div class="about-thumb">
                         <img src="./images/team-img1.jpg" class="img-responsive" alt="Team">
                              <div class="about-overlay">
                                   <h3>{{name1}}</h3>
                                   <h4>{{rol1}}</h4>
                                   <ul class="social-icon">
                                        <li><a href="fb.com" class="fa fa-facebook"></a></li>
                                        <li><a href="#" class="fa fa-instagram"></a></li>
                                        <li><a href="#" class="fa fa-twitter"></a></li>
                                   </ul>
                              </div>
                    </div>
               </div>

                <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s">
                    <div class="about-thumb">
                         <img src="./images/team-img2.jpg" class="img-responsive" alt="Team">
                              <div class="about-overlay">
                                   <h3>{{name2}}</h3>
                                   <h4>{{rol2}}</h4>
                                   <ul class="social-icon">
                                        <li><a href="#" class="fa fa-pinterest"></a></li>
                                        <li><a href="#" class="fa fa-behance"></a></li>
                                        <li><a href="#" class="fa fa-google-plus"></a></li>
                                   </ul>
                              </div>
                    </div>
               </div>

          </div>
     </div>
</div>
</template>

<script>
export default {
    name: 'about',
    data () {
    return {
      welcome: 'Bienvenidos a nuestra app',
      msg1: 'Comprometivos, inovadores y accesibles, desarrollamos aplicaciones con pasión y voluntad de servicio',
      ourteam: 'Nuestro equipo',
      msg2: 'Como organizacion',
      msg3:'desarorlla aplicaciones web y mobiles que pueden ser ajustadas a sus necesidades.',
      donloadmsg: 'Download App',
      name1:'Sandar Lynn',
      rol1: 'UI Designer',
      name2:'Candy',
      rol2: 'UX Specialist'
    }
  }
}
</script>
