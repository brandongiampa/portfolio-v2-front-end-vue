<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <div class="container">
            <router-link class="nav-link" to="/">
              <span class="branding">BG</span>
            </router-link>
            <button 
                class="navbar-toggler" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-link mt-2" to="/portfolio">Portfolio</router-link>
                    <router-link class="nav-link mt-2" to="/about">About</router-link>
                    <a class="nav-link brands" href="#"><font-awesome-icon icon="fa-brands fa-github" /></a>
                    <a class="nav-link brands" href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
                </div>
            </div>
          </div>
    </nav>
</template>

<style lang="scss">
nav {
  padding: 30px;
  .navbar-nav {
    margin-left: auto;
  }
  .branding {
    font-family: Fascinate, serif;
    font-size: 30px;
  }
  .brands {
    font-size: 30px;
    margin-top: -4px;
  }
  a {
    color: #2c3e50;
    &.router-link-exact-active {
      color: #efefef;;
    }
  }
  img {
    max-height: 60px;
  }
  @media only screen and (max-width: 400px) {
    img {
      max-height: 50px;
    }
  }
}
</style>