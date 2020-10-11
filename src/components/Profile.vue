<template>
  <v-col cols="12">
    <v-card :class="className">
      <v-list-item three-line>
        <v-list-item-avatar size="100">
          <img :src="pic" :alt="name">
        </v-list-item-avatar>
        <v-list-item-content>
          <div class="overline mb-1">
            <v-btn
              text
              class="username"
              :href="`http://instagram.com/${username}`"
              target="_blank"
            >
              {{ username }}
            </v-btn>
          </div>
          <v-list-item-title class="headline mb-1">
            {{ name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ bio }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ['className', 'pic', 'name', 'username', 'bio']
}
</script>