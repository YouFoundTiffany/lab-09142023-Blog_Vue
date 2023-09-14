<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <!-- {{ blog }} -->
                <p>Profile Pic</p>
                <p>Blogger name</p>
                <p>Title jfkdlajkfdl;sajklfd;sa</p>
                <p>Content - first 35 words</p>
            </div>
            <div class="col-6"></div>
        </div>
    </div>
</template>



<script>
import { Blog } from '../models/Blog.js';

props: { blog: { type: Blog, required: true } },
export default {
    setup(props) {
        return {};
    },
};
</script>


<style scoped lang="sscs"
>
</style>