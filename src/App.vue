<template>
<div>

    <Suspense >
      <template #default>
        <div>
          <div id="nav" class="shadow sm:flex items-center bg-grey-lightest">
            <a href="/" >
              <span class="text-blue-500"> støºpˆd qåm3s </span>
            </a> 
            <div class="flex flex-grow"></div>
            <router-link to="/about" class="no-underline text-blue-dark text-md flex-1 text-center sm:ml-4">Home</router-link> |
            <router-link to="/play-game" class="no-underline text-blue-dark text-md flex-1 text-center sm:ml-4">Play </router-link> |
            <router-link to="/profile" class="no-underline text-blue-dark text-md flex-1 text-center sm:ml-4">Wallet</router-link> 
        </div>
        <div>
          <router-view/>
        </div>
        </div>
      </template>
      <template #fallback>
        <div><i class="fas fa-spinner animate-spin"></i></div>
      </template>
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
  color: #1483f3;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
