<template>
  <div class="todo-container">
    <h1 class="todo-title">My Todo List</h1>
    <div class="todo-inputs">
      <input
        class="todo-new-item"
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Add a new task"
      />
      <button class="btn-add" @click="addTodo">Add</button>
    </div>

    <!-- Todo 리스트 -->
    <ul class="todo-list">
      <li v-for="(todo, index) in todos" :key="index" class="todo-item">
        {{ todo }}
        <button class="btn-remove" @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TodoList",
  data() {
    return {
      newTodo: "",
      todos: [] as string[],
    };
  },
  methods: {
    addTodo() {
      // 새 Todo 항목을 추가하는 메서드
      if (this.newTodo.trim() !== "") {
        this.todos.push(this.newTodo.trim());
        this.newTodo = ""; // 입력 필드 초기화
      }
    },
    removeTodo(index: number) {
      // 특정 인덱스의 Todo 항목을 제거하는 메서드
      this.todos.splice(index, 1);
    },
  },
});
</script>

<!-- css  -->
<style scoped>
.todo-container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f3f4f6;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.todo-title {
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.todo-inputs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.todo-new-item {
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  border: 2px solid #cbd5e0;
  border-radius: 5px;
}

.btn-add {
  padding: 10px 15px;
  background-color: #60a5fa;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-add:hover {
  background-color: #3b82f6;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  background-color: #fff;
  border: 1px solid #cbd5e0;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-remove {
  background-color: #f87171;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
}

.btn-remove:hover {
  background-color: #ef4444;
}
</style>
