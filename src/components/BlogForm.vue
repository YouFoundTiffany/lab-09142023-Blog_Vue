<template>
    <form class="component row justify-content-between">
        <div class="mb-1 col-8">
            <input type="text" class="form-control" placeholder="title">
        </div>
        <div class="mb-1 col-3">
            <input type="text" class="form-control" placeholder="topic">

        </div>

        <div class="mb-1 col-12">
            <input type="text" class="form-control" placeholder="Cover photo URL">

        </div>
        <div class="mb-1 col-12">
            <label for="blog-text">Content</label>
            <textarea id="blog-content" class="form-control" placeholder="Type content here" maxlength="10000"></textarea>
        </div>
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