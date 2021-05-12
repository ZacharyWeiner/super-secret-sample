import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GameTest from '../views/GameTest.vue';
import PlayGame from '../views/PlayGame.vue';
import FAQ from '../views/FAQ.vue';
import Profile from '../views/Profile.vue';
import NewGame from '../views/NewGame.vue';
import GameList from '../views/GameList.vue';
import ThemeTest from '../views/ThemeTest.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game-test',
    name: 'Game Test',
    component: GameTest
  },
  {
    path: '/new-game',
    name: 'New Game',
    component: NewGame
  },
  {
    path: '/play-game/:id',
    name: 'Play Game',
    component: PlayGame
  },
  {
    path: '/play-game',
    name: 'Play Game',
    component: PlayGame
  },
  {
    path: '/game-list',
    name: 'Game List',
    component: GameList
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/theme',
    name: 'theme',
    component: ThemeTest
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
