<template>
    <v-card class="mx-auto" max-width="auto">
        <v-card-text>
            <h4 class="text-h4 text--primary">
                Attendance & Leaves
            </h4>
            <v-row class="mt-5">
                <v-col cols="4">
                    <div class="text-center">
                        <h6 class="text-h5  mb-0 text-red">
                            10
                        </h6>
                        <h6 class="text-h6 font-weight-medium">Total Leaves</h6>
                    </div>
                </v-col>
                <v-col cols="4">
                    <div class="text-center">
                        <h6 class="text-h5  mb-0 text-purple">
                            5.5
                        </h6>
                        <h6 class="text-h6 font-weight-medium">Leaves Taken</h6>
                    </div>
                </v-col>
                <v-col cols="4">
                    <div class="text-center">
                        <h6 class="text-h5  mb-0 text-blue">
                            5.5
                        </h6>
                        <h6 class="text-h6 font-weight-medium">Leaves Absent</h6>
                    </div>
                </v-col>


                <v-col cols="4">
                    <div class="text-center">
                        <h6 class="text-h5  mb-0">
                            0

                        </h6>
                        <h6 class="text-h6 font-weight-medium ">Pending Approval</h6>

                    </div>
                </v-col>
                <v-col cols="4">
                    <div class="text-center">
                        <h6 class="text-h5  mb-0">
                            214
                        </h6>
                        <h6 class="text-h6 font-weight-medium">Working Days</h6>
                    </div>
                </v-col>
                <v-col cols="4">
                    <div class="text-center">
                        <h6 class="text-h5  mb-0">
                            5
                        </h6>
                        <h6 class="text-h6 font-weight-medium">Loss of Pay</h6>
                    </div>
                </v-col>
            </v-row>

        </v-card-text>
        <v-divider class="mb-4"></v-divider>

        <v-btn class="text-none ms-4 text-red mb-5" :color="'primary'" rounded="0">
            Apply Leave
        </v-btn>
    </v-card>
</template>