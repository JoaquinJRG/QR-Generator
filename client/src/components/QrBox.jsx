import { Download } from "./icons/Download"
import { useContext, useEffect, useState } from "react"
import { InputValueContext } from '../context/InputValue'
import { ColorContext } from "../context/Color"
import { Spinner } from "./Spinner"

export function QrBox() {

  const { inputValue } = useContext(InputValueContext)
  const [base64, setBase64] = useState("")
  const { color } = useContext(ColorContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://qr-generator-server.vercel.app/qr64?url=${encodeURIComponent(inputValue)}&color=${encodeURIComponent(color)}`)
      .then(res => res.json())
      .then(data => setBase64(data.qrBase64))
      .finally(() => setLoading(false))
  }, [inputValue, color])


  return (
    <div className="bg-white border border-black px-5 py-10 w-full lg:w-[45%]">
      <div className="flex items-center justify-center mb-5">
        {
          loading ? (<Spinner />) : (<img src={`data:img/png;base64, ${base64}`} alt={`Qr de ${inputValue}`} />)
        }

      </div>
      <div className="flex justify-evenly pt-4">
        <a href={`data:image/png;base64,${base64}`} download="qr_code.png" className="bg-black cursor-pointer">
          <span
            className="flex gap-2 -translate-x-1 -translate-y-1 border border-black bg-primary p-2 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 transition-all"
          >
            <Download width={20} height={20} />
            DOWNLOAD
          </span>
        </a>
      </div>
    </div>
  )
}