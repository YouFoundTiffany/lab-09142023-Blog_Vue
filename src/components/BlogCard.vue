<template>
    <!-- TODO will need a router link top and bottom to go to the Details Page. -->
    <!-- :to="{name: 'Blog Details', params: {blogId: blog.id}}" -->
    <router-link :to="{ name: 'Blog Details', params: { blogId: blog.id } }">

        <div class="container">
            <div class="row">
                <div class="p-2 col-4 card w-100 rounded elevation-5">

                    <div class="d-flex justify-content-between">
                        <img class="profile-pic" :src="blog.creator.picture" alt="">
                        <!-- TODO make this name and/or the profile pic clickable to bring user to the profile page.  -->
                        <p>{{ blog.creator.name }}</p>
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
    </router-link>
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