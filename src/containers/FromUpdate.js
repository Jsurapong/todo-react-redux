import { connect } from 'react-redux';
import FromUpdate from '../components/FromUpdate';

import { setEditTodo, updateTodo } from '../actions';

const mapStateToProps = (state, ownProps) => ({
    todo: state.todo,
    edit: state.todoEdit,
    test: 'Update'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    ChangeTodo: event => {
        dispatch(setEditTodo(event.target.value));
    },
    SubmitUpdate: event => {
        dispatch(updateTodo());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FromUpdate);
