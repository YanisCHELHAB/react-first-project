import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./Data"

export default function App(){
    const cards= data.map(info=>{
        return (
            <Main 
            image={info.image}
            country={info.country}
            location={info.location}
            place ={info.place}
            date = {info.date}
            description ={info.description}
            />
        )
    })
    return(
        <div>
            <Header/>
            <section>
                {cards}
            </section>
        </div>
    )
}
