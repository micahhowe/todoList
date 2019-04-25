let todoList = {
  todos: [],
  displayTodos: function() {
    debugger;
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!')
    } else{
      console.log('My Todos:')
      for (let i = 0; i < this.todos.length; i++){
        if (this.todos[i].completed === true) {
            console.log('(x)', this.todos[i].todoText);
         } else {
            console.log('( )', this.todos[i].todoText);
         }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(pos, todoText) {
    this.todos[pos].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(pos) {
    this.todos.splice(pos,1);
    this.displayTodos();
  },
  toggleCompleted: function(pos) {
    let todo = this.todos[pos];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function(){
    let totalTodos = this.todos.length;
    let completedTodos = 0;
    // Get number of completed todos
    for (let i = 0; i < totalTodos; i++) {
      if(this.todos[i].completed === true){
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
     // Make everything false
      for (let i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      } 
    } else {
      for (let i = 0; i < totalTodos; i++){
        this.todos[i].completed = true;
       }  
      }       
    this.displayTodos();
  }
};
//targets the specific "Display Todos" button within the DOM
let displayTodosButton = document.getElementById('displayTodosButton');
//targets the specific "Toggle All" button within the DOM
let toggleAllButton = document.getElementById('toggleAllButton');
//runs the 'displayTodos' method which displays the todos in the console when the button is clicked
displayTodosButton.addEventListener('click', function(){
  todoList.displayTodos();
});
//runs the 'toggleAll' method which toggles all todo items in the console
toggleAllButton.addEventListener('click', function(){
  todoList.toggleAll();
});

