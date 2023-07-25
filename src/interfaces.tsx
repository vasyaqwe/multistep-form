export interface FormData {
    billedYearly: boolean
    personalInfo: {
        name: string
        value: string
        label: string
        type: string
        placeholder: string
        error: boolean
        errMsg: string
    }[]
    plan: { title: string; price: number }
    plans: { title: string; price: number }[]
    addOns: {
        name: string
        title: string
        description: string
        price: number
        checked: boolean
    }[]
}
