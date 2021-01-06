import React from 'react'
import {Link} from 'react-router-dom'
import {GET_USERS_REQUESTED} from '../redux/action/user-action'
import {connect} from 'react-redux'
import User from './user'

class Users extends React.Component {    
    componentDidMount() {
        this.props.getUsers();
    }
    ondbclick = (id) => {
        this.props.history.push(`/${id}`);
    }
    render() {
        const { users, loading } = this.props;
        return (
            <div className='container'>            
                <Link to='/adduser'><button className='btn btn-primary my-3'>Add User</button></Link>
                {loading && <h2>Loading...</h2>}
                {!loading && (
                    <div className='row'>
                        <div className='col-md-5'>
                        {users.map(user => (                            
                            <User user={user} dbclickhandler={this.ondbclick} />
                        ))}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({    
    users: state.userreducer.users,
    loading: state.userreducer.loading
})

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch({type: GET_USERS_REQUESTED})
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);