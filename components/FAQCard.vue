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
const contentStyle = computed(() => {
    return { 'max-height': expanded.value ? '133px' : 0 }
})

const infoStyle = computed(() => {
    return { opacity: expanded.value ? 1 : 0 }
})
</script>
<template>
    <article class="question">
        <header>
            <div
                class="question__arrow"
                :class="{ 'question__arrow--open': expanded }"
                @click="expanded = !expanded"
            >
                <img src="/downarrow.svg" alt="" />
            </div>
            <h4 @click="expanded = !expanded" class="question-title">
                {{ title }}
            </h4>
        </header>
        <div :style="contentStyle" class="content">
            <p :style="infoStyle" class="info">{{ info }}</p>
        </div>
    </article>
</template>

<style scoped lang="scss">
.question {
    background-color: $white;
    padding: 1.3rem;
    // border-radius: 2rem !important;
}

.question p {
    margin-bottom: 0;
    margin-top: 0.6rem;
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 400;
    line-height: 39.2px;
    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 20px;
    }
}
.question header {
    display: flex;
    // justify-content: center;
    align-items: center;
    gap: 20px;
}

.question-title {
    cursor: pointer;
    color: $black;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 40px;
    font-weight: 700;
    line-height: 56px;

    @media (min-width: 992px) and (max-width: 1400px) {
        font-size: 30px;
        line-height: 40px;
    }
    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 28px;
    }
}

.content {
    max-height: 0;
    transition: max-height 0.2s ease-out;
    margin-left: 80px;
    @media (max-width: 768px) {
        margin-left: 0;
    }
}
.info {
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s ease-out;
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 400;
    line-height: 39.2px;
    text-align: left;

    @media (min-width: 992px) and (max-width: 1400px) {
    }
    @media (max-width: 768px) {
    }
}

.question__arrow {
    width: 60px;
    height: 60px;
    cursor: pointer;
    transition: transform 0.3s;
    & img {
        width: 100%;
        height: 100%;
    }
    &--open {
        transform: rotate(180deg);
        transition: transform 0.3s;
    }
}
</style>
