import { ref, computed } from 'vue';

const substrates = ref([]);

function useSubstrate() {
  function addSubstrate() {
    substrates.value.push({
      id: Math.random(),
    });
  }

  function shiftSubstrate() {
    substrates.value.shift();
  }

  return {
    substrates: computed(() => substrates.value),
    addSubstrate,
    shiftSubstrate,
  };
}

export default useSubstrate;
