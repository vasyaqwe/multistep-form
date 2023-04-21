import { motion, AnimatePresence } from 'framer-motion'

import { variants } from "../utils"
import { useStore } from "../useStore"

import { PersonalInfoStep } from "./PersonalInfoStep/PersonalInfoStep"
import { SelectPlanStep } from "./SelectPlanStep/SelectPlanStep"
import { PickAddOnsStep } from "./PickAddOnsStep/PickAddOnsStep"
import { FinishingUpStep } from "./FinishingUpStep/FinishingUpStep"
import { ThankYouStep } from "./ThankYouStep"
import { forwardRef } from 'react'

export const MainForm = forwardRef<HTMLDivElement, { thankYouStepStyle: boolean }>((props, ref) => {
    const steps = [
        <PersonalInfoStep />,
        <SelectPlanStep />,
        <PickAddOnsStep />,
        <FinishingUpStep />,
        <ThankYouStep />
    ]

    const { currentStepIdx, animationDirection: direction } = useStore()

    return (
        <motion.form className={`main-form flex overflow-hidden relative ${props.thankYouStepStyle ? 'min-h-[500px]' : ''}`}
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.div ref={ref}
                    className={`flex flex-col w-full flex-1 min-w-[100%]`} // if thank you step, center it
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
})

