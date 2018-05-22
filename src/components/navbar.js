import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;

    li {
        margin-left: 10px;
        a {
            text-decoration: none;
            color: #fff;
            &:hover {
                border-bottom: 3px solid red;
            }
        }
    }
  }
`
const Navbar = () => {
    return <MainNav>
        <ul>
          <li>
            <Link className= "btn" to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/singers">Singers</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </MainNav>
}

export default Navbar
