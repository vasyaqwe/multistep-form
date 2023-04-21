import { ChangeEventHandler } from "react"

export const Switch = ({ checked, onChange }: { checked: boolean, onChange: ChangeEventHandler<HTMLInputElement> }) => {

    return (
        <div className="flex items-center justify-center gap-3 mt-auto md:mt-7 bg-neutral-150 p-3 rounded-md">
            <p className={`text-secondary-700 min-w-[72px] md:text-lg ${!checked ? 'font-semibold' : ''}`}>Monthly</p>
            <label htmlFor="switch" className='bg-primary-900 hover:bg-primary-400 w-[42px] h-[22px] inline-block rounded-full 
        cursor-pointer relative transition-all'>
                <input checked={checked} onChange={onChange} type="checkbox" className='sr-only appearance-none' id='switch' />
                <span className={`w-[14px] h-[14px] bg-white absolute rounded-full top-[4px] transition-all
            ${checked ? 'left-[24px]' : 'left-[4px]'}
            `}></span>
            </label>
            <p className={`text-secondary-700 min-w-[54px] md:text-lg ${checked ? 'font-semibold' : ''}`}>Yearly</p>
        </div>
    )
}
