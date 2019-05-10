<template> 
<div class="conventorbg-layout py-5">
    <br>
<b-container class="bv-example-row bv-example-row-flex-cols mt-5px">
    <br>
  <div class="conventorbg-overlay p-4">
  <br>
<form class="content-form"> 
<h2 class="title">BGN to EUR Converter</h2> 
<section class="items"> 
<label for="bgn" class="currency"> 
<span class="item-currency">BGN: </span> 
<input  class="primary-btn" type="number" onclick="eurConverter()" value="Convert!" />

</label> 

<label for="euro" class="currency"> 
<span class="item-currency">EUR: </span> 
<input class="currency-value" type="number" id="euro" readonly /> 
</label> 
<input  class="primary-btn" type="button" value="Convert!" /> 
</section> 
</form> 
  </div>
  <br>
  <br>
</b-container>
<br>
<br>
<br>
<br>
</div>

</template>

<script>

 function eurConverter() { 
let bgn = document.getElementById("bgn").value; 
let eur = (bgn / 1.95583).toFixed(2); 
document.getElementById("euro").value = eur;
}

</script>

<style>
.content-form { 
width: 100%; 
margin: 5% auto;
 
background: #999; 
padding: 5px 10px 10px; 
border-radius: 15px; 
box-shadow: 5px 5px 10px #808080, 5px 5px 10px #6793c1 inset; 
} 
.currency-value { 
border: none; 
padding: 5px; 
border-radius: 5px; 
} 
.title{ 
text-align: center; 
} 
.item-currency { 
font-weight: 700; 
} 
.currency { 
margin: auto; 
padding-bottom: 15px; 
}
.items { 
display: flex; 
flex-direction: column; 
justify-content: flex-start; 
} 
.primary-btn { 
margin: auto; 
border: none; 
padding: 10px 30px; 
border-radius: 10px; 
background-color: #ffa000; 
color: #FFFFFF; 
font-weight: 700; 
}

</style>
