<template>
<div class="calculator-layout py-3">
  <br>
  <br>
<b-container class="bv-example-row bv-example-row-flex-cols mt-5px">
   <div class="calculator-overlay p-4">
     <br>
  <div class='calculator' onselectstart='return false'>
    <div class='display'>{{display}}</div>
    <div @click='clear' class='button darker'>C</div>
    <div @click='sign' class='button darker'>+/-</div>
    <div @click='percent' class='button darker'>%</div>
    <div @click='divide' class='button operator'>÷</div>
    <div @click='append(7)' class='button'>7</div>
    <div @click='append(9)' class='button'>9</div>
    <div @click='append(8)' class='button'>8</div>
    <div @click='multiply' class='button operator'>x</div>
    <div @click='append(4)' class='button'>4</div>
    <div @click='append(5)' class='button'>5</div>
    <div @click='append(6)' class='button'>6</div>
    <div @click='subtract' class='button operator'>-</div>
    <div @click='append(1)' class3='button'>1</div>
    <div @click='append(2)' class='button'>2</div>
    <div @click='append(3)' class='button'>3</div>
    <div @click='add' class='button operator'>+</div>
    <div @click='append(0)' class='button zero'>0</div>
    <div @click='decimal' class='button darker'>.</div>
    <div @click='equal' class='button operator'>=</div>
  </div>
   <br>
   <br>
  <div class="row">
    <h4>Изчисляване на проста лихва, която следва да бъде върната при получен кредит</h4>
     <div role="group" class="col-md-3">
              <label for="inputLive">Кредит-получена сума</label>
              <b-form-input v-model="yardArea" type="text" placeholder="лв" />
            </div>
                  <div role="group" class="col-md-3">
               <label for="inputLive">Лихва - проста</label>
              <b-form-input v-model="priceYardArea" type="number" placeholder="процент" />
           </div>
            <div role="group" class="col-md-3">
               <label for="inputLive">Години</label>
              <b-form-input v-model="priceYardArea_1" type="number" placeholder="брой" />
           </div>
                  <div role="group" class="col-md-">
                <label for="inputLive">Лихва за връщане</label>
               <b-form-input v-model="calculatedYardAreaPrice" type="number" placeholder="цена лв." />
            </div>
           </div>
           <br>
        <h6>Забележка: сумата за връщане се получава, като към Кредит - получена сума се добави изчислената лихва!</h6>    
   </div>
</b-container>
<br>
<br>
</div>
</template>

<script>
export default {
  data() {
    return {
      previous: null,
      display: 0,
      operator: null,
      operatorClicked: false,
       yardArea: '',
      priceYardArea: '',
      priceYardArea_1:''
    };
  },
  methods: {
    clear() {
      this.display = 0;
    },
    sign() {
      this.display =
        this.display < 0
          ? (this.display = this.display - this.display * 2)
          : (this.display = this.display - this.display * 2);
    },
    percent() {
      this.display = this.display / 100;
    },
    append(number) {
      if (this.operatorClicked === true) {
        this.display = '';
        this.operatorClicked = false;
      }
      this.display =
        this.display === 0
          ? (this.display = number)
          : '' + this.display + number;
    },
    decimal() {
      if (this.display.indexOf('.') === -1) {
        this.append('.');
      }
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.previous = this.display;
      this.operatorClicked = true;
    },
    multiply() {
      this.operator = (a, b) => a * b;
      this.previous = this.display;
      this.operatorClicked = true;
    },
    subtract() {
      this.operator = (a, b) => a - b;
      this.previous = this.display;
      this.operatorClicked = true;
    },
    add() {
      this.operator = (a, b) => a + b;
      this.previous = this.display;
      this.operatorClicked = true;
    },
    equal() {
      this.display = this.operator(Number(this.previous), Number(this.display));
      this.previous = null;
      this.operatorClicked = true;
    }
  },
    computed:{
     calculatedYardAreaPrice(){
        const price = Number(this.yardArea) * Number(this.priceYardArea)*Number(this.priceYardArea_1);
        return price;
      }
    },
};
</script>

<style scoped>
.calculator {
  margin: auto;
  width: 80vw;
  font-size: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(10vh, auto);
  border: 10px solid #111;
  line-height: 10vh;
}

.display {
  grid-column: 1 / 5;
  background-color: #ececec;
  border: 1px solid #111;
  font-size: 2.5rem;
  cursor: default;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 1rem;
}

.zero {
  grid-column: 1 / 3;
}

.button {
  background-color: hsl(0, 0%, 75%);
  border: 1px solid #111;
  cursor: pointer;
}

.operator {
  background-color: hsl(210, 60%, 60%);
}

.darker {
  background-color: hsl(0, 0%, 65%);
}

@media only screen and (min-width: 768px) {
  .calculator {
    width: 50vw;
    grid-auto-rows: minmax(7.5vh, auto);
    line-height: 7.5vh;
  }
}

@media only screen and (min-width: 1024px) {
  .calculator {
    width: 30vw;
    grid-auto-rows: minmax(7.5vh, auto);
    line-height: 7.5vh;
  }
}

@media only screen and (min-width: 1280px) {
  .calculator {
    width: 20vw;
  }
}

@media only screen and (min-width: 1600px) {
  .calculator {
    width: 15vw;
  }
}
</style>
