import { motion, AnimatePresence } from 'framer-motion'

import { variants } from "../utils"
import { useStore } from "../useStore"

import { DesktopNavButtons } from "./DesktopNavButtons"
import { PersonalInfoStep } from "./PersonalInfoStep/PersonalInfoStep"
import { SelectPlanStep } from "./SelectPlanStep/SelectPlanStep"
import { PickAddOnsStep } from "./PickAddOnsStep/PickAddOnsStep"
import { FinishingUpStep } from "./FinishingUpStep/FinishingUpStep"
import { ThankYouStep } from "./ThankYouStep"

export const MainForm = () => {
    const steps = [
        <PersonalInfoStep />,
        <SelectPlanStep />,
        <PickAddOnsStep />,
        <FinishingUpStep />,
        <ThankYouStep />
    ]

    const { currentStepIdx, animationDirection: direction, formSubmitted } = useStore()
    return (
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
    )
}
