import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../Actions/index"
import CreatorInfo from "./creator-info.component";
import CreatorImages from "./creator-images.component"

class UsersList extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }
  renderUsers() {
    if (!this.props.users.loaded) {
      return <div>Loading...</div>
    } else {
      // return this.props.users.users.map(users => {
      //   return <li key={users.id}>{users.name}</li>
      // })
      return (
        <div className="creator_talent_container">
          {this.props.users.users.map(({ id, ...userInfo }) => (
            <div key={id} className="creator_talent_section" >
              <div >
                <CreatorInfo  {...userInfo} />
              </div>
              <div className="creator_work_image_table">
                <CreatorImages {...userInfo} />
              </div>
            </div>
          ))}
        </div>
      )
    }



  }
  render() {
    return (
      <div>
        <ul>
          {this.renderUsers()}
        </ul>
        Helloooo users
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers })(UsersList)