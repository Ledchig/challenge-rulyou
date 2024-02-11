<template>
    <tr v-for="(item, key) in titles" :key="key">
        <td>
            <div class="item">
                <input class="radio" type="checkbox" :id="key" :name="key" @change="handleCheckbox(key)" v-model="selected[key]" />
                <label :for="key">{{ item.title }}</label>
            </div>
        </td>
        <div v-if="item.items">
            <TableCell :titles="item.items"/>
        </div>
        <div v-if="item.items === undefined">
            <TableCellAction :actions="actions(key)" :titleKey="key" />
        </div>
    </tr>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import TableCellAction from './TableCellAction.vue';
import { getKeyActions } from '../utils/utils.js';

export default {
    name: "TableCell",
    data() {
        return {
            actionsData: null,
        }
    },
    components: {
        TableCellAction
    },
    computed: {
        ...mapState('rootPermission', ['selected', 'rootPermission']),
    },
    props: {
        titles: {
            type: Object,
            required: true,
        },
    },
    methods: {
        ...mapMutations('rootPermission', ['handleSelected']),

        handleCheckbox(key) {
            this.handleSelected(key);
        },
        actions(key) {
            return getKeyActions(this.rootPermission, key);
        },
    },
};
</script>

<style>
    .item {
        display: flex;
        align-items: center;
        margin-left: 1rem;
        gap: 1rem;
    }
</style>