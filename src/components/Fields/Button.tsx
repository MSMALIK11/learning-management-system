
interface Props {
    label: string,
    disabled?: boolean
    variant?: 'primary' | 'secondary'
    testId?: string,
    className?: string,
    onClick: () => void
}
const Button = (props: Props) => {
    return (
        <button onClick={() => props.onClick()} data-testid={props.testId} className={`mt-2 ${props.className}`}>{props.label}</button>
    )
}

export default Button