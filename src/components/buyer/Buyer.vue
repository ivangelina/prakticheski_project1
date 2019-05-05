<template>
<b-container class="bv-example-row bv-example-row-flex-cols mt-5px">
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
              <b-form-input v-model="price15" type="number" placeholder="цена лв." />
           </div>
                  <div role="group" class="col-md-4">
                <label for="inputLive">Стойност на жилищния имот</label>
               <b-form-input v-model="price16" type="number" placeholder="цена лв." />
            </div>
           </div>

   <div class="row ">
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

    <div class="row">
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

      <div class="row ">
    <div role="group" class="col-md-12">
      <label for="inputLive">
        <h3>ОБЩА СТОЙНОСТ - СУМА ОТ СТОЙНОСТТА НА ЖИЛИЩНИЯ ИМОТ, ГАРАЖА И ПАРКОМЯСТОТО</h3>

        </label>
      <b-form-input v-model="overAllPrice" type="text" readonly placeholder="цена лв." />
    </div>
     </div> 
  </div>
  <br>
  <div class="row">
<div class="col-md-12 w-1000" style="background-color:white; align-center">
  <h3> РАЗГЛЕДАЙТЕ И СЕ ЗАПОЗНАЙТЕ С РАЙОНА ОКОЛО ИМОТА</h3>
             <br>     
              
          </div>
  </div>
   <div class="row">
        <br>
            <div class="col-md-12 pt-5px" style="background-color:red;">
              <h4>КАРТИ НА МЕСТОПОЛОЖЕНИЕТО НА ИМОТИТЕ</h4>
             <br>     
               <a href="https://www.google.com/maps/@?api=1&map_action=map" target="_blank">КАРТА НА ИМОТИТЕ В РЕПУБЛИКА БЪЛГАРИЯ</a>
           <br>
            <a href="https://www.bgmaps.com/link/76D329F28CCDF0CECA91FDBCDEB9FDC5" target="_blank"></a>
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
   
}
</script>


