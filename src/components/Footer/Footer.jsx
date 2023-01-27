import React from 'react'

import css from './Footer.module.css'

import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon
} from '@heroicons/react/outline'

import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>

        <div className={css.logo}>
          <img src={Logo} alt="Logo da Empresa" />
          <span>Amazon</span>
        </div>

        <div className={css.block}>

          <div className={css.detail}>
            <span>Contato</span>

            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>Rua Benjamin Constant, 560 - Rio de Janeiro</span>
            </span>

            <span className={css.pngLine}>
              {" "}
              <PhoneIcon className={css.icon} />
              <a href="tel: 99999-9999">99999-9999</a>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto:suporte@amazon.com.br">suporte@amazon.com.br</a>
            </span>

          </div>

        </div>

        <div className={css.block}>

          <div className={css.detail}>
            <span>Conta</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <a href="/about">
                Crie sua Conta
              </a>
            </span>
          </div>

        </div>

        <div className={css.block}>

          <div className={css.detail}>
            <span>Empresa</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <a href="/about">
                <p>Sobre Nós</p>
              </a>
            </span>
          </div>

        </div>

        <div className={css.block}>

          <div className={css.detail}>
            <span>Recursos</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <p>Termos de Privacidade</p>              
            </span>
          </div>

        </div>

      </div>
      
      <div className={css.copyRight}>
        <span>Copyright ©2023 by Amazon Inc.</span>
        <span>Todos os direitos reservados</span>
      </div>

    </div>
  )
}

export default Footer
