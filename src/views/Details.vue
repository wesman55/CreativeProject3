<template>
<div class="body">
    <h1 v-if="this.$root.$data.current != null"> {{this.$root.$data.current.name }} </h1>
</div>

</template>

<script>

</script>

<style scoped>
.body {
    text-align: center;
}

</style>