import React from "react"
import "./card.css"
import CardImg from "../card/card-img/card-img"
import CardInfo from "../card/card-info/card-info"
import CardName from "../card/card-name/card-name"

export default function Card({ hero }) {
    return (

        <a href={hero.url}
            className="card__link"
            target="_blank"
            rel="noreferrer">
            <div className="card">
                <CardName name={hero.name} />
                <CardImg name={hero.name} />
                <CardInfo
                    hero={hero} />
            </div>
        </a>
    )
}