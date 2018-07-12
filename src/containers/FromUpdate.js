import { connect } from 'react-redux';
import FromUpdate from '../components/FromUpdate';

import { setEditTodo, updateTodo } from '../actions';

const mapStateToProps = state => ({
    todo: state.todo,
    todoNew: state.todoNew,
    edit: state.todoEdit,
    test: 'Update'
});

const mapDispatchToProps = dispatch => ({
    ChangeTodo: event => {
        dispatch(setEditTodo(event.target.value));
    },
    SubmitUpdate: () => {
        dispatch(updateTodo());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FromUpdate);
