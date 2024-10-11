<script setup>
const props = defineProps({
    video: String,
})
</script>
<template>
    <div class="video">
        <iframe
            width="350"
            height="615"
            :src="video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>
</template>

<style lang="scss" scoped>
.video {
    border-radius: 12px;
    overflow: hidden;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
