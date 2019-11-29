import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        console.log(this.props);
        const { ninjas } = this.props;
        const { game } = this.props;
        // const  ninjas  = this.props.ninjas;

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
                <h3> {  game  } </h3>
            </div>
        )
    } 
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