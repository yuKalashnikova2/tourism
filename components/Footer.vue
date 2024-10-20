<template>
    <div class="footer">
        <ul class="footer__menu d-none">
            <li class="footer__menu-item">
                <NuxtLink to="#about">О нас</NuxtLink>
            </li>
            <li class="footer__menu-item">
                <NuxtLink to="#services">Услуги</NuxtLink>
            </li>
            <li class="footer__menu-item">
                <NuxtLink to="#stages">Этапы</NuxtLink>
            </li>
            <li class="footer__menu-item">
                <NuxtLink to="#blog">Блог</NuxtLink>
            </li>
            <li class="footer__menu-item">
                <NuxtLink to="#contacts">Контакты</NuxtLink>
            </li>
            <li class="footer__menu-item">
                <NuxtLink to="#faq">FAQ</NuxtLink>
            </li>
        </ul>

        <span class="footer__copyright"
            >© 2024 Лечение в Турции | Эйюп Ахмет Уйгун</span
        >
    </div>
</template>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 19px;
    &__menu {
        display: flex;
        justify-content: center;
        align-items: center;
        // gap: 20px;
        list-style: none;
        margin: 0;
        // @media (max-width: 1270px) {
        //     gap: 10px;
        // }
        &-item {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 16px;
            padding-left: 52px;
            padding-right: 63px;
            padding-bottom: 21px;
            // padding: 16px 53px;
            // max-width: 160px;
            & a {
                font-size: 20px;
                font-weight: 500;
                line-height: 28px;
                @media (max-width: 768px) {
                    font-size: 40px;
                    font-weight: 700;
                    line-height: 56px;
                }
            }
            @media (max-width: 1270px) {
                padding: 10px 30px;
            }
        }
    }
    &__copyright {
        font-size: 16px;
        font-weight: 500;
        line-height: 22.4px;
        text-align: center;
        padding-bottom: 40px;
        @media (max-width: 768px) {
            font-size: 40px;
            font-weight: 700;
            line-height: 56px;
        }
    }
}

.d-none {
    @media (max-width: 992px) {
        display: none;
    }
}
</style>
