import React, { Component } from 'react'
import Tolbar from './Tolbar';
import Header from './Header';
import '../assets/css/style.css'
import Presentation from './Presentation';
import MenuCafeteria from './MenuCafeteria';
import MenuPasteleria from './MenuPasteleria';
import Promos from './Promos';
import MenuEnsaladas from './MenuEnsaladas';
import MenuSandwiches from './MenuSandwiches';
import MenuDelicias from './MenuDelicias';
import MenuBebidas from './MenuBebidas';
import Covid from './Covid';
import ContacUs from './ContacUs';
import Eventos from './Eventos';



export default class Home extends Component {
    render() {
        return (
            <div>
                <Tolbar/>
                <Header/>
                <Presentation/>
                <Covid/>
                <MenuCafeteria/>
                <Promos/>
                <MenuPasteleria/>  
                <MenuEnsaladas/>
                <MenuSandwiches/>    
                <MenuDelicias/> 
                <MenuBebidas/> 
                <ContacUs/> 
            </div>
        )
    }
}
