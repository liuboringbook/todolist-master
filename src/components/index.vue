<template>
<!-- 特性，属性值绑定使用 -->
  <div v-bind:title="title">
    <!-- 插值文本 -->
     {{title}}
     <!-- 新增课程 -->
     <course-add @add-course="addCourse" v-model="course"></course-add>
     {{ course }}
     <!-- 条件渲染 -->
     <p v-if="courses.length ===0 ">没有课程信息</p>
     <!-- 列表渲染 -->
     <!-- <ul>
       <li v-for="c in courses" :key="c.id" :class="{active : selectedCourse === c}" @click="selectedCourse = c">
       {{ c }}
     </li>
     </ul> -->
     <course-list :courses="courses"></course-list>

  <!-- 商品总数 -->
  <p>
       <!--表达式 -->
       课程总数： {{courses.length + '门'}}
       <!-- 计算属性 -->
       课程总数：{{total}}

      <!-- 侦听器 -->
      课程总数：{{totalCount}}
  </p>
  </div>

</template>

<script>
 import  CourseList from './../components/cart/courselist'
 import  CourseAdd from './../components/cart/courseAdd'
  export default {
    //组件实例已创建，由于未挂载，dom不存在
  async created(){
        const courses =await this.getCourses();
        this.courses =courses
    },
    components: {
      CourseList,
      CourseAdd
    },
    //将实例挂载，dom存在
    mounted(){

    },
     data() {
       return {
         title:'hello vue',
         courses: [],
         totalCount:0,
         course:''
       }
     },
     methods:{
        addCourse(){
            //1.添加course到数组
            this.courses.push(this.course)
            // //2.清空course
            this.course =''

        },

        //模拟异步数据调用
        getCourses(){
           return new Promise(resolve =>{
             setTimeout(()=>{
               resolve(['web全栈','web高级'])
             },2000)
           })
        }
     },
     computed: {
       total() {
         //计算属性有缓存性，如果值没有发生变化，则页面不会重新渲染
         return this.courses.length +'门'
       }
     },
    //  默认情况下watch初始化不会立即执行
    //  watch: {
    //    courses(newValue, oldValue) {
    //      this.totalCount = newValue.length +'门'
    //    }
    //  },
     watch: {
       courses: {
         immediate: true,  //立即执行一次
         deep: true,   //监控复杂的数组
         handler(newValue, oldValue) {
           this.totalCount = newValue.length +'门'
         }
       }
     },
  }
</script>

<style  scoped>
  .active{
    background-color: #ddd;
  }
</style>
