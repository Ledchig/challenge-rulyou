<template>
  <div class="table-wrap">
    <table>
      <TableCell :titles="titles" />
    </table>
  </div>
</template>
<script>
import TableCell from "@/components/TableCell";

export default {
  name: "PermissionsTable",
  props: {
    titles: {
      type: Object,
      required: true,
    },
  },
  components: {
    TableCell
  },
};
</script>

<style>
.table-wrap {
    overflow: scroll;
    margin-bottom: 2rem;
  }
</style>