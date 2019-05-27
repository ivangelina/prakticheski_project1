<template>
<div class="buyer-layout py-5">
<b-container class="bv-example-row bv-example-row-flex-cols mt-5px">
  <div class="buyer-overlay p-4">
  <h5>Приложение в помощ на български предприемач и българския купувач</h5>
  <br>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="ХАН ОМУРТАГ"
        text="Човек и добре да живее, умира и друг се ражда.
         Нека роденият по-късно, като гледа този надпис,
          да си спомня за оногова, който го я направил."
        img-src="https://picsum.photos/1024/350/?image=817"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/350/?image=84">
        <h1>Човек и добре да живее, умира и друг се ражда. 
          Нека роденият по-късно, като гледа този надпис, 
          да си спомня за оногова, който го я направил.</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/350/?image=620">
       <h3>МОСТОВЕ ГРАДИХ, ДЕТО ДА СЪБИРАТ ЧОВЕК С ЧОВЕКА И МАНАСТИРИ, ДЕТО ДА ГО СЪБИРАТ С БОГА.</h3>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://picsum.photos/1024/350/?image=545"
          alt="image slot"
        >
         <h3> И ХРАМОВЕ ГРАДИХ, ЧЕ ДА УТОЛЯВАТ ЖАЖДАТА СИ И ДУШАТА, И КУЛИ ЗА ЧАСОВНИЦИ, ЧЕ ХОРАТА ВСЕ ИСКАТ ДА УЛОВЯТ ВРЕМЕТО.</h3>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
     
    </b-carousel>
 <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
    <b-card no-body>
    <b-tabs card>
      <b-tab title="Секция Предприемач" active>Изчисляване на всички разходи 
        за построяването на строителен обект,
         включително закупуване на дворно място,
          такси за разрешителни, сума за СН, 
          сума за построяване (част Груб строеж, 
          част Архитектура, част ВК, част Електро,
           част ОВК, част Вертикална планировка, част Озеленяване, 
           част Ограда и други) и въвеждане в експлоатация</b-tab>
      <b-tab title="Секция Купувач">Изчисляване на сумата за 
        закупуване на жилищен имот, включително сума за жилище, 
        сума за гараж и сума за паркомясто,като клиентът може да 
        разгледа района около имота от приложената карта</b-tab>
    </b-tabs>     
  </b-card>

  </div>
  </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
<style>
h1 {
        padding: 0;
        margin-top: 0;
        color: white;
        font-style: bold;
    }
  h3 {
        padding: 0;
        margin-top: 0;
        color: white;
        font-style: bold;
    }  
</style>


