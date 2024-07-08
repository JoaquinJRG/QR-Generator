import { ColorPicker } from "./ColorPicker"
import { useContext } from "react"
import { InputValueContext } from '../context/InputValue'

export function UrlBox() {

  const { inputValue, setInputValue } = useContext(InputValueContext)

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="bg-white border border-black px-8 py-10 w-full lg:w-[55%]">
      <h2 className="font-bold text-xl mb-5">
        Enter text or a URL <br />
        to generate a custom QR code
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label>URL</label>
          <input
            type="text"
            placeholder="https://example.com"
            className="px-3 py-1 w-full border rounded-none border-black bg-primary focus:outline-dashed outline-offset-4"
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-1">
          <div className="flex flex-col gap-1">
            <label>Color</label>
            <ColorPicker />
          </div>

        </div>
      </div>
    </div>
  )
}