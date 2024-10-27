<template>
    <div class="services" id="services">
        <TitleSection>Наши услуги</TitleSection>
        <div class="mt-20">
            <p class="services__text">
                Мы предлагаем услуги по пересадке волос, неврологии и хирургии,
                стоматологические услуги и пластические операции в Турции. Наши
                партнёры — это только проверенные клиники и опытные врачи.
            </p>
        </div>

        <div class="services__wrapper">
            <ServicesCard
                title="Пересадка волос"
                desc="Современные методы Саппфир FUE и DHI"
                borderColor="1"
                backgroundImage="/p-1.JPG"
            />
            <ServicesCard
                title="Неврология и хирургия"
                desc="Лечение грыжи и болей без операции"
                borderColor="2"
                backgroundImage="/p-2.JPG"
            />
            <ServicesCard
                title="Лечение зубов"
                desc="Импланты, виниры, коронки, отбеливание"
                borderColor="3"
                backgroundImage="/p-3.png"
            />
            <ServicesCard
                title="Эстетическая медицина"
                desc="Пластические операции, липосакция"
                borderColor="4"
                backgroundImage="/p-4.png"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.services {
    &__wrapper {
        margin-top: 40px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        // display: flex;
        // flex-wrap: wrap;
        // justify-content: space-between;
        gap: 20px;
        @media (max-width: 1500px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width:400px) {
            grid-template-columns: 1fr;
        }
    }
}
</style>
