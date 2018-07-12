let initialState = {
    todo: [],
    todoEdit: {
        text: '',
        index: '',
        completed: true
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todo: [
                    ...state.todo,
                    {
                        text: action.text
                    }
                ],
                todoEdit: {
                    text: '',
                    index: ''
                }
            };

        case 'GET_TODO':
            let todo = state.todo[action.index];
            let todoEdit = {
                text: todo.text,
                index: action.index
            };

            return {
                todo: [...state.todo],
                todoEdit: todoEdit
            };
        case 'SETEDIT_TODO':
            let todoEditSet = {
                text: action.text,
                index: state.todoEdit.index
            };

            return {
                todo: [...state.todo],
                todoEdit: todoEditSet
            };
        case 'UPDATE_TODO':
            let newTodo = state.todo;

            newTodo[state.todoEdit.index] = {
                text: state.todoEdit.text,
                completed: false
            };
            return {
                todo: [...newTodo],
                todoEdit: {
                    text: '',
                    index: '',
                    completed: true
                }
            };
        case 'DELETE_TODO':
            let newState = state.todo;
            newState.splice(action.index, 1);
            return {
                todo: [...newState],
                todoEdit: {
                    text: '',
                    index: ''
                }
            };
        default:
            return state;
    }
};
