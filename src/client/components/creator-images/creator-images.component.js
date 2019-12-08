import React from "react";
import style from "./creator-images.styles.scss"


const CreatorImages = (props) => {
  return (
    <div className={style.creator_work_image_wrapper}>
      {props.works.map(images => (
        <div key={images.id} >
          <a href={`works/${images.id}`}>
            <div >
              <img className={style.creator_work_image} src={images.thumbnail || "https://www.sciphijournal.org/wp-content/themes/fox/images/placeholder.jpg"} alt={images.title} />
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default CreatorImages
