<template>
  <div> 
      <h1 style="position:center">Task1</h1>
    <template v-if="task1.editing" >
      <div>
        <textarea v-model="task1.description" placeholder="Task-Description" @blur="task1.editing = flase"></textarea>
      </div>
    </template>
    <template v-else>
      <p>{{ task1.description }}</p>
    </template>
    <button @click="task1.editing = true" class="edit">edit</button>
    <router-link to="/home">
      <button @click="saveTask" class="save">back</button>
    </router-link>
   
  </div>
</template>
<script>
  export default{
    data(){
      return{
        task1:{}
      };
    },
    watch:{
      '$route.params.task'(newTask){
        this.task1 = newTask;
      }
    },
  methods:{
    saveTask(){
      localStorage.setItem('task1Data', JSON.stringify(this.task1));
      console.log('任务已保存到本地存储');
    }
  },
  mounted() {
    const savedTask1Data = localStorage.getItem('task1Data');
    if (savedTask1Data) {
      this.task1 = JSON.parse(savedTask1Data);
    }
  }
}
</script>
<style>
  .edit{
    background-color: rgb(237, 242, 165);
  }
  .save{
    background-color:rgb(117, 233, 142)
 }
</style>



