<template>
     <b-container class="bv-example-row bv-example-row-flex-cols">
     <div class="container-fluid">
       <h4>ТЪРСЕНЕ НА АДРЕСИ В ГРАД ПЛОВДИВ, ГРАД СОФИЯ И ГРАД БУРГАС</h4>
      
      <div class="row">
       <div role="group" class="col-md-3"> 
          </div> 
        <div role="group" class="col-md-6"> 
      <b-form-input v-model="searchValue" size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
      <b-button @click="searchMap" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
       <br>
      </div>
      </div> 
  <div class="row">
     <div role="group" class="col-md-3"> 
          </div> 
<div role="group" class="col-md-6">
  <b-carousel
    id="carousel"
    style="text-shadow: 0px 0px 2px #0"
    indicators
    img-width="450"
    img-height="300"
  >
    <b-carousel-slide caption="Карта на град Пловдив"  img-src="static/images/карта-на-град_пловдив.jpg" class="img-thumbnail" alt="Center image" />


    <b-carousel-slide caption="Карта на град София" img-src="static/images/map_park.jpg" class="img-thumbnail" alt="Center image"/>

    
     <b-carousel-slide caption="Карта на град Бургас" img-src="static/images/6.jpg" class="img-thumbnail" alt="Center image"/>
  </b-carousel>
  </div>
  </div>
   <div>
  <b-embed
    type="iframe"
    aspect="16by9"
    <iframe width="825" height="25" src="https://www.youtube.com/embed/xD-qXkCJ9aw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
</div>
</div>
   </b-container> 
</template>

<script>
  export default {
    name: 'st-maps',
    data() {
      return {
        searchValue: '',
      }
    },
   
  }

</script>

<style>
  .maps {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    text-shadow: 2px 1px 2px #888888;
    background-image: url(http://scienceidea.in/wp-content/uploads/2018/01/building-engineer-.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 0;
    line-height: 40px;
  }
</style>

