import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import TrackVisibility from 'react-on-screen';
import "./_banner.scss"
import carbia from "./CarbiaYairAgustinCv.pdf"

export const Banner = () => {

  const { texts } = useTypewriter({
    words: ['FullStack Developer', 'Web Developer'],
    loop: { 0: 2 }
  })

  return (
    <section className="banner " id="home">
      <Container>
        <Row className="aligh-items-center ">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>


              <div className="animate__animated animate__fadeInLeft">
                <span className="banner__tagline">Bienvenido a mi Portafolio</span>
                <h1 className="">{`Hola soy Yair Carbia y soy`}<span> {<span>{texts}
                  {< Typewriter
                    words={['Desarrollador FrontEnd', 'Desarrolador Web']}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}


                  />}
                </span>}</span>
                </h1>

                <p>Soy estudiante de ingenieria en informatica, tengo 21 años.Me encanta programar y desde chico tuve una pronta afinidad hacia la informatica. </p>
                <a href={carbia} target="_blank"><span>Descargar Cv! <ArrowRightCircle size={25} /></span> </a>
              </div>


            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  <img src={headerImg} loading="lazy" alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section >
  )
}
