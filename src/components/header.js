import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import logo from './../images/logo.svg'


const HeaderWrapper = styled.div`
    background: green;
    margin-bottom: 1.45rem;
    padding: 2rem;
  `

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto,
    max-wdth: 960px,
    padding: 1.45rem 1.0875rem,
  `

const Header = ({ data }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {data.siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
    <img src={logo} alt="logo" />
    <Img
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        opacity: 0.3,
      }}
      sizes={data.background.sizes}
    />
  </HeaderWrapper>
)

export default Header
