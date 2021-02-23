import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import Header from './Header';


type Params = {
    pseudo: string
}
 
const Main: React.FC<RouteComponentProps<Params>> = ({match}) => {
    const pseudo = match.params.pseudo;
    const formatPseudo = (pseudo: any) => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`    

    return ( 
        <div className="box">
            <Header pseudo={formatPseudo(pseudo)} />
            <div className="cards">
                <div className="card">
                    <h2>Une Carte</h2>
                </div>
            </div>

        </div>
     );
}
 
export default Main;