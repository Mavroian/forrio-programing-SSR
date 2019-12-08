import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCreators } from "../../Actions/index"
import CreatorInfo from "../creator-info/creator-info.component";
import CreatorImages from "../creator-images/creator-images.component"
import style from "./creator-list.styles.scss"

class CreatorList extends Component {

  componentDidMount() {
    this.props.fetchCreators()
  }
  renderCreators() {
    if (!this.props.creators.loaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className={style.creator_talent_container}>
          {this.props.creators.creators.map(({ id, ...creatorInfo }) => (
            <div key={id} className={style.creator_talent_section} >
              <div >
                <CreatorInfo  {...creatorInfo} />
              </div>
              <div className={style.creator_talent_section}>
                <CreatorImages {...creatorInfo} />
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
          {this.renderCreators()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { creators: state.creators }
}

export default connect(mapStateToProps, { fetchCreators })(CreatorList)