<template>
<div class="price-layout py-5">
  <div class="container h-100">
     <div class="price-overlay p-5">
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
      </div>
    </div>
     </div>
  </div>
  <br>
  <br>
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
<style lang="scss">
  label {
    color: #110000;
  }
</style>
