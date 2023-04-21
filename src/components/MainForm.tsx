import { motion, AnimatePresence } from 'framer-motion'

import { variants } from "../utils"
import { useStore } from "../useStore"

import { DesktopNavButtons } from "./DesktopNavButtons"
import { PersonalInfoStep } from "./PersonalInfoStep/PersonalInfoStep"
import { SelectPlanStep } from "./SelectPlanStep/SelectPlanStep"
import { PickAddOnsStep } from "./PickAddOnsStep/PickAddOnsStep"
import { FinishingUpStep } from "./FinishingUpStep/FinishingUpStep"
import { ThankYouStep } from "./ThankYouStep"
import { useWidth } from '../useWidth'

export const MainForm = () => {
    const { smallScreen } = useWidth()

    const steps = [
        <PersonalInfoStep />,
        <SelectPlanStep />,
        <PickAddOnsStep />,
        <FinishingUpStep />,
        <ThankYouStep />
    ]
    const heightLookup: { [key: number]: string } = {
        0: '370px',
        1: '500px',
        2: window.innerWidth < 375 ? '370px' : '339px',
        3: window.innerWidth < 345 ? '373px' : '353px',
        4: '276px'
    }

    const { currentStepIdx, animationDirection: direction, formSubmitted } = useStore()

    const initialHeight = smallScreen ? direction >= 0 ? heightLookup[currentStepIdx - 1] : heightLookup[currentStepIdx + 1] : 'auto'
    const animateHeight = smallScreen ? heightLookup[currentStepIdx] : 'auto'
    const thankYouStepTop = !smallScreen && currentStepIdx === steps.length - 1 ? 'top-[25%] ' : ''

    return (
        <motion.form className={`main-form flex overflow-hidden md:h-[418px] relative`}
            initial={{ height: initialHeight }}
            animate={{ height: animateHeight }}
        >
            <AnimatePresence custom={direction}>
                <motion.div

                    className={`flex flex-col w-full top-0 flex-1 min-w-[100%] h-full md:h-auto ${thankYouStepTop}`} // if thank you step, center it
                    key={currentStepIdx}
                    variants={variants}
                    custom={direction}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        delay: .3,
                        x: { type: "spring", stiffness: 500, damping: 45 },
                        opacity: { duration: .3 },
                    }}
                >
                    {steps[currentStepIdx]}
                </motion.div>
            </AnimatePresence>
        </motion.form>
    )
}
