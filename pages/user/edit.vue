<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
      w-100
    >
      <div class="contents-container">
        <section-large :name="'PROFILE'" />
        <div class="icon-frame w-h-65 mt-5">
          <img class="object-fit-cover w-100" :src='iconImage' />
        </div>
        <v-file-input @change="getFileContent" label="Image"></v-file-input>
        <v-text-field
          v-model="name"
          label="Nickname"
          required
        />
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        />
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          required
        />
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password(confirm)"
          required
        />
        <div class="text-center">
          <v-btn
            color="accent"
            nuxt
            to="/"
            class=""
          >
            Update
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import SectionLarge from '~/components/SectionLarge.vue'
import iconImage from '~/components/images/user-alt-solid.svg'

export default {
  components: {
    SectionLarge
  },
  data () {
    return {
      iconImage
    }
  },
  methods: {
    async getFileContent (file) {
      await this.readFileAsync(file).catch(error => console.log(error))
    },
    readFileAsync (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (file) => {
          this.iconImage = file.target.result
        }
        reader.readAsDataURL(file)
      })
    }
  }
}
</script>
