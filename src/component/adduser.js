import React from 'react'
import {Link} from 'react-router-dom'
import {ADD_USER_REQUESTED} from '../redux/action/user-action'
import {connect} from 'react-redux'

class Adduser extends React.Component {
    state = {
        title: null,
        categories: null,
        content: null
    }

    onChangeName = e => {
        this.setState({            
            title : e.target.value
        });      
    }
    onChangeUsername = e => {
        this.setState({            
            categories : e.target.value
        });        
    }
    onChangeEmail = e => {
        this.setState({            
            content : e.target.value
        });     
    }
    onClickbtn = () => {        
        this.props.addUser(this.state, () => {
            this.props.history.push('/')
        });       
    }
    render() {
      return (
        <div className="container">
            <div className="col-xl-6 border p-3 mx-auto mt-5">
                <Link to='/'>Back to Index</Link>
                <div className="form-group">
                    <label className="col-xl-2">Title</label>
                    <div className="col-xl-4">              
                        <input 
                            type="text"
                            onChange={this.onChangeName}
                            className="form-control" />    
                    </div>               
                </div>
                <div className="form-group">
                    <label className="col-xl-2">Categories</label>
                    <div className="col-xl-4">
                        <input 
                            type="text"
                            onChange={this.onChangeUsername}
                            className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-xl-2">Content</label>
                    <div className="col-xl-4">
                        <input 
                            type="text"
                            onChange={this.onChangeEmail}
                            className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary ml-3" onClick={this.onClickbtn}>Add</button>
                </div>
            </div>
        </div>
      )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addUser: (data, callback) => dispatch({type: ADD_USER_REQUESTED, playload: data, callback})
})

export default connect(null, mapDispatchToProps)(Adduser);