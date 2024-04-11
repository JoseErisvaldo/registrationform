import React from "react"

export default function Input ({placeholder,type}) {
  return (
    <input placeholder={placeholder} type={type} required className="border p-2 w-full rounded"/>
  )
}