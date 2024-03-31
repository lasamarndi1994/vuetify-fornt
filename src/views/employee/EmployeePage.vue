<template>
    <BaseBreadcrumb :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-data-table :headers="headers" :search="search" :items="employess" item-value="name"
            :sort-by="[{ key: 'calories', order: 'asc' }]">
            <template v-slot:top>
                <v-toolbar flat height="46" class="px-1">
                    <v-card max-width="400">
                        <v-text-field append-inner-icon="mdi-magnify" density="compact" label="Search Employee"
                            variant="outlined" hide-details single-line v-model="search" @click:append-inner="onClick">
                        </v-text-field>
                    </v-card>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" persistent max-width="800px">
                        <template v-slot:activator="{ props }">
                            <v-btn class="mt-0" color="primary" dark v-bind="props">
                                Add Employee
                            </v-btn>
                        </template>
                        <v-card>

                            <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>
                            <v-form v-model="form" @submit.prevent="onSunmit">
                                <v-card-text>
                                    <v-container>

                                        <v-row>
                                            <v-col cols="12" md="6" sm="6">
                                                <v-text-field v-model="editedItem.first_name" label="First name *"
                                                    variant="outlined" :rules="[required]"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="6" sm="6">
                                                <v-text-field v-model="editedItem.last_name" variant="outlined"
                                                    label="Last name *" :rules="[required]"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12" md="6" sm="6">
                                                <v-text-field v-model="editedItem.email" label="Email *" type="email"
                                                    variant="outlined" :rules="[required, email]"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="6" sm="6">
                                                <v-text-field v-model="editedItem.phone_number" label="Phone number *"
                                                    variant="outlined" :rules="[required]"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12" md="6" sm="6">
                                                <v-text-field type="date" v-model="editedItem.joining_date"
                                                    label="Joining date *" variant="outlined"
                                                    :rules="[required]"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="6" sm="6">
                                                <v-text-field v-model="editedItem.employee_id" label="Employee ID *"
                                                    variant="outlined" :rules="[required]"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>

                                            <v-col cols="12" md="6" sm="6">
                                                <v-select v-model="editedItem.deparment_id" :items="deparments"
                                                    item-title="name" variant="outlined" item-value="id"
                                                    label="Select Department *" :rules="[required]"></v-select>
                                            </v-col>
                                            <v-col cols="12" md="6" sm="6">
                                                <v-select v-model="editedItem.designation_id"
                                                    label="Select Designation *" item-title="name" variant="outlined"
                                                    item-value="id" :items="designations"
                                                    :rules="[required]"></v-select>
                                            </v-col>
                                        </v-row>

                                    </v-container>

                                    <v-table density="compact">
                                        <thead>
                                            <tr>
                                                <th class="text-left">
                                                    Name
                                                </th>
                                                <th class="text-left">
                                                    Read
                                                </th>
                                                <th class="text-left">
                                                    Write
                                                </th>
                                                <th class="text-left">
                                                    Delete
                                                </th>
                                                <th class="text-left">
                                                    Import
                                                </th>
                                                <th class="text-left">
                                                    Export
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="module in modules" :key="module.id">
                                                <td>{{ module.name }}</td>
                                                <td>
                                                    <v-checkbox v-model="module.read" color="indigo"></v-checkbox>
                                                </td>
                                                <td> <v-checkbox v-model="module.write" color="indigo"></v-checkbox>
                                                </td>
                                                <td> <v-checkbox v-model="module.delete" color="indigo"></v-checkbox>
                                                </td>
                                                <td> <v-checkbox v-model="module.import" color="indigo"></v-checkbox>
                                                </td>
                                                <td> <v-checkbox v-model="module.export" color="indigo"></v-checkbox>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </v-table>
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
            <template v-slot:item.name="{ item }">
                <div class="d-flex">
                    <v-avatar size="32px">
                        <v-img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                    </v-avatar>
                    <strong class="ml-2 mt-1"> {{ item.name }}</strong>
                </div>
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
import { ref, reactive, computed, nextTick, watchEffect } from 'vue';
const loading = ref(false);
const search = ref('');
const form = ref(false);
const dialog = ref(false);
const dialogDelete = ref(false);
const breadcrumbs = reactive([
    {
        title: 'Employees',
        disabled: false,
        href: '#'
    },
]);

const deparments = reactive([
    {
        id: "1",
        name: "Manager",
    },
    {
        id: "2",
        name: "Sale",
    },
    {
        id: "3",
        name: "Datewire House",
    }
]);

const designations = reactive([
    {
        id: "1",
        name: "Deleover",
    },
    {
        id: "2",
        name: "Software",
    },
    {
        id: "3",
        name: "Juinor Deveoper",
    }
]);
const headers = reactive([
    {
        title: 'Name',
        align: 'start',
        sortable: false,
        key: 'name',
    },
    { title: 'Employee ID', key: 'employee_id' },
    { title: 'Email', key: 'email' },
    { title: 'Mobile', key: 'mobile' },
    { title: 'Join Date', key: 'join_date' },
    { title: 'Role', key: 'role' },
    { title: 'Actions', key: 'actions', sortable: false },
]);
const employess = reactive([
    {
        name: 'Lasa Marndi ',
        employee_id: "EMP0001",
        email: "email@gmai.com",
        mobile: "9337243362",
        join_date: "20-03-2022",
        role: "Web Developer"
    }
]);


const editedIndex = ref(-1);
const editedItem = reactive({
    name: '',
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
});
const defaultItem = reactive({
    name: '',
    employee_id: "",
    email: "",
    mobile: "",
    join_date: "",
    role: " "
});


const formTitle = computed(() => {
    return editedIndex.value === -1 ? 'Add Employee' : 'Edit Employee'
})
const required = (v) => {
    return !!v || 'Field is required'
}
const email = (email) => {
    const v = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    return !!v || 'Invalid email address'
}

const onSunmit = () => {
    if (!form) return;
    loading.value = true;
    setTimeout(() => (loading.value = false), 2000);
    if (editedIndex > -1) {
        Object.assign(employess[this.editedIndex], editedItem)
    } else {
        employess.push(editedItem)
    }
    close();

}

// watchEffect = () => {
//     const dialog = (val) => {
//         val || close()
//     }
//     const dialogDelete = (val) => {
//         val || closeDelete()
//     }
// }

const onClick = () => {
}

const editItem = (item) => {
    editedIndex.value = employess.indexOf(item)
    editedItem.value = Object.assign({}, item)
    dialog.value = true;
}

const deleteItem = (item) => {
    editedIndex.value = employess.indexOf(item)
    editedItem.value = Object.assign({}, item)
    dialogDelete.value = true
}

const deleteItemConfirm = () => {
    employess.splice(editedIndex, 1)
    closeDelete()
}

const close = () => {
    dialog.value = false;
    nextTick(() => {
        editedItem.value = Object.assign({}, defaultItem)
        editedIndex.value = -1
    })
}

const closeDelete = () => {
    dialogDelete.value = false;
    nextTick(() => {
        editedItem.value = Object.assign({}, this.defaultItem);
        editedIndex.value = -1;
    })
};

const initialize = () => {

}

const modules = reactive([
    {
        "id": 1,
        "name": "Holidays",
        "read": true,
        "write": true,
        "create": false,
        "delete": true,
        "import": false,
        "export": true,
    },
    {
        "id": 2,
        "name": "Leaves",
        "read": true,
        "write": false,
        "create": true,
        "delete": false,
        "import": true,
        "export": true,
    },
    {
        "id": 3,
        "name": "Clients",
        "read": true,
        "write": false,
        "create": true,
        "delete": false,
        "import": true,
        "export": true,
    },
    {
        "id": 4,
        "name": "Projects",
        "read": true,
        "write": false,
        "create": true,
        "delete": false,
        "import": true,
        "export": true,
    },
    {
        "id": 5,
        "name": "Tasks",
        "read": true,
        "write": false,
        "create": false,
        "delete": false,
        "import": false,
        "export": false,
    }
]);


</script>

<style></style>