import { useStore } from "../../useStore"
import { capitalize, getPerShortText, getPrice } from "../../utils"

export const SelectedPlan = () => {
    const { formData: { billedYearly, plan }, onGoTo } = useStore()

    return (
        <div className="grid grid-cols-2 items-center border-b border-neutral-300 pb-4 mb-4">
            <h4 className="text-primary-900 font-semibold text-sm md:text-base">{capitalize(plan.title)} ({billedYearly ? 'Yearly' : 'Monthly'})</h4>
            <button type="button" onClick={() => onGoTo(1)} className="text-neutral-400 w-fit tracking-tighter 
                        leading-none border-b-2 border-neutral-400 col-start-1 hover:text-primary-400">Change</button>
            <small className="text-primary-900 font-semibold text-base 
                    col-start-2 row-start-1 row-span-2 justify-self-end">
                ${getPrice(billedYearly, plan.price)}/{getPerShortText(billedYearly)}</small>
        </div>
    )
}
