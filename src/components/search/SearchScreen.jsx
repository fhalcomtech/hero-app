import React from 'react'
import {useForm} from "../../hooks/useForm";

export const SearchScreen = () => {
    const [{searchText}, handlerInputChange, restForm] = useForm({
        searchText: ""
    });

    const handlerSubmit = event => {
        event.preventDefault();
    }


    const handlerClickSearch = (e) => {
        e.preventDefault();

        restForm();
    }

    return (
        <div className={"container row"}>
            <div className={"col-5 m-1"}>

            <h1>Search Super Hero</h1>
            <form action={handlerSubmit} className={"form"}>
                <div className={""} style={{paddingBottom:"1rem"}}>
                    <input type="text"
                           value={searchText}
                           onChange={handlerInputChange}
                           name={"searchText"}
                           className={"form-control"}
                    />
                </div>
                <div className={""}>
                    <button className={"btn btn-outline-primary"} onClick={handlerClickSearch}>Search</button>
                </div>
            </form>
            </div>
            <div className={"col-6 m-1"}>
                <h1>Result</h1>
                <hr/>
                <div className={"alert alert-primary"}>Search a hero</div>
                <div className={"alert alert-danger"}>Hero not find</div>
            </div>
        </div>
    )
}
