import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCreators } from "../../Actions/index"

class Profile extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCreators()
  }
  getUser(creators, username) {
    console.log(creators.creators)
    return creators.creators.filter(creator => creator.screen_name === username)
  }
  renderProfile() {
    if (!this.props.creators.loaded) {
      return <div>Loading...</div>
    } else {
      const user = this.getUser(this.props.creators, this.props.props.match.params.username)
      return (
        <div className="layout_profile_container">
          <div>
            <div className="profile_container">
              <div className="profile_subcontainer">
                <div className="profile_image">
                  <img src={user[0].avatar} alt={user[0].name} />
                </div>
                <div className="profile_right_container">
                  <div>{user[0].name}</div>
                  <div>{user[0].profession}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      <div>

        {this.renderProfile()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { creators: state.creators }
}

export default connect(mapStateToProps, { fetchCreators })(Profile)

