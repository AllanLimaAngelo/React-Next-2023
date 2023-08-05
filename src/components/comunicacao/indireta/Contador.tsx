"use client"
import { use, useState } from "react";
import Botoes from "./Botoes";
import Display from "./Display";

export default function Contador() {
  const [num, setNum] = useState<number>(0)

  function incrementar() {
    setNum(num + 1)
  }

  function decrementar() {
    setNum(num - 1)
  }

  return (
    <div className=" flex flex-col w-72 h-72 border border-zinc-400 rounded-lg p-2">
      <Display valor={num} />
      <Botoes inc={incrementar} dec={decrementar} />
    </div>
  )
}