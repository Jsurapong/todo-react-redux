import { connect } from 'react-redux';
import FromAdd from '../components/FromAdd';
import { setAddTodo, addTodo } from '../actions';

const mapStateToProps = state => ({
    todo: state.todo,
    todoNew: state.todoNew,
    edit: state.todoEdit,
    test: 'Add'
});
const mapDispatchToProps = dispatch => ({
    addText: event => {
        dispatch(setAddTodo(event.target.value));
    },
    submitTodo: () => {
        dispatch(addTodo());
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FromAdd);
