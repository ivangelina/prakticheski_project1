import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/login';
import Navigation from '../components/navigation/Navigation';
import Builder from '../components/builder/Builder';
import Buyer from '../components/buyer/Buyer';
import Home from '../components/home/Home';
import Maps from '../components/maps/Maps';
import Housings from '../components/housings/Housings';
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
      path: '/calculator',
      name: 'Builder',
      components: {
        navigation: Navigation,
        default: Builder,
        footer: Footer,
      },
    },
    {
      path: '/maps',
      name: 'Maps',
      components: {
        navigation: Navigation,
        default: Maps,
        footer: Footer,
      },
    },
    {
      path: '/housings',
      name: 'Housings',
      components: {
        navigation: Navigation,
        default: Housings,
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
