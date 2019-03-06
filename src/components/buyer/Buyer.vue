<template>
<b-container class="bv-example-row bv-example-row-flex-cols">
<div>
  <b-carousel
    id="carousel"
    style="text-shadow: 0px 0px 2px #0"
    indicators
    img-width="0"
    img-height="0"
  >
    <b-carousel-slide caption="Предложение №1" img-src="static/images/4.jpg" class="img-thumbnail" alt="Center image" />
    <b-carousel-slide caption="Предложение №2" img-src="static/images/4.jpg" class="img-thumbnail" alt="Center image"/>
    <b-carousel-slide caption="Предложение №3" img-src="static/images/4.jpg" class="img-thumbnail" alt="Center image"/>
  </b-carousel>
</div>
  <div class="row">
    <div role="group" class="col-md-4">
      <label for="inputLive">Жилищен имот</label>
      <b-form-input v-model="yardArea" type="text" placeholder="кв. м" />
    </div>
    <div role="group" class="col-md-4">
      <label for="inputLive">Цена на кв. м</label>
      <b-form-input v-model="price15" type="number" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-4">
      <label for="inputLive">Стойност на жилищния имот</label>
      <b-form-input v-model="price16" type="number" placeholder="цена лв." />
    </div>
  </div>
   <div class="row mt-3">
    <div role="group" class="col-md-4">
      <label for="inputLive">Гараж</label>
      <b-form-input v-model="yardArea" type="text" placeholder="кв. м" />
    </div>
    <div role="group" class="col-md-4">
      <label for="inputLive">Цена на кв. м</label>
      <b-form-input v-model="price17" type="number" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-4">
      <label for="inputLive">Стойност на гаража</label>
      <b-form-input v-model="price18" type="number" placeholder="цена лв." />
    </div>
  </div>
     <div class="row mt-3">
    <div role="group" class="col-md-4">
      <label for="inputLive">Паркомясто</label>
      <b-form-input v-model="yardArea" type="text" placeholder="кв. м" />
    </div>
    <div role="group" class="col-md-4">
      <label for="inputLive">Цена на кв. м</label>
      <b-form-input v-model="price19" type="number" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-4">
      <label for="inputLive">Стойност на паркомястото</label>
      <b-form-input v-model="price20" type="number" placeholder="цена лв." />
    </div>
  </div>
  
  <div class="row mt-1">
    <div role="group" class="col-md-12">
      <label for="inputLive">ОБЩА СТОЙНОСТ - СУМА ОТ СТОЙНОСТТА НА ЖИЛИЩНИЯ ИМОТ, ГАРАЖА И ПАРКОМЯСТОТО</label>
      <b-form-input v-model="overAllPrice" type="text" readonly placeholder="цена лв." />
    </div>
    <br>   
  </div>
  </div>
   </b-container>	
</template>

<script>
export default {
  name: 'st-buyer',
  data () {
    return {
     price16: '',
      price18: '',
      price20: '',
      
    }
  },
   computed: {
       overAllPrice(){
        const price = Number(this.price16) + Number(this.price18) + Number(this.price20);
        return price;
      }
     
    }
    
   
}
</script>