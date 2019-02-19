<template>
<div class="container">
  <b-img center src="https://picsum.photos/1100/300/?image=84" alt="Center image" />
  
  <div class="row mt-1">
    <div role="group" class="col-md-12">
      <label for="inputLive">СЕКЦИЯ ПРЕДПРИЕМАЧ</label>
      <b-form-input v-model="text1" type="text" placeholder="ИЗЧИСЛЯВАНЕ НА ВСИЧКИ РАЗХОДИ ЗА ПОСТРОЯВАНЕТО НА ЖИЛИЩНА СГРАДА" />
    </div>
  </div>

   <div class="row mt-1">
    <div role="group" class="col-md-12">
      <label for="inputLive">СЕКЦИЯ КУПУВАЧ</label>
      <b-form-input v-model="text1" type="text" placeholder="ТАЗИ СЕКЦИЯ ЩЕ БЪДЕ РАЗРАБОТЕНА НА ПО-КЪСЕН ЕТАП" />
    </div>
  </div>
    
    <div class="row mt-1">
    <div role="group" class="col-md-12">
      <label for="inputLive">СЕКЦИЯ КРЕДИТЕН КАЛКУЛАТОР</label>
      <b-form-input v-model="text1" type="text" placeholder="ТАЗИ СЕКЦИЯ ЩЕ БЪДЕ РАЗРАБОТЕНА НА ПО-КЪСЕН ЕТАП" />
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