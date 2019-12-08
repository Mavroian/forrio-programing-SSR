import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCreators } from "../../Actions/index"
import style from "./profile.styles.scss"
import CreatorImages from "../creator-images/creator-images.component"

class Profile extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCreators()
  }
  getUser(creators, username) {

    const creator = creators.creators.filter(creator => creator.screen_name === username)
    return creator[0]
  }
  renderProfile() {
    if (!this.props.creators.loaded) {
      return <div>Loading...</div>
    } else {
      const creator = this.getUser(this.props.creators, this.props.props.match.params.username)
      return (
        <div className={style.profilecontainer}>
          <div className={style.profiletop}>
            <div className={style.circle_avatar}>
              <div className={style.profile_image}>
                <img className={style.profile_image, style.fit_image} src={creator.avatar || "https://dyci7co52mbcc.cloudfront.net/static/images/default_avatar_v2.png"} alt={creator.name} />
              </div>
            </div>
            <div className={style.profile_right_container}>
              <div className={style.profile_profile_name}>
                {creator.name}
              </div>
              <div>
                <div>{creator.profession}</div>
              </div>
            </div>
          </div>
          <div className={style.profilebottom}>
            <div className={style.scrollable}>
              {<CreatorImages {...creator} />}
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

