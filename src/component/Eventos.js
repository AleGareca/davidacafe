import React, { Component } from 'react'
import imagen1 from '../assets/img/Promo1.png'
import imagen2 from '../assets/img/limonada.png'

export default class Eventos extends Component {


  titulo() {
    return (<div class="section-title">
      <h2>Promos</h2>
      <p>Días especiales, promos especiales</p>
    </div>)
  }

  itemDeCarrucel(estado, unaImagen) {
    return (
    <div class={" event-item carousel-item" + " " + estado}  data-interval="10000">
      {this.renderImagen(unaImagen)}
    
     
    </div>
  )
  }

  renderDescripcion() {
    return (<div class="col-xs-1 text-center">
      <h3>Birthday Parties</h3>
      <div class="price">
        <p><span>$189</span></p>
      </div>
      <p class="font-italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
    </p>
      <ul>
        <li><i class="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        <li><i class="icofont-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
        <li><i class="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
      </ul>
      <p>
        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur
    </p>
    </div>)
  }

  renderImagen(unImagen) {
    return (<div class="d-flex justify-content-center">
      <img src={unImagen} class="  d-block w-100" alt="" />
    </div>)
  }

  renderBotton() {
    return (<div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      </div>)
  }





  render() {
    return (
      <div>
        <section id="events" class="events">
          <div class="container"  >

            {this.titulo()}
              <div class=" carousel slide events-carousel" data-aos="fade-up" data-aos-delay="100">
            <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
              

                  {this.itemDeCarrucel("active", imagen1)}
                  {this.itemDeCarrucel("", imagen2)}
              
                </div>

              </div>
              <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
              
            </div>
            
          </div>
        
        </section>
      </div>
    )
  }
}
