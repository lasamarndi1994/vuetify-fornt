<template>
    <v-row>
        <v-col cols="12" md="6" sm="12">
            <v-card class="mx-auto card-info" height="320">
                <v-card-text>
                    <div class="d-flex  align-center justify-space-between">
                        <div class="me-5">
                            <div class="text-h5">Employee of the month</div>
                            <p class="text--primary mt-3">
                                We are really proud of the difference you have made which gives everybody the reason to
                                applaud
                                & appreciate
                            </p>
                        </div>
                        <div>
                            <v-avatar color="grey" rounded="0" size="100">
                                <v-img
                                    src="https://smarthr.dreamstechnologies.com/html/template/assets/img/employee-img.png"
                                    cover>
                                </v-img>
                            </v-avatar>
                        </div>
                    </div>

                    <div class="text--primary mt-10">
                        <p class="text-red font-weight-medium mb-2 mt-0"> Congrats, Hanna</p>
                        <p> UI/UX Team Lead</p>
                    </div>

                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="6" sm="12">
            <v-card class="mx-auto" max-height="320">
                <v-card-text>
                    <div class="d-flex align-center justify-space-between">
                        <div class="text-h4">Company Policy</div>
                        <div>
                            <v-btn density="compact" icon="mdi-chevron-left" @click="model = Math.max(model - 1, 0)"
                                class="me-2"></v-btn>
                            <v-btn density="compact" icon="mdi-chevron-right"
                                @click="model = Math.min(model + 1, 4)"></v-btn>
                        </div>
                    </div>

                    <v-carousel :continuous="false" :show-arrows="false" v-model="model" hide-delimiter-background>
                        <v-carousel-item v-for="(slide, i) in slides" :key="i">
                            <v-row class="mt-5">
                                <v-col cols="12" md="6" sm="12">
                                    <v-card class="max-auto company-policy-info">
                                        <v-card-text>
                                            <div class="d-flex align-center">
                                                <div>
                                                    <v-avatar color="info" size="30"> HR </v-avatar>
                                                </div>
                                                <span class="  mb-0  px-2"><b>Leave Policy</b></span>
                                            </div>
                                            <div class="mt-3">
                                                <p class="text--primary">Policy Name : Annual Leave</p>
                                                <p class="text--primary">Updated on : 25 Jan 2023</p>
                                            </div>
                                            <div class="d-flex flex-row-reverse mb-0 mt-0 ">
                                                <v-btn class="ml-2" icon="mdi-paperclip" size="x-small"></v-btn>
                                                <v-btn icon="mdi-eye" size="x-small"></v-btn>
                                            </div>

                                        </v-card-text>
                                    </v-card>

                                </v-col>
                                <v-col cols="12" md="6" sm="12">
                                    <v-card class="max-auto employee-policy-info">
                                        <v-card-text>
                                            <div class="d-flex align-center  flex-wrap">
                                                <div>
                                                    <v-avatar color="success" size="30">
                                                        EP
                                                    </v-avatar>
                                                </div>
                                                <div>
                                                    <span class="mb-0 px-2 "><b>Employee Policy</b></span>
                                                </div>
                                            </div>
                                            <div class="mt-3">
                                                <p class="text--primary">Policy Name : Annual Leave</p>
                                                <p class="text--primary">Updated on : 25 Jan 2023</p>
                                            </div>
                                            <div class="d-flex flex-row-reverse mb-0 mt-0 ">
                                                <v-btn class="ml-2" icon="mdi-paperclip" size="x-small"></v-btn>
                                                <v-btn icon="mdi-eye" size="x-small"></v-btn>
                                            </div>

                                        </v-card-text>
                                    </v-card>

                                </v-col>
                            </v-row>
                        </v-carousel-item>
                    </v-carousel>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref } from 'vue';
const model = ref(0);
const colors = ref([
    'green',
    'secondary',
    'yellow darken-4',
    'red lighten-2',
    'orange darken-1',
]);
const slides = ref([
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
]);

</script>

<style scoped>
.card-info {
    background: #FEDFE3;
    border: 1px solid #FC6075;
}

.company-policy-info {
    background: #E6F5FF;
    border-radius: 5px;
    border: 1px solid #E6F5FF;
}

.employee-policy-info {
    background: #EEFAEF;
    border-radius: 5px;
    border: 1px solid #EEFAEF;
}
</style>
