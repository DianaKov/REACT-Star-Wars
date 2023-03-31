import React from "react";

export default function CardInfo({ hero }) {
    return (
        <>
            <div className="card__info">
                <p>Height: {hero.height}</p>
                <p>Mass: {hero.mass}</p>
                <p>Hair: {hero.hair_color}</p>
                <p>Skin: {hero.skin_color}</p>
                <p>Eye: {hero.eye_color}</p>
                <p>Birth: {hero.birth_year}</p>
                <p>Gender: {hero.gender}</p>
            </div>
        </>
    )
};