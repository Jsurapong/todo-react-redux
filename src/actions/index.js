export const addTodo = text => ({
    type: 'ADD_TODO',
    text
});

export const deleteTodo = index => ({
    type: 'DELETE_TODO',
    index
});

export const getTodo = index => ({
    type: 'GET_TODO',
    index
});

export const updateTodo = () => ({
    type: 'UPDATE_TODO'
});

export const setEditTodo = text => ({
    type: 'SETEDIT_TODO',
    text
});
