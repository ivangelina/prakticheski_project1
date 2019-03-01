<template>
<b-container class="bv-example-row bv-example-row-flex-cols">
  <div>
    <b-carousel
      id="carousel"
      style="text-shadow: 2px 1px 2px #999;"
      controls
      indicators
      background="static/images/office.jpg"
      :interval="1000"
      img-width="600" 
      img-height="300" 
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="ИМОТИ"
        text="Актуални имоти на българския пазар"
        <br>
         <h5> АКТУАЛНИ ИМОТИ НА БЪЛГАРСКИЯ ПАЗАР ДИРЕКТНО ОТ СТРОИТЕЛИ</h5>
        <img
          slot="img"
          class="d-block img-fluid"
          width="100"
          height="100"
          src="static/images/4.jpg"
          alt="image slot"
        />
      </b-carousel-slide>
            <!-- Slides with custom text -->
      <b-carousel-slide
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="100"
          height="100"
          src="static/images/4.jpg"
          alt="image slot"
        />
      </b-carousel-slide>
      <!-- Slides with image only -->
      <b-carousel-slide
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="100"
          height="100"
          src="static/images/4.jpg"
          alt="image slot"
        />
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="100"
          height="100"
          src="static/images/4.jpg"
          alt="image slot"
        />
      </b-carousel-slide>
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide center caption="ИМОТИ" img-blank img-alt="ИМОТИ">
         <h5> АКТУАЛНИ ИМОТИ НА БЪЛГАРСКИЯ ПАЗАР ДИРЕКТНО ОТ СТРОИТЕЛИ БЕЗ ПОСРЕДНИК</h5>
         <h6> Актуални предложения: 
Информация
ЛУКСОЗНИ, ЗАВЪРШЕНИ ДО КЛЮЧ, ГОТОВИ ЗА ОБИТАВАНЕ ДВУСТАЙНИ И ТРИСТАЙНИ АПАРТАМЕНТИ! Директно от инвеститора Хидротурс- 94 ООД- жилища в елегантна 17- етажна сграда в ж. к. Студентски град на бул. Св. Климент Охридски 16. Избор на изложение, етаж и квадратура. Двустайни от 36 до 51 кв. м. Сградата има всички характеристики на 5-звезден хотел- със собствен СПА център, фитнес зала, три асансьора , модерна фасада, дело на един от най- известните архитекти в България, френски прозорци с най-висок клас дограма цвят антрацит, стъклопакет с аргон, нискоемисийно стъкло, обков Мако . Собствен двор с паркоместа, озеленяване, осигурена достъпна среда за хора със специални потребности. Апартаментите се предават напълно завършени- с боядисани стени и тавани, поставени настилки, монтирани врати, оборудвани бани и жилищни помещения, включително с контакти, ключове и осветителни тела. Монтирани алуминиеви радиатори и климатици. Предлагаме жилища с различни квадратури и изложения, с прекрасна панорама към Витоша и София, гъвкави схеми на плащане, съобразени с вашите възможности, съдействие за осигуряване на банкови кредити. Цени от 40 848 евро за завършен до ключ двустаен апартамент с всички екстри.
За контакти и огледи тел. 0884 275 552, 0889 744 147 
                           </h6>
      </b-carousel-slide>
    </b-carousel>
  </div>
  </b-container>
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
