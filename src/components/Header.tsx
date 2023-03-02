import { STEPS_COUNT } from "../utils"
import { StepCircle } from "./StepCircle"

export const Header = () => {

    return (
        <header className="bg-[url('./assets/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover
        min-h-[200px] md:hidden
        ">
            <div className="mt-8 flex justify-center gap-3">
                {[...Array(STEPS_COUNT).keys()].map(num => <StepCircle key={num} num={num + 1} />)}
            </div>
        </header>
    )
}