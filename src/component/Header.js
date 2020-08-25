import React, { Component } from 'react'


export default class Header extends Component {


  renderHeader(nombre) {
    return (<div>

      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">

          <h1 class="logo mr-auto">{nombre}</h1>
          <nav class="nav-menu d-none d-lg-block">
            <ul>
              <li class="active"><a href={"/#"}>Home</a></li>
              <li><a href={"#about"}>Protocolo</a></li>
              <li><a href={"#specials"}>Promos</a></li>
            </ul>
          </nav>

        </div>
      </header>
    </div>)
  }

  render() {
    return (this.renderHeader("Davida Café"))
  }
}
