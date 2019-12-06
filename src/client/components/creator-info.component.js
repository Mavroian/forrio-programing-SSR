import React from "react";
//import "./creator-info.styles.scss"

const CreatorInfo = (props) => {
  return (
    <div className="creator_info">
      <a className="test" href={`/${props.screen_name}`}>
        <div >
          <div className="creator_image_container">
            <img className="creator_image" style={{ with: "60px", height: "60px" }} src={props.avatar || "https://dyci7co52mbcc.cloudfront.net/static/images/default_avatar_v2.png"} alt={props.name} />
          </div>
        </div>
        <div>
          <div className="creator_info_role">{props.profession}</div>
          <div className="creator_info_username">{props.name}</div>
        </div>
      </a>
    </div>
  )
}

export default CreatorInfo  