<template>
<div class="builder-layout py-5">
<div class="container">
  <div class="builder-overlay p-4">
  <div class="row">
    <div role="group" class="col-md-3">
      <label for="inputLive">Дворно място-УПИ</label>
      <b-form-input v-model="yardArea" type="text" placeholder="кв. м" />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Застроена площ</label>
      <b-form-input v-model="placeArea" type="text" placeholder="кв. м" />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Разгъната застроена площ</label>
      <b-form-input v-model="buildArea" type="text" placeholder="кв. м" />
    </div>
  </div>
   <div class="row mt-3">
    <div role="group" class="col-md-3">
      <label for="inputLive">Цена - Упи</label>
      <b-form-input v-model="price1" type="number" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Обща цена за разрешителни</label>
      <b-form-input v-model="price2" type="number" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Цена за проект</label>
      <b-form-input v-model="price3" type="number" placeholder="цена лв." />
    </div>
  </div>
  <div class="row mt-3">
    <div role="group" class="col-md-3">
        <b-form-group
            label="Вид строеж"
            label-for="selectArray"
        >
        <b-form-select @change="selectYearChange" 
        id="selectArray" 
        v-model="selectedBuilding" 
        :options="buildingOptions" class="mb-3" />
        </b-form-group>
    </div>
    <div role="group" class="col-md-3">
        <b-form-group
            label="Брой етажи"
            label-for="selectArray"
        >
        <b-form-select @change="selectYearChange" 
        id="selectArray" 
        v-model="selectedFloorCount" 
        :options="floorsOptions" 
        class="mb-3" />
        </b-form-group>
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Цена СН и такси</label>
      <b-form-input v-model="price4" type="number" placeholder="цена лв." />
    </div>
  </div>
  <div class="row mt-4">
    <div role="group" class="col-md-3">
      <label for="inputLive">Груб строеж</label>
      <b-form-input v-model="price5" type="number" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Част Архитектура</label>
      <b-form-input v-model="price6" type="number" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Част ВиК</label>
      <b-form-input v-model="price7" type="number" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Част Електро</label>
      <b-form-input v-model="price8" type="number" placeholder="цена лв." />
    </div>
  </div>

  <div class="row mt-4">
    <div role="group" class="col-md-3">
      <label for="inputLive">Част ОВК</label>
      <b-form-input v-model="price9" type="number" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Част Вертикална планировка</label>
      <b-form-input v-model="price10" type="number" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Част Озеленяване</label>
      <b-form-input v-model="price11" type="number" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Част Ограда</label>
      <b-form-input v-model="price12" type="number" placeholder="цена лв." />
    </div>   
  </div>
  <div class="row mt-1">
    <div role="group" class="col-md-12">
      <label for="inputLive">ИЗЧИСЛЕНИ ОБЩИ РАЗХОДИ</label>
      <b-form-input v-model="overAllPrice" type="text" readonly placeholder="цена лв." />
    </div>
     
  </div>
  </div>
</div>
</div>	
</template>

<script>
export default {
  name: 'st-builder',
  data () {
    return {
      price1: '',
      price2: '',
      price3: '',
      price4: '',
      price5: '',
      price6: '',
      price7: '',
      price8: '',
      price9: '',
      price10: '',
      price11: '',
      price12: '',
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
   computed: {
      overAllPrice(){
        const price = Number(this.price1) + Number(this.price2);
        return price;
      }
    }
 
}
</script>