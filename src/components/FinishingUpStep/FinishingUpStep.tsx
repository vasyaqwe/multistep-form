import { useStore } from "../../useStore"
import { getPerFullText, getPerShortText } from "../../utils"
import { FormWrapper } from "../FormWrapper"
import { PickedAddOns } from "./PickedAddOns"
import { SelectedPlan } from "./SelectedPlan"

export const FinishingUpStep = () => {
    const { formData: { billedYearly, plan, addOns } } = useStore()

    const pickedAddOns = addOns.filter(addOn => !addOn.checked)

    const addOnsTotal = pickedAddOns.reduce((acc, curr) => acc += curr.price, 0)
    const total = billedYearly ? (plan.price + addOnsTotal) * 10 : plan.price + addOnsTotal

    return (
        <FormWrapper title={"Finishing up"} description={"Double-check if everything looks OK before confirming."}>
            <div className='mt-5 md:mt-10 p-4 md:p-6 bg-neutral-150 rounded-lg'>
                <SelectedPlan />
                <PickedAddOns />
            </div>
            <div className="p-4 flex justify-between items-center mt-2">
                <p className="text-neutral-400">Total (per {getPerFullText(billedYearly)})</p>
                <small className="text-primary-400 text-lg md:text-xl font-bold">${total}/{getPerShortText(billedYearly)}</small>
            </div>
        </FormWrapper >
    )
}
