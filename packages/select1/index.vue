<template>
  <el-select v-model="modelValue" v-bind="$attrs" v-on="$listeners">
    <template v-if="group">
      <el-option-group
        v-for="g in options"
        :key="g.label"
        :label="g.label"
        :disabled="g.disabled || false"
      >
        <el-option
          v-for="o in g.options"
          :key="o.label || o.value"
          :label="o.label"
          :value="o.value"
          v-bind="o"
        >
          <slot v-bind="o">{{ o.label || o.value }}</slot>
        </el-option>
      </el-option-group>
    </template>
    <template v-else>
      <el-option
        v-for="o in options"
        :key="o.label || o.value"
        :label="o.label"
        :value="o.value"
        v-bind="o"
      >
        <slot v-bind="o">{{ o.label || o.value }}</slot>
      </el-option>
    </template>
    <template v-if="$slots.prefix" slot="prefix">
      <slot name="prefix"></slot>
    </template>
    <template v-if="$slots.empty" slot="empty">
      <slot name="empty"></slot>
    </template>
  </el-select>
</template>

<script>
export default {
  name: "Select",
  props: {
    value: {
      type: [Array, String, Number, Boolean],
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    group: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    modelValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
        this.$emit("change", val);
      },
    },
  },
};
</script>
