import React from "react"
import fundo from '../../Img/Fundo/fundo.jpg'
import Redirect from "../../Components/Redirect"

export default function Next () {
  return(
    <div className="">
      <img
        src={fundo}
        alt="MDN logo"
        className=" w-screen h-screen" />
      <div className="absolute top-0 left-0 w-full h-lvh ">
        <Redirect />
      </div>
    </div>
  )
}
