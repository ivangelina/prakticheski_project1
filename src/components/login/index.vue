<template>
<div class="price-layout py-4">
  <div class="container h-100">
     <div class="price-overlay p-2">
       <h1>УЕБ ПРИЛОЖЕНИЕ </h1>
       <h4>В ПОМОЩ НА БЪЛГАРСКИЯ ПРЕДПРИЕМАЧ И БЪЛГАРСКИЯ КУПУВАЧ</h4>
<div class="row">
        <div class="col-md-6">
           <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 30px #000"
    fade
    indicators
    img-width=""
    img-height="">
    <b-carousel-slide caption="УЕБ ПРИЛОЖЕНИЕ" img-src="https://picsum.photos/1024/480/?image=817"  class="img-thumbnail"  alt="Center image"/>
    <b-carousel-slide caption="УЕБ ПРИЛОЖЕНИЕ" img-src="https://picsum.photos/1024/480/?image=84" class="img-thumbnail"  alt="Center image" />
    <b-carousel-slide caption="УЕБ ПРИЛОЖЕНИЕ" img-src="https://picsum.photos/1024/480/?image=817" class="img-thumbnail" alt="Center image"/>
    <b-carousel-slide caption="УЕБ ПРИЛОЖЕНИЕ" img-src="https://picsum.photos/1024/480/?image=84" class="img-thumbnail" alt="Center image"/>
  </b-carousel>
        </div>
      <div class="col-md-6">  
         <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 30px #000"
    fade
    indicators
    img-width=""
    img-height="">
    <b-carousel-slide caption="УЕБ ПРИЛОЖЕНИЕ" img-src="https://picsum.photos/1024/480/?image=84"  class="img-thumbnail"  alt="Center image"/>
    <b-carousel-slide caption="УЕБ ПРИЛОЖЕНИЕ" img-src="https://picsum.photos/1024/480/?image=817" class="img-thumbnail"  alt="Center image" />
    <b-carousel-slide caption="УЕБ ПРИЛОЖЕНИЕ" img-src="https://picsum.photos/1024/480/?image=84" class="img-thumbnail" alt="Center image"/>
    <b-carousel-slide caption="УЕБ ПРИЛОЖЕНИЕ" img-src="https://picsum.photos/1024/480/?image=817" class="img-thumbnail" alt="Center image"/>
  </b-carousel>
      </div>
     </div>
     <br>
       <p style="font-size:large; font-style: italic; color: black; font-weight: !important">Влезте в приложението,
          като задължително запишете име и парола!</p>
    <div class="row justify-content-center align-items-center h-200 border: 15px solid #256">
      <div class="col-md-5 col-lg-8">
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
            <b-button type="submit" variant="dark" block>ВХОД</b-button>
          </b-form>
        </b-card>
        <br>
          </div>
          </div>     
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
        color: black;
        font-style: bold;
    }
  h4 {
        padding: 0;
        margin-top: 0;
        color: black;
        font-style: bold;
    }
</style>




