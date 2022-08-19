import './index.scss'

export const Radio = ({name, value, text}:{name:string, value: string, text: string}) => {
    return (
        <div className="radio">
            <input type="radio" name={name} id={`${name}-${value}`} value={value} />
            <label htmlFor={`${name}-${value}`}>{text}</label>
        </div>
    )
}