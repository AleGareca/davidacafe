import React, { Component } from 'react'
import imagen from '../assets/img/menu/Expresso.png'
import imagen1 from '../assets/img/menu/ExpressoDoble.png'
import imagen2 from '../assets/img/menu/ExpressoPanna.png'
import americano from '../assets/img/menu/americano.png'
import chico from '../assets/img/menu/chico.png'
import grande from '../assets/img/menu/grande.png'
import chocolatada from '../assets/img/menu/chocolatada.png'
import desinfectado from '../assets/img/menu/desinfectado.png'
import itizenfina from '../assets/img/menu/itizenfina.png'
import lagrima from '../assets/img/menu/lagrima.png'
import limon from '../assets/img/menu/limon.png'
import macchiato from '../assets/img/menu/macchiato.png'
import matecocido from '../assets/img/menu/matecocido.png'
import matecocidoleche from '../assets/img/menu/matecocidoleche.png'
import teleche from '../assets/img/menu/teleche.png'
import ristretto from '../assets/img/menu/ristretto.png'
import submarino from '../assets/img/menu/submarino.png'
import techai from '../assets/img/menu/techai.png'
import latte from '../assets/img/menu/latte.png'
import itizen from '../assets/img/menu/itizen.png'
import portada from '../assets/img/portada/cafePortada.jpg'
import {db,auth} from './service/Firebase'



export default class MenuCafeteria extends Component {
 
    state = {
      cafe:[]
  }

  componentDidMount(){
    const data=db.ref().child('Cafe')
    data.on('value',snap=>{
      const ls = []
      snap.forEach(e=>{
      ls.push(e.val())
      })
      this.setState({cafe:ls})
    })

  }


  renderCafe(){
    return this.state.cafe.map(e => this.renderMenuItem("","",e.nombre,e.precio,""))
  }

  renderMenuItem(imagen, tipoDeFiltro, nombreComida, precio, descripcion) {
    return (
      
      <div className={"col-lg-6 menu-item filter-" + tipoDeFiltro}>
        <div class="menu-content">
          
          <a>{nombreComida}</a><span>{precio}</span>
        </div>
        <div class="menu-ingredients">
          {descripcion}
        </div>
      </div>

    )
  }
  render() {
    return (
      <div>
        
        <section id="menu" class="menu section-bg">
          {console.log(this.state.cafe)}
        <img src={portada} class="menu-img2" alt="" />
          <div class="container" data-aos="fade-up">

            <div class="section-title">
              <h2>Menu</h2>
              <p>Cafetería </p>
            </div>
        

            <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
              {this.renderCafe()}
          
              
              {this.renderMenuItem(itizen, "specialty", "Té clasico Intizen", "$100", "")}
              {this.renderMenuItem(itizenfina, "specialty", "Té Intizen fina", "$130", "Variedad de sabores")}
              {this.renderMenuItem(limon, "specialty", "Té limon", "$130", "")}
              {this.renderMenuItem(teleche, "specialty", "Té leche", "$130", "")}
              {this.renderMenuItem(techai, "specialty", "Té Chai Latte", "$190", "Frio o caliente")}
              {this.renderMenuItem(submarino, "specialty", "Submarino", "$170", "Negro/blanco")}
              {this.renderMenuItem(chocolatada, "specialty", "Chocolatada", "$150", "")}
              {this.renderMenuItem(matecocido, "specialty", "Matecocido", "$100", "")}
              {this.renderMenuItem(matecocidoleche, "specialty", "Matecocido con leche", "$130", "")}

              {this.renderMenuItem(matecocidoleche, "specialty", "Capuchino Moka", "$190", "")}
              {this.renderMenuItem(matecocidoleche, "specialty", "Capuchino Viennese", "$190", "")}
              {this.renderMenuItem(matecocidoleche, "specialty", "Capuchino Vainilla", "$220", "")}
              {this.renderMenuItem(matecocidoleche, "specialty", "Capuchino Bombon", "$210", "")}
              {this.renderMenuItem(matecocidoleche, "specialty", "Capuchino Davida", "$210", "")}

            </div>
          </div>
        </section>
      </div>
    )
  }
}
