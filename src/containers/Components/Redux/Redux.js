import React, { createRef, useEffect } from "react";
import { connect } from "react-redux";

const Item = ({ name, price}) => (
    <li> {name}, ${price} </li>
)

const Redux = props => {
    useEffect(() => {
    });

    let nameRef = createRef();
    let priceRef = createRef();
    const add = () => {
        
        if(nameRef.current.value && priceRef.current.value) {
            props.add(
                props.items.length + 1,
                nameRef.current.value,
                priceRef.current.value
            )
            nameRef.current.value = ''
            priceRef.current.value = ''
        }
    }

    return (
        <div className="mx-3 mt-3">
            <ul>
                { props.items.map(i=> (
                    <Item key={i.id} name={i.name} price={i.price} />
                )) }
            </ul>
            <div className="mx-2" style={{width: 200}}>
                <input type="text" ref={nameRef} className="form-control" placeholder="Enter name" />
                <input type="number" ref={priceRef} className="form-control my-2" placeholder="Enter price" />
                <button className="btn btn-primary" onClick={add}>Add</button>
            </div>
        </div>
    )
}

const stateToProps = state => {
    return {
        items: state
    }
}

const dispatchToProps = dispatch => {
    return {
        add: (id, name, price) => {
            dispatch({
                type: 'ADD',
                item: { id, name, price }
            });
        }
    }
}
const ReduxApp = connect(stateToProps, dispatchToProps)(Redux)
export default ReduxApp;