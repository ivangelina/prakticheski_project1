<template>
<div class="buyer-layout py-5">
<b-container class="bv-example-row bv-example-row-flex-cols mt-5px">
  <div class="buyer-overlay p-4">
<div class="container-flex mt-5px">
     <h3>Анализна цена за боядисване с латекс</h3>
     <div class="row">
        <h5>1.МАТЕРИАЛИ</h5> 
     </div>
  <div class="row">
     <div role="group" class="col-md-4">
              <label for="inputLive">Латекс-разходна норма</label>
              <b-form-input v-model="yardArea" type="text" placeholder="кг" />
            </div>
                  <div role="group" class="col-md-4">
               <label for="inputLive">Цена на кг</label>
              <b-form-input v-model="priceYardArea" type="number" placeholder="цена лв." />
           </div>
                  <div role="group" class="col-md-4">
                <label for="inputLive">Стойност за 1кв.м</label>
               <b-form-input v-model="calculatedYardAreaPrice" type="number" placeholder="цена лв." />
            </div>
           </div>
         <div class="row">
        <h5>1.1.Дост.скл.р-ди мат.</h5> 
     </div>
  <div class="row">
     <div role="group" class="col-md-4">
              <label for="inputLive">Процент Дост.скл.р-ди</label>
              <b-form-input v-model="yardArea_1" type="text" placeholder="%" />
            </div>
                  <div role="group" class="col-md-4">
               <label for="inputLive">Сума мат.</label>
              <b-form-input v-model="priceYardArea_1" type="number" placeholder="цена лв." />
           </div>
                  <div role="group" class="col-md-4">
                <label for="inputLive">Стойност на Дост-скл.р-ди</label>
               <b-form-input v-model="calculatedYardAreaPrice_1" type="number" placeholder="цена лв." />
            </div>
           </div>  
           <br>
           <div class="row">
        <h5>2.ТРУД</h5> 
     </div>

   <div class="row ">
      <div role="group" class="col-md-4">
                 <label for="inputLive">ЧОВЕКО ЧАСОВЕ</label>
               <b-form-input v-model="garageArea" type="text" placeholder="ч.ч." />
              </div>
                <div role="group" class="col-md-4">
                <label for="inputLive">Часова ставка</label>
               <b-form-input v-model="priceGarageArea" type="number" placeholder="лв." />
            </div>
               <div role="group" class="col-md-4">
                   <label for="inputLive">Стойност Труд</label>
                   <b-form-input v-model="calculatedGarageAreaPrice" type="number" placeholder="цена лв." />
              </div>
             </div>
              <div class="row">
        <h5>2.1.Допълнителни р-ди труд</h5> 
     </div>

   <div class="row ">
      <div role="group" class="col-md-4">
                 <label for="inputLive">Процент доп.р-ди</label>
               <b-form-input v-model="garageArea_1" type="text" placeholder="%" />
              </div>
                <div role="group" class="col-md-4">
                <label for="inputLive">Стойност труд</label>
               <b-form-input v-model="priceGarageArea_1" type="number" placeholder="лв." />
            </div>
               <div role="group" class="col-md-4">
                   <label for="inputLive">Стойност Доп.р-ди труд</label>
                   <b-form-input v-model="calculatedGarageAreaPrice_1" type="number" placeholder="цена лв." />
              </div>
             </div>
             <br>
 <div class="row">
        <h5>3.ПЕЧАЛБА</h5> 
     </div>
    <div class="row">
        <div role="group" class="col-md-4">
                   <label for="inputLive">Процент печалба</label>
                 <b-form-input v-model="parkArea" type="text" placeholder="%" />
               </div>
              <div role="group" class="col-md-4">
                   <label for="inputLive">Обща цена с ДР</label>
                  <b-form-input v-model="priceParkArea" type="number" placeholder="цена лв." />
               </div>
              <div role="group" class="col-md-4">
             <label for="inputLive">Стойност на печалба</label>
              <b-form-input v-model="calculatedParkAreaPrice" type="number" placeholder="лв." />
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
      yardArea_1: '',
      priceYardArea_1: '',
      garageArea: '',
      priceGarageArea: '',
      garageArea_1: '',
      priceGarageArea_1: '',
      parkArea: '',
      priceParkArea: '',
      
    }
  },
   computed: {
       overAllPrice(){
        const price = this.calculatedYardAreaPrice+this.calculatedYardAreaPrice_1 + this.calculatedGarageAreaPrice+ this.calculatedGarageAreaPrice_1+ this.calculatedParkAreaPrice;
        return price;
      },
      calculatedYardAreaPrice(){
        const price = Number(this.yardArea) * Number(this.priceYardArea);
        return price;
      },
      calculatedYardAreaPrice_1(){
        const price = Number(this.yardArea_1) * Number(this.priceYardArea_1);
        return price;
      },
      calculatedGarageAreaPrice(){
        const price = Number(this.garageArea) * Number(this.priceGarageArea);
        return price;
      },
      calculatedGarageAreaPrice_1(){
        const price = Number(this.garageArea_1) * Number(this.priceGarageArea_1);
        return price;
      },
      calculatedParkAreaPrice() {
        const price = Number(this.parkArea) * Number(this.priceParkArea);
        return price;
      }
    },
   
}
</script>



