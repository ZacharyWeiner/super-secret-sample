import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PlayGame from '../views/PlayGame.vue';
//import FAQ from '../views/FAQ.vue';
import Profile from '../views/Profile.vue';
import NewGame from '../views/NewGame.vue';
import HowItWorks from "../views/HowItWorks.vue";
import MyAnswers from "../views/MyAnswers.vue";
import WonGame from "../views/WonGame.vue";
import CurrentGames from "../views/CurrentGames.vue";
import Success from "../views/login/Success.vue";
import CreateAccounts from "./../views/admin/CreateAccounts.vue"
import CreateGame from "./../views/admin/CreateGame.vue"
import CreateGameList from "./../views/admin/CreateGameList.vue"
import CreateAnswers from "./../views/admin/CreateAnswers.vue"
import GameList from '../views/admin/GameList.vue';
import PewTest from "../views/PewTest.vue"
import Gopnik from "../views/Gopnik.vue"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gopnik',
    name: 'Gopnik',
    component: Gopnik
  },
  {
    path: '/pew-test',
    name: 'Pew Test',
    component: PewTest
  },
  {
    path: '/login/success',
    name: 'Success',
    component: Success
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
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/my-answers',
    name: 'My Answers',
    component: MyAnswers
  },
  {
    path: '/current-games',
    name: 'Current Games',
    component: CurrentGames
  },
  {
    path: '/game-won',
    name: 'Won Game',
    component: WonGame
  },
  {
    path: '/how-it-works',
    name: 'How It Works',
    component: HowItWorks
  },
  {
    path: '/admin/create-accounts',
    name: 'Create Accounts',
    component: CreateAccounts
  },
  {
    path: '/admin/create-game',
    name: 'Create Game',
    component: CreateGame
  },
  {
    path: '/admin/create-game-list',
    name: 'Create Game List',
    component: CreateGameList
  },
  {
    path: '/admin/create-answers',
    name: 'Create Answers',
    component: CreateAnswers
  },
  {
    path: '/admin/game-list',
    name: 'Game List',
    component: GameList
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
