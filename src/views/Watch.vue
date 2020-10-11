<template>
  <v-container class="root">
    <Loader :isLoading="loading" />
    <v-form v-model="isFormValid">
      <v-row>
        <!-- INPUT -->
        <v-col cols="8" md="10" sm="9" class="align-self-top">
          <v-text-field
            label="Paraqca"
            outlined
            v-model.trim="query"
            @keyup.enter="goPage"
            :rules="[rules.required, rules.insta]"
          ></v-text-field>
          <v-text-field v-show="false" />
        </v-col>
        <!-- BUTTON -->
        <v-col cols="4" md="2" sm="3" class="align-self-top">
          <v-btn
            color="primary"
            elevation="2"
            x-large
            block
            @click="goPage"
            :style="{ width: '100%' }"
            :disabled="!isFormValid"
          >
            <v-icon left>
              mdi-magnify
            </v-icon>
            İzdeu
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-row>
      <Profiles :query="query" />
      <Alert
        v-if="error"
        type="error"
        icon="mdi-alert-outline"
        :text="error"
      />
      <Alert
        v-if="!loading && !page && !error" type="info"
        icon="mdi-alert-circle-outline"
        text="Instagram paraqcasın eńgizip izdeu batırmasın bas"
      />
    </v-row>
    <v-row v-if="!loading && page && !error">
      <Profile
        :className="checkQazaq(page.bio) ? 'valid py-3' : 'invalid py-3'"
        :pic="page.pic"
        :name="page.name"
        :username="page.username"
        :bio="page.bio"
      />
      <Post
        v-for="(post, i) in page.posts"
        :key="i"
        :className="checkQazaq(post.text) ? 'valid' : 'invalid'"
        :img="post.poster"
        :link="`https://www.instagram.com/p/${post.url}`"
        :text="post.text"
      />
      <Alert
        v-if="!page.posts.length"
        type="info"
        icon="mdi-alert-circle-outline"
        text="Postar tabılmadı"
      />
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

import Loader from '@/components/Loader';
import Alert from '@/components/Alert';
import Profiles from '@/components/Profiles';
import Profile from '@/components/Profile';
import Post from '@/components/Post';

export default {
  data: () => ({
    query: '',
    loading: false,
    page: null,
    error: null,
    isFormValid: false,
    rules: {
      required: value => !!value || 'Paraqca eńgizińiz',
      insta: value => {
        const pattern = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/i
        return pattern.test(value) || 'Qate paraqca'
      },
    },
  }),
  components: {
    Loader,
    Alert,
    Profiles,
    Profile,
    Post
  },
  created () {
    if (this.$route.params.username) {
      this.getPageInfo()
    }
  },
  watch: {
    '$route': 'getPageInfo',
    '$route.params.username'() {
      this.query = this.$route.params.username;
    }
  },
  mounted() {
    if (this.$route.params.username) {
      this.query = this.$route.params.username;
    } else {
      this.query = '';
      this.page = null;
      this.error = null;
      this.loading = false;
    }
  },
  methods: {
    goPage() {
      if (this.$route.params.username !== this?.query?.trim() && this.isFormValid && this?.query?.trim()) {
        this.$router.push({ path: `/watch/${this.query.trim()}`});
      }
    },
    getPageInfo() {
      if (this.$route.params.username) {
        this.loading = true;
        axios.get(`https://www.instagram.com/${this.$route.params.username}/?__a=1`)
        .then(res => {
          this.loading = false;
          this.error = null;
          let user = res.data.graphql.user;
          let posts = user.edge_owner_to_timeline_media.edges.map(post => {
            return {
              poster: post.node.display_url,
              url: post.node.shortcode,
              text: post.node.edge_media_to_caption.edges.map(text => text.node.text).join()
            }
          });
          this.page = {
            bio: user.biography,
            pic: user.profile_pic_url,
            name: user.full_name,
            username: user.username,
            posts: posts
          };
          // console.log(this.page);
        })
        .catch(error => {
          this.error = error;
          this.page = null;
        })
        .finally(() => this.loading = false);
      } else {
        this.query = '';
        this.page = null;
        this.error = null;
        this.loading = false;
      }
    },
    checkQazaq(text) {
      let str = text.toLowerCase();
      if (
        str.includes('ә') ||
        str.includes('і') ||
        str.includes('ң') ||
        str.includes('ғ') ||
        str.includes('ү') ||
        str.includes('ұ') ||
        str.includes('қ') ||
        str.includes('ө') ||
        str.includes('һ')
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="scss">
  .root {
    margin-top: 24px;
    .username {
      padding: 0 !important;
    }
    .valid {
      background: #cdffdc;
    }
    .invalid {
      background: #ffcdcd;
    }
    .v-alert {
      padding: 40px 24px;
    }
  }
</style>