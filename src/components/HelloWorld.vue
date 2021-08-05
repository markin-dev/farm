<template>
  <div
    class="flex flex-col lg:flex-row flex-wrap"
  >
    <div
      class="lg:w-1/4 bg-green-200"
    >
      123
    </div>

    <div
      class="flex-grow bg-blue-200"
    >
      <div>
        <span
          :class="[
            'text-blue-600',
            'hover:text-red-500',
            'cursor-pointer'
          ]"
          @click="harvest"
        >
          Harvest
        </span>
      </div>
      <div>crops: {{ crops }}</div>
    </div>

    <div
      class="lg:w-1/4 bg-purple-200"
    >
      789
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      crops: 0,
    };
  },

  methods: {
    harvest() {
      this.crops += 1;
    },
  },
};
</script>
