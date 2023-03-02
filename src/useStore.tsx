import { ChangeEvent } from "react"
import { create } from "zustand"
import { FormData } from "./interfaces"
import { PersonalInfoField } from "./types"
import { emailRegex, phoneNumberRegex, STEPS_COUNT } from "./utils"

type Store = {
    formSubmitted: boolean,
    currentStepIdx: number,
    animationDirection: number,
    onNext: () => void,
    onBack: () => void,
    onGoTo: (idx: number) => void,
    isFirstStep: () => boolean,
    isLastStep: () => boolean,
    formData: FormData,
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onPlanChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onAddOnChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onBilledChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const useStore = create<Store>()((set, get) => ({
    formSubmitted: false,
    currentStepIdx: 0,
    animationDirection: 0,
    onNext: () => {
        const fieldEmpty = (field: PersonalInfoField) => field.value === ''
        const emailInvalidFormat = (field: PersonalInfoField) => field.name === 'email' && !emailRegex.test(field.value)
        const phoneInvalidFormat = (field: PersonalInfoField) => field.name === 'phone' && !phoneNumberRegex.test(field.value)
        if (get().formData.personalInfo.some(field => fieldEmpty(field) || emailInvalidFormat(field) || phoneInvalidFormat(field))) {
            set((state) => ({
                formData: {
                    ...state.formData, personalInfo: state.formData.personalInfo.map(field => {
                        if (fieldEmpty(field)) {
                            return { ...field, error: true, errMsg: 'This field is required' }
                        } else if (emailInvalidFormat(field)) {
                            return { ...field, error: true, errMsg: 'Invalid email format' }
                        } else if (phoneInvalidFormat(field)) {
                            return { ...field, error: true, errMsg: 'Invalid phone format' }
                        }
                        return field
                    })
                }
            }))
        } else {
            if (!get().isLastStep()) {
                set((state) => ({
                    currentStepIdx: state.currentStepIdx >= STEPS_COUNT - 1 ? state.currentStepIdx : state.currentStepIdx + 1,
                    animationDirection: state.animationDirection >= STEPS_COUNT - 1 ? state.animationDirection : state.animationDirection + 1,
                }))
            } else {
                set(() => ({ currentStepIdx: STEPS_COUNT, formSubmitted: true }))
            }
        }
    },
    onBack: () => set((state) => ({
        currentStepIdx: state.currentStepIdx <= 0 ? state.currentStepIdx : state.currentStepIdx - 1,
        animationDirection: -1,
    })),
    onGoTo: (newIdx: number) => set(() => ({ currentStepIdx: newIdx, animationDirection: -1 })),
    isFirstStep: () => get().currentStepIdx === 0,
    isLastStep: () => get().currentStepIdx === STEPS_COUNT - 1,
    formData: {
        billedYearly: false,
        personalInfo: [
            { name: 'name', value: '', label: 'Name', type: 'text', placeholder: 'e.g. Stephen King', error: false, errMsg: 'This field is required' },
            { name: 'email', value: '', label: 'Email Address', type: 'email', placeholder: 'e.g. stephenking@lorem.com', error: false, errMsg: 'This field is required' },
            { name: 'phone', value: '', label: 'Phone Number', type: 'text', placeholder: 'e.g. +1 234 567 890', error: false, errMsg: 'This field is required' }
        ],
        plan: { title: 'arcade', price: 9 },
        plans: [
            { title: 'arcade', price: 9 },
            { title: 'advanced', price: 12 },
            { title: 'pro', price: 15 },
        ],
        addOns: [
            { name: 'onlineService', title: 'Online service', description: 'Access to multiplayer games', price: 1, checked: true },
            { name: 'largerStorage', title: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2, checked: true },
            { name: 'customizableProfile', title: 'Customizable profile', description: 'Custom theme on your profile', price: 3, checked: false }
        ]
    },
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        set((state) => ({
            formData: {
                ...state.formData, personalInfo: state.formData.personalInfo.map(field => (
                    field.name === name ? { ...field, value, error: value === '' ? true : false } : field
                ))
            }
        }))
    },
    onPlanChange: (e: ChangeEvent<HTMLInputElement>) => {
        const newPlan = get().formData.plans.find(plan => plan.title === e.target.value)
        set((state) => ({
            formData: {
                ...state.formData, plan: newPlan!
            }
        }))
    },
    onAddOnChange: (e: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target
        set((state) => ({
            formData: {
                ...state.formData, addOns: state.formData.addOns.map(addOn =>
                    addOn.name === name ? { ...addOn, checked: checked } : addOn)
            }
        }))
    },
    onBilledChange: (e: ChangeEvent<HTMLInputElement>) => {
        set((state) => ({
            formData: {
                ...state.formData, billedYearly: e.target.checked
            }
        }))
    },

}))