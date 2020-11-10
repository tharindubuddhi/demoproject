<template>
    <div>
        {{message}}
          <button @click="viewDetails">View Details</button>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class PostList extends Vue {
    @Prop() message: string | undefined;
    @Prop() id: number | undefined;

    viewDetails(){
        this.$router.push({name: 'PostDetails', params: {id: this.id!.toString()}})
    }

}
</script>

<style lang="scss" scoped>

</style>