import React from "react"
import Form from "../../Components/Form"
import fundo from '../../Img/Fundo/fundo.jpg'

export default function Home () {
  return(
    <div className="">
      <img
        src={fundo}
        alt="MDN logo"
        className=" w-screen h-screen" />
      <div className="absolute top-0 left-0 w-full h-lvh  overflow-y-scroll ">
        <Form />
      </div>
    </div>
  )
}
