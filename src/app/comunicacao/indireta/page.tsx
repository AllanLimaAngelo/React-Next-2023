import Contador from "@/components/comunicacao/indireta/Contador";
import { use } from "react";

export default function PaginaIndireta() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-5 scale-75">
      <h1 className="text-5xl font-black mb-10">Comunicação Indireta</h1>
      <div className="flex gap-5">
        <Contador />
        <Contador />
        <Contador />
      </div>
    </div>
  )
}