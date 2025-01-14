<template>
  <div>  
    <h1 style="position:center">Task3</h1>
    <template v-if="task3.editing">
      <div>
        <textarea v-model="task3.description" placeholder="Task-Description" @blur="task3.editing = flase"></textarea>
      </div>  
    </template>
    <template v-else>
      <p>{{ task3.description }}</p>
    </template>
    <button @click="task3.editing = true" class="edit">edit</button>
    <router-link to="/home">
      <button @click="saveTask" class="save">back</button>
    </router-link>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        task3:{}
      };
    },
    watch:{
      '$route.params.task'(newTask){
        this.task3 = newTask;
      }
    },
  methods:{
    saveTask(){
      localStorage.setItem('task3Data', JSON.stringify(this.task3));
      console.log('任务已保存到本地存储');
    }
  },
  mounted() {
    const savedTask3Data = localStorage.getItem('task3Data');
    if (savedTask3Data) {
      this.task3 = JSON.parse(savedTask3Data);
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



