import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserAction } from '../actions/usersActions';

class User extends Component {

    componentWillMount(){
        this.props.getUser(this.userId);
    }
componentDidUpdate(prevProps){
    if(prevProps.match.params.userId !==this.userId){
        this.props.getUser(this.userId);
    }
}

get userId() {
    return this.props.match.params.userID;
}

    render() {
        return (
            <div className="user-page">
                <div className="card" >
                    <img src={this.props.user.avatar} className="card-img-top" alt="..."/>
                        <div className="card-body">
        <h5 className="card-title">#{this.props.user.id} {this.props.user.first_name} {this.props.user.last_name}</h5>
                            <p className="card-text">E-mail: {this.props.user.email}</p>
                        </div>
</div>



                </div>
        )
    }
}




const mapStateToProps = (state) => {
    return {
user: state.usersReducer.userActive
                }
  };

  const mapDispatchToProps = (disaptch) => {
    return {
        getUser(userId){
            disaptch(getUserAction(userId));
        }
                }
  };

  export default connect(mapStateToProps, mapDispatchToProps)(User);
