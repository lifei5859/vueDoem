<template>
    <div class="essay-wrapper">
        <div class="form-group">
          <label for="Title">Title</label>
          <input type="email" class="form-control" id="Title" v-model="activeEssay.title" placeholder="文章标题">
        </div>
      <div class="form-group">
        <label for="content">Content</label>
        <textarea class="form-control" id="content" v-model="activeEssay.content" placeholder="文章内容"></textarea>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'essay',
  computed: {
    ...mapState(['activeEssay'])
  }
}
</script>

<style scoped>
 .essay-wrapper{
   width:70%;
   float:left;
   margin-left: 30px;
   position:relative;
 }
 .essay-wrapper>div{
   margin-top:30px;
   position: relative;
 }
 .essay-wrapper>div>textarea{
   height:70%;
 }
</style>
