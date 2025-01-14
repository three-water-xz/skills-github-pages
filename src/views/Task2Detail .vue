<template>
  <div> 
    <h1 style="position:center">Task2</h1>
    <template v-if="task2.editing">
      <div>
        <textarea v-model="task2.description" placeholder="Task-Description" @blur="task2.editing = flase"></textarea>
      </div>
    </template>
    <template v-else>
      <p>{{ task2.description }}</p>
    </template>
    <button @click="task2.editing = true" class="edit">edit</button>
    <router-link to="/home">
      <button @click="saveTask" class="save">back</button>
    </router-link>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        task2:{}
      };
    },
    watch:{
      '$route.params.task'(newTask){
        this.task2 = newTask;
      }
    },
  methods:{
    saveTask(){
      localStorage.setItem('task2Data', JSON.stringify(this.task2));
      console.log('任务已保存到本地存储');
    }
  },
  mounted() {
    const savedTask2Data = localStorage.getItem('task2Data');
    if (savedTask2Data) {
      this.task2= JSON.parse(savedTask2Data);
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



