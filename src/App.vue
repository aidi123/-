<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
export default {
  name: "App",
  provide (){
     return {
       reload:this.reload
     }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  created(){
  },
  methods:{
     reload (){
       this.isRouterAlive = false
       this.$nextTick(function(){
          this.isRouterAlive = true
       })
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-size: 0.24rem;
  list-style: none;
  font-family: "Microsoft YaHei";
  font-weight: 400;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  height: 100%;
  max-width: 750px;
  /* background: #ff7c12; */
}
</style>
