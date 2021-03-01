import React from 'react'
import chocolat from '../assets/images/chocolat.jpeg'
import epinard from '../assets/images/epinard.jpg'
import pizza from '../assets/images/pizza.jpeg'
import saumon from '../assets/images/saumon.jpeg'
import tartine from '../assets/images/tartine.jpg'
import hamburger from '../assets/images/hamburger.jpeg'
import ImageDefault from '../assets/images/default.jpeg'


export interface CardProps {
    details: any
    index: any
    del: any 
    pseudo: any
    id: any
}


const Card: React.FC<CardProps> = ({ details, index, del, pseudo, id }) => {

    console.log(id);

    let imgToPrint = "";

    if (details.image === "chocolat.jpeg") {
        imgToPrint = chocolat
    } else if (details.image === "epinard.jpg") {
        imgToPrint = epinard
    } else if (details.image === "hamburger.jpeg") {
        imgToPrint = hamburger
    } else if (details.image === "pizza.jpeg") {
        imgToPrint = pizza
    } else if (details.image === "tartine.jpg") {
        imgToPrint = tartine
    } else if (details.image === "saumon.jpeg") {
        imgToPrint = saumon
    }

    const ingredients = details.ingredients.split(',').map((item: any, index: any) => {
        return (
            <li key={index}>{item}</li>
        )
    })

    const instructions = details.instructions.split('\n').map((item: any, index: any) => {
        return (
            <li key={index}>{item}</li>
        )
    })

    /**
     * Vérification en cas d'erreur au niveau de l'image.
     */
    const requireImage = (chemin: any) => {
        try {
            return imgToPrint
        } catch (error) {
            return ImageDefault
        }
    }

    return (
        <div className="card" key={index}>
            <div className="image">
                <img src={requireImage(imgToPrint)} alt={details.name} />
            </div>
            <div className="recette">
                <h2>{details.name}</h2>
                <ul className="liste-ingredients">
                    {ingredients}
                </ul>
                <ol className="liste-instructions">
                    {instructions}  
                </ol>
            </div>
            <button onClick={() => del(pseudo, id)}>supprimer</button>
        </div>
    );
}

export default Card;