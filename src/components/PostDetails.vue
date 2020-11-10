<template>
    <div>
        <h1>{{title}}</h1>
        {{postBody}}
    </div>
</template>

<script lang="ts">
import apiService from '@/services/apiService';
import {Component, Vue} from 'vue-property-decorator'

@Component({})
export default class PostDetails extends Vue{
    postBody = '';
    title= ''

    created(){
        const id = this.$route.params.id ? this.$route.params.id : 0;
        apiService.sendGetRequest('posts/'+id, null).then(data => {
            debugger
            this.postBody = data.body;
            this.title = data.title;
        })
    }

}
</script>