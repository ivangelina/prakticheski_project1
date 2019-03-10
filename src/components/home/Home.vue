<template>
<b-container class="bv-example-row bv-example-row-flex-cols">
  <b-img class="mt-4" center src="https://picsum.photos/1100/350/?image=84" alt="Center image" />
  <div>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Секция Предприемач" active>Изчисляване на всички разходи за построяването на строителен обект</b-tab>
      <b-tab title="Секция Купувач">Тази секция ще бъде разработена на по-късен етап</b-tab>
    </b-tabs>
  </b-card>
  <div>
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

