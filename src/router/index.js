import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/login';
import Navigation from '../components/navigation/Navigation';
import Builder from '../components/builder/Builder';
import Buyer from '../components/buyer/Buyer';
import Price from '../components/price/Price';
import Home from '../components/home/Home';
import Calculator from '../components/calculator/Calculator';
import Relations from '../components/relations/Relations';
import DiscoverMovies from '../components/discover/DiscoverMovies';
import Footer from '../components/footer/Footer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      components: {
        default: Login,
      },
    },
    {
      path: '/home',
      name: 'Home',
      components: {
        navigation: Navigation,
        default: Home,
        footer: Footer,
      },
    },
    {
      path: '/builder',
      name: 'Builder',
      components: {
        navigation: Navigation,
        default: Builder,
        footer: Footer,
      },
    },
    {
      path: '/buyer',
      name: 'Buyer',
      components: {
        navigation: Navigation,
        default: Buyer,
        footer: Footer,
      },
    },
    {
      path: '/price',
      name: 'Price',
      components: {
        navigation: Navigation,
        default: Price,
        footer: Footer,
      },
    },
    {
      path: '/calculator',
      name: 'Calculator',
      components: {
        navigation: Navigation,
        default: Calculator,
        footer: Footer,
      },
    },
   
    {
      path: '/relations',
      name: 'Relations',
      components: {
        navigation: Navigation,
        default: Relations,
        footer: Footer,
      },
    },

  ],
});
