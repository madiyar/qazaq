<template>
  <v-col cols="12">
    <v-alert text :type="type" :icon="icon">
      {{ text }}
    </v-alert>
  </v-col>
</template>

<script>
export default {
  props: ['icon', 'text', 'type']
}
</script>