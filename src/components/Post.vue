<template>
  <v-col cols="12" sm="6" md="4">
    <v-card height="100%" :class="className">
      <v-img
        :src="img"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-btn
          text
          color="white"
          :href="link"
          target="_blank"
        >
          <v-icon left>mdi-link-variant</v-icon>
          Tolıq köru
        </v-btn>
      </v-img>
      <v-card-text>
        {{ text ? text.substr(0,200) : 'Mätin joq' }}...
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ['className', 'img', 'link', 'text']
}
</script>