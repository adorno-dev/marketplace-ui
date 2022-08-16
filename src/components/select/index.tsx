import './index.scss'

export const Select = () => {
    return (
        <div className="select">
            <select name="format" id="format" defaultValue="0">
                <option value="0" defaultValue="true" disabled>Choose a book format</option>
                <option value="pdf">PDF</option>
                <option value="txt">TXT</option>
                <option value="epub">ePub</option>
                <option value="fb2">Fb2</option>
                <option value="mobi">Mobi</option>
            </select>
        </div>
    )
}