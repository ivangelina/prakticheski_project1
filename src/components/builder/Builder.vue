<template>
<div class="container">
  <div class="row mt-3">
    <div role="group" class="col-md-3">
      <label for="inputLive">Дворно място-УПИ</label>
      <b-form-input v-model="text1" type="text" placeholder="кв. м" />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Застроена площ - Test</label>
      <b-form-input v-model="text1" type="text" placeholder="кв. м" />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Разгъната застроена площ</label>
      <b-form-input v-model="text1" type="text" placeholder="кв. м" />
    </div>
  </div>
   <div class="row mt-3">
    <div role="group" class="col-md-3">
      <label for="inputLive">Цена - Упи</label>
      <b-form-input v-model="text1" type="text" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Обща цена за разрешителни</label>
      <b-form-input v-model="text1" type="text" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Цена за проект</label>
      <b-form-input v-model="text1" type="text" placeholder="цена лв." />
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
      <b-form-input v-model="text1" type="text" placeholder="цена лв." />
    </div>
  </div>

  <div class="row mt-4">
    <div role="group" class="col-md-3">
      <label for="inputLive">Груб строеж</label>
      <b-form-input v-model="text1" type="text" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Част Архитектура</label>
      <b-form-input v-model="text1" type="text" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Част ВиК</label>
      <b-form-input v-model="text1" type="text" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Част Електро</label>
      <b-form-input v-model="text1" type="text" placeholder="цена лв." />
    </div>
  </div>

  <div class="row mt-4">
    <div role="group" class="col-md-3">
      <label for="inputLive">Част ОВК</label>
      <b-form-input v-model="text1" type="text" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Част Вертикална планировка</label>
      <b-form-input v-model="text1" type="text" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Част Озеленяване</label>
      <b-form-input v-model="text1" type="text" placeholder="цена лв." />
    </div>
    <div role="group" class="col-md-3">
      <label for="inputLive">Част Ограда</label>
      <b-form-input v-model="text1" type="text" placeholder="цена лв." />
    </div>   
  </div>
  <div class="row mt-1">
    <div role="group" class="col-md-12">
      <label for="inputLive">ИЗЧИСЛЕНИ ОБЩИ РАЗХОДИ</label>
      <b-form-input v-model="text1" type="text" placeholder="цена лв." />
    </div>
     
  </div>
</div>
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