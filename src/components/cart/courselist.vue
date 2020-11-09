<template>
  <div>
     <ul>
       <li v-for="c in courses" :key="c.id" :class="{active : selectedCourse === c}" @click="selectedCourse = c">
       {{ c }}
     </li>
     </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedCourse: ''
      }
    },
      props: {
        courses: {
          type: Array,
          default: []
        }
      },
  }
</script>

<style scoped>

</style>
