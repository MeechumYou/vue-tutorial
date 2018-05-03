<template>
  <div>
    Child Count: {{ childCounter }}
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>
export default {
  computed: {
    childCounter () {
      return this.$store.getters.getCounter
    }
  }
}
</script>
