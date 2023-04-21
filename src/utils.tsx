import { ReactComponent as Advanced } from './assets/icon-advanced.svg'
import { ReactComponent as Arcade } from './assets/icon-arcade.svg'
import { ReactComponent as Pro } from './assets/icon-pro.svg'
import { planIconLookupType } from './types'

export const planIconLookup: planIconLookupType = {
    'arcade': <Arcade />,
    'advanced': <Advanced />,
    'pro': <Pro />,
}
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1, str.length)

export const STEPS_COUNT = 4

export const getPrice = (billedYearly: boolean, num: number) => billedYearly ? num * 10 : num

export const getPerShortText = (billedYearly: boolean) => billedYearly ? 'yr' : 'mo'
export const getPerFullText = (billedYearly: boolean) => billedYearly ? 'year' : 'month'

export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
export const phoneNumberRegex = /^[0-9]+$/

export const variants = {
    enter: (direction: number) => {
        return {
            x: direction >= 0 ? 1000 : -1000,
            opacity: 0
        }
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            transition: { duration: .3 }
        }
    }
}
