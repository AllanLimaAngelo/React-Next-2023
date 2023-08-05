import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaDireta() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-5 scale-75">
      <h1 className="text-5xl font-black mb-10">Comunicação Direta</h1>
      <Avo nome="Mariano" sobrenome="Silva" />
      <Avo nome="Antônio" sobrenome="Miranda" />
    </div>
  )
}