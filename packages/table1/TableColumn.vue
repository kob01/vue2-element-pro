<template>
  <el-table-column
    v-bind="item"
    :show-overflow-tooltip="
      item.showTooltip === void 0 ? true : item.showTooltip
    "
  >
    <template v-if="item.headerSlot" #header="scope">
      <slot v-bind="scope" :name="`${item.prop}Header`"></slot>
    </template>
    <template v-if="item.slot" #default="scope">
      <slot v-bind="scope" :name="item.prop"></slot>
    </template>
    <template v-if="item.children && item.children.length > 0">
      <TableColumn
        v-for="c in item.children"
        :key="c.prop || c.label"
        :item="c"
      >
        <template v-for="(v, key) in $scopedSlots" #[key]="scope">
          <slot v-bind="scope" :name="key"></slot>
        </template>
      </TableColumn>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "TableColumn",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
