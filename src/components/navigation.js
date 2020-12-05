import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import Header from './header'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <div>
        <Header/>
        </div>
      <li className={styles.navigationItem}>
        <Link to="/">Kotisivu</Link>
      </li>
    </ul>
  </nav>
)
