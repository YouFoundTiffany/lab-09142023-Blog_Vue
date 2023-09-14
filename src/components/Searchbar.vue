<template>
    <form class="component row justify-content-between">
        <div class="mb-1 col-12 input-group">
            <input type="text" class="form-control" placeholder="Search by topic" maxlength="25">
        </div>
        <button class="btn btn-primary"><i class="mdi mdi-magnify"></i></button>
    </form>
</template>



<script>
import { AppState } from '../AppState.js';
import { computed, reactive, onMounted, ref } from 'vue';
import Pop from '../utils/Pop.js';


export default {
    setup() {
        const blogData = ref({})
        return {
            blogData,

        }
    }
}
</script>

<style class="scss" scoped></style>