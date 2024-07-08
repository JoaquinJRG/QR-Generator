import { GitHub } from "./icons/GitHub";
import { QrCode } from "./icons/QrCode";

export function MyHeader() {
  return (
    <header className="h-[10%] py-4 px-3 lg:px-40 flex items-center justify-between border-b border-black bg-primary">
      <div className="flex items-center gap-3">
        <QrCode width={40} height={40} strokeWidth={1} />
        <h1 className="text-2xl font-bold">QR CODE GENERATOR</h1>
      </div >
      <a href="" className="flex items-center gap-3 cursor-pointer hover:underline">
        <GitHub width={20} height={20} />
        <h3>GitHub</h3>
      </a>
    </header >
  )
}