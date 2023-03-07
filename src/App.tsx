import { MobileNavButtons } from "./components/MobileNavButtons"
import { Header } from "./components/Header"

import { useStore } from "./useStore"
import { Sidebar } from "./components/Sidebar"
import { MainForm } from "./components/MainForm"

function App() {
  const { formSubmitted } = useStore()

  return (
    <>
      <Header />
      <main className="px-4 min-h-[100vh] md:grid place-items-center">
        <div className="bg-white pt-7 pb-9 px-6 md:py-4 md:pr-24 shadow-lg translate-y-[-100px] md:translate-y-0 rounded-lg max-w-lg mx-auto
        md:grid grid-cols-[minmax(180px,_280px)_minmax(380px,_470px)] gap-[min(6vw,_6.5rem)] md:max-w-5xl md:min-h-[622px]
        ">
          <Sidebar />
          <MainForm />
        </div>
        {!formSubmitted && <MobileNavButtons />}
      </main>
    </>
  )
}

export default App
