<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: 'Тема вопроса',
    },
    info: {
        type: String,
        default: 'Текст вопроса',
    },
})
const expanded = ref(false)
const contentStyle = computed(() => ({
    'max-height': expanded.value ? '300px' : 0,
    overflow: 'hidden',
}))

const infoStyle = computed(() => ({
    opacity: expanded.value ? 1 : 0,
    transition: 'opacity 0.3s ease-out',
}))
</script>
<template>
    <article class="question">
        <header>
            <div
                class="question__arrow"
                :class="{ question__arrow__open: expanded }"
                @click="expanded = !expanded"
            >
                <img src="/downarrow.svg" alt="" />
            </div>
            <h3 class="question-title" @click="expanded = !expanded">
                {{ title }}
            </h3>
        </header>
        <div :style="contentStyle" class="content">
            <p :style="infoStyle" class="info">{{ info }}</p>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.question {
    background-color: $white;
}

.question header {
    display: flex;
    gap: 16px;
    align-items: center;
}

.question-title {
    cursor: pointer;
    color: $text-black;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 40px;
    font-weight: 700;
    line-height: 56px;
    margin-bottom: 10px;
    padding-top: 22px;
    padding-bottom: 22px;

    @media (max-width: 768px) {
        font-size: 28px;
        font-weight: 700;
        line-height: 39.2px;
    }
}

.content {
    max-height: 0;
    transition: max-height 0.2s ease-out;
}
.info {
    opacity: 0;
    transition: opacity 0.2s ease-out;
    font-size: 28px;
    font-weight: 400;
    line-height: 39.2px;
    padding-left: 80px;

    @media (max-width: 768px) {
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
    }
}

.question__arrow {
    width: 60px;
    height: 60px;
    cursor: pointer;
    transition: transform 0.3s;
    flex-shrink: 0;
    & img {
        width: 100%;
        height: 100%;
    }
    &__open {
        transform: rotate(180deg);
        transition: transform 0.3s ease-out;
    }
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
}
</style>
