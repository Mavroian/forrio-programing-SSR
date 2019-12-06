import React from "react";
//import "./creator-works.styles.scss"

const CreatorImages = (props) => {
  return (
    <div className="creator_work_image_wrapper">
      {props.works.map(images => (
        <div key={images.id} >
          <a href={`/works/${images.id}`}>
            <div className="creator_work_image">
              <img className="creator_work creator_work_image" src={images.thumbnail || "https://www.sciphijournal.org/wp-content/themes/fox/images/placeholder.jpg"} alt={images.title} />
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default CreatorImages