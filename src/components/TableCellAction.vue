<template>
    <tr>
        <td>
            <div class="action" v-for="(action, key) in actions" :key="key">
                <input type="checkbox" class="radio" :id="titleKey+key" @change="handleActionCheckbox(key)">
                <label :for="titleKey+key">{{key}}</label>
            </div>
        </td>
    </tr>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { handleAction } from '../utils/utils.js';

export default {
    name: "TableCellAction",
    props: {
        actions: {
            type: Object,
            required: true,
        },
        titleKey: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapState('rootPermission', ['rootPermission']),

    },
    methods: {
        ...mapMutations('rootPermission', ['setRootPermission']),
        handleActionCheckbox(key) {
            handleAction(this.rootPermission, key, this.titleKey);
        },
    },
}
</script>

<style>
    .action {
        display: flex;
        margin-top: 1rem;
        margin-bottom: 1rem;
        gap: 1rem;
    }
</style>