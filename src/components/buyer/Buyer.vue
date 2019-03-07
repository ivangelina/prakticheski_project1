<template>
<b-container class="bv-example-row bv-example-row-flex-cols">
<div class="container-fluid">
  <div class="row">
     <div role="group" class="col-md-3">
       <a href="javascript:chas()">ЧАСОВНИК</a>
     </div>
     <div role="group" class="col-md-6">
  <b-carousel
    id="carousel"
    style="text-shadow: 0px 0px 2px #0"
    indicators
    img-width="1000"
    img-height="100"
  >
    <b-carousel-slide caption="Предложение №1 - апартаменти 75кв.м по 1200лв/м2, без гараж, само паркомясто 5000лв" img-src="static/images/4.jpg" class="img-thumbnail" alt="Center image" />
    <b-carousel-slide caption="Предложение №2 - къщи 120кв.м по 1100лв/м2, с гараж 24кв.м по 800лв/м2" img-src="static/images/afd636d7a4d866ffa14bc64903956c0f.jpg" class="img-thumbnail" alt="Center image"/>
    <b-carousel-slide caption="Предложение №3 - жилищна сграда 150кв.м по 1000лв/м2, без гараж" img-src="static/images/206464b2a576d5e83242a2618bef5abc.jpg" class="img-thumbnail" alt="Center image"/>
  </b-carousel>
  </div>
   <div role="group" class="col-md-3">
      <a href="javascript:f2()">ДАТА</a>
     </div>
  </div>
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
     
    },
    methods: {
      chas(){
       var vreme = new Date();
       var hh = vreme.getHours();
       var mm = vreme.getMinutes();
       var ss = vreme.getSeconds(); 
       
       if (hh <= 9) hh = "0" + hh;
       if (mm <= 9) mm = "0" + mm;
       if (ss <= 9) ss = "0" + ss;

       document.forms.ch.chasovnik.value = hh + ": " +mm+ ": " +ss;

       window.setTimeout ("chas()", 1000);
      }
    },
   
}
</script>