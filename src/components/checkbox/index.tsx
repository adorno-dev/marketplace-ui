import './index.scss'

export const Checkbox = ({name, text}:{name:string, text:string}) => {
    return (
        <div className="checkbox">
            <input type="checkbox" id={name} name={name} />
            <label htmlFor={name}>{text}</label>
        </div>
    )
}