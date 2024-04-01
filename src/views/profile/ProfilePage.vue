<template>
    <BaseBreadcrumb :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12" md="12" sm="12">
            <v-card>
                <v-card-item>
                    <v-row>
                        <v-col cols="12" md="6" sm="12">
                            <div class="d-flex">
                                <v-avatar size="120">
                                    <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
                                </v-avatar>
                                <div>
                                    <h3 class="text-h3">John Doe</h3>
                                    <p>UI/UX Design Team</p>
                                    <small>Web Designer
                                    </small>
                                    <p>Employee ID : FT-0001</p>
                                    <small>Date of Join : 1st Jan 2013
                                    </small>
                                    <v-col cols="auto" color="primary">
                                        <v-btn size="large">Send Message</v-btn>
                                    </v-col>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" sm="12">
                            <div class="">
                                <p>Phone:
                                    9876543210</p>
                                <p>Email:
                                    johndoe@example.com</p>
                                <p>Address:
                                    1861 Bayonne Ave, Manchester Township, NJ, 08759</p>
                                <p>Gender:
                                    Male</p>
                                <p>Reports to:</p>
                                <v-avatar size="30">
                                    <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
                                </v-avatar>
                            </div>
                        </v-col>
                    </v-row>

                </v-card-item>

            </v-card>
            <v-card class="mb-0 mt-0">
                <v-tabs v-model="tab">
                    <v-tab value="one">Profile</v-tab>
                    <v-tab value="two">Projects</v-tab>
                    <v-tab value="three">Bank & Statutory</v-tab>
                    <v-tab value="four">Assets</v-tab>
                </v-tabs>
            </v-card>
        </v-col>
    </v-row>
    <v-window v-model="tab">
        <v-window-item value="one">
            <Informtion />
        </v-window-item>
    </v-window>
    <v-window v-model="tab">
        <v-window-item value="two">
            <Project />
        </v-window-item>
    </v-window>
    <v-window v-model="tab">
        <v-window-item value="three">
            <Banking />
        </v-window-item>
    </v-window>
</template>

<script setup>
import { reactive, ref } from "vue";
import Informtion from "./component/InformationComponent.vue";
import Project from "./component/ProjectComponent.vue";
import Banking from "./component/BankingComponent.vue";
const tab = ref("null");
const breadcrumbs = reactive([
    {
        title: 'Profile',
        disabled: false,
        href: '#'
    },
]);
</script>