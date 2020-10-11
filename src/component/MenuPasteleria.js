import React, { Component } from 'react'
import chip from '../assets/img/menu/Pasteleria/Chips.png'
import chocotorta from '../assets/img/menu/Pasteleria/Chocotorta.png'
import churros from '../assets/img/menu/Pasteleria/Churros.png'
import cuadraditosdecoco from '../assets/img/menu/Pasteleria/CuadraditosCoco.png'
import cupcackes from '../assets/img/menu/Pasteleria/Cupcackes.png'
import donas from '../assets/img/menu/Pasteleria/donas.png'
import libritos from '../assets/img/menu/Pasteleria/Libritos.png'
import medialunas from '../assets/img/menu/Pasteleria/Medialunas.png'
import MJQ from '../assets/img/menu/Pasteleria/MedialunasJQ.png'
import mofin from '../assets/img/menu/Pasteleria/Mufin.png'
import lemonpie from '../assets/img/menu/Pasteleria/LemonPie.png'
import balcarse from '../assets/img/menu/Pasteleria/balcarse.png'
import blancoNegro from '../assets/img/menu/Pasteleria/blancoNegro.png'
import crumble from '../assets/img/menu/Pasteleria/crumble.png'
import marquise from '../assets/img/menu/Pasteleria/Marquise.png'
import oreo  from '../assets/img/menu/Pasteleria/oreo.png'
import salvanegra from '../assets/img/menu/Pasteleria/SalvaNegra.png'
import waffle from '../assets/img/menu/Pasteleria/waffle.png'
import Wsakado from '../assets/img/menu/Pasteleria/wafflesalado.png'
import cheescake from '../assets/img/menu/Pasteleria/cheescake.png'
import tiramisu from '../assets/img/menu/Pasteleria/tiramisu.png'
import panqueque from '../assets/img/menu/Pasteleria/panqueque.png'
import portada from '../assets/img/portada/pasteleriaPortada.jpg'

export default class MenuPasteleria extends Component {
  


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
            
            <section id="pasteleria" class="menu section-bg">
            <img src={portada} class="menu-img2" alt="" />
              <div class="container" data-aos="fade-up">
    
                <div class="section-title">
                  <h2>Menu</h2>
                  <p>Pastelería </p>
                </div>
  
    
                <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
                  {this.renderMenuItem(medialunas, "", "Medialuna", "$30", "")}
                  {this.renderMenuItem(MJQ, "specialty", "Medialuna c/jamon y queso", "$65", "")}
                  {this.renderMenuItem(donas, "starters", "Donas c/dulce  de leche", "$90", "")}
                  {this.renderMenuItem(churros, "salads", "Churros c/dulce de leche", "$35", "")}
                  {this.renderMenuItem(libritos, "starters", "Libritos", "$35", "")}
                  {this.renderMenuItem(chip, "salads", "Chipitas", "$250", "")}
                  {this.renderMenuItem(mofin, "salads", "Muffins", "$140", "")}

                  {this.renderMenuItem(crumble, "specialty", "Crumble de manzana", "$260", "")}
                  {this.renderMenuItem(cuadraditosdecoco, "specialty", "Cuadraditos de coco y dulce de leche", "$180", "")}
                  {this.renderMenuItem(cheescake, "specialty", "Cheesecake", "$290", "")}
                  {this.renderMenuItem(lemonpie, "specialty", "Lemon Pie", "$290", "")}
                  {this.renderMenuItem(salvanegra, "specialty", "Selva negra", "$180", "")}
                  {this.renderMenuItem(chocotorta, "specialty", "Chocotorta", "$290", "")}
                  {this.renderMenuItem(tiramisu, "specialty", "Tiramisú", "$290", "")}
                  {this.renderMenuItem(cupcackes, "specialty", "Cupcakes", "$180", "")}
                  {this.renderMenuItem(marquise, "specialty", "Marquise", "$290", "")}
                  {this.renderMenuItem(balcarse, "specialty", "Postre BALCARCE", "$290", "Vainilla, frutilla, tiramisú")}
                  {this.renderMenuItem(oreo, "specialty", "Torta Oreo", "$290", "")}
                  {this.renderMenuItem(blancoNegro, "specialty", "Pan Blanco / Salvado", "$30", "Pedilo para llevar")}
                  {this.renderMenuItem(Wsakado, "specialty", "Waffle Salados", "$220", "Muzzarella, jamón, tomate, albahaca y aceite de oliva")}
                  {this.renderMenuItem(waffle, "specialty", "Waffle Dulce", "$350", "Dulce de leche, crema, bocha de helado, frutas de estacion y chocolate rayado")}
                  {this.renderMenuItem(panqueque, "specialty", "Panqueques", "$140", "Dulces o salados")}
                  {this.renderMenuItem(panqueque, "specialty", "Porcion de budin individual", "$90", "Marmolado o de amapola")}
                  {this.renderMenuItem(panqueque, "specialty", "Alforcitos de maicena ", "$65", "")}
                  {this.renderMenuItem(panqueque, "specialty", "Porcion de Brauni", "$80", "")}
                  {this.renderMenuItem(panqueque, "specialty", "Porcion de Pastafrola", "$80", "")}
                  {this.renderMenuItem(panqueque, "specialty", "Pan de hojaldre y chocolate", "$90", "")}
                  {this.renderMenuItem(panqueque, "specialty", "Porcion de Brauni", "$80", "")}
                  {this.renderMenuItem(panqueque, "specialty", "Hot cake", "$290", "miel y canela o frutas de estacion o dulce de leche ")}
                  {this.renderMenuItem(panqueque, "specialty", "Hot cake", "$350", "Nutela y chocolate blanco")}
                  {this.renderMenuItem(panqueque, "specialty", "Bagget", "$55", "Pedilo para llevar, Pan blanco, salvado")}   
                </div>
              </div>
            </section>
          </div>
        )
      }
    }
    
