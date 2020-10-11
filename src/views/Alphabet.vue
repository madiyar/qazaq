<template>
  <div>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col
            v-for="(letter, i) in alphabet"
            :key="i"
            cols="12"
            md="2"
          >
            <v-item>
              <v-card
                class="d-flex align-center"
                height="200"
                @click="dialog=true"
              >
                <div class="display-3 flex-grow-1 text-center" :style="{color: letter.vowel ? 'red' : 'blue'}">
                  {{ letter.latin.up }}
                  {{ letter.latin.low }}
                  <small v-for="i in letter.cyryllic" :key="i">{{ i }}</small>
                </div>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>

    
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <!-- LETTER INFO -->
      </v-card>
    </v-dialog>


  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    alphabet: [
      {
        latin: {
          up: 'A',
          low: 'a'
        },
        transcrypt: 'ɑ',
        cyryllic: ['А'],
        vowel: true
      },
      {
        latin: {
          up: 'Ä',
          low: 'ä'
        },
        transcrypt: 'æ',
        cyryllic: ['Ә'],
        vowel: true
      },
      {
        latin: {
          up: 'B',
          low: 'b'
        },
        transcrypt: 'b',
        cyryllic: ['Б'],
      },
      {
        latin: {
          up: 'C',
          low: 'c'
        },
        transcrypt: 'ʃ',
        cyryllic: ['Ш'],
      },
      {
        latin: {
          up: 'D',
          low: 'd'
        },
        transcrypt: 'd',
        cyryllic: ['Д'],
      },
      {
        latin: {
          up: 'E',
          low: 'e'
        },
        transcrypt: 'e',
        cyryllic: ['Е', 'Э'],
        vowel: true
      },
      {
        latin: {
          up: 'F',
          low: 'f'
        },
        transcrypt: 'f',
        cyryllic: ['Ф'],
      },
      {
        latin: {
          up: 'G',
          low: 'g'
        },
        transcrypt: 'g',
        cyryllic: ['Г'],
      },
      {
        latin: {
          up: 'Ğ',
          low: 'ğ'
        },
        transcrypt: 'ɣ',
        cyryllic: ['Ғ'],
      },
      {
        latin: {
          up: 'H',
          low: 'h'
        },
        transcrypt: 'χ',
        cyryllic: ['Х', 'Һ'],
      },
      {
        latin: {
          up: 'I',
          low: 'ı'
        },
        transcrypt: 'ɯ',
        cyryllic: ['Ы'],
        vowel: true
      },
      {
        latin: {
          up: 'İ',
          low: 'i'
        },
        transcrypt: 'ɘ',
        cyryllic: ['І'],
        vowel: true
      },
      {
        latin: {
          up: 'J',
          low: 'j'
        },
        transcrypt: 'ʒ',
        cyryllic: ['Ж'],
      },
      {
        latin: {
          up: 'K',
          low: 'k'
        },
        transcrypt: 'k',
        cyryllic: ['К'],
      },
      {
        latin: {
          up: 'L',
          low: 'l'
        },
        transcrypt: 'l',
        cyryllic: ['Л'],
      },
      {
        latin: {
          up: 'M',
          low: 'm'
        },
        transcrypt: 'm',
        cyryllic: ['М'],
      },
      {
        latin: {
          up: 'N',
          low: 'n'
        },
        transcrypt: 'n',
        cyryllic: ['Н'],
      },
      {
        latin: {
          up: 'Ń',
          low: 'ń'
        },
        transcrypt: 'ŋ',
        cyryllic: ['Ң'],
      },
      {
        latin: {
          up: 'O',
          low: 'o'
        },
        transcrypt: 'o',
        cyryllic: ['О'],
        vowel: true
      },
      {
        latin: {
          up: 'Ö',
          low: 'ö'
        },
        transcrypt: 'œ',
        cyryllic: ['Ө'],
        vowel: true
      },
      {
        latin: {
          up: 'P',
          low: 'p'
        },
        transcrypt: 'p',
        cyryllic: ['П'],
      },
      {
        latin: {
          up: 'Q',
          low: 'q'
        },
        transcrypt: 'q',
        cyryllic: ['Қ'],
      },
      {
        latin: {
          up: 'R',
          low: 'r'
        },
        transcrypt: 'r',
        cyryllic: ['Р'],
      },
      {
        latin: {
          up: 'S',
          low: 's'
        },
        transcrypt: 's',
        cyryllic: ['С'],
      },
      {
        latin: {
          up: 'T',
          low: 't'
        },
        transcrypt: 't',
        cyryllic: ['Т'],
      },
      {
        latin: {
          up: 'U',
          low: 'u'
        },
        transcrypt: 'ɤ',
        cyryllic: ['Ұ'],
        vowel: true
      },
      {
        latin: {
          up: 'Ü',
          low: 'ü'
        },
        transcrypt: 'y',
        cyryllic: ['Ү'],
        vowel: true
      },
      {
        latin: {
          up: 'V',
          low: 'v'
        },
        transcrypt: 'v',
        cyryllic: ['В'],
      },
      {
        latin: {
          up: 'W',
          low: 'w'
        },
        transcrypt: 'w',
        cyryllic: ['У'],
      },
      {
        latin: {
          up: 'Y',
          low: 'y'
        },
        transcrypt: 'j',
        cyryllic: ['Й'],
      },
      {
        latin: {
          up: 'Z',
          low: 'z'
        },
        transcrypt: 'z',
        cyryllic: ['З'],
      },
    ]
  })
}
</script>