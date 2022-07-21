import { Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs"

import "./_projectCard.scss"
export const ProjectCard = ({ title, description, imgUrl, url, git }) => {

  return (

    <div className="proj-imgbx">
      <img src={imgUrl} />
      <div className="proj-txtx">
        <a src={url}> <h4>{title}</h4></a>

        <hr />
        <div className="d-flex justify-content-around">
          <a href={url}>
            Link
          </a >
          <a href={git}><BsGithub /></a>
        </div>

        <p> Tecnologias utilizadas : {description}</p>
      </div>

    </div>

  )
}
