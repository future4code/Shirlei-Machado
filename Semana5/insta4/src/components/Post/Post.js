import React from 'react'
import './Post.css'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeSaveBlack from '../../img/baseline.png'
import iconeSaveBorder from '../../img/baseline_border.png'
import iconeShare from '../../img/share.png'


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo:false,
    compartilhar:false,
  }

  onClickCurtida = () => {
    if(this.state.curtido){
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }else{
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickSalvar = () => {
    this.setState({
      salvo: !this.state.salvar
    })
  }

  aoCompartilhar = () => {
    this.setState({
      compartilhando: false
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }    

    let iconeSalvar
    console.log("cliquei")

    if(this.state.salvo){
      iconeSalvar = iconeSaveBlack
    }
    else{
      iconeSalvar = iconeSaveBorder
    }


    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>
    
      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>
              
      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
        icone={iconeSalvar}
        onClickIcone={this.onClickSalvar}
        />

        <IconeComContador
        icone={iconeShare}
        onClickCompartilhar={this.onClickCompartilhar}
        />
       

      </div>
      {componenteComentario}
    </div>
  }
}

export default Post