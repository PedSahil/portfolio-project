import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/page-header";
import { Animate } from "react-simple-animate";
import "./style.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeader
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact-content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
          <h3 className="contact-content-headerText">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
          <div className="contact-content-form">
            <div className="contact-content-form-controlswrapper">
              <div>
                <input required name="name" className="inputName" type="text" />
                <label htmlFor="name" className="namelabel">
                  Name
                </label>
              </div>
              <div>
                <input required name="email" className="inputEmail" type="email" />
                <label htmlFor="email" className="namelabel">
                  Email
                </label>
              </div>
              <div>
                <textarea rows={5} required  name="desc" className="inputdesc" type="text" />
                <label htmlFor="desc" className="namelabel">
                  Description
                </label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
