<template>
    <div class="container">
        <div class="row">
            <div class="p-2 col-4 card w-100 rounded elevation-5">

                <div class="d-flex justify-content-between">
                    <img class="profile-pic" :src="blog.creator.picture" alt="">
                    <p>{{ blog.creator.name }}</p>
                </div>
                <div class="col-3">
                </div>

                <div class="col-3">
                    <div>{{ blog.title }}</div>
                </div>
                <div class="col-3">
                    <div>{{ blog.body }}</div>
                </div>
                <div>
                    <img class="blog-image" :src="blog.imgUrl" alt="">
                </div>

            </div>
            <div class="col-6"></div>
        </div>
    </div>
</template>



<script>
import { Blog } from '../models/Blog.js';
import { blogsService } from '../services/BlogsService';

export default {
    props: { blog: { type: Blog, required: true } },
    setup(props) {
        return {

            // TODO blog cover, refer to project lecture
            setActiveBlog() {
                blogsService.setActiveBlog(props.blog.id)

            }

        };
    },
};
</script>


<style lang="scss" scoped>
.blog-image {
    height: 15vh;
    width: 100%;
    object-fit: cover;
    object-fit: center;
}

.profile-pic {
    height: 50px;
    width: 50px;
    object-fit: cover;
    object-position: center;
    border-radius: 50em;
}
</style>