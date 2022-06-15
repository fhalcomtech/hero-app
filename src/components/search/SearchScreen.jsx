import React from 'react'
import {useForm} from "../../hooks/useForm";

export const SearchScreen = () => {
    const [formData, handlerInputChange, restForm] = useForm({
        searchText: ""
    });

    let {searchText} = formData;

    const handlerSubmit = event => {
        event.preventDefault();
    }


    const handlerClickSearch = (e) => {
        e.preventDefault();

        restForm();
    }

    return (
        <div className={"container"}>
            <h1>Search Super Hero</h1>
            <form action={handlerSubmit} className={"form"}>
                <div className={"col-5"} style={{paddingBottom:"1rem"}}>
                    <input type="text"
                           value={searchText.searchText}
                           onChange={handlerInputChange}
                           name={"searchText"}
                           className={"form-control"}
                    />
                </div>
                <div className={"col-5"}>

                    <button className={"btn btn-outline-primary"} onClick={handlerClickSearch}>Search</button>
                </div>
            </form>
        </div>
    )
}
