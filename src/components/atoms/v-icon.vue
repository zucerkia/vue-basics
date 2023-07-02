<template>
  <font-awesome-icon
    :class="className"
    :icon="`fa-solid ${name}`"
    :style="{ fontSize: size }"
  />
</template>

<script>
export default {
  props: ["name", "size", "className"],
};
</script>
