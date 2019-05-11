<template>
<div class="buyer-layout py-2">
<b-container class="bv-example-row bv-example-row-flex-cols mt-5px">
  <div class="buyer-overlay p-4">
  <br>
<div class="container-flex mt-5px">
    <br>
     <h2>ИЗЧИСЛЯВАНЕ НА СУМАТА ЗА ЗАКУПУВАНЕ НА ЖИЛИЩЕН ИМОТ</h2>
     <br>
  <div class="row">
     <div role="group" class="col-md-4">
              <label for="inputLive">Жилищен имот</label>
              <b-form-input v-model="yardArea" type="text" placeholder="кв. м" />
            </div>
                  <div role="group" class="col-md-4">
               <label for="inputLive">Цена на кв. м</label>
              <b-form-input v-model="priceYardArea" type="number" placeholder="цена лв." />
           </div>
                  <div role="group" class="col-md-4">
                <label for="inputLive">Стойност на жилищния имот</label>
               <b-form-input v-model="calculatedYardAreaPrice" type="number" placeholder="цена лв." />
            </div>
           </div>

   <div class="row ">
      <div role="group" class="col-md-4">
                 <label for="inputLive">Гараж</label>
               <b-form-input v-model="garageArea" type="text" placeholder="кв. м" />
              </div>
                <div role="group" class="col-md-4">
                <label for="inputLive">Цена на кв. м</label>
               <b-form-input v-model="priceGarageArea" type="number" placeholder="цена лв." />
            </div>
               <div role="group" class="col-md-4">
                   <label for="inputLive">Стойност на гаража</label>
                   <b-form-input v-model="calculatedGarageAreaPrice" type="number" placeholder="цена лв." />
              </div>
             </div>

    <div class="row">
        <div role="group" class="col-md-4">
                   <label for="inputLive">Паркомясто</label>
                 <b-form-input v-model="parkArea" type="text" placeholder="кв. м" />
               </div>
              <div role="group" class="col-md-4">
                   <label for="inputLive">Цена на кв. м</label>
                  <b-form-input v-model="priceParkArea" type="number" placeholder="цена лв." />
               </div>
              <div role="group" class="col-md-4">
             <label for="inputLive">Стойност на паркомястото</label>
              <b-form-input v-model="calculatedParkAreaPrice" type="number" placeholder="цена лв." />
          </div>
                </div>

      <div class="row justify-content-end">
    <div role="group" class="col-md-4">
      <div class="d-flex justify-content-between mt-4 align-items-center">
        <div class="overall-label">ОБЩА СТОЙНОСТ</div>
        <div class="overall-price">{{overAllPrice}}</div>
      </div>
    </div>
     </div> 
  </div>
  <br>
  <div class="row">
<div class="col-md-12 w-100 mt-5">
  <h4> РАЗГЛЕДАЙТЕ И СЕ ЗАПОЗНАЙТЕ С РАЙОНА ОКОЛО ИМОТА</h4>    
          </div>
  </div>
   <div class="row">
            <div class="col-md-12 pt-1 map-container">
              <h4>КАРТИ НА МЕСТОПОЛОЖЕНИЕТО НА ИМОТИТЕ</h4>
<i class="material-icons" style="font-size:60px;color:blue;">map_action</i>
    <a href="https://www.google.com/maps/@?api=1&map_action=map" target="_blank">КАРТА НА ИМОТИТЕ В РЕПУБЛИКА БЪЛГАРИЯ</a>

          </div>
       </div>
  </div>
   </b-container> 
</div>
</template>

<script>
export default {
  name: 'st-buyer',
  data () {
    return {
      yardArea: '',
      priceYardArea: '',
      garageArea: '',
      priceGarageArea: '',
      parkArea: '',
      priceParkArea: '',
      
    }
  },
   computed: {
       overAllPrice(){
        const price = this.calculatedYardAreaPrice + this.calculatedGarageAreaPrice + this.calculatedParkAreaPrice;
        return price;
      },
      calculatedYardAreaPrice(){
        const price = Number(this.yardArea) * Number(this.priceYardArea);
        return price;
      },
      calculatedGarageAreaPrice(){
        const price = Number(this.garageArea) * Number(this.priceGarageArea);
        return price;
      },
      calculatedParkAreaPrice() {
        const price = Number(this.parkArea) * Number(this.priceParkArea);
        return price;
      }
    },
   
}
</script>



