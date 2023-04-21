import { useStore } from "../useStore"
import { GoBackButton } from "./GoBackButton"
import { NextStepButton } from "./NextStepButton"

export const DesktopNavButtons = () => {
    const { isFirstStep, isLastStep, onNext, onBack } = useStore()

    return (
        <div className="hidden col-start-2 md:block py-4 bg-white w-full mt-auto">
            <div className="flex-1  flex justify-between items-center mx-auto max-w-lg">
                {!isFirstStep() && <GoBackButton onClick={onBack} />}
                <NextStepButton onClick={onNext} text={isLastStep() ? 'Confirm' : 'Next Step'} />
            </div>
        </div>
    )
}
