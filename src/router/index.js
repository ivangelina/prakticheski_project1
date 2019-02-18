import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/login';
import Navigation from '../components/navigation/Navigation';
import Builder from '../components/builder/Builder';
import Home from '../components/home/Home';
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
      name: 'Builder',
      components: {
        navigation: Navigation,
        default: Builder,
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
   
  ],
});
