<template>
  <div>
    <!-- 表单输入绑定 -->
    <input :value="value" @input="onInput" type="text" v-on:keydown.enter="addCourse">
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default:''
      }
    },
    methods:{
      addCourse(){
        //派发事件通知父组件新增课程
        this.$emit('add-course')

      },
      onInput(e){
        this.$emit('input',e.target.value)
      }
    }
  }
</script>

<style  scoped>

</style>
