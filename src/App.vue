<template>
<div id="app">
  <el-card class="container">
    <el-input class="input" @keyup.enter.native="addTodo" v-model.trim="text"></el-input>
    <ul class="todo_list">
      <transition-group name="fade">
        <li
          :class="[{delete_todo: todo.isComplete}, 'todo']"
          v-for="todo in todoListComputed"
          :key="todo.id"
          @click="todoCompleteChange(todo.id)"
        >
          {{todo.text}}
          <el-button class="delete_btn" type="text" icon="el-icon-delete" @click.stop="deleteTodo(todo.id)"></el-button>
        </li>
      </transition-group>
    </ul>

    <el-button @click="currentStatus = 'ALL'"> 全部 {{todoList.length}}</el-button>
    <el-button @click="currentStatus = 'COMPLETE'"> 已完成 {{todoCompletedNum}}</el-button>
    <el-button @click="currentStatus = 'TODO'"> 未完成 {{todoList.length - todoCompletedNum}}</el-button>
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
    id: 8,
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
      if (currentStatus === COMPLETE) return todoList.filter(todo => todo.isComplete) // 单行语句可省略 {}
      if (currentStatus === TODO) return todoList.filter(todo => !todo.isComplete) // 单行语句可省略 {}
    },
    todoCompletedNum () {
      // 计算已完成的总数
      return this.todoList.reduce((sum, todo) => sum + Number(todo.isComplete), 0)
    }
    // 虽然单行语句可省略 {}，但是由于箭头函数没有 this，所以这里并不能用单行语句的写法
    // todoCompletedNum: () => this.todoList.reduce((sum, todo) => sum + Number(todo.isComplete), 0)
  },

  // 单行语句可省略 {}
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
    // 单行语句可省略 {}
    _fetchData: () => new Promise(resolve => setTimeout(() => resolve(mockData), 1500)),

    /** 如果不使用 ES6，没有对比就没有伤害
    _fetchData: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(mockData)
        }, 1500)
      })
    },
    **/

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
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.container {
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
