import { connect } from 'react-redux';
import ListTodo from '../components/ListTodo';

const mapStateToProps = (state, ownProps) => ({
    todo: state.todo,
    edit: state.todoEdit,
    test: 'List'
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListTodo);
