<template>
  <v-app-bar
    app
    absolute
    color="#6A76AB"
    dark
    shrink-on-scroll
    prominent
    src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll
    scroll-target="#content"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

    <v-toolbar-title>Qazaq Grammar</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      icon
      v-for="link in links"
      :key="link.href"
      :href="link.href"
      target="_blank"
    >
      <v-icon>{{ link.icon }}</v-icon>
    </v-btn>

    <template v-slot:extension>
      <v-tabs centered>
        <v-tab
          v-for="tab in tabs"
          :key="tab.to"
          :to="tab.to"
        >
          {{ tab.label }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    tabs: [
      { to: '/watch', label: 'Watch Qazaq' },
      { to: '/translit', label: 'Transliter' },
      // { to: '/alphabet', label: 'Älipbiy' },
    ],
    links: [
      { href: 'https://www.instagram.com/qazaqgrammar/', icon: 'mdi-instagram' },
      { href: 'https://t.me/qazaqshajaz', icon: 'mdi-telegram' },
      { href: 'https://vk.com/qazaq.grammar', icon: 'mdi-vk' },
    ]
  })
}
</script>