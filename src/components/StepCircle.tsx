import { useStore } from "../useStore"

export const StepCircle = ({ num }: { num: number }) => {
    const { currentStepIdx, formSubmitted } = useStore()
    const aria = currentStepIdx + 1 === num ? { "aria-current": "step" } : {}

    return (
        <div className={`w-9 h-9 rounded-full grid place-items-center font-medium 
        ${currentStepIdx + 1 === num || formSubmitted && currentStepIdx === num ? 'bg-primary-100 text-primary-900' : 'bg-transparent text-white border border-neutral-100'} 
        `} {...aria} >
            {num}
        </div>
    )
}
