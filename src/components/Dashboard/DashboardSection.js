import DashboardTextInput from "./DashboardTextInput"
import DashboardSubmit from "./DashboardSubmit"

export default function DashboardSection({ children, title, action }) {
    return (
        <form
            action={action}
            className="border-b border-white/10 p-12 last:border-none"
        >
            <fieldset className="text-white">
                <legend className="text-left text-4xl mb-8">{title}</legend>
                {children}
            </fieldset>
            <DashboardSubmit title={title} />
        </form>
    )
}
