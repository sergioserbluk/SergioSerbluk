import React from 'react'
import Footer from './Footer'
import AddTodos from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <main>
    <AddTodos />
    <VisibleTodoList />
    <Footer />
  </main>
)

export default App
