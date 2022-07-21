import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Formik } from 'formik'
import * as Yup from "yup"
import emailjs from "emailjs-com"
import contactImg from "../../assets/img/undraw_mail_sent_re_0ofv.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./_contacto.scss"

export const Contact = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    telefono: '',
    mensaje: ""
  });
  const handleChange = (name) => (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };
  const schema = Yup.object().shape({
    nombre: Yup.string().required("El Campo nombre es invalido")
      .min(4, "El nombre es demasiado corto, vuelve a intentar!")
      .max(30, "El nombre  sobrepaso el maximo de caracteres, reducelo!"),
    email: Yup.string().required("El campo Email es invalido")
      .email("Formato de email erroneo,vuelve a intentar!"),
    mensaje: Yup.string().required("El Campo es invalido")
      .min(4, "El nombre es demasiado corto, vuelve a intentar!")
      .max(30, "El nombre  sobrepaso el maximo de caracteres, reducelo!"),
  })
  const sendEmail = (e) => {

    emailjs.sendForm("service_tu5esh2", "template_3t8u1gc", "#contact-form", "4fXsGCzL8l0to34_Q").then(resp => console.log(resp)).catch(err => console.log(err))

    setButtonText("Enviado!")
    setTimeout(() => {
      setButtonText("Enviar")
    }, 2000);

  }

  const [buttonText, setButtonText] = useState('Enviar');




  return (
    <section className="contact" id="connect">


      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>

                <>
                  <Formik
                    initialValues={{
                      nombre: "",
                      email: "",
                      telefono: "",
                      mensaje: ""
                    }}

                    onSubmit={sendEmail}

                    validationSchema={schema}
                  >
                    {
                      (formik) => (
                        <form id="#contact-form" onSubmit={formik.handleSubmit}>
                          <input
                            value={formik.values.nombre}
                            name="nombre"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder={"Nombre"}
                            className="form-control my-2"
                          />
                          {
                            (formik.errors.nombre && <p className='alert alert-danger'>{formik.errors.nombre}</p>)
                          }
                          <input
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            type={"email "}
                            placeholder={"Email"}
                            className="form-control my-2"
                          />
                          {
                            (formik.errors.email && <p className='alert alert-danger'>{formik.errors.email}</p>)
                          }
                          <input
                            value={formik.values.telefono}
                            name="telefono"
                            onChange={formik.handleChange}
                            type={"tel"}
                            placeholder={"Telefono"}
                            className="form-control my-2"
                          />
                          {
                            (formik.errors.telefono && <p className='alert alert-danger'>{formik.errors.telefono}</p>)
                          }
                          <input
                            value={formik.values.mensaje}
                            name="mensaje"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder={"Mensaje"}
                            className="form-control my-2"
                          />
                          {
                            (formik.errors.mensaje && <p className='alert alert-danger'>{formik.errors.mensaje}</p>)
                          }
                          <button className="coolb " type="submit"><span>{buttonText}</span></button>
                        </form>
                      )
                    }


                  </Formik>
                </>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
{/* <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contacto</h2>
                  <form onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="to_name" placeholder="Nombre" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="to_ape" placeholder="Apellido" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="to_email" placeholder="Email" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="to_tel" placeholder="Telefono" />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="to_mess" placeholder="Mensaje" ></textarea>
                        <button className="coolb" type="submit"><span>{buttonText}</span></button>
                      </Col>

                    </Row>
                  </form>
                </div> */}

