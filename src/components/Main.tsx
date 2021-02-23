import React from 'react'
import { RouteComponentProps } from 'react-router-dom';


type Params = {
    pseudo: string
}
 
const Main: React.FC<RouteComponentProps<Params>> = ({match}) => {
        
    return ( 
        <div className="box">
            <h1>Bonjour {match.params.pseudo}</h1>
            <div className="cards">
                <div className="card">
                    <h2>Une Carte</h2>
                </div>
            </div>

        </div>
     );
}
 
export default Main;