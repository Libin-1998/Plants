import React, { useEffect, useState } from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios'

export default function Home() {

  return (
    <>
      <div className="homepage">
        <div className="firstpage">
          {/* <img src="/images/homeplant.jpg" alt="" width={'100%'} className='homeplant'/> */}
          <h3>Welcome To Plants</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni hic
            <br /> voluptatem quibusdam vero, ipsa odio sint quam
            <br /> corporis iusto eaque.
          </p>

          <button class="custom-btn btn-2">Read More</button>

        </div>
      </div>

      <Container fluid className="second">
        <Row className="secondrow">
          <Col className="second1stcol">
            <h1>
              Life in <br />
              Love with <br />
              plants
            </h1>
          </Col>
          <Col className="second2ndcol">
            <div className="imagesize">
              <img
                src="/images/homeplant2.jpeg"
                alt=""
                className="secondimage"
              />
            </div>
          </Col>
          <Col className="second3rdcol">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque mollitia ut quisquam alias facilis animi rerum quis
              facere,
            </p>
          </Col>
        </Row>
      </Container>

      <div className="third">
        <Container fluid >
          <Row>
            <Col className="thirdimgcol">
              <img
                src="/images/whitethird.jpeg"
                alt=""
                className="thirdimage"
                height={"300px"}
                width={"250px"}
              />
            </Col>
            <Col className="thirdtext">
              <p className="hi">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque mollitia ut quisquam alias facilis animi rerum quis
                facere, aliquid porro a quam minus voluptate sit sed neque
                laborum non optio!
              </p>
              


            </Col>
            <Col className="thirdimgcol">
              <img
                src="/images/homeplant4.jpeg"
                alt=""
                className="fouthimage"
                height={"300px"}
                width={"250px"}
              />
            </Col>
          </Row>
          <Row className="thirdviewmore">

          <button class="cta">
  <span class="hover-underline-animation"> View More </span>
  <svg
    id="arrow-horizontal"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="10"
    viewBox="0 0 46 16"
  >
    <path
      id="Path_10"
      data-name="Path 10"
      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
      transform="translate(30)"
    ></path>
  </svg>
</button>
</Row>

        </Container>
      </div>

      <div className="homefourth">
        <h1 className="fourthh1">
          What Are The <br />
          Healthiest Houseplants?
        </h1>

        <div className="fourth">
          <div class="homecard">
            <img
              src="/images/philodendronplant.jpeg"
              alt=""
              height={"100%"}
              width={"100%"}
            />
            <div class="homecard__content">
              <p class="homecard__title">Philodendron Plant</p>
              <p class="homecard__description">
                Philodendron plants, known for being low-maintenance, can thrive
                indoors if given the proper amount of sunlight and water.
                According to a NASA study, these plants can also be effective in
                removing volatile organic compounds (VOCs) like formaldehyde and
                carbon monoxide, improving the air quality of your home.
              </p>
            </div>
          </div>

          <div class="homecard">
            <img
              src="/images/zzplant.jpeg"
              alt=""
              height={"100%"}
              width={"100%"}
            />
            <div class="homecard__content">
              <p class="homecard__title">ZZ Plant</p>
              <p class="homecard__description">
                Looking for a plant that's difficult to disappoint? ZZ plants
                live up to their nickname as the Eternity Plant. According to
                The Sill, these plants need around six hours of indirect light
                per day and require watering every two to three weeks.
              </p>
            </div>
          </div>

          <div class="homecard">
            <img
              src="/images/elephantearplant.jpeg"
              alt=""
              height={"100%"}
              width={"100%"}
            />
            <div class="homecard__content">
              <p class="homecard__title">Elephant Ear Plants</p>
              <p class="homecard__description">
                If you want to spend a little more time with your houseplants,
                Alex Cromer, LPC, a licensed professional mental health
                counselor with Thriveworks in Richmond, recommends elephant ear
                plants.
              </p>
            </div>
          </div>
        </div>

        <div className="arrow">
          <button class="read-Btn">
            <div class="sign">
              <svg viewBox="0 0 512 512">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
            </div>

            <div class="text">Read More</div>
          </button>
        </div>
      </div>

      <div className="fifth">
        <h1 className="" style={{ padding: "30px 30px 30px 0px" }}>
          Indoor Plants <br />
          Gallery
        </h1>
        <div className="indoorrow">
          <div className="indoorcolumn1">
            <img
              src="/images/grid1.jpeg"
              alt=""
              height={"250px"}
              width={"265px"}
            />
          </div>

          <div className="indoorcolumn2">
            <img
              src="/images/grid2.jpeg"
              alt=""
              height={"250px"}
              width={"265px"}
            />
          </div>

          <div className="indoorcolumn3">
            <img
              src="/images/grid3.jpeg"
              alt=""
              height={"250px"}
              width={"265px"}
            />
          </div>

          <div className="indoorcolumn4">
            <img
              src="/images/grid4.jpeg"
              alt=""
              height={"250px"}
              width={"265px"}
            />
          </div>

          <div className="indoorcolumn5">
            <img
              src="/images/grid5.jpeg"
              alt=""
              height={"250px"}
              width={"265px"}
            />
          </div>

          <div className="indoorcolumn6">
            <img
              src="/images/grid6.jpeg"
              alt=""
              height={"250px"}
              width={"265px"}
            />
          </div>

          <div className="indoorcolumn7">
            <img
              src="/images/grid7.jpeg"
              alt=""
              height={"250px"}
              width={"265px"}
            />
          </div>

          <div className="indoorcolumn8">
            <img
              src="/images/grid8.jpeg"
              alt=""
              height={"250px"}
              width={"265px"}
            />
          </div>
        </div>
      </div>

      <div className="sixth">
        <h1 className="" style={{ padding: "30px 30px 30px 0px" }}>
          Outdoor Plants <br />
          Gallery
        </h1>
        <div className="outdoorrow">
          <div className="outdoorcolumn1">
            <img
              src="/images/outdoor1.jpeg"
              alt=""
              height={"250px"}
              width={"265px"}
            />
          </div>

          <div className="outdoor2">
            <img
              src="/images/outdoor2.jpeg"
              alt=""
              height={"250px"}
              width={"265px"}
            />
          </div>

          <div className="outdoorcolumn3">
            <img
              src="/images/outdoor3.jpeg"
              alt=""
              height={"250px"}
              width={"265px"}
            />
          </div>

          <div className="outdoorcolumn4">
            <img
              src="/images/outdoor4.jpeg"
              alt=""
              height={"250px"}
              width={"265px"}
            />
          </div>

          <div className="outdoorcolumn5">
            <img
              src="/images/outdoor5.jpeg"
              alt=""
              height={"250px"}
              width={"265px"}
            />
          </div>

          <div className="outdoorcolumn6">
            <img
              src="/images/outdoor6.jpeg"
              alt=""
              height={"250px"}
              width={"265px"}
            />
          </div>

          <div className="outdoorcolumn7">
            <img
              src="/images/outdoor7.jpeg"
              alt=""
              height={"250px"}
              width={"265px"}
            />
          </div>

          <div className="outdoorcolumn8">
            <img
              src="/images/outdoor8.jpeg"
              alt=""
              height={"250px"}
              width={"265px"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
