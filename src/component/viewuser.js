import React from 'react';
import { connect } from 'react-redux';
import { GET_USER_REQUESTED, DELETE_USER_REQUESTED } from '../redux/action/user-action';
import { Link } from 'react-router-dom';

class Viewuser extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);    
  }

  onDeleteClick() {
    this.props.deletePost(this.props.match.params.id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { users, loading } = this.props;
    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className='container'>
        <div className="col-xl-6 border p-3 mx-auto mt-5">
          <Link to="/">Back to Index</Link>           
          <div className='form-group'>
            <h3>{users[0].title}</h3>
          </div>
          <div className="form-group">
            <h6>Categories: {users[0].categories}</h6>
          </div>
          <p>
            {users[0].content}
          </p>
          <button
            className="btn btn-danger pull-xs-right"
            onClick={() => this.onDeleteClick()}
          >
            Delete Post
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.userreducer.loading,
  users: state.userreducer.users
});

const mapDispatchToProps = (dispatch) => ({
  fetchPost : id => dispatch({type: GET_USER_REQUESTED, id}),
  deletePost : (id, callback) => dispatch({type: DELETE_USER_REQUESTED, id, callback})
})

export default connect(mapStateToProps, mapDispatchToProps)(Viewuser);
