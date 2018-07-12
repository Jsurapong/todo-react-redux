import { connect } from 'react-redux';
import Button from '../components/Button';

import { deleteTodo, getTodo } from '../actions';

const mapStateToProps = state => ({
    todo: state.todo,
    todoNew: state.todoNew,
    edit: state.todoEdit,
    test: 'Update'
});

const mapDispatchToProps = dispatch => ({
    removeTodo: index => {
        dispatch(deleteTodo(index));
    },
    callTodo: index => {
        dispatch(getTodo(index));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);
