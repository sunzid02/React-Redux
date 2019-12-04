import React from 'react';

const Ninjas =  ({ ninjas, game }) => {
        const ninjaList =   ninjas.map( ninja =>    {
            return  (
                <div className="ninja" key={    ninja.id }>
                    <ul>
                        <div> Name: {ninja.name} </div>
                        <div> Age: {ninja.age} </div>
                        <div> Belt:{ninja.belt} </div>
                    </ul>
                    <br/>
                </div>
                
            )
        });

        return(
            <div className="ninja-list">
                {   ninjaList  }
            </div>
        )
}

export default Ninjas;


/**
 * 
 *  props means from parent component, u can pass data 
 *  to child component
 * 
 * 
 * destructuring means pass props data and install them in
 * variables
 * 
*/