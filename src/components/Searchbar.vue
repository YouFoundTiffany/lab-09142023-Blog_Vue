<template>
    <form class="component row justify-content-between">
        <div class="mb-1 col-12 input-group">
            <input type="text" class="form-control" placeholder="Search by topic" maxlength="25">
            <button class="btn btn-primary"><i class="mdi mdi-magnify"></i></button>
        </div>
    </form>
    <!-- for active search, need a v-if -->
    <div class="my-1">
        Searching for topics: <span></span>
    </div>
</template>



<script>
import { AppState } from '../AppState.js';
import { computed, reactive, onMounted, ref } from 'vue';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js';
import { logger } from '../utils/Logger.js';

export default {
    setup() {
        const searchTerm = ref({})
        return {
            searchTerm,
            activeSearch: computed(() => AppState.searchTerm),

            async searchTopics(event) {
                try {
                    await blogsService.searchTopics(searchTerm.value)
                    logger.log(searchTerm.value)
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
}
</script>

<style class="scss" scoped></style>