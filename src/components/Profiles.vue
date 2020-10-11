<template>
  <v-col cols="12">
    <v-expansion-panels flat focusable>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>
            <v-icon left>mdi-format-list-bulleted</v-icon>
            Paraqcalar
          </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-chip
            v-for="profile in profiles"
            :key="profile"
            class="ma-2"
            color="primary"
            :outlined="query !== profile"
            label
            :to="{ path: `/watch/${profile}` }"
          >
            <v-icon left>
              mdi-instagram
            </v-icon>
            @{{ profile }}
          </v-chip>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>
</template>

<script>
export default {
  props: ['query'],
  data: () => ({
    profiles: [
      'alserkz',
      'altel_kz',
      'astana_motors',
      'aviatakz',
      'beautymaniakz',
      'burgerking_kz',
      'chocofood.kz',
      'costacoffee_kz',
      'evrika.kazakhstan',
      'forakz',
      'f.c.kairat',
      'glovo_kz',
      'hardeeskz',
      'huaweimobilekz',
      'kaspi.kz',
      'kazguukz',
      'kfc_kz',
      'lenovokz',
      'lg_electronics_kz',
      'mechta.kz',
      'minisokz',
      'monamie.kz',
      'mothercarekazakhstan',
      'officialtoyotakz',
      'pepsi_kazakhstan',
      'qazaqair_official',
      'rahmetapp',
      'samal_water',
      'samsungkz',
      'shoqansuits',
      'sulpak',
      'starbuckskz',
      'technodomkz',
      'ukinkz',
      'wolt.kazakhstan',
      'xiaomi.kazakhstan',
    ]
  })
}
</script>