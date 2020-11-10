<template>
    <div>
        {{message}}
          <button @click="viewDetails">View Details</button>
            <button @click="deletePost">Delete Post</button>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component({})
export default class PostList extends Vue {
    @Prop() message: string | undefined;
    @Prop() id: number | undefined;

    viewDetails(){
        this.$router.push({name: 'PostDetails', params: {id: this.id!.toString()}})
    }

    deletePost(){
        this.onDeletePost(this.id!);
    }

    /* eslint-disable @typescript-eslint/no-empty-function */
    @Emit('onDeletePost') onDeletePost(id: number){}
    /* eslint-enable @typescript-eslint/no-empty-function */
}
</script>

<style lang="scss" scoped>

</style>