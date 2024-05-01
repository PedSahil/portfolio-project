import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/page-header";
import "./style.scss"
import data from "./data.json"
import { Line } from "rc-progress";
import { Animate } from "react-simple-animate";
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeader headerText="Skills" icon={<BsInfoCircleFill size={40} />} />
      <Animate
       play
       duration={.2}
       // delay={1}
       start={{
         transform: "translatex(-200px)",
       }}
       end={{
         transform: "translateX(0px)",
       }}
      >
      <div className="skills_content_wrapper">
        {data.map((item,i)=>(
          <div className="progressbar_wrapper" key={i}>
            <p>{item.skill}</p>
            <Line percent={item.percent}
            strokeWidth="1"
            strokeColor="var(--main-color)"
            trailWidth="1"
            strokeLinecap="square"
            />
            
          </div>
        ))}
      </div>
      </Animate>
    </section>
   
)};

export default Skills;
