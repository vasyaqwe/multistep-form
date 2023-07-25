import { FormWrapperProps } from "../types"

export const FormWrapper = ({
    title,
    description,
    children,
}: FormWrapperProps) => {
    return (
        <>
            <h2 className="text-primary-900 font-semibold text-2xl md:text-3xl lg:text-4xl md:mt-8">
                {title}
            </h2>
            <p className="mt-2 text-neutral-400">{description}</p>
            {children}
        </>
    )
}
