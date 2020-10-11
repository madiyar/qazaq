<template>
  <v-card class="translit" elevation="4">
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-space-around align-center">
          <v-card-title>Kirillisa:</v-card-title>
          <v-btn icon>
            <v-icon>mdi-swap-horizontal</v-icon>
          </v-btn>
          <v-card-title>Qazaq Grammar:</v-card-title>
        </v-col>
        <v-col cols="12" md="6">
          <v-divider />
          <v-textarea
            outlined
            clearable
            clear-icon="mdi-close"
            placeholder="Mätin eńgizińiz"
            class="textarea"
            counter="5000"
            v-model.trim="text"
            @input="translit"
          ></v-textarea>
        </v-col>
        <v-col cols="12" md="6">
          <v-divider />
          <v-textarea
            outlined
            class="textarea"
            readonly
            v-model.trim="result"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data: () => ({
    text: 'Әзірше бұл жерде ескі транслитер',
    result: '',
    temp: '',
    abc: {
      'ц': 's', 'Ц': 'S', 
      'щ': 'sh', 'Щ': 'Sh',
      'а': 'a', 'А': 'A',
      'ә': 'ä', 'Ә': 'Ä',
      'б': 'b', 'Б': 'B',
      'ш': 'c', 'Ш': 'C',
      'ч': 'ç', 'Ч': 'Ç',
      'д': 'd', 'Д': 'D',
      'е': 'e', 'Е': 'E',
      'ё': 'ó', 'Ё': 'Ó',
      'э': 'e', 'Э': 'E',
      'ф': 'f', 'Ф': 'F',
      'г': 'g', 'Г': 'G',
      'ғ': 'ğ', 'Ғ': 'Ğ',
      'х': 'h', 'Х': 'H',
      'һ': 'h', 'Һ': 'H',
      'и': 'ı', 'И': 'I',
      'й': 'ı', 'Й': 'I',
      'і': 'i', 'І': 'İ',
      'ж': 'j', 'Ж': 'J',
      'к': 'k', 'К': 'K',
      'қ': 'q', 'Қ': 'Q',
      'л': 'l', 'Л': 'L',
      'м': 'm', 'М': 'M',
      'н': 'n', 'Н': 'N',
      'ң': 'ń', 'Ң': 'Ń',
      'о': 'o', 'О': 'O',
      'ө': 'ö', 'Ө': 'Ö',
      'п': 'p', 'П': 'P',
      'р': 'r', 'Р': 'R',
      'с': 's', 'С': 'S',
      'т': 't', 'Т': 'T',
      'у': 'u', 'У': 'U',
      'ұ': 'ú', 'Ұ': 'Ú',
      'ю': 'ú', 'Ю': 'Ú',
      'ү': 'ü', 'Ү': 'Ü',
      'в': 'v', 'В': 'V',
      'ы': 'y', 'Ы': 'Y',
      'з': 'z', 'З': 'Z',
      'я': 'á', 'Я': 'Á',
      ' ': ' ', 'ъ': '', 'Ъ': '', 'ь': '', 'Ь': ''
    }
  }),
  methods: {
    translit: function () {
      if (this.text.length > 0) {
        let mess = this.text.replace(/сц/, 's').replace(/Сц/, 'S').replace(/СЦ/, 'S').replace(/сЦ/, 's');
        mess = mess.replace(/ия/, 'ıa').replace(/Ия/, 'Ia').replace(/ИЯ/, 'IA').replace(/иЯ/, 'ıa');
        for (var i = 0; i < mess.length; i++) {
          this.temp += (this.abc[mess.charAt(i)]) ? this.abc[mess.charAt(i)] : mess.charAt(i);
        }
        this.result = this.temp;
        this.temp = '';
      }
    },
  }
}
</script>

<style lang="scss">
  .translit {
    margin: 24px 0;
    .v-card__title {
      width: 100%;
      justify-content: center;
    }
    .textarea fieldset {
      border: none !important;
    }
  }
</style>