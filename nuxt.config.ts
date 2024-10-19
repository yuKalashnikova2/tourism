// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/main.scss'],
  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: '@use "~/assets/_variables.scss" as *;',
              },
          },
      },
  },
  head: {
    title: 'zdorovye i turizm',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' } // Путь к фавикону
    ],
    script: [
        {
            hid: 'yandex-metrika',
            innerHTML: `
(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {
    if (document.scripts[j].src === r) { return; }
  }
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(97898876, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true
});
`,
            type: 'text/javascript',
            charset: 'utf-8',
            body: true,
        },
    ],
    noscript: [
        {
            hid: 'yandex-metrika-noscript',
            innerHTML: `<div><img src="https://mc.yandex.ru/watch/97898876" style="position:absolute; left:-9999px;" alt="" /></div>`,
            body: true,
        },
    ],
    __dangerouslyDisableSanitizers: ['script', 'noscript'],
  }

})
