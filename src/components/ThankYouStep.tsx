import { ReactComponent as Checkmark } from "../assets/icon-thank-you.svg"

export const ThankYouStep = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <Checkmark />
            <h5 className="text-primary-900 mt-7 font-semibold text-2xl md:text-3xl lg:text-4xl">
                Thank you!
            </h5>
            <p className="mt-4 text-neutral-400 text-center">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </p>
        </div>
    )
}
