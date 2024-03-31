<script setup lang="ts">
import { shallowRef } from 'vue';

// icons
import { RiseOutlined, FallOutlined } from '@ant-design/icons-vue';

const fivecards = shallowRef([
    {
        name: 'Annual Leave',
        leave: '16',

    },
    {
        name: 'Medical Leave',
        leave: '5',

    },
    {
        name: 'Other Leave',
        leave: '3',

    },
    {
        name: 'Remaining Leave',
        leave: '8',

    }
]);
</script>
<template>
    <v-row class="my-0">
        <v-col cols="12" sm="6" md="3" v-for="(card5, i) in fivecards" :key="i" :value="card5">
            <v-card elevation="0">
                <v-card variant="outlined" height="80px" color="deep-purple">

                    <v-card-text class="mt-0" height="10px">
                        <div class="text-center">
                            <div>
                                <h6 class="text-h6 ">{{ card5.name }}</h6>
                                <h6 class="text-h5  mb-0">
                                    {{ card5.leave }}

                                </h6>
                                <!-- <span class="text-lightText text-caption pt-5 d-block">You made an extra <span
                                        :class="'text-' + card5.color">{{
                                        card5.text }}</span> this year</span> -->
                            </div>
                        </div>
                    </v-card-text>

                </v-card>
            </v-card>
        </v-col>
    </v-row>
</template>
