<template>
  <div class="home">
    <Dogs/>
  </div>
</template>

<script>
// @ is an alias to /src
import Dogs from '@/components/Dogs.vue'

export default {
  name: 'Home',
  components: {
    Dogs
  }
}
</script>
