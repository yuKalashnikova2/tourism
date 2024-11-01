<script setup>
import { ref } from 'vue'

const { modalClosed } = useModal()
const isVisible = ref(false)

const toggleBurgerMenu = () => {
    if(modalClosed.value == false   ) {
        isVisible.value = !isVisible.value
    }
   
}
const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        isVisible.value = false
    }
}
</script>
<template>
    <div class="header">
        <div class="header-logo">
            <NuxtLink to="/">
                <img src="/logo.svg" alt="logo" />
            </NuxtLink>
        </div>
        <div class="burger__wrapper">
            <header class="burger__header">
                <div
                    class="burger__button"
                    :class="{ open: isVisible }"
                    @click="toggleBurgerMenu()"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
        </div>
        <ul class="header__menu d-none">
            <li class="header__menu-item">
                <NuxtLink to="#about">О нас</NuxtLink>
            </li>
            <li class="header__menu-item">
                <NuxtLink to="#services">Услуги</NuxtLink>
            </li>
            <li class="header__menu-item">
                <NuxtLink to="#stages">Этапы</NuxtLink>
            </li>
            <li class="header__menu-item">
                <NuxtLink to="#blog">Блог</NuxtLink>
            </li>
            <li class="header__menu-item">
                <NuxtLink to="#contacts">Контакты</NuxtLink>
            </li>
            <li class="header__menu-item">
                <NuxtLink to="#faq">FAQ</NuxtLink>
            </li>
        </ul>

        <Transition>
            <nav class="burger__nav" v-show="isVisible">
                <ul class="burger__list">
                    <li class="burger__item" @click="scrollToSection('about')">
                        О нас
                    </li>
                    <li
                        class="burger__item"
                        @click="scrollToSection('services')"
                    >
                        Услуги
                    </li>
                    <li class="burger__item" @click="scrollToSection('stages')">
                        Этапы
                    </li>
                    <li class="burger__item" @click="scrollToSection('blog')">
                        Блог
                    </li>
                    <li
                        class="burger__item"
                        @click="scrollToSection('contacts')"
                    >
                        Контакты
                    </li>
                    <li class="burger__item" @click="scrollToSection('faq')">
                        FAQ
                    </li>
                </ul>
            </nav>
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    // gap: 129px;
    padding: 20px 0;
    justify-content: space-between;
    @media (max-width: 1440px) {
        gap: 0;
        padding-bottom: 0;
    }
    &-logo {
        width: 120px;
        height: 108px;
        flex-shrink: 0;
        @media (max-width: 1280px) {
            width: 80px;
            height: 72px;
        }
        @media (max-width: 500px) {
            width: 60px;
            height: 54px;
        }
        & img {
            width: 100%;
            object-fit: cover;
            height: auto;
        }
    }
    &__menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 9px;
        list-style: none;
        padding: 14px 0;
        margin: 0;
        @media (max-width: 1440px) {
            gap: 20px;
        }
        @media (max-width: 992px) {
            display: none;
        }
        &-item {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px 60px;
            pointer-events: auto;
            z-index: 10;
            white-space: nowrap;
            @media (max-width: 1440px) {
                padding: 20px 30px;
            }
            & a {
                font-size: 28px;
                font-weight: 500;
                line-height: 39.2px;
                @media (max-width: 768px) {
                    font-size: 40px;
                    font-weight: 700;
                    line-height: 56px;
                }
                @media (max-width: 768px) {
                    font-size: 32px;
                    font-weight: 700;
                    line-height: 44.8px;
                }
                // @media (max-width: 1600px) {
                //     font-size: 20px;
                // font-weight: 500;
                // line-height: 28px;
                // text-align: left;
                // }
            }
            // @media (max-width: 1270px) {
            //     padding: 10px 30px;
            // }
        }
    }
}
// .d-none {
//     @media (max-width: 992px) {
//         display: none;
//     }
// }

.burger {
    position: relative;
    z-index: 9;
    &__wrapper {
        overflow-y: hidden;
        border-radius: 8px;
        display: none;
        @media (max-width: 992px) {
            display: block;
        }
    }
    &__header {
        padding: 23px 34px;
        z-index: 5;
        overflow-y: hidden;
        position: relative;
        @media(max-width: 500px) {
            z-index: 1;
        }
    }
    &__nav {
        background-color: rgba(255, 255, 255, 0.9);
        position: absolute;
        top: 6rem;
        left: 1rem;
        right: 1rem;
        width: 98%;
        display: flex;
        justify-content: center;
        padding: 20px;
        height: auto;
        border-radius: 30px;
        z-index: 9;
        @media (min-width: 993px) {
            display: none;
        }
    }
    &__list {
        display: flex;
        list-style: none;
        flex-direction: column;
        width: 100%;
        gap: 10px;
    }
    &__item {
        cursor: pointer;
        font-size: 1.2rem;
        line-height: 1.5;
        font-weight: 400;
        padding: 16px;
        background-color: #f8f9fa;
        box-shadow: 2px 8px 16px 0px rgba(188, 188, 188, 1);
        border-radius: 15px;
        & a {
            color: $text-black;
        }
        &:hover {
            background-color: #f8f9fa;
            border-bottom: 1px solid $gray;
            border-radius: 15px;
            cursor: pointer;
            transition: 0.3s;
        }
    }
    &__button {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 5;
        align-items: center;
        border: none;
        outline: none;
        width: 30px;
        height: 20px;
        cursor: pointer;
        span {
            display: block;
            position: absolute;
            background-color: $text-black;
            width: 30px;
            height: 2px;
            left: 5px;
            &:nth-child(1) {
                transform: translateY(10px);
                transition: background cubic-bezier(0.075, 0.82, 0.165, 1),
                    opacity 0.3s, transform 0.4s;
            }

            &:nth-child(3) {
                transform: translateY(-10px);
                transition: background cubic-bezier(0.075, 0.82, 0.165, 1),
                    opacity 0.3s, transform 0.4s;
            }
        }
    }
}
.open {
    & span {
        &:nth-child(1) {
            transform: translateY(0) rotate(45deg);
        }
        &:nth-child(2) {
            opacity: 0;
        }
        &:nth-child(3) {
            transform: translateY(0) rotate(-45deg);
        }
    }
}
.m-auto {
    margin: auto;
    @media (min-width: 1500px) {
        display: flex;
        justify-content: center;
    }
}
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.fs-1 {
    font-size: 1.5rem !important;
}
</style>
