<template>
    <v-card class="mx-auto back-ground-color">
        <v-card-text>
            <div class="d-flex align-center justify-space-between">
                <div>
                    <h5 class="text-h4 mb-0 text-whiteText">Welcome Back, Darlee</h5>
                    <h6 class=" text-h6 ">You have 4 meetings today,</h6>
                </div>
                <div class="d-flex align-center justify-center flex-wrap flex-row-reverse">
                    <v-avatar size="52px">
                        <v-img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                    </v-avatar>
                    <!-- <v-avatar size=" 64" color="surface">
              <img src="@/assets/images/users/avatar-1.png" width="35" alt="vector" />
          </v-avatar> -->
                </div>

            </div>

            <!-- <v-btn color="primary" block variant="flat" density="comfortable" class="mt-6"
        href="https://codedthemes.support-hub.io/" target="_">Need Help?</v-btn> -->
        </v-card-text>
        <v-btn class="text-none ms-4 text-red mb-5" :color="color" rounded="0">
            View Profile
        </v-btn>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'

const variant = ref(['elevated', 'flat', 'tonal', 'outlined']);
const color = ref("primary");
</script>
<style>
.back-ground-color {
    /* background: #009EFB */
    /* background: linear-gradient(90.31deg, #FF902F -1.02%, #FF2D3D 132.59%); */
}

.text-whiteText {
    /* color: white; */
}
</style>
