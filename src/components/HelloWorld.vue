<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="goToDetail(todo.id)">
        <input type="checkbox" v-model="todo.done">
        <span :class="{done:todo.done}">{{ todo.name }}</span>
      </li>   
    </ul>
  </div>
</template>
<script>
  let id = 0;
  export default {
    data() {
      return {
        todos: [
          { id: id++, name: 'task1' },
          { id: id++, name: 'task2' },
          { id: id++, name: 'task2' }
        ]
      };
    },
    methods: {
      goToDetail(id) {
        this.$router.push({ name: 'TaskDetail', params: { id } });
      }
    }
  };
</script>
<style>
  .done{
    text-decoration: line-through;
  }
</style>
