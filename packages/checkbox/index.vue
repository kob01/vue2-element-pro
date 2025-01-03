<template>
  <div class="z-checkbox">
    <el-checkbox-group
      v-if="!button"
      v-model="currentValue"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <el-checkbox
        v-for="o in options"
        :key="o.label ?? o.value ?? o"
        :label="o.value ?? o"
        v-bind="isObject(o) ? o : {}"
      >
        {{ o.label ?? o.value ?? o }}
      </el-checkbox>
    </el-checkbox-group>
    <el-checkbox-group
      v-else
      v-model="currentValue"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <el-checkbox-button
        v-for="o in options"
        :key="o.label ?? o.value ?? o"
        :label="o.value ?? o"
        v-bind="isObject(o) ? o : {}"
      >
        {{ o.label ?? o.value ?? o }}
      </el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>

<script>
import { isObject } from "@/components/utils";

export default {
  name: "Radio",
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    button: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
        this.$emit("change", val);
      },
    },
  },
  methods: {
    isObject,
  },
};
</script>
