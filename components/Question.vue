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
    expanded: Boolean,
})
const emit = defineEmits(['update:expanded'])
// const expanded = ref(false)
const contentStyle = computed(() => {
    return { 'max-height': props.expanded ? '100px' : 0 }
})

const infoStyle = computed(() => {
    return { opacity: props.expanded ? 1 : 0 }
})
</script>
<template>
    <article
        class="question"
        @click="$emit('update:expanded', !props.expanded)"
    >
        <header>
            <div
                class="question__arrow"
                :class="{ 'question__arrow--open': props.expanded }"
            >
                <img src="/downarrow.svg" alt="" />
            </div>
            <h4 class="question-title">
                {{ title }}
            </h4>
        </header>
        <div :style="contentStyle" class="content">
            <p :style="infoStyle" class="info">{{ info }}</p>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.question {
    background-color: $white;
    padding: 1.3rem;
    border-radius: 2rem !important;
}

.question header {
    display: flex;
    gap: 20px;
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

    @media (max-width: 992px) {
        font-size: 30px;
        line-height: 40px;
    }
}

.content {
    max-height: 0;
    transition: max-height 0.2s ease-out;
    grid-row: 2;
    grid-column: 1;
}
.info {
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s ease-out;
    font-size: 28px;
    font-weight: 400;
    line-height: 39.2px;
    text-align: left;

    @media (max-width: 992px) {
        font-size: 20px;
        line-height: 20px;
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
    &--open {
        transform: rotate(180deg);
        transition: transform 0.3s;
    }
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
}
</style>
