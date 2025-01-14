<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id" >
        <input type="checkbox" v-model="todo.done">
        <template v-if="todo.editing">
          <input type="text" v-model="todo.name" @blur="todo.editing=false" @keyup.enter="todo.editing=false">
        </template>
        <template v-else>
          <router-link :to="getTaskLink(todo)" :class="{done:todo.done}">
          {{ todo.name }}
        </router-link>
        </template>
        <button @click="todo.editing=true">edit</button>
      </li>   
    </ul>
    <p class="completed"> done:{{ doneTodos.length }}</p>
  </div>
</template>
<script>
  const routeMap = {
    'task1': { name: 'task1detail', params: { id: null } },
    'task2': { name: 'task2detail', params: { id: null } },
    'task3': { name: 'task3detail', params: { id: null } }
  };
  let id = 0;
  export default {
    data() {
      return {
        todos: [
          { id: id++, name: 'task1' },
          { id: id++, name: 'task2' },
          { id: id++, name: 'task3' },
        ],
      };
    },
    methods: {
      getTaskLink(todo) {
      const routeInfo = routeMap[todo.name];
      if (routeInfo) {
        routeInfo.params.id = todo.id;
        return routeInfo;
      }
      return {};  
    },
    },
    
    computed: {
      doneTodos() {
        return this.todos.filter(todo => todo.done);
      }
    }
  }
</script>
<style>
  .done{
    text-decoration: line-through;
  }
  .completed{ 
    border: 1px solid rgb(65, 164, 65);
    background-color: rgb(65, 164, 65);
  }
  button{
    border:none;
    background-color: white;
    color:black;
  }
</style>