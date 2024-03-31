<template>
    <BaseBreadcrumb :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-data-table :headers="headers" :search="search" :items="departments" item-value="name"
            :sort-by="[{ key: 'status', order: 'asc' }]">
            <template v-slot:top>
                <v-toolbar flat height="46" class="px-1">
                    <v-card max-width="400">
                        <v-text-field append-inner-icon="mdi-magnify" density="compact" label="Search Department"
                            clearable variant="outlined" hide-details single-line v-model="search">
                        </v-text-field>
                    </v-card>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ props }">

                            <v-btn class="mt-0" color="primary" dark v-bind="props">
                                Add Department
                            </v-btn>
                        </template>
                        <v-card>
                            <v-form v-model="form" @submit.prevent="onSubmit">
                                <v-card-title>
                                    <span class="text-h5">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>

                                        <v-row>
                                            <v-col cols="12" md="12" sm="12">
                                                <v-text-field clearable v-model="editedItem.name" :rules="[required]"
                                                    variant="outlined" label="Department name"></v-text-field>
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
                    <v-dialog v-model="dialogDelete" max-width="500px" class="overflow-visible">
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
            <template v-slot:item.status="{ value }">
                <v-chip :color="getColor(value)">
                    {{ value == 1 ? 'Active' : 'Deactive' }}
                </v-chip>
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
import { ref, reactive, watchEffect, computed, nextTick } from 'vue';
const form = ref(false);
const loading = ref(false);
const search = ref('');
const dialog = ref(false);
const dialogDelete = ref(false);
const breadcrumbs = reactive([
    {
        title: 'Department',
        disabled: false,
        href: '#'
    },
]);

const headers = reactive([
    {
        title: 'Name',
        align: 'start',
        sortable: false,
        key: 'name',
    },
    { title: 'Status', key: 'status', sortable: false },

    { title: 'Actions', key: 'actions', sortable: false },
]);
const departments = reactive([
    {
        name: 'Frozen Yogurt',
        status: 159,
    }
]);
const required = (v) => {
    return !!v || 'Field is required'
}
const onSubmit = () => {
    if (!form) return
    loading.value = true;
    setTimeout(() => (loading.value = false), 2000)
    if (editedIndex > -1) {
        Object.assign(departments[editedIndex], editedItem)
    } else {
        departments.push(editedItem)
    }
    close()
}

const getColor = (calories) => {
    if (calories > 100) return 'red'
    else if (calories > 50) return 'orange'
    else return 'green'
}
const editedIndex = ref(-1);
const editedItem = reactive({
    name: '',
    status: 0
});
const defaultItem = reactive({
    name: '',
    status: 0
});

const formTitle = computed(() => {

    return editedIndex.value === -1 ? 'New Department' : 'Edit Department'
});
watchEffect(async () => {
    const dialog = (val) => {
        val || close()
    }
    const dialogDelete = (val) => {
        val || closeDelete()
    }
})


const onClick = () => {
};

const editItem = (item) => {
    editedIndex.value = departments.indexOf(item)
    editedItem.value = Object.assign({}, item)
    dialog.value = true
}

const deleteItem = (item) => {
    editedIndex.value = departments.indexOf(item)
    editedItem.value = Object.assign({}, item)
    dialogDelete.value = true
}

const deleteItemConfirm = () => {
    departments.splice(editedIndex, 1)
    closeDelete()
}

const close = async () => {
    dialog.value = false;
    await nextTick(() => {
        editedItem.value = Object.assign({}, defaultItem)
        editedIndex.value = -1
    })
}

const closeDelete = async () => {
    dialogDelete.value = false
    await nextTick(() => {
        editedItem.value = Object.assign({}, defaultItem)
        editedIndex.value = -1
    })
}

const save = () => {
    if (editedIndex > -1) {
        Object.assign(departments[editedIndex], editedItem)
    } else {
        departments.push(editedItem)
    }
    close()
}
</script>

<style scoped>
.text-red {
    color: red;
}

.text-green {
    color: green;
}
</style>