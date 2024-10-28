<script setup>
import { ref } from 'vue'
const windowWidth = ref('')

onMounted(() => {
    windowWidth.value = window.innerWidth
    window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth
    })
})
</script>
<template>
    <TitleSection>Наш блог</TitleSection>
    <div class="blog" id="blog" v-if="windowWidth >= 1460">
        <div class="blog__wrapper-d">
            <BlogVideoCard
                video="https://www.youtube.com/embed/KRRKdk9Jf_s?autoplay=1&mute=1"
            />
            <BlogVideoCard
                video="https://youtube.com/embed/-J48C26AM3I?autoplay=1&mute=1"
            />
            <BlogVideoCard
                video="https://youtube.com/embed/RjtwFyucTR4?autoplay=1&mute=1"
            />
            <BlogVideoCard
                video="https://youtube.com/embed/LxINvpQbYo4?autoplay=1&mute=1"
            />
        </div>
    </div>
    <BlogMobile v-else />
</template>

<style lang="scss" scoped>
.blog {
    display: flex;
    flex-direction: column;
    &__wrapper-d {
        margin-top: 40px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
}
</style>
