<template>
    <v-card class="mx-auto" prepend-icon="mdi-clock" title="Statistics">
        <v-card-text>
            <v-card style="background-color: antiquewhite;">
                <v-card-text>
                    <div class="d-flex align-center justify-space-between">
                        <div>
                            <h6 class="text-h6 font-weight-medium ">Work Time</h6>
                            <h4 class="text-h4  mb-0 text-red font-weight-medium">
                                6 Hrs : 54 Min
                            </h4>
                        </div>
                        <div>
                            <v-btn class="ma-2" color="primary" variant="tonal">
                                <v-icon icon="mdi-checkbox-marked-circle" start></v-icon>
                                Clock-In
                            </v-btn>
                        </div>
                    </div>
                </v-card-text>
            </v-card>
            <div class="d-flex  px-2 align-center  text-center justify-space-between mt-5">
                <v-card class="me-2 ">
                    <p class="mb-1 mt-1">Remaining</p>
                    <p class="mb-1 mt-1">2 Hrs 36 Min</p>
                </v-card>

                <v-card class="me-2">
                    <p class="mb-1 mt-1"> Overtime</p>
                    <p class="mb-1 mt-1">0 Hrs 00 Min</p>
                </v-card>
                <v-card class="me-2">
                    <p class="mb-1 mt-1"> Break</p>
                    <p class="mb-1 mt-1">1 Hrs 20 Min</p>
                </v-card>
            </div>
        </v-card-text>
        <v-divider class="mb-3"></v-divider>

        <v-btn color="teal-accent-4 mb-3 " variant="text">
            View Attendance
            <v-icon icon="mdi-chevron-right	" end></v-icon>
        </v-btn>
    </v-card>
</template>