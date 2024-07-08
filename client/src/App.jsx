import "@ibm/plex/css/ibm-plex.css"
import { MyHeader } from "./components/MyHeader"
import { QrBox } from "./components/QrBox"
import { UrlBox } from "./components/UrlBox"

function App() {

  return (
    <div className="h-screen w-full">
      <MyHeader />
      <main className="bg-primary min-h-[90%] py-4 px-3 lg:px-30 xl:px-40 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row w-full justify-between gap-6">
          <UrlBox />
          <QrBox />
        </div>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
