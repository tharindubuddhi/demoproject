<template>
<div>
    <Post :key="post.id" v-for="post in posts" :message="post.title" :id="post.id"></Post>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Post from '@/components/Post.vue';
import apiService from '@/services/apiService';

@Component({
    components: {
        Post
    }
})
export default class PostList extends Vue {
    posts: any[] = [];

    created(){
        this.retrievePosts();
    }

    retrievePosts(){
        apiService.sendGetRequest('posts', {_limit : 10}).then(data => {
            this.posts = data.map((a: any) => ({title: a.title, id: a.id }));
        })
    }
}


</script>

<style lang="scss" scoped>

</style>