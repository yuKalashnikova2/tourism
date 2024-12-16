<script setup></script>

<template>
    <div class="services__page">
        <TitleSection>Наши услуги</TitleSection>
        <div class="mt-20">
            <p class="services__text">
                Мы предлагаем услуги по пересадке волос, неврологии и хирургии,
                стоматологические услуги и пластические операции в Турции. Наши
                партнёры — это только проверенные клиники и опытные врачи.
            </p>
        </div>

        <div class="wrapper">
            <div class="services__wrapper">
                <ServicesCard
                    title="Пересадка волос"
                    desc="Современные методы Саппфир FUE и DHI"
                    borderColor="1"
                    backgroundImage="/p-1.JPG"
                    link="hairtransplant"
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

            <Social />
            <QuestionWrapper />
            <Contacts />
        </div>
    </div>
</template>

<style lang="scss"></style>
