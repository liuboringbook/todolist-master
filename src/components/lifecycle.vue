<template>
  <div>
     <h1>生命周期</h1>
     <p>{{ foo }}</p>
  </div>
</template>

<script>
  export default {
   data() {
     return {
        foo: 'foo'
     }
   },
    beforeCreate(){
      console.log('beforeCreate')
    },
    created(){
      console.log('created')
    },
    beforeMount(){
      console.log('created'+ this.$el)
    },
    mounted(){
      setTimeout(()=>{
        this.foo ='foooo'
      },2000)
      console.log('mounted'+ this.$el)
    },
    beforeUpdated(){
        console.log('beforeUpdate')
    },
    updated(){
       console.log('updated')
    }
  }
</script>

<style  scoped>

</style>
