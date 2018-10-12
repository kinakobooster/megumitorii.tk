import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <div className="name-card">
      <Link to="/">
        <h1>megumitorii.tk</h1>
      </Link>
      <ul>
        <li>
          Twitter:{' '}
          <a href="https://twitter.com/kinakobooster">@kinakobooster</a>
        </li>
        <li>
          Blog: <a href="https://noubrain.hateblo.jp">noubrain.hateblo.jp</a>
        </li>
        <li>Mail: torii.megumi [at] gmail.com</li>
      </ul>
    </div>
  )
}
