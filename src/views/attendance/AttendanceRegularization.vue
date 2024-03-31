<template>
    <BaseBreadcrumb :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-data-table :headers="headers" :search="search" :items="desserts" item-value="name"
            :sort-by="[{ key: 'calories', order: 'asc' }]">
            <template v-slot:top>
                <v-toolbar flat height="46" class="px-1">
                    <v-card max-width="400">
                        <v-text-field :loading="loading" append-inner-icon="mdi-magnify" density="compact"
                            label="Attendance cycle" variant="outlined" hide-details single-line v-model="search"
                            @click:append-inner="onClick">
                        </v-text-field>
                    </v-card>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ props }">

                            <!-- <v-btn class="mt-0" color="primary" dark v-bind="props">
                                Add Employee
                            </v-btn> -->
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" md="4" sm="6">
                                            <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="6">
                                            <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="6">
                                            <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="6">
                                            <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="6">
                                            <v-text-field v-model="editedItem.protein"
                                                label="Protein (g)"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue-darken-1" variant="text" @click="close">
                                    Cancel
                                </v-btn>
                                <v-btn color="blue-darken-1" variant="text" @click="save">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon class="me-2" size="small" @click="editItem(item)">
                    mdi-pencil
                </v-icon>
                <v-icon size="small" @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">
                    Reset
                </v-btn>
            </template>
        </v-data-table>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        loading: false,
        search: '',
        dialog: false,
        dialogDelete: false,
        breadcrumbs: [
            {
                title: 'Attendance',
                disabled: false,
                href: '#'
            },
        ],
        headers: [
            { title: 'DATE', align: 'start', sortable: false, key: 'date' },
            { title: 'SHIFT', key: 'shift', sortable: false },
            { title: 'PUNCH IN', key: 'punch_in', sortable: false },
            { title: 'PUNCH OUT', key: 'punch_out', sortable: false },
            { title: 'TOTAL HRS', key: 'total_hrs', sortable: false },
            { title: 'AR IN', key: 'ar_in', sortable: false },
            { title: 'AR DATE', key: 'ar_date', sortable: false },
            { title: 'AR OUT', key: 'ar_out', sortable: false },
            { title: 'AR HRS', key: 'ar_hrs', sortable: false },
            { title: 'Action', key: 'actions', sortable: false },

        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
        defaultItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.desserts = [
                {
                    date: '12-JUN-2024',
                    shift: "10:00-19:00 (10:00-19:00)",
                    punch_in: "10:21",
                    punch_out: "19:21",
                    total_hrs: "09:05",
                    ar_in: 4.0,
                    ar_date: 4.0,
                    ar_out: 4.0,
                    ar_hrs: 4.0,
                },

            ]
        },
        onClick() {
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>

<style></style>