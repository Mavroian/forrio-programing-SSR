import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWorks } from "../../Actions/index"
import style from "./creator-works.styles.scss"

class Works extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchWorks(this.props.props.match.params.workid)
  }

  getUserWork() {
    const work = this.props.works.works
    if (!this.props.works.loaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className={style.container}>
          <div className={style.container_work}>
            <div className={style.work_display}>
              <div>
                <img className={style.work_diplay_image} src={work.thumbnail} alt={work.author.profile.name} />
              </div>
            </div>
            <div className={style.work_display_container}>
              <div className={style.work_display}>
                <h1 className={style.work_info_title}>{work.title}</h1>
                <div className={style.work_credits_credits}>
                  <a href={`/${work.author.screen_name}`}>
                    <div size="40" className={style.circle_avatar}>
                      <img className={style.work_credit_image} src={work.author.profile.avatar.thumb || "https://dyci7co52mbcc.cloudfront.net/static/images/default_avatar_v2.png"} alt={""} />
                    </div>
                  </a>
                  <div className={style.work_credit_right}>
                    <div className={style.work_credit_name}>{work.author.profile.name}</div>
                    <div className={style.work_credit_proffesion}>{work.author.profile.profession}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div> More Work from {work.author.profile.name}</div>
              <div className={style.scrollable}>
                <div className={style.creator_work_image_wrapper}>
                  {work.related_works.map(images => (
                    <div key={images.id} >
                      <a href={`/works/${images.id}`}>
                        <div >
                          <img className={style.creator_work_image} src={images.thumbnail || "https://www.sciphijournal.org/wp-content/themes/fox/images/placeholder.jpg"} alt={images.title} />
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>)
    }
  }
  render() {
    return (
      <div>
        {this.getUserWork()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { works: state.works }
}

export default connect(mapStateToProps, { fetchWorks })(Works)