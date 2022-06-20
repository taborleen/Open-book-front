import React from "react";
import { Carousel } from "react-responsive-carousel";

export default (props) => (
  <Carousel autoPlay>
      <div><img src={props.img} alt="" /></div>;
  </Carousel>)