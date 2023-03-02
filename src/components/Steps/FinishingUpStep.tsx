import { useStore } from "../../useStore"
import { capitalize, getPerFullText, getPerShortText, getPrice } from "../../utils"
import { FormWrapper } from "../FormWrapper"

export const FinishingUpStep = () => {
    const { formData, onGoTo } = useStore()
    const { billedYearly, plan, addOns } = formData

    const pickedAddOns = addOns.filter(addOn => !addOn.checked)

    const addOnsTotal = pickedAddOns.reduce((acc, curr) => acc += curr.price, 0)
    const total = billedYearly ? (plan.price + addOnsTotal) * 10 : plan.price + addOnsTotal

    return (
        <FormWrapper title={"Finishing up"} description={"Double-check if everything looks OK before confirming."}>
            <div className='mt-5 md:mt-10 p-4 md:p-6 bg-neutral-150 rounded-lg'>
                <div className="grid grid-cols-2 items-center border-b border-neutral-300 pb-4 mb-4">
                    <h4 className="text-primary-900 font-semibold text-sm md:text-base">{capitalize(plan.title)} ({billedYearly ? 'Yearly' : 'Monthly'})</h4>
                    <button onClick={() => onGoTo(1)} className="text-neutral-400 w-fit tracking-tighter 
                        leading-none border-b-2 border-neutral-400 col-start-1 hover:text-primary-400">Change</button>
                    <small className="text-primary-900 font-semibold text-base 
                    col-start-2 row-start-1 row-span-2 justify-self-end">${getPrice(billedYearly, plan.price)}/{getPerShortText(billedYearly)}</small>
                </div>
                {pickedAddOns.length < 1 ? <p className="text-neutral-400">You haven't picked any add-ons.</p>
                    : pickedAddOns.map(addOn => (
                        <div key={addOn.price} className="flex justify-between items-center mt-2">
                            <p className="text-neutral-400">{addOn.title}</p>
                            <small className="text-primary-900 font-medium text-base 
                    col-start-2 row-start-1 row-span-2 justify-self-end">+${getPrice(billedYearly, addOn.price)}/{getPerShortText(billedYearly)}</small>
                        </div>
                    ))}
            </div>
            <div className="p-4 flex justify-between items-center mt-2">
                <p className="text-neutral-400">Total (per {getPerFullText(billedYearly)})</p>
                <small className="text-primary-400 text-lg md:text-xl font-bold">${total}/{getPerShortText(billedYearly)}</small>
            </div>
        </FormWrapper >
    )
}
