<script setup>

</script>

<template>
  <v-card title="Upcoming Holidays" class="info-card text-white">
    <v-card-text>
      <div class="d-flex align-center  justify-space-between">
        <div class="d-flex align-center  justify-space-between">
          <!-- <v-icon="mdi-calendar"></v-icon> -->
          <v-icon icon="mdi-calendar" start size="42"></v-icon>
          <div>
            <p class="mt-0 mb-0">Ramzan</p>
            <p class="mt-1 mb-1" size="20">Mon 20 May 2024</p>
          </div>
        </div>
        <div>
          <v-btn class="text-black">View All</v-btn>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.info-card {
  background: #009EFB;
  border: 1px solid #009EFB;
  position: relative;
  overflow: hidden;
}
</style>
