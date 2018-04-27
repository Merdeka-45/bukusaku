<BootstrapCss/>
<Fontawesome/>
<BukusakuCss/>
<DashboardCss/>
<template>
  <div id="app">
<!--    <Navbar/>-->
    <router-view/>
  </div>
</template>
<!--
<Jquery/>
<PopperJs/>
<BootstrapJs/>
-->

<script>
import BootstrapCss from './assets/css/bootstrap.min.css'
import Fontawesome from './assets/css/fontawesome-all.min.css'
import BukusakuCss from './assets/css/bukusaku.css'
import Navbar from './components/Navbar'
import DashboardCss from './assets/tabler/css/dashboard.css'
//  import Jquery from './assets/js/jquery-3.2.1.slim.min.js'
//  import PopperJs from './assets/js/popper.min.js'
//  import BootstrapJs from './assets/js/bootstrap.min.js'

export default {
  name: 'BukuSaku',
  components: {
    BootstrapCss,
    Fontawesome,
    BukusakuCss,
    Navbar,
    DashboardCss
    // PopperJs,
    // Jquery,
    // BootstrapJs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
/*  margin-top: 60px;*/
}
    @font-face {
        font-family: 'century-gothic';
        src: url(assets/fonts/century-gothic.ttf);
    }

    * {
        font-family: 'century-gothic';
    }

    .secondary-color {
        background-color: #fca41a;
        color: #fff;
    }
    .card-body .form-group{
        padding: 0px;
    }
</style>
