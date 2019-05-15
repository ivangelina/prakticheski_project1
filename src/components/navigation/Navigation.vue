<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <div class="container">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/home">Начало</b-nav-item>
          <b-nav-item to="/builder">Предприемач</b-nav-item>
          <b-nav-item to="/buyer">Купувач</b-nav-item>
          <b-nav-item to="/price">Ценова листа</b-nav-item>
          <b-nav-item to="/calculator">Калкулатор</b-nav-item>
           <b-nav-item to="/worksmr">Анализ СМР</b-nav-item>
          <b-nav-item to="/conventorbg">Конвентор от BGN към EUR</b-nav-item>
          <b-nav-item to="/relations">Полезни връзки</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
