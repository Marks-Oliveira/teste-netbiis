export default function reducer(state, action) {

    const generateId = () => {
        let id = Math.floor(new Date().valueOf() * Math.random());        

        return id;
    }

    const addTodo = (todo) => {
        let todoItem = { id: generateId(), description: todo, done: false };

        return [...state, todoItem];
    }

    const updateTodo = (todo) => {
        return state;
    };

    const deleteTodo = (todo) => {
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