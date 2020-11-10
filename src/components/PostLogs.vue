<template>
<div>
    <PostLog :key="log" v-for="log in postLogs">
        {{log}}
    </PostLog>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PostLog from '@/components/PostLog.vue';

@Component({
    components: {
        PostLog
    }
})
export default class PostLogs extends Vue {

    get postLogs(): any {
        return this.$store.getters.getActionList;
    }
}


</script>

<style lang="scss" scoped>

</style>