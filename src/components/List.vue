<template>
    <div class="list-wrapper">
      <h3> essay list </h3>
        <div class="btn-group btn-group-justified" role="group" aria-label="...">
          <div class="btn-group" role="group" :class="{ 'active': isAll }">
            <button type="button" class="btn btn-default" @click="isAll = true">allEssay</button>
          </div>
          <div class="btn-group" role="group" :class="{ 'active': isAll }">
            <button type="button" class="btn btn-default" @click="isAll = false">enjoyEssay</button>
          </div>
        </div>
      <ul class="lists">
        <li class="list" :class="{'active-list': $store.state.activeEssay === item  }" v-for="(item,i) in ( isAll ?  $store.state.essayList : enjoyList )" :key="i" @click="isActive(item)"> {{item.title}} </li>
      </ul>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
  data () {
    return {
      isAll: true
    }
  },
  name: 'list',
  methods: {
    ...mapMutations(['isActive'])
    // isEnjoy () {
    //
    // }
  },
  computed: {
    ...mapGetters(['enjoyList'])
  }
}
</script>

<style scoped>
  .list-wrapper{
    float: left;
    width:200px;
    height:100%;
    position:relative;
    margin-left: 10px;
  }
  h3{
    text-align: center;
  }
  .lists{
    width:100%;
  }
  .list{
    list-style: none;
    height:40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
  .active-list{
    background: #faffc6;
  }
</style>
