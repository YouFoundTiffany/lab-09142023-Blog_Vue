<!-- NOTE errors are located on this Page. -->
<!-- LOOK AT Refs in the Art Terminal Modal Wrapper -->
<template>
  <div class="container">
    <section class="row">
      <div class="p-2 col-4 card w-100 rounded elevation-5">

        <div class="d-flex justify-content-between">
          <img class="profile-pic" :src="blog.creator.picture" alt="">creator pic

          <p>{{ blog.creator.name }}</p>
        </div>
        <div class="col-8">
          Blog Title
          <div>{{ blog.title }}</div>
        </div>
        <div class="col-8">
          <div>{{ blog.body }}</div>
        </div>
        <div>
          <img class="blog-image" :src="blog.imgUrl" alt="">
        </div>

      </div>

    </section>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Pop from '../utils/Pop';
import { blogsService } from '../services/BlogsService';
import { AppState } from '../AppState';
import { Blog } from '../models/Blog';


export default {
  props: { blog: { type: Blog, required: true } },
  setup(props) {
    // const = ref
    const route = useRoute()
    // const router = useRouter()
    onMounted(() => {

      activeBlogbyId()
      // logger.log(route)
    })
    async function activeBlogbyId() {
      try {
        const blogId = route.params.blogId
        await blogsService.activeBlogbyId(blogId)
      } catch (error) {
        Pop.error(error)
      }

    }



    return {
      activeBlog: computed(() => AppState.activeBlog.id),
      setActiveBlog() {
        blogsService.setActiveBlog(props.blog.id)
      }
      // account: computed(() => AppState.account),
      // TODO Delete Blog by user/owner


    };


  },
};
</script>


<style scoped lang="scss"
></style>

