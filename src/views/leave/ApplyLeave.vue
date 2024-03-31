<template>
    <BaseBreadcrumb :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <Widget />
    <v-row class="mb-0">
        <v-data-table :headers="headers" :search="search" :items="desserts" item-value="name"
            :sort-by="[{ key: 'calories', order: 'asc' }]">
            <template v-slot:top>
                <v-toolbar flat height="46" class="px-1">
                    <v-card max-width="400">
                        <v-text-field append-inner-icon="mdi-magnify" density="compact" label="Leave" variant="outlined"
                            hide-details single-line v-model="search" @click:append-inner="onClick">
                        </v-text-field>
                    </v-card>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ props }">

                            <v-btn class="mt-0" color="primary" dark v-bind="props">
                                Apply Leave
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>
                            <v-form v-model="form" @submit.prevent="onSubmit">
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" md="12" sm="12">
                                                <v-select label="Select"
                                                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                                    variant="outlined" :rules="[required]"></v-select>

                                            </v-col>
                                            <v-col cols="12" md="12" sm="12">
                                                <v-text-field variant="outlined" :rules="[required]"
                                                    v-model="editedItem.calories" label="From *"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="12" sm="12">
                                                <v-text-field variant="outlined" :rules="[required]"
                                                    v-model="editedItem.fat" label="To *"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="12" sm="12">
                                                <v-text-field v-model="editedItem.carbs" readonly :rules="['required']"
                                                    label="Number of Days" variant="outlined" disabled></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="12" sm="12">
                                                <v-text-field v-model="editedItem.protein"
                                                    :label="editedItem.name + ' Remaing Leave'" variant="outlined"
                                                    disabled></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="12" sm="12">
                                                <v-text-field v-model="editedItem.protein" label="Total Remaing Leave"
                                                    variant="outlined"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="12" sm="12">
                                                <v-textarea label="Leave Reason *" variant="outlined"></v-textarea>

                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue-darken-1" variant="text" @click="close">
                                        Cancel
                                    </v-btn>
                                    <v-btn type="submit" :disabled="!form" :loading="loading" color="blue-darken-1"
                                        variant="text">
                                        Save
                                    </v-btn>
                                </v-card-actions>
                            </v-form>
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

<script setup>
import { nextTick, ref, reactive, computed, watchEffect } from "vue";
import Widget from "./Widget.vue";

const loading = ref(false);
const search = ref("");
const dialog = ref(false);
const form = ref(false);
const dialogDelete = ref(false);
const breadcrumbs = reactive([
    {
        title: 'Leave',
        disabled: false,
        href: '#'
    },
]);
const headers = reactive([
    { title: 'LEAVE TYPE', align: 'start', sortable: false, key: 'leave_type' },
    { title: 'FROM ', key: 'from_date', sortable: false },
    { title: 'TO', key: 'till_date', sortable: false },
    { title: 'Day(s) Hour(s)', key: 'days_hour', sortable: false },
    { title: 'APPLIED', key: 'applied', sortable: false },
    { title: 'STATUS', key: 'status', sortable: false },
    { title: 'LAST ACTION BY', key: 'last_action_by', sortable: false },
    { title: 'LAST ACTION ON', key: 'last_action_on', sortable: false },

    { title: 'ACTION', key: 'actions', sortable: false },

]);
const desserts = reactive([{
    leave_type: '12-JUN-2024',
    from_date: "10:00-19:00 ",
    punch_in: "10:21",
    punch_out: "19:21",
    total_hrs: "09:05",
    ar_in: "4.0",
    ar_date: "4.0",
    ar_out: "4.0",
    ar_hrs: "4.0",
}
]);
const editedIndex = ref(-1);
const editedItem = reactive({
    leave_type: '',
    from_date: "",
    punch_in: "",
    punch_out: "",
    total_hrs: "",
    ar_in: "",
    ar_date: "",
    ar_out: "",
    ar_hrs: "",
});
const defaultItem = reactive({
    name: '',
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
})

const formTitle = computed(() => {
    return editedIndex.value === -1 ? 'Apply Leave' : 'Edit Leave'
})

// watchEffect() => {
//     dialog(val) {
//         val || this.close()
//     },
//     dialogDelete(val) {
//         val || this.closeDelete()
//     },
// }
const onClick = () => {
}

const editItem = (item) => {
    editedIndex.value = desserts.indexOf(item);
    editedItem.value = Object.assign({}, item);
    dialog.value = true;
}

const deleteItem = (item) => {
    editedIndex.value = desserts.indexOf(item);
    editedItem.value = Object.assign({}, item);
    dialogDelete.value = true;
}

const deleteItemConfirm = () => {
    desserts.splice(editedIndex, 1)
    closeDelete()
}

const close = () => {
    dialog.value = false
    nextTick(() => {
        editedItem.value = Object.assign({}, defaultItem)
        editedIndex.value = -1
    })
};

const closeDelete = () => {
    dialogDelete.value = false
    nextTick(() => {
        editedItem.value = Object.assign({}, defaultItem)
        editedIndex.value = -1
    })
};
const required = (v) => {
    return !!v || 'Field is required'
}
const onSubmit = () => {
    if (!form.value) return;
    if (editedIndex.value > -1) {
        Object.assign(desserts[editedIndex], editedItem)
    } else {
        desserts.push(editedItem)
    }
    close()
}


</script>

<style scoped>
.v-col-12 {
    padding: 4px;
}
</style>