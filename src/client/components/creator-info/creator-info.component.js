import React from "react";
import style from "./creator-info.styles.scss"

const CreatorInfo = (props) => {
  return (
    <div>
      <a className={style.creator_info} href={`/${props.screen_name}`}>
        <div >
          <div className={style.creator_image_container}>
            <img className={style.creator_image} src={props.avatar || "https://dyci7co52mbcc.cloudfront.net/static/images/default_avatar_v2.png"} alt={props.name} />
          </div>
        </div>
        <div>
          <div className={style.creator_info_role}>{props.profession}</div>
          <div className={style.creator_info_username}>{props.name}</div>
        </div>
      </a>
    </div>
  )
}

export default CreatorInfo  