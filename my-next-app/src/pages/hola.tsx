import Link from "next/link";
export default function Hola() {//Esto es lenguaje  tsx

  const name = "Juanma"
  const names = ["Alberto, Sergio, Maria"];
  return (
    <>
      <div> Hola Mundo</div>
      <div>Me llamo {name}</div>
      <div> {name === "Juanma" ? "eres el mejor" : "que pena"}</div>


    </>
  )
}