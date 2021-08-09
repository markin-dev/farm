<template>
  <div class="dev-panel">
    <pre>{{ $store.state }}</pre>
  </div>
</template>

<style lang="scss" scoped>
.dev-panel {
  position: fixed;
  left: 10px;
  bottom: 10px;
  background-color: #eeeeee;

  pre {
    margin: 0;
  }
}
</style>
