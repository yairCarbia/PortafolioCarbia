import { Container, Row, Col } from "react-bootstrap";
import { AiTwotoneHeart } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
// import { MailchimpForm } from "./MailchimpForm";

import "./_footer.scss"
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          <Col size={12} sm={6} className=" text-center text-sm-end">

            <div className="d-flex  justify-content-evenly">
              <p>Hecho con <span><AiTwotoneHeart /></span>  por Yair Agustin Carbia {new Date().getFullYear()}.</p>
              <div className=" m-3">
                <a href="https://www.linkedin.com/in/carbiayair/"><AiFillLinkedin className="git" /></a>
                <a href="https://github.com/yairCarbia"><BsGithub href="https://github.com/yairCarbia" className="git" /></a>

              </div>

            </div>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}
