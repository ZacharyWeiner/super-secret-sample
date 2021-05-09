<template>
<div>

    <Suspense >
      <template #default>
        <div>
          <div id="nav" class="shadow border-t-8 border-blue-light sm:flex items-center bg-grey-lightest">
            <a href="#">
              <svg class="w-16 h-16 mx-auto block" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 11.1C15.3 3.9 19.8.3 27 .3c10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 27.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" transform="translate(5 16)" fill="#5DA5E3" fill-rule="evenodd"></path></svg>
            </a>
            <router-link to="/" class="no-underline text-blue-dark text-xl flex-1 text-center sm:ml-4">Home</router-link> |
            <router-link to="/about" class="no-underline text-blue-dark text-xl flex-1 text-center sm:ml-4">About</router-link> | 
            <router-link to="/game-test" class="no-underline text-blue-dark text-xl flex-1 text-center sm:ml-4">Game Test</router-link> | 
            <router-link to="/play-game" class="no-underline text-blue-dark text-xl flex-1 text-center sm:ml-4">Play Game </router-link>
        </div>
        <div>
        <router-view/>
        </div>
        </div>
      </template>
      <template #fallback></template>
  </Suspense>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
