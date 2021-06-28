export default function reducer(state, action) {

    const generateId = () => {
        let id = Math.floor(new Date().valueOf() * Math.random());        

        return id;
    }

    const addTodo = (todo) => {
        let todoItem = { id: generateId(), description: todo, done: false };
        let arrTodos = [...state, todoItem];

        window.sessionStorage.setItem("todos", JSON.stringify(arrTodos));
        state = arrTodos;
        
        return state;
    }

    const updateTodo = (todo) => {
        for (let item of state) {
            if (item.id === todo.id) {
                item.done = true;
            }
        }
        
        window.sessionStorage.setItem("todos", JSON.stringify(state));
        return state;
    };

    const deleteTodo = (todo) => {
        let newState = state.filter((item) => item.id !== todo.id);
        state = newState;
        
        window.sessionStorage.setItem("todos", JSON.stringify(state));
        return state;
    }

    switch (action.type) {

        case 'add':
            return addTodo(action.payload);
        case 'update':
            return updateTodo(action.payload);
        case 'remove':
            return deleteTodo(action.payload);
        default:
            return null;
    }
}