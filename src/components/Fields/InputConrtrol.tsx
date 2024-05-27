import { faUser } from "@fortawesome/free-regular-svg-icons"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TextField from '@mui/material/TextField';
interface Props {
    label: string
    labelFor?: string
    name?: string,
    placeholder: string,
    type?: {
        type: string,
        default: 'text'
    }
    displayLabel?: {
        type: boolean,
        default: true
    },
    errorMessage?: string
    required?: boolean
    errorMessageVariant?: boolean
    testId?: string
    hideOptionalLabel?: boolean,
    onChange?: (name: string, value: string) => void;
}
const InputConrtrol = (props: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
        const name = event.target.name
        const value = event.currentTarget.value;
        props?.onChange && props?.onChange(name, value);
    }
    return (
        <div>
            {props.label !== "" && (
                <label className="text-gray-900">{props.label}</label>
            )}
            <TextField
                size="small"
                id="outlined-required"
                className="w-full"
                name={props.name}
                placeholder={props.placeholder}
                required
                onChange={handleChange}
            />
            {/* <div className="p-1 mt-1 flex  ps-2 relative input-box " >
                <input name={props.name} placeholder={props.placeholder} required onChange={props.onChange} className="bg-transparent w-full" type="text" />
            </div> */}
            {
                props.errorMessage &&
                <p className={`text-red-400 text-sm flex items-center gap-2 ${props.errorMessageVariant ? 'justify-end' : 'justify-start'}`}><FontAwesomeIcon icon={faExclamationCircle} /> Error message</p>
            }
        </div>
    )
}

export default InputConrtrol