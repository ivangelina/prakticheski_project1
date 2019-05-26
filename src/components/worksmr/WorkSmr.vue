<template>
<div class="buyer-layout py-1">
<b-container class="bv-example-row bv-example-row-flex-cols mt-2">
  <div class="buyer-overlay p-2">
<div class="container-flex mt-2">
     <h3>Анализна цена за боядисване с латекс</h3>
     <div class="row">
        <h5>1.МАТЕРИАЛИ</h5> 
     </div>
  <div class="row">
     <div role="group" class="col-md-4">
              <label for="inputLive">Латекс-разходна норма</label>
              <b-form-input v-model="materialsConsumed" type="text" placeholder="кг" />
            </div>
                  <div role="group" class="col-md-4">
               <label for="inputLive">Цена на кг</label>
              <b-form-input v-model="priceMaterialsConsumed" type="number" placeholder="цена лв." />
           </div>
                  <div role="group" class="col-md-4">
                <label for="inputLive">Стойност за 1кв.м</label>
               <b-form-input v-model="calculatedMaterialsConsumedPrice" readonly type="number" placeholder="цена лв." />
            </div>
           </div>
         <div class="row">
        <h5>1.1.Дост.скл.р-ди мат.</h5> 
     </div>
  <div class="row">
     <div role="group" class="col-md-4">
              <label for="inputLive">Процент Дост.скл.р-ди</label>
              <b-form-input v-model="materialsConsumed_1" type="text" placeholder="%" />
            </div>
                  <div role="group" class="col-md-4">
               <label for="inputLive">Сума мат.</label>
              <b-form-input v-model="calculatedMaterialsConsumedPrice" readonly type="number" placeholder="цена лв." />
           </div>
                  <div role="group" class="col-md-4">
                <label for="inputLive">Стойност на Дост-скл.р-ди</label>
               <b-form-input v-model="calculatedMaterialsConsumedPrice_1" readonly type="number" placeholder="цена лв." />
            </div>
           </div>  
           <br>
           <div class="row">
        <h5>2.ТРУД</h5> 
     </div>

   <div class="row ">
      <div role="group" class="col-md-4">
                 <label for="inputLive">ЧОВЕКО ЧАСОВЕ</label>
               <b-form-input v-model="manHours" type="text" placeholder="ч.ч." />
              </div>
                <div role="group" class="col-md-4">
                <label for="inputLive">Часова ставка</label>
               <b-form-input v-model="priceManHours" type="number" placeholder="лв." />
            </div>
               <div role="group" class="col-md-4">
                   <label for="inputLive">Стойност Труд</label>
                   <b-form-input v-model="calculatedManHoursPrice" readonly type="number" placeholder="цена лв." />
              </div>
             </div>
              <div class="row">
        <h5>2.1.Допълнителни р-ди труд</h5> 
     </div>

   <div class="row ">
      <div role="group" class="col-md-4">
                 <label for="inputLive">Процент доп.р-ди</label>
               <b-form-input v-model="manHours_1"  type="text" placeholder="%" />
              </div>
                <div role="group" class="col-md-4">
                <label for="inputLive">Стойност труд</label>
               <b-form-input  v-model="calculatedManHoursPrice" readonly type="number" placeholder="лв." />
            </div>
               <div role="group" class="col-md-4">
                   <label for="inputLive">Стойност Доп.р-ди труд</label>
                   <b-form-input v-model="calculatedManHoursPrice_1" readonly type="number" placeholder="цена лв." />
              </div>
             </div>
             <br>
 <div class="row">
        <h5>3.ПЕЧАЛБА</h5> 
     </div>
    <div class="row">
        <div role="group" class="col-md-4">
                   <label for="inputLive">Процент печалба</label>
                 <b-form-input v-model="income" type="text" placeholder="%" />
               </div>
              <div role="group" class="col-md-4">
                   <label for="inputLive">Обща цена с ДР</label>
                  <b-form-input v-model="calculatedOverallPrice" readonly type="number" placeholder="цена лв." />
               </div>
              <div role="group" class="col-md-4">
             <label for="inputLive">Стойност на печалба</label>
              <b-form-input v-model="calculatedIncome" readonly type="number" placeholder="лв." />
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
      materialsConsumed: '',
      priceMaterialsConsumed: '',
      materialsConsumed_1: '',
      priceMaterialsConsumed_1: '',
      manHours: '',
      priceManHours: '',
      manHours_1: '',
      priceManHours_1: '',
      income: '',
      priceIncome: '',
      
    }
  },
   computed: {
       overAllPrice(){
        const price = (Number(this.calculatedOverallPrice) + Number(this.calculatedIncome)).toFixed(2);
        return price;
      },
      calculatedMaterialsConsumedPrice(){
        const price = (Number(this.materialsConsumed) * Number(this.priceMaterialsConsumed)).toFixed(2);
        return price;
      },
      calculatedMaterialsConsumedPrice_1(){
        const price = (Number(this.materialsConsumed_1) * Number(this.calculatedMaterialsConsumedPrice) / 100).toFixed(2);
        return price;
      },
      calculatedManHoursPrice(){
        const price = (Number(this.manHours) * Number(this.priceManHours)).toFixed(2);
        return price;
      },
      calculatedManHoursPrice_1(){
        const price = (Number(this.manHours_1) * Number(this.calculatedManHoursPrice) / 100).toFixed(2);
        return price;
      },
      calculatedIncomePrice() {
        const price = (Number(this.income) * Number(this.priceIncome)).toFixed(2);
        return price;
      },
      calculatedOverallPrice(){
         const price = (
          Number(this.calculatedMaterialsConsumedPrice) + 
          Number(this.calculatedMaterialsConsumedPrice_1) +
          Number(this.calculatedManHoursPrice) +
          Number(this.calculatedManHoursPrice_1)
         ).toFixed(2);
        return price;
      },
      calculatedIncome(){
        const price = (Number(this.income) * Number(this.calculatedOverallPrice) / 100).toFixed(2);
        return price;
      }
    },
   
}
</script>





