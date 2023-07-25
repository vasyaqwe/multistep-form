import { STEPS_COUNT } from "../utils"
import { StepCircle } from "./StepCircle"

export const Sidebar = () => {
    const stepTextLookup = [
        'Your Info',
        'Select Plan',
        'Add-ons',
        'Summary',
    ]

    return (
        <aside className="bg-[url('./assets/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover
        min-h-[200px] hidden md:block rounded-lg py-10 px-8 bg-primary-400 row-span-2
        ">
            <ol className="grid gap-8">
                {[...Array(STEPS_COUNT).keys()].map(num => (
                    <li key={num} className="grid grid-cols-[36px_1fr] gap-x-3">
                        <div className="row-span-2 self-center"><StepCircle num={num + 1} /></div>
                        <p className="uppercase text-primary-300 text-sm ">Step {num + 1}</p>
                        <p className="uppercase text-white font-medium  col-start-2">{stepTextLookup[num]}</p>
                    </li>
                ))}
            </ol>
        </aside>
    )
}