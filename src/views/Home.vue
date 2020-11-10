<template>
  <div class="home">
    <PostList/>
    <br/><br/>
    <PostLogs/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostList from '@/components/PostList.vue';
import PostLogs from '@/components/PostLogs.vue';

@Component({
  components: {
      PostList,
      PostLogs
  },
})
export default class Home extends Vue {}
</script>
