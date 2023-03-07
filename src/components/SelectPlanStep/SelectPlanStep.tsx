import React, { ChangeEventHandler } from 'react'
import { FormWrapper } from '../FormWrapper'
import { PlanOption } from './PlanOption'
import { Switch } from '../Switch'
import { useStore } from '../../useStore'

export const SelectPlanStep = () => {
    const { formData, onBilledChange } = useStore()

    return (
        <FormWrapper title={'Select your plan'} description={"You have the option of monthly or yearly billing."}>
            <div className='grid gap-3 mt-5 min-h-[326px] md:min-h-[181px] auto-rows-min md:mt-10 md:grid-cols-3 md:gap-5'>
                {formData.plans.map(plan => <PlanOption key={plan.title} {...plan} />)}
            </div>
            <Switch onChange={onBilledChange} checked={formData.billedYearly} />
        </FormWrapper>
    )
}
