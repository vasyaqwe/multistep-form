import { MouseEventHandler, ReactNode } from "react"
import { FormData } from "./interfaces"

export type FormWrapperProps = {
    title: string;
    description: string;
    children: ReactNode;
}
export type planIconLookupType = {
    [key: string]: string
}
export type ButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>
    text?: string
}

export type Plan = FormData["plan"]
export type PersonalInfo = FormData["personalInfo"]
export type PersonalInfoField = FormData["personalInfo"][0]
export type AddOns = FormData["addOns"]
export type AddOn = FormData["addOns"][0]