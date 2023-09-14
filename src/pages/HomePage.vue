<template>
  <div v-for="blog in blogs" :key="blog.id">
    <BlogCard :blog="blog" />
    <!-- BLOG CARD STARTS HERE -->

  </div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue';
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';
import { blogsService } from '../services/BlogsService.js';
import { AppState } from '../AppState';
export default {
  setup() {
    onMounted(() => {
      getBlogs();


    });
    async function getBlogs() {
      try {
        await blogsService.getBlogs()
        logger.log('📚')
      } catch (error) {
        Pop.error(error)
      }

    }

    return {
      blogs: computed(() => AppState.blogs)
    };
  },
  components: { BlogCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
