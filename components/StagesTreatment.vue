<template>
    <div class="stages">
        <TitleSection>Этапы лечения в Турции</TitleSection>

        <div class="mt-20">
            <p class="services__text">
                Вы получите помощь на каждом этапе лечения, чтобы ваша поездка
                была максимальна комфортна. Начинаем с консультации, где обсудим
                ваши цели и подберём оптимальные варианты. Затем мы организуем
                все детали поездки, включая перелёт и размещение.
            </p>
        </div>

        <div class="stages__wrapper">
            <StagesCard
                title="Бесплатная консультация"
                desc="Поможем выбрать лучшую клинику и врача, направляя запросы к узкопрофильным специалистам."
                color="#4245D7"
            />
            <StagesCard
                title="Связываемся с специалистами"
                desc="Предлагаем лучшие варианты, учитывая цены, квалификацию специалистов и ваши предпочтения."
                color="#429FD7"
            />
            <StagesCard
                title="Организуем Перелёт"
                desc="После определения клиник, договариваемся о всех  моментах. От перелёта до трансфера в отель у аэропорта."
                color="#67CFB8"
            />
            <StagesCard
                title="Поддержка 24/7"
                desc="Сопровождаем на всех этапах лечения. На связи 24/7 - поможем с любыми вопросами и трудностями."
                color="#D742BC"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.stages {
    &__wrapper {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-top: 40px;
        @media (max-width: 1400px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 992px) {
            grid-template-columns: 1fr;
            gap: 30px;
        }
    }
}
</style>
