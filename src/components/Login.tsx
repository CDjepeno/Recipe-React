import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';


export interface LoginProps {
    
}
 
const Login: React.FC<RouteComponentProps> = (props) => {

    const [pseudo, setPseudo] = useState<string>("")

    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.history.replace(`/pseudo/${pseudo}`)
    }

    return ( 
        <div className='connexionBox'>
            <form onSubmit={handleSubmit} className='connexion'>
                <input 
                    type="text"
                    value={pseudo}
                    onChange={e => setPseudo(e.currentTarget.value)}
                    placeholder="Nom du chef"
                    pattern='[A-za-z]{1,}'
                    required
                />
                <button type="submit">GO</button>
            </form>
        </div>
     );
}
 
export default Login;