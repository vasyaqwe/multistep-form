import { MobileNavButtons } from "./components/MobileNavButtons"
import { Header } from "./components/Header"
import { PersonalInfoStep } from "./components/Steps/PersonalInfoStep"
import { SelectPlanStep } from "./components/Steps/SelectPlanStep"
import { PickAddOnsStep } from "./components/Steps/PickAddOnsStep"
import { FinishingUpStep } from "./components/Steps/FinishingUpStep"
import { useStore } from "./useStore"
import { Sidebar } from "./components/Sidebar"
import { DesktopNavButtons } from "./components/DesktopNavButtons"
import { motion, AnimatePresence } from 'framer-motion'
import { variants } from "./utils"
import { ThankYouStep } from "./components/Steps/ThankYouStep"

function App() {
  const { currentStepIdx, animationDirection: direction, formSubmitted } = useStore()

  const steps = [
    <PersonalInfoStep />,
    <SelectPlanStep />,
    <PickAddOnsStep />,
    <FinishingUpStep />,
    <ThankYouStep />
  ]

  return (
    <>
      <Header />
      <main className="px-4 min-h-[100vh] md:grid place-items-center">
        <div className="bg-white pt-7 pb-9 px-6 md:py-4 md:pr-24 shadow-lg translate-y-[-100px] md:translate-y-0 rounded-lg max-w-lg mx-auto
        md:grid grid-cols-[minmax(180px,_280px)_minmax(380px,_470px)] gap-[min(6vw,_6.5rem)] md:max-w-5xl md:min-h-[622px]
        ">
          <Sidebar />
          <AnimatePresence initial={false} custom={direction}>
            <form className="flex flex-col justify-center overflow-hidden h-full">
              <motion.div className="flex flex-col h-full" key={currentStepIdx}
                variants={variants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 500, damping: 45 },
                  opacity: { duration: .2 }
                }}
              >
                {steps[currentStepIdx]}
              </motion.div>
              {!formSubmitted && <DesktopNavButtons />}
            </form>
          </AnimatePresence>
        </div>
        {!formSubmitted && <MobileNavButtons />}
      </main>
    </>
  )
}

export default App
