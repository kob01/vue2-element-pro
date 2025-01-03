<template>
  <div class="table-page">
    <Table :column="column" :data="tableData">
      <template #operation="{ row }">
        <el-button type="text" size="small" @click="handleEdit(row)">编辑</el-button>
      </template>
    </Table>
    <Pagination />
  </div>
</template>

<script>
import Table from "@/components/table/index.vue";
import Pagination from "@/components/pagination/index.vue";

export default {
  name: "TablePage",
  components: {
    Table,
    Pagination,
  },
  props: {},
  data() {
    return {
      column: [
        {
          label: "文件名",
          prop: "FileName",
          align: "center",
        },
        {
          label: "文件大小",
          prop: "FileSize",
          align: "center",
        },
        {
          label: "上传时间",
          prop: "UploadTime",
          align: "center",
        },
        {
          label: "操作",
          align: "center",
          prop: "operation",
          slot: true,
        },
      ],
      tableData: [
        {
          FileName: "文件1",
          FileSize: "100M",
          UploadTime: "2021-01-01",
        },
        {
          FileName: "文件2",
          FileSize: "200M",
          UploadTime: "2021-01-02",
        },
      ],
    };
  },
  created() { },
  mounted() { },
  computed: {},
  watch: {},
  methods: {
    handleEdit(r) {
      console.log("r", r);
    },
  },
};
</script>

<style scoped></style>
