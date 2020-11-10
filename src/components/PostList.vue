<template>
<div>
    <Post :key="post.id" v-for="post in posts" 
    @onDeletePost="onDeletePost"
    :message="post.title" :id="post.id"/>
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

    onDeletePost(id: number){
        const index = this.posts.findIndex(obj => obj.id == id)
        this.posts.splice(index, 1);
    }
}


</script>

<style lang="scss" scoped>

</style>