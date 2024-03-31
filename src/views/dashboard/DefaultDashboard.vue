<script setup>
import { ref } from "vue";
import EmployeeOfMonth from './components/EmployeeOfMonth.vue';
import StatisticsOverview from './components/StatisticsOverview.vue';
import AttendanceLeaves from './components/AttendanceLeaves.vue';
import WorkingHours from './components/WorkingHours.vue';
import UpcomeingEvent from './components/UpcomeingEvent.vue';
import ProjectOverview from './components/ProjectOverview.vue';
import HelpSupport from './components/HelpSupport.vue';
import TransactionHistory from './components/TransactionHistory.vue';
import ImportantOverview from './components/ImportantOverview.vue';
const reveal = ref(false);
const variants = ref(['elevated', 'flat', 'tonal', 'outlined']);


const color = ref('indigo')
const model = ref(null)
</script>
<template>
    <v-row>
        <v-col cols="12" md="12" sm="12">
            <v-row>
                <v-col cols="12" md="6" sm="12">
                    <HelpSupport />
                    <br />
                    <StatisticsOverview />
                    <br />
                    <UpcomeingEvent />
                </v-col>


                <v-col cols="12" md="6" sm="12">
                    <AttendanceLeaves />
                    <br />
                    <WorkingHours />

                </v-col>
            </v-row>
        </v-col>
    </v-row>

    <v-row class="mt-2">
        <v-col cols="12" md="12" sm="12">
            <ImportantOverview />
        </v-col>

    </v-row>

    <v-row class="mt-2">
        <v-col cols="12" md="12" sm="12">
            <ProjectOverview />
        </v-col>
    </v-row>

    <v-row class="mt-2">
        <v-col cols="12" md="12" sm="12">
            <EmployeeOfMonth />
        </v-col>
    </v-row>


</template>
