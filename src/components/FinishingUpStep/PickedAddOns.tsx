import { useStore } from '../../useStore'
import { getPerShortText, getPrice } from '../../utils'

export const PickedAddOns = () => {
    const { formData: { billedYearly, addOns } } = useStore()
    const pickedAddOns = addOns.filter(addOn => !addOn.checked)

    return (
        <>
            {pickedAddOns.length < 1 ? <p className="text-neutral-400">You haven't picked any add-ons.</p>
                : pickedAddOns.map(addOn => (
                    <div key={addOn.price} className="flex justify-between items-center mt-2">
                        <p className="text-neutral-400">{addOn.title}</p>
                        <small className="text-primary-900 font-medium text-base 
                    col-start-2 row-start-1 row-span-2 justify-self-end">
                            +${getPrice(billedYearly, addOn.price)}/{getPerShortText(billedYearly)}</small>
                    </div>
                ))}
        </>
    )
}
