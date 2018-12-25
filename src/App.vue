<template>
  <div id="app">
    <ctrl></ctrl>
    <list></list>
    <essay></essay>
  </div>
</template>

<script>
import Ctrl from './components/Ctrl'
import List from './components/List'
import Essay from './components/Essay'
export default {
  name: 'App',
  components: {
    Ctrl,
    List,
    Essay
  }
}
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
 html,body,#app{
   height:100%;
   width:100%;
   min-width: 1000px;
 }
</style>
