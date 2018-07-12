import { connect } from 'react-redux';
import FromAdd from '../components/FromAdd';

const mapStateToProps = state => ({
    todo: state.todo,
    edit: state.todoEdit,
    test: 'Add'
});

export default connect(mapStateToProps)(FromAdd);
