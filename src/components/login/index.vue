<template>
<div class="price-layout py-2">
  <div class="container h-100">
     <div class="price-overlay p-2">
       <h1>УЕБ ПРИЛОЖЕНИЕ </h1>
       <h4>В ПОМОЩ НА БЪЛГАРСКИЯ ПРЕДПРИЕМАЧ И БЪЛГАРСКИЯ КУПУВАЧ</h4>
       <p style="font-size:large; font-style: italic; color: red; font-weight: !important">Влезте в приложението,
          като задължително запишете име и парола!</p>
    <div class="row justify-content-center align-items-center h-200 border: 10px solid #256">
      <div class="col-md-5 col-lg-3">
        <b-card>
          <b-form @submit="onLogin">
            <b-form-group id="userInputGroup"
                          label="ИМЕ:"
                          variant="text-muted"
                          label-for="userInput"
            >
              <b-form-input id="userInput"
                            type="text"
                            v-model="form.user"
                            required
                            placeholder="Enter username">
              </b-form-input>
            </b-form-group>
            <b-form-group id="passwordInputGroup"
                          label="ПАРОЛА:"
                          variant="text-muted"
                          label-for="passwordInput">
              <b-form-input id="passwordInput"
                            type="password"
                            v-model="form.password"
                            required
                            placeholder="Enter password">
              </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" block>ВХОД</b-button>
          </b-form>
        </b-card>
          <div>
            <p style="font-size:large; font-style: italic; color: blue; font-weight: !important">
            "Човек и добре да живее, умира и друг се ражда.
               Нека роденият по-късно, като гледа този надпис,
                да си спомня за оногова, който го я направил."
            </p>
           <p style="font-size:large; font-style: italic; color: blue; font-weight: !important">ХАН ОМУРТАГ</p>
          </div>
          </div>     
      </div>
    </div>
     </div>
     <div class="row">
        <div class="col-md-2">
           <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 30px #000"
    fade
    indicators
    img-width="620"
    img-height="480">
    <b-carousel-slide caption="Жилищна сграда" img-src="/static/images/residental.jpg" alt="Center image"/>
    <b-carousel-slide caption="Офис сграда" img-src="/static/images/office.jpg" alt="Center image" />
    <b-carousel-slide caption="Търговска сграда" img-src="/static/images/shopping.jpg" alt="Center image"/>
    <b-carousel-slide caption="Промишлена сграда" img-src="/static/images/industrial.JPG" alt="Center image"/>
  </b-carousel>
        </div>
     </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          user: '',
          password: '',
        },
      };
    },
    methods: {
      onLogin(e) {
        e.preventDefault();
        console.log(JSON.stringify(this.form));
        this.$router.push({path: 'home'});
      },
    },
  };
</script>
<style>
 h1 {
        padding: 0;
        margin-top: 0;
        color: brown;
        font-style: bold;
    }
  h4 {
        padding: 0;
        margin-top: 0;
        color: brown;
        font-style: bold;
    }
</style>

