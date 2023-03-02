import { AddOn } from "../types"
import { useStore } from "../useStore"
import { capitalize, getPerShortText, getPrice } from "../utils"
import { Checkbox } from "./Checkbox"

export const AddOnOption = ({ addOn }: { addOn: AddOn }) => {
    const { formData, onAddOnChange: onChange } = useStore()
    const { billedYearly } = formData

    return (
        <label className={`flex items-center border ${addOn.checked ? 'border-neutral-300' :
            'border-primary-400 bg-neutral-100'} cursor-pointer hover:border-primary-400 hover:bg-neutral-100 rounded-lg
             p-[.85rem] md:py-4 md:px-7`} htmlFor={addOn.name}>
            <Checkbox onChange={onChange} checked={addOn.checked} name={addOn.name} />
            <div className="flex justify-between flex-wrap items-center flex-1">
                <div>
                    <h3 className="text-primary-900 font-semibold text-sm md:text-base leading-none">{capitalize(addOn.title)}</h3>
                    <small className="text-neutral-400 text-sm md:text-base">{addOn.description}</small>
                </div>
                <small className="text-primary-400 text-xs md:text-base">+${getPrice(billedYearly, addOn.price)}/{getPerShortText(billedYearly)}</small>
            </div>
        </label>
    )
}
