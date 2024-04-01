<template>
    <v-row class="mt-5 mb-2">
        <v-col cols="12" md="12" sm="12">
            <v-card>
                <v-card-item>
                    <h4 class="text-h4">Basic Salary Information</h4>

                    <v-row>
                        <v-col cols="12" md="4" sm="12">
                            <v-text-field label="Salary basis * " variant="outlined"></v-text-field>

                        </v-col>
                        <v-col cols="12" md="4" sm="12">
                            <v-text-field label="Salary amount per month
 * " variant="outlined" prepend-inner-icon="mdi-dolar"></v-text-field>

                        </v-col>
                        <v-col cols="12" md="4" sm="12">
                            <v-text-field label="Payment type  " variant="outlined"></v-text-field>

                        </v-col>
                    </v-row>
                </v-card-item>
            </v-card>

        </v-col>
    </v-row>
</template>