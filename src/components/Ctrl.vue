<template>
   <div class="ctrl-wrapper">
     <i class="glyphicon glyphicon-plus-sign" @click="addEssay"></i>
     <i class="glyphicon glyphicon-heart" @click="isEnjoy"
     :class="{'enjoy':enjoy }"></i>
     <i class="glyphicon glyphicon-remove-sign" @click="rmEssay"></i>
   </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'Ctrl',
  data () {
    return {
    }
  },
  methods: {
    addEssay () {
      this.$store.commit('addEssay')
    },
    isEnjoy () {
      this.$store.commit('isEnjoy')
    },
    ...mapMutations(['rmEssay'])
  },
  computed: {
    ...mapGetters(['enjoy'])
  }
}
</script>

<style scoped>
  .ctrl-wrapper{
    width:60px;
    height:100%;
    background: #5cff9b;
    float:left;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 10px;
  }
  .ctrl-wrapper>i{
    font-size: 30px;
    margin-top: 20px;
  }
  .ctrl-wrapper>i:hover{
    cursor: pointer;
  }
  .ctrl-wrapper>i.enjoy{
    color:#f40;
  }
</style>
