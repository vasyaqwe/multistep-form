import { useStore } from "../useStore"
import { ReactComponent as Check } from '../assets/check.svg'

export const StepCircle = ({ num }: { num: number }) => {
    const { currentStepIdx, formSubmitted } = useStore()
    const current = currentStepIdx + 1 === num
    const aria: {} = current ? { "aria-current": "step" } : {}

    return (
        <div {...aria} className={`w-9 h-9 rounded-full grid place-items-center font-medium 
        ${currentStepIdx + 1 === num || formSubmitted && currentStepIdx === num || num <= currentStepIdx ?
                'bg-primary-100 text-primary-900' : 'bg-transparent text-white border border-neutral-100'} 
        `}>
            {num <= currentStepIdx ? <Check /> : num}
        </div>
    )
}
