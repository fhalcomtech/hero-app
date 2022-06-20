import React from 'react'
import {useForm} from "../../hooks/useForm";
import {useSearchParams} from "react-router-dom";
import {navigateQueryToObject} from "../../helpers/NavigateHelper";
import HeroCard from "../heros/HeroCard";
import {fnGetHerosByName} from "../../helpers/HerosHelper";

export const SearchScreen = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const locationText = navigateQueryToObject(searchParams.toString())['search_text']
    const [{searchText}, handlerInputChange] = useForm({searchText: locationText});
    let heroList = fnGetHerosByName(searchText);

    const handlerSubmit = event => {
        event.preventDefault();
        if(searchText && searchText.trim().length>0)
        {setSearchParams(`?search_text=${searchText}`)}
    }

    const handlerClickSearch = (e) => {
        console.log(searchText)
    }

    return (
        <div className={"container row"}>
            <div className={"col-5"}>

            <h1>Search Super Hero</h1>
            <form onSubmit={handlerSubmit} className={"form"}>
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
            <div className={"col-7"}>
                <h1>Result</h1>
                <hr/>
                {(heroList.length > 0) ? <div className={"alert alert-primary"}>{heroList.length} heroes had found with <b>{searchText}</b></div>
                    :<div className={"alert alert-danger"}>Hero not find with <b>{searchText}</b></div>}
                <div className={'pt-5 d-flex flex-wrap'}>
                    {heroList.map((hero) =>
                        (<HeroCard key={hero.id} hero={hero}/>)
                    )}
                </div>
            </div>
        </div>
    )
}
