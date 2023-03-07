import { useStore } from "../../useStore"
import { capitalize, getPrice, planIconLookup } from "../../utils"

export const PlanOption = ({ title, price }: { price: number, title: string }) => {
    const { formData, onPlanChange: onChange } = useStore()

    return (
        <label className={`flex items-start gap-3 self-start py-4 px-1 md:flex-col md:px-4 md:p-4 md:gap-0 border 
        ${formData.plan.title !== title ? 'border-neutral-300' :
                'border-primary-400 bg-neutral-100'} 
                cursor-pointer hover:border-primary-400 hover:bg-neutral-100 rounded-lg
       `} htmlFor={title}>
            <input className="appearance-none " type="radio" value={title} checked={formData.plan.title === title}
                name={title} id={title} onChange={onChange} />
            <img src={planIconLookup[title]} alt={title + 'icon'} />
            <div className="md:mt-9">
                <h3 className="text-primary-900 font-medium text-lg leading-tight">{capitalize(title)}</h3>
                <small className="text-neutral-400 text-sm md:text-base">${getPrice(formData.billedYearly, price)}/{!formData.billedYearly ? 'mo' : 'yr'}</small>
                {formData.billedYearly && <p className="text-primary-900 text-sm md:text-base">2 months free</p>}
            </div>
        </label>
    )
}
