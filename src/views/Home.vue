<template>
  <div class="container">
      <h2>Права</h2>
      <PermissionsTable
        v-if="rootPermissionTitles !== null"
        :titles="rootPermissionTitles"

      />
    <button class="button black" @click="createPermission">Сохранить</button>
  </div>
</template>

<script>
import API from "@/api/api";
import PermissionsTable from "../components/PermissionsTable";
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: "Home",
  components: {
    PermissionsTable,
  },
  data() {
    return {
      rootPermissionTitles: null,
    };
  },
  methods: {
    ...mapMutations('rootPermission', ['setRootPermission']),
    ...mapGetters('rootPermission', ['getState']),

    async getTemplates() {
      const data = await API.getTemplates();
      this.rootPermissionTitles = data.data.rootPermissionTitles;
      this.setRootPermission(data.data.rootPermission);
    },

    createPermission() {
      const updatedRootPermission = this.getState();
      API.createPermission(updatedRootPermission.rootPermission);
    },
  },
  mounted() {
    this.getTemplates();

  },
};
</script>

<style>
  h2 {
    padding: 0.5rem;
    background-color: #f3f4f6;
    max-width: 8rem;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .button {
    margin-left: auto;
  }
</style>
