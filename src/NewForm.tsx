import { useState } from "react";

export function NewForm(props: any) {
    // props.onSubmit;
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e: any) {
        e.preventDefault();

        if (newItem === "")
            return;

        props.onSubmit(newItem);

        setNewItem("");
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="new-item-form">
                <div className="form-row">
                    <label htmlFor="item" className="item">New Item</label>
                    <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
                </div>
                <button className="btn">Add to list</button>
            </form>
        </>
    )
}