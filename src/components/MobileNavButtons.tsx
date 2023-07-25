import { useStore } from "../stores/useStore"
import { GoBackButton } from "./GoBackButton"
import { NextStepButton } from "./NextStepButton"

export const MobileNavButtons = () => {
    const { isFirstStep, isLastStep, onNext, onBack } = useStore()

    return (
        <div className="fixed bottom-0 left-0 p-4 bg-white w-full shadow-xl md:hidden">
            <div className="flex-1  flex justify-between items-center mx-auto max-w-lg">
                {!isFirstStep() && <GoBackButton onClick={onBack} />}
                <NextStepButton
                    onClick={onNext}
                    text={isLastStep() ? "Confirm" : "Next Step"}
                />
            </div>
        </div>
    )
}
