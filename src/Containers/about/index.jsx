import React from "react";

import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/page-header";
import { Animate } from "react-simple-animate";
import "./style.scss";
// Section 2
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about_content">
        <div className="about_content_personal_wrapper">
          <Animate
            play
            duration={1}
            // delay={1}
            start={{
              transform: "translatex(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto non nobis vitae dolore dicta perspiciatis nesciunt a
              provident. Voluptatum, vel. Mollitia ratione illo animi maxime
              similique error rerum, laborum ex? Voluptate assumenda nostrum
              veniam illo sit cumque ullam unde ipsa. Delectus, eaque pariatur
              ipsam est tenetur placeat nostrum recusandae nihil eius accusamus
              cumque sed, aliquam impedit esse consequuntur adipisci non?
              Pariatur quam unde fugiat sit. Dolore optio sed quaerat numquam
              maiores nulla repudiandae labore consequuntur iure quo nam minima
              sunt suscipit quidem expedita quam quisquam ullam atque,
              necessitatibus dolor ea. Impedit pariatur, inventore voluptatum
              dolorem, perspiciatis dolores sunt est placeat architecto labore
              porro iure. Neque aut nam magnam similique aliquid quibusdam ad,
              aspernatur itaque optio facere officiis. Consequuntur, dolorum
              vel!
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            // delay={1}
            start={{
              transform: "translatex(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Personal Details</h3>
            <ul>
              <li>
                <span className="title">Name : </span>
                <span className="value">Sahil Pednekar</span>
              </li>
              <li>
                <span className="title">Age : </span>
                <span className="value">22</span>
              </li>
              <li>
                <span className="title">Phone : </span>
                <span className="value">8310531290</span>
              </li>
              <li>
                <span className="title">Address : </span>
                <span className="value">India</span>
              </li>
              <li>
                <span className="title">Email : </span>
                <span className="value">sahilpednekar751@gmail.com</span>
              </li>
            </ul>
          </Animate>
        </div>
        <div className="about_content_services_wrapper">
        <Animate
            play
            duration={1}
            // delay={1}
            start={{
              transform: "translatex(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
          <div className="about_content_services_wrapper_innerContent">
            <div>
              <FaDev size={60} color="var(--main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--main-color)" />
            </div>
            <div>
              <DiApple size={60} color="var(--main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
