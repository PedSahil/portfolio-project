import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/page-header";
import "./style.scss";
import data from "./education.json";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeader headerText="Resume" icon={<BsInfoCircleFill size={40} />} />

      <div className="timeline">
        <div className="timeline_education">
          <h3 className="timeline_education_header-text">Education</h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--main-color)"
            className="timeline-content"
          >
            {data.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                contentStyle={{
                  background: "none",
                  boxShadow:"none",
                  color: "var(--sub-text-color)",
                  border: "1.5px solid var(--main-color)",
                }}
                date="2020 - present"
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--main-color)",
                }}
                className="timeline_education_first-element"
              >
                <div className="vertical_timeline_element_title-wrapper">
                  <h3 className="vertical_timeline_element_title">
                    {item.title}
                  </h3>

                  <h4 className="vertical_timeline_element_subtitle">
                    {item.collage}
                  </h4>
                  <span>{item.duration}</span>
                  <span>{item.percentage}</span>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
