import { useContext } from "react"
import { ColorContext } from "../context/Color"

export function ColorPicker() {

  const { color, setColor } = useContext(ColorContext)

  const handleColor = (e) => {
    setColor(e.target.value)
  }

  return (
    <div className="">
      <input type="color" value={color} onChange={handleColor} className="px-2 border border-black bg-primary w-20 focus:outline-dashed focus:outline-1 focus:outline-offset-4" />
    </div>
  )
} 