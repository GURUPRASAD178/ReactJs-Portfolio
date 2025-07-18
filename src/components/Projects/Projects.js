import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tipEase from "../../Assets/Projects/tipease.png";
import lawbridge from "../../Assets/Projects/lawbridge.png";
import herbalGarden from "../../Assets/Projects/herbal.png";
import railMadad from "../../Assets/Projects/railmadad.png";
import smartLight from "../../Assets/Projects/smartlight.png";
import ecommerceAI from "../../Assets/Projects/ecommerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tipEase}
              isBlog={false}
              title="TipEase"
              description="TipEase is a web app built with Django and Bootstrap for seamless digital tipping. It supports Razorpay integration, user roles (waiters/customers), tip history, and total earnings tracking in a clean UI."
              ghLink="https://github.com/guruprasad-hd178/TipEase"
              demoLink="https://tipease.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lawbridge}
              isBlog={false}
              title="LawBridge"
              description="LawBridge is a Spring Boot & Thymeleaf-powered lawyer-client management system with secure login, role-based dashboards, case tracking, lawyer appointments, and admin insights with dynamic reporting."
              ghLink="https://github.com/guruprasad-hd178/LawBridge"
              demoLink="https://lawbridge.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={herbalGarden}
              isBlog={false}
              title="Virtual Herbal Garden"
              description="An immersive, educational web-based experience showcasing medicinal plants used in AYUSH systems, including 3D visualizations, plant facts, audio guides, and virtual walk-throughs for learners."
              ghLink="https://github.com/guruprasad-hd178/Virtual-Herbal-Garden"
              demoLink="https://herbalgarden.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={railMadad}
              isBlog={false}
              title="AI-Powered Rail Madad"
              description="An enhanced version of Rail Madad using AI to auto-categorize and prioritize complaints via NLP and ML. Features include image OCR, smart routing, urgency detection, and chatbot intake."
              ghLink="https://github.com/guruprasad-hd178/AI-Powered-Rail-Madad"
              demoLink="https://railmadadai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartLight}
              isBlog={false}
              title="EcoLight - Smart Lighting"
              description="EcoLight uses AI + IoT sensors to detect occupancy and automatically adjust lighting, reducing energy waste in smart buildings. Built with Python, Django, and MQTT integration."
              ghLink="https://github.com/guruprasad-hd178/EcoLight-AI"
              demoLink="https://ecolight-ai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerceAI}
              isBlog={false}
              title="AI for E-Commerce Complaints"
              description="An AI system for e-commerce platforms that analyzes complaint text, detects urgency, auto-tags categories, and smartly routes tickets for faster customer service resolution."
              ghLink="https://github.com/guruprasad-hd178/Ecommerce-AI-Complaints"
              demoLink="https://ecommerce-ai.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
