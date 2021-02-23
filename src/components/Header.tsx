import React from 'react'


export interface HeaderProps {
    pseudo: string;
}
 
const Header: React.FC<HeaderProps> = ({pseudo}) => {
    return ( 
        <header>
            <h1>La boite à recettes {pseudo}</h1>
        </header>
     );
}
 
export default Header;