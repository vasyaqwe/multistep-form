import { useStore } from "../../useStore"
import { AddOnOption } from "../AddOnOption"
import { FormWrapper } from "../FormWrapper"


export const PickAddOnsStep = () => {
    const { formData } = useStore()

    return (
        <FormWrapper title={"Pick add-ons"} description={"Add-ons help enhance your gaming experience."}>
            <div className='grid gap-3 mt-5 md:mt-10'>
                {formData.addOns.map(addOn => <AddOnOption key={addOn.name} addOn={addOn} />)}
            </div>
        </FormWrapper>
    )
}
