<template>
<b-container class="bv-example-row bv-example-row-flex-cols">
   <br>
       <h4>ПРИЛОЖЕНИЕ В ПОМОЩ НА БЪЛГАРСКИЯ ПРЕДПРИЕМАЧ И БЪЛГАРСКИЯ КУПУВАЧ</h4>
   <div class="row">
     <br>
     <div role="group" class="col-md-2"> 
          </div> 
<div role="group" class="col-md-8">
<br> 
<div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 30px #000"
    fade
    indicators
    img-width="1100"
    img-height="1000"
  >
  <br>
    <b-carousel-slide caption="Жилищна сграда" img-src="/static/images/residental.jpg" alt="Center image"/>
    <b-carousel-slide caption="Офис сграда" img-src="/static/images/office.jpg" alt="Center image" />
    <b-carousel-slide caption="Промишлена сграда" img-src="/static/images/industrial.JPG" alt="Center image"/>
    <b-carousel-slide caption="Търговска сграда" img-src="/static/images/shopping.jpg" alt="Center image"/>
  </b-carousel>
</div>
</div>
 <div role="group" class="col-md-2"> 
          </div> 
</div>
<br>


  <b-card no-body>
    <b-tabs card>
      <b-tab title="Секция Предприемач" active>Изчисляване на всички разходи за построяването на строителен обект</b-tab>
      <b-tab title="Секция Купувач">Тази секция ще бъде разработена на по-късен етап</b-tab>
    </b-tabs>     
  </b-card>
  <div>
    <br>
    <br>
  <b-embed
    type="iframe"
    aspect="16by9"
    <iframe width="1100" height="27" src="https://www.youtube.com/embed/NPuxjer_OJg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
    </iframe>
  
</div>
</div>
</div>
</b-container>
</template>

<script>
export default {
  name: 'st-builder',
  data () {
    return {
      selectedBuilding: '1',
      buildingOptions: [
        { value: null, text: 'Избери жилищна сграда' },
        { value: '1', text: 'Жилищна сграда' },
        { value: '2', text: 'Търговска сграда' },
        { value: '3', text: 'Офис сграда' },
        { value: '4', text: 'Промишлена сграда'}
      ],
      selectedFloorCount: '1',
      floorsOptions: [
        { value: null, text: 'Избери брой етажи' },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4'}
      ]
    }
  },
}
</script>

