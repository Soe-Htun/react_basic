import React from "react";

const main_title = React.createContext("Hello React");
const sub_title = React.createContext("Sub Title")
const Context = props => {
    return (
        <Header />
    )
}

const Header = props => {
    return <Title/>
}

const Title = props => {
    const title = React.useContext(main_title)
    const subtitle = React.useContext(sub_title)
    return (
        <div>
            <ul>
                <li><h5>{title}</h5></li>
                <li><h5>{subtitle}</h5></li>
            </ul>
            {/* <h5>Go to another page  with params</h5>
            <Link to="params">Go to Params</Link> */}
        </div>
    )
}

export default Context;