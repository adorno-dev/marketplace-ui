import { useState } from "react"
import { Checkbox, Navbar, Placeholder, Radio, Select, SelectCheckbox } from "../../components"

export const Favorites = () => {
    const [data, setData] = useState<{id: any, text: string}[]>([
        {id: 1, text: "Windows 11"},
        {id: 2, text: "Windows 10"},
        {id: 3, text: "Windows 8.1"},
        {id: 4, text: "Windows 7"},
        {id: 5, text: "Linux"},
        {id: 6, text: "FreeBSD"},
        {id: 7, text: "MacOS"},
    ])
    return <>
        <Navbar />
        <Placeholder>
            <div className="page">
                <h3>Favorites</h3>
                <div className="header">
                    <p className="hints">Page not implemented yet.</p>
                </div>
                <form style={{width: "400px"}}>
                    <Select name="operating-system" caption="Operating System" data={data} />
                    <p className="hints">Page not implemented yet.</p>
                    <SelectCheckbox name="distros" caption="Operating System" data={data} />
                    <p className="hints">Page not implemented yet.</p>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <Checkbox name="remember-me" text="Remember?" />
                    <br />
                    <Radio name="question" value="1" text="Yes" />
                    <Radio name="question" value="0" text="No" />
                    {/* <br /> */}
                    {/* <a href="#" className="button">Cancel</a> */}
                    {/* <a href="#" className="button">Confirm</a> */}
                    {/* <br /> */}
                    <div className="space-between">
                    <input className="button" type="button" value="Cancel" />
                    <input className="button" type="submit" value="Confirm" />
                    </div>
                </form>
            </div>
        </Placeholder>
    </>
}