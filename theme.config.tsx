import React from 'react'
import { BellhopLogo } from './components/BellhopLogo'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: (
    <>
      <BellhopLogo style={{ width: '100px', height: auto }} />
      <span style={{ marginLeft: '.4em', fontWeight: 700 }}>
        Bellhop Design System
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/actabl-pdesign/',
  },
  chat: {
    link: 'https://actabl.com',
  },
  docsRepositoryBase: 'https://github.com/actabl-pdesign',
  footer: {
    text: 'BellHop Design System Docs',
  },
}

export default config