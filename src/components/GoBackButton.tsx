import { ButtonProps } from "../types"

export const GoBackButton = ({ onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} type="button" className="font-medium text-neutral-400 hover:text-primary-900">
            Go Back
        </button>
    )
}
