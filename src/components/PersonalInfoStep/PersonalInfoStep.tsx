import { useStore } from "../../stores/useStore"
import { FormWrapper } from "../FormWrapper"

export const PersonalInfoStep = () => {
    const { formData, onInputChange: onChange } = useStore()

    const inputClassName = (error: boolean) =>
        `border border-neutral-300 w-full text-primary-900 font-medium rounded-md md:rounded-lg placeholder:font-medium focus:outline-none  
        ${
            error ? "border-secondary-400" : "focus:border-primary-400"
        } py-2 px-3 md:py-3`
    const { personalInfo } = formData

    return (
        <FormWrapper
            title={"Personal Info"}
            description={
                "Please provide your name, email address, and phone number."
            }
        >
            <div className="mt-5">
                {personalInfo.map((field, idx) => (
                    <div
                        key={field.name}
                        className="mt-5 relative"
                    >
                        {field.error && (
                            <span className="text-secondary-400 absolute right-0 font-semibold text-sm md:text-base">
                                {field.errMsg}
                            </span>
                        )}
                        <label
                            htmlFor={field.name}
                            className=" text-primary-900 text-sm md:text-base"
                        >
                            {field.label}
                        </label>
                        <input
                            autoFocus={idx === 0}
                            required
                            className={inputClassName(field.error)}
                            onChange={onChange}
                            value={field.value}
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            placeholder={field.placeholder}
                        />
                    </div>
                ))}
            </div>
        </FormWrapper>
    )
}
