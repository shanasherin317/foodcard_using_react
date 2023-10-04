import React from "react"
function Card(props) {
const {image ,para ,title }=props
    return (
      <>
        <div className="card">
        <div className="card-content">
         <img src={image} alt="" />
         <h3>{title}</h3>
         <p>{para}</p>
        </div>
        </div>
      </>
    )
  }
  export default Card
  