<template>
    <v-card title="On Going Projects">
        <v-card-text>
            <v-row>
                <v-col cols="12" md="4" sm="12" v-for="i in 3" :key="i">
                    <v-card class="mx-auto" max-width="344">
                        <v-card-item>
                            <div>
                                <div class="mb-4">
                                    <v-chip color="red"> Deadline : 10 Feb 2024</v-chip>
                                </div>
                                <div class="text-h4 mb-1">
                                    Office Mangement - {{ i }}
                                </div>
                                <p>Creating an online platform that enables various administrative tasks within
                                    an
                                    organization</p>
                            </div>

                            <v-card :variant="'tonal'" class="mx-auto mb-0" max-width="344">
                                <v-card-item>
                                    <div class="d-flex mb-0 mt-0  align-center justify-space-between ">
                                        <div>
                                            <div class="text-h4 mb-1 ">
                                                20
                                            </div>
                                            <div class="text-h6 mb-1">
                                                Total Tasks
                                            </div>
                                        </div>
                                        <div>
                                            <div class="text-h4 mb-1">
                                                15
                                            </div>
                                            <div class="text-h6 mb-1">
                                                Total Completed
                                            </div>
                                        </div>
                                    </div>

                                </v-card-item>

                            </v-card>

                            <div class="d-flex align-center flex-wrap mt-5">
                                <h6 class="text-h6 me-3">Project Leader:</h6>
                                <v-avatar size="35" variant="outlined" color="surface">
                                    <img src="@/assets/images/users/avatar-1.png" width="35" alt="vector" />
                                </v-avatar>

                            </div>

                            <div class="d-flex align-center flex-wrap mt-3">
                                <h6 class="text-h6 me-4">Members:</h6>
                                <div class="d-flex align-center justify-center flex-wrap ">
                                    <v-avatar size="35" variant="outlined" color="surface" class="ml-n2">
                                        <img src="@/assets/images/users/avatar-4.png" width="35" alt="vector" />
                                    </v-avatar>
                                    <v-avatar size="35" variant="outlined" color="surface" class="ml-n2">
                                        <img src="@/assets/images/users/avatar-3.png" width="35" alt="vector" />
                                    </v-avatar>
                                    <v-avatar size="35" variant="outlined" color="surface" class="ml-n2">
                                        <img src="@/assets/images/users/avatar-2.png" width="35" alt="vector" />
                                    </v-avatar>
                                    <v-avatar size="35" variant="outlined" color="surface" class="ml-n2">
                                        <img src="@/assets/images/users/avatar-1.png" width="35" alt="vector" />
                                    </v-avatar>
                                    <v-avatar color="info" size="35" class="ml-n2">
                                        12+
                                    </v-avatar>
                                </div>
                            </div>

                        </v-card-item>
                    </v-card>
                </v-col>

            </v-row>
        </v-card-text>
    </v-card>
</template>