<script setup lang="ts">
const title = ref('Лечение в Турции в 2024 году. Бесплатная консультация!')
const description = ref(
    'Подберём лучшую клинику в Турции по вашим критериям. Пересадка волос FUE, DHI, лечение зубов, пластические операции, нейрохирургия. Клиники в Стамбул, Измир, Анталья.'
)

useHead({
    script: [
        {
            hid: 'yandex-metrika',
            innerHTML: `
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(97898876, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
`,
        },
        {
            hid: 'mail-pixel-script',
            type: 'text/javascript',
            innerHTML: `
      var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "3576505", type: "pageView", start: (new Date()).getTime()});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = "https://top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "tmr-code");

      `,
            crossorigin: 'anonymous',
        },
    ],
    noscript: [
        {
            hid: 'yandex-metrika-noscript',
            innerHTML: `<div><img src="https://mc.yandex.ru/watch/97898876" style="position:absolute; left:-9999px;" alt="" /></div>`,
            body: true,
        },
        {
            hid: 'mail-pixel-noscript',
            children: `<div><img src="https://top-fwz1.mail.ru/counter?id=3576505;js=na" style="position:absolute;left:-9999px;" alt="Top.Mail.Ru" /></div>`,
        },
    ],
    __dangerouslyDisableSanitizers: ['script', 'noscript'],
    __dangerouslyDisableSanitizersByTagID: {
        'tmr-code': ['innerHTML'],
        'yandex-metrika': ['innerHTML'],
    },
    title,
    meta: [
        {
            name: 'description',
            content:
                'Подберём лучшую клинику в Турции по вашим критериям. Пересадка волос FUE, DHI, лечение зубов, пластические операции, нейрохирургия. Клиники в Стамбул, Измир, Анталья.',
        },
        { property: 'og:title', content: 'Лечение в Турции в 2024 году' },
        {
            property: 'og:description',
            content:
                'Подберём лучшую клинику в Турции по вашим критериям. Пересадка волос FUE, DHI, лечение зубов, пластические операции, нейрохирургия. Клиники в Стамбул, Измир, Анталья.',
        },
        { property: 'og:image', content: '/image-meta.png' },
        { property: 'og:site_name', content: 'Лечение в Турции в 2024 году.' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <Header />
            <NuxtPage />
            <Footer />
        </div> 
    </div>
</template>
