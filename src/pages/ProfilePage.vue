<template>
    <div v-if="profile" class="container"></div>

    <!-- NOTE don't render the profile info if there is none -->
    <!-- Like when you reload, and your appstate activeProfile is null -->
    <!-- if you get an error like 'Cannot read properties of null, reading ('picture')' this is your problem and this is the solution to it -->

    <section class="row">


    </section>

    <section class="row">


    </section>
</template>
  
<script>

export default {
    setup() {
        return {}
    },
    components: { Login }
}
</script>
  
<style class="scss" scoped></style>
  