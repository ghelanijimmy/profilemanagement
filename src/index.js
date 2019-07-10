import styles from "./css/_index.scss"

import React from 'react'
import {render} from 'react-dom'

import Form from './Form'

render(<Form ref={(PMApp) => {window.PMApp = PMApp}} />, document.getElementById('PMApp'))