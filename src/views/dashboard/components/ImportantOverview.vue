<template>
    <v-card>
        <v-card-text>
            <div class="d-flex align-center justify-space-between">
                <h4 class="text-h4">Important</h4>
                <v-btn color="teal-accent-4 mb-3 " variant="text">
                    View all
                    <v-icon icon="mdi-chevron-right" end></v-icon>
                </v-btn>
            </div>

            <v-tabs v-model="model" align-tabs="left">
                <v-tab value="tab-1">
                    <v-icon icon="mdi-bell"></v-icon>
                    Notifications
                </v-tab>
                <v-tab value="tab-2">
                    <v-icon icon="mdi-calendar"></v-icon>
                    Schedules
                </v-tab>
            </v-tabs>

            <v-window v-model="model">
                <v-window-item value="tab-1">
                    <v-list :items="items" lines="three" item-props>
                        <template v-slot:subtitle="{ subtitle }">
                            <div v-html="subtitle"></div>
                        </template>
                    </v-list>
                </v-window-item>
                <v-window-item value="tab-2">
                    <v-list :items="items2" lines="three" item-props>
                        <template v-slot:subtitle="{ subtitle }">
                            <div v-html="subtitle"></div>
                        </template>
                    </v-list>
                </v-window-item>
            </v-window>

        </v-card-text>
    </v-card>
</template>

<script setup>
import { ref } from "vue";
const model = ref("");
const items = ref([

    { type: 'subheader', title: 'Today' },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ',
        subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
])

const items2 = ref([

    { type: 'subheader', title: 'Tommorrow' },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ',
        subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
])

</script>