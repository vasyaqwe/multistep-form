import { MobileNavButtons } from "./components/MobileNavButtons"
import { Header } from "./components/Header"
import useMeasure from "react-use-measure"
import { useStore } from "./stores/useStore"
import { Sidebar } from "./components/Sidebar"
import { MainForm } from "./components/MainForm"
import { DesktopNavButtons } from "./components/DesktopNavButtons"
import { AnimatePresence, motion } from "framer-motion"
import { useWidth } from "./hooks/useWidth"

function App() {
    const { formSubmitted, currentStepIdx } = useStore()
    const [ref, { height }] = useMeasure()

    const { smallScreen } = useWidth()
    const thankYouStepStyle = !smallScreen && currentStepIdx === 4

    return (
        <>
            <Header />
            <main className="px-4 min-h-[100vh] md:grid place-items-center">
                <AnimatePresence initial={false}>
                    <motion.div
                        animate={{
                            height: smallScreen ? height + 28 * 2 : "auto",
                        }}
                        className={`bg-white pt-7 pb-7 px-6 md:px-4 md:py-4 md:pr-12 lg:pr-24 shadow-lg translate-y-[-100px] md:translate-y-0 
        rounded-lg max-w-lg mx-auto
         md:grid grid-cols-[minmax(180px,_280px)_minmax(380px,_470px)] gap-x-[min(6vw,_6.5rem)]
           md:max-w-5xl md:min-h-[622px]
        `}
                    >
                        <Sidebar />
                        <MainForm
                            thankYouStepStyle={thankYouStepStyle}
                            ref={ref}
                        />
                        {!formSubmitted && <DesktopNavButtons />}
                    </motion.div>
                </AnimatePresence>
                {!formSubmitted && <MobileNavButtons />}
            </main>
        </>
    )
}

export default App
