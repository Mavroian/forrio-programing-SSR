import React, { Component } from 'react';
import style from "./navbar.styles.scss"
import "./navbar.styles.scss"


class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>

            <a className={style.separator} href="/">Foriio
            </a>

          </li>
        </ul>
      </div>
    )
  }

}
export default Navbar