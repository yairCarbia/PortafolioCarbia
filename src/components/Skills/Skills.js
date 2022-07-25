
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png"
import "./_skills.scss"
//react-icons
import { AiFillHtml5 } from "react-icons/ai"
import { FaCss3Alt } from "react-icons/fa"
import { FaSass } from "react-icons/fa"
import { DiJavascript1 } from "react-icons/di"
import { FaReact } from "react-icons/fa"
import { SiNextdotjs } from "react-icons/si"
import { AiOutlineConsoleSql } from "react-icons/ai"
import { SiMysql } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"
import { BsFillBootstrapFill } from "react-icons/bs"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Conocimientos</h2>
              <p>Estos son mis conocimientos en distintas tecnologias</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                <div className="item">
                  <AiFillHtml5 loading="lazy" className="react__icons" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <FaCss3Alt loading="lazy" className="react__icons" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <FaSass loading="lazy" className="react__icons" />
                  <h5>SASS</h5>

                </div>
                <div className="item">
                  < SiTailwindcss loading="lazy" className="react__icons" />
                  <h5>Tailwind CSS</h5>
                </div>

                <div className="item">
                  < BsFillBootstrapFill loading="lazy" className="react__icons" />
                  <h5>Bootstrap </h5>
                </div>
                <div className="item">
                  <DiJavascript1 loading="lazy" className="react__icons" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <FaReact loading="lazy" className="react__icons" />
                  <h5>React js</h5>
                </div>
                <div className="item">
                  <SiNextdotjs className="react__icons" />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <AiOutlineConsoleSql loading="lazy" className="react__icons" />
                  <h5>Sql</h5>
                </div>
                <div className="item">
                  <SiMysql loading="lazy" className="react__icons" />
                  <h5>mySQL</h5>
                </div>

              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" loading="lazy" src={colorSharp} alt="Image" />
    </section>
  )
}
