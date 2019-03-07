<template>
     <b-container class="bv-example-row bv-example-row-flex-cols">
     <div class="container-fluid">
      <div class="row">
       <div role="group" class="col-md-6"> 
      <b-form-input v-model="searchValue" size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
      <b-button @click="searchMap" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      <br>
       <br>
      </div>
      </div> 
  <div class="row">
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

    
     <b-carousel-slide caption="Карта на град София" img-src="static/images/map_park.jpg" class="img-thumbnail" alt="Center image"/>
  </b-carousel>
  </div>
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
