import { connect } from 'react-redux';
import ListTodo from '../components/ListTodo';

const mapStateToProps = state => ({
    todo: state.todo,
    todoNew: state.todoNew,
    edit: state.todoEdit,
    test: 'List'
});

export default connect(mapStateToProps)(ListTodo);
