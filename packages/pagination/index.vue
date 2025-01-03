<template>
  <el-pagination
    :current-page="currentPage_"
    :page-size="pageSize_"
    :page-sizes="pageSizes"
    :background="background"
    :layout="layout"
    :total="total"
    v-bind="$attrs"
    v-on="$listeners"
    @current-change="onCurrentChange"
    @size-change="onSizeChange"
    class="is-background page_location"
  >
    <slot v-if="$slots.default"></slot>
  </el-pagination>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    background: {
      type: Boolean,
      default: true,
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper",
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40, 50],
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      pageSize_: this.pageSize,
      currentPage_: this.currentPage,
      initPageSize: this.pageSize,
      initCurrentPage: this.currentPage,
    };
  },
  watch: {
    currentPage(val = 1) {
      this.currentPage_ = val;
    },
    pageSize(val) {
      this.pageSize_ = val;
    },
  },
  methods: {
    onCurrentChange(cp) {
      this.currentPage_ = cp;
      this.$emit("change", this.currentPage_, this.pageSize_);
    },
    onSizeChange(ps) {
      this.pageSize_ = ps;
      this.currentPage_ = 1;
      this.$emit("update:currentPage", 1); // Why don't need update ${pageSize_}?
      this.$emit("change", this.currentPage_, this.pageSize_);
    },
    reset(willEmitChange = false) {
      this.currentPage_ = this.initCurrentPage;
      this.pageSize_ = this.initPageSize;
      this.$emit("update:currentPage", this.currentPage_);
      this.$emit("update:pageSize", this.pageSize_);
      if (willEmitChange) {
        this.$emit("change", this.currentPage_, this.pageSize_);
      }
    },
  },
};
</script>

<style scoped></style>
