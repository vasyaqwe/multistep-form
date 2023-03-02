import { MouseEventHandler } from "react"
import { ButtonProps } from "../types"
import { useStore } from "../useStore"
export const NextStepButton = ({ onClick, text }: ButtonProps) => {
    const { isLastStep } = useStore()
    return (
        <button onClick={onClick} type="button" className={`${!isLastStep() ? 'bg-primary-900 hover:bg-primary-800' :
            'bg-primary-400 hover:bg-primary-350'} text-neutral-100 py-2 px-4 rounded-md
        ml-auto md:py-3 md:px-8 md:rounded-lg`}>{text}</button>
    )
}
