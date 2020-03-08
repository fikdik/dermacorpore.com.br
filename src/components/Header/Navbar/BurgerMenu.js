import React from "react"

import styles from "./BurgerMenu.module.css"

const BurgerMenu = props => {
  return (
    <div className={styles.burgerMenu} onClick={props.toggleNavbar}>
      <div className={props.navbarOpen ? styles.open : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </div>
  )
}

export default BurgerMenu
