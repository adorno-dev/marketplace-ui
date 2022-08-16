import './index.scss'

export const Radio = () => {
    return (
        <div id="question">
            <div className="radio">
                <input type="radio" name="question" id="radio1" value="1" />
                <label htmlFor="radio1">Yes</label>
            </div>
            <div className="radio">
                <input type="radio" name="question" id="radio2" value="0" />
                <label htmlFor="radio2">No</label>
            </div>
        </div>
    )
}