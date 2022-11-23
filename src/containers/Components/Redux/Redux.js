import React, { createRef, useEffect } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

const Item = ({ name, price}) => (
    <li> {name}, ${price} </li>
)

const Redux = props => {
    useEffect(() => {
        // mounted
    });
    const { register, handleSubmit,
        formState: { errors }
    } = useForm();

    let nameRef = createRef();
    let priceRef = createRef();
    const add = (data) => {
        console.log('Data', data);
            props.add(
                props.items.length + 1,
                data.name,
                data.price
            )
            data.name = ''
            data.price = ''
    }

    return (
        <div className="mx-3 mt-3">
            <ul className="mx-2">
                { props.items.map(i=> (
                    <Item key={i.id} name={i.name} price={i.price} />
                )) }
            </ul>
            <div className="mx-2" style={{width: 200}}>
                <input type="text" ref={nameRef} className="form-control"
                    {...register("name",{required: true})}
                    placeholder="Enter name" />
                {errors.name && <p className="text-danger">Name is required</p>}
                <input type="number" ref={priceRef} className="form-control my-2"
                    {...register("price",{required: true})}
                    placeholder="Enter price" />
                {errors.price && <p className="text-danger">Price is required</p>}
                <button className="btn btn-primary" onClick={handleSubmit(add)}>Add</button>
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