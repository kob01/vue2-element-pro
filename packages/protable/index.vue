<template>
  <div class="pro-table" :style="{
    '--inputWidth': inputWidth + 'px',
    '--colNum': colNum',
    '--rowGap': rowGap,
    '--columnGap': columnGap,
  }">
    <el-form ref="formRef" :model="searchForm" :label-position="labelPosition" :size="size"
      :class="{ 'responsive-label-input': responsiveLabelInput }" v-bind="$attrs">
      <el-form-item v-for="(f) in formItems" :key="f.key" :label="f.label">
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    rowGap: {
      type: String,
      default: '20px'
    },
    responsiveLabelInput: {
      type: Boolean,
      default: false

    },
    columnGap: {
      type: String,
      default: '20px'
    },
    labelPosition: {
      type: String,
      default: 'left'
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  computed: {
    formItems() {}
  }
}
</script>

<style></style>