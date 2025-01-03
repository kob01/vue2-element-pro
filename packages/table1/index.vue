<template>
  <el-table
    :data="data"
    class="common-table"
    v-bind="$attrs"
    v-on="$listeners"
    @select="$comSelect"
    @select-all="$comSelect"
  >
    <el-table-column
      v-if="checkbox"
      type="selection"
      :selectable="selectable"
      width="50"
      :fixed="showFixed"
    ></el-table-column>
    <el-table-column v-if="showExpand" type="expand" :fixed="showFixed">
      <template #default="scope">
        <slot v-bind="scope" name="expand"></slot>
      </template>
    </el-table-column>
    <el-table-column v-if="showIndex" type="index" width="64" label="序号">
    </el-table-column>
    <TableColumn v-for="c in column" :key="'tc_' + c.prop + c.label" :item="c">
      <template v-for="(v, key) in $scopedSlots" #[key]="scope">
        <slot v-bind="scope" :name="key"></slot>
      </template>
    </TableColumn>
  </el-table>
</template>

<script>
import TableColumn from "./TableColumn";

export default {
  name: "CommonTable",
  components: {
    TableColumn,
  },
  props: {
    showIndex: {
      type: Boolean,
      default: true,
    },
    data: {
      type: Array,
      default: () => [],
    },
    // 表单列内容
    column: {
      type: Array,
      default: () => [],
    },
    // 是否具备展开列
    showExpand: {
      type: Boolean,
      default: false,
    },
    showFixed: {
      type: Boolean,
      default: true,
    },
    // 是否展示checkbox
    checkbox: {
      type: Boolean,
      default: false,
    },
    // 多选框选择规则
    selectable: {
      type: Function,
      default: () => [],
    },
  },
  methods: {
    // 将选中的状态值抛出去接收
    $comSelect(selectData) {
      if (!this.checkbox) return;
      this.$emit("onSelect", selectData);
    },
  },
};
</script>

<style scoped></style>
