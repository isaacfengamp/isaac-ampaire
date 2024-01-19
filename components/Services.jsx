"use client"

import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { Appservice, Coachingservice, Graphicservice, MSservice, webservice } from "@/data";

export default function Services() {
  const[changeState, setchangeState] = useState("web");
  function handleWeb(){
    setchangeState("web")
  }
  function handleApp(){
    setchangeState("app")
  }
  function handleMs(){
    setchangeState("ms")
  }
  function handleProgram(){
    setchangeState("code")
  }
  function handleGraphic(){
    setchangeState("graphics")
  }
  return (
    <section className="section">
        <div className="serviceheader">
            <h1>Services</h1>
            <p>I offer the following distiguished Services to Clients</p>
          
        </div>
        <div className="servicebtns">
          <button className={changeState=="web"?"activebtn":""} onClick={handleWeb}>Websites</button>
          <button className={changeState=="app"?"activebtn":""} onClick={handleApp}>Apps</button>
          <button className={changeState=="ms"?"activebtn":""} onClick={handleMs}>Microsoft</button>
          <button className={changeState=="code"?"activebtn":""} onClick={handleProgram}>Programming</button>
          <button className={changeState=="graphics"?"activebtn":""} onClick={handleGraphic}>Graphic Design</button>
        </div>
        <div className="serviceCards">
                <ServiceCard services={changeState=="web"?webservice:changeState=="app"?Appservice:changeState=="ms"?MSservice:changeState=="code"?Coachingservice:Graphicservice}/>
                
            </div>
    </section>
  )
}
