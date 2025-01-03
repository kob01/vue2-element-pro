<template>
  <div class="z-radio">
    <el-radio-group
      v-if="!button"
      v-model="currentValue"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <el-radio
        v-for="o in options"
        :key="o.label ?? o.value ?? o"
        :label="o.value ?? o"
        v-bind="isObject(o) ? o : {}"
      >
        {{ o.label ?? o.value ?? o }}
      </el-radio>
    </el-radio-group>
    <el-radio-group
      v-else
      v-model="currentValue"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <el-radio-button
        v-for="o in options"
        :key="o.label ?? o.value ?? o"
        :label="o.value ?? o"
        v-bind="isObject(o) ? o : {}"
      >
        {{ o.label ?? o.value ?? o }}
      </el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
import { isObject } from "@/components/utils";

export default {
  name: "Radio",
  props: {
    value: {
      type: [String, Number, Boolean],
      default: "",
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
