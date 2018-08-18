<template>
<div id="app">
  <el-card class="the_Toods_container">
    <el-input class="input" @keyup.enter.native="addTodo" v-model.trim="text"></el-input>
    <ul :class="[{delete_todo: todo.isComplete}, 'todo_list']" v-for="todo in todoListComputed" :key="todo.id" @click="todoCompleteChange(todo.id)">
      <li class="todo">
        {{todo.text}}
        <el-button class="delete_btn" type="text" icon="el-icon-delete" @click.stop="deleteTodo(todo.id)"></el-button>
      </li>
    </ul>

    <el-button @click="currentStatus = 'ALL'"> 全部 {{todoList.length}}</el-button>
    <el-button @click="currentStatus = 'COMPLETE'"> 已完成 {{todoCompletedLength}}</el-button>
    <el-button @click="currentStatus = 'TODO'"> 未完成 {{todoList.length - todoCompletedLength}}</el-button>
  </el-card>
</div>
</template>

<script>
const mockData = [
  {
    id: 4,
    text: '学习 Vue',
    isComplete: false
  },
  {
    id: 7,
    text: '今天天气不错',
    isComplete: false
  }
]

const ALL = 'ALL'
const COMPLETE = 'COMPLETE' // 已完成
const TODO = 'TODO' // 待完成

export default {
  name: 'app',
  computed: {
    todoListComputed () {
      const {
        currentStatus,
        todoList
      } = this
      if (currentStatus === ALL) return todoList
      if (currentStatus === COMPLETE) return todoList.filter(todo => todo.isComplete)
      if (currentStatus === TODO) return todoList.filter(todo => !todo.isComplete)
    },
    todoCompletedLength () {
      // 计算已完成的总数
      return this.todoList.reduce((sum, todo) => sum + Number(todo.isComplete), 0)
    }
  },

  data: () => ({
    text: '',
    todoList: [
      {
        id: 1,
        text: '明天 8 点起床跑步',
        isComplete: false
      },
      {
        id: 3,
        text: '今晚上吃蔬菜',
        isComplete: true
      }
    ],
    currentStatus: ALL
  }),

  async mounted () {
    this._fetchData().then(res => {
      this.todoList = [...this.todoList, ...res]
    }).catch(() => {
      this.$message.error('获取数据失败')
    })
  },

  methods: {
    // 模拟从服务器请求数据
    _fetchData: () => new Promise(resolve => setTimeout(() => resolve(mockData), 2000)),

    addTodo () {
      const { text } = this
      if (!text) return this.$message.warning('请输入内容')
      // 得到最大的 id ，然后再 + 1，防止 id 重复
      const id = this.todoList.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1
      const newTodo = {
        id,
        text,
        isComplete: false
      }
      this.todoList.push(newTodo)
      this.text = ''
    },

    deleteTodo (id) {
      this.todoList = this.todoList.filter(todo => todo.id !== id)
    },

    todoCompleteChange (id) {
      this.todoList = this.todoList.map(todo => ({
        ...todo,
        isComplete: todo.id === id ? !todo.isComplete : todo.isComplete
      }))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.the_Toods_container {
  margin-top: 200px;
  margin-left: 100px;
  padding-left: 20px;
  width: 400px;
}

.input {
  width: 300px;
}

.todo {
  padding: 10px;
  cursor: pointer;
  text-align: left;
}

.delete_btn {
  margin-left: 30px;
}

.delete_todo {
  text-decoration: line-through
}
</style>
