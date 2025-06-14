import './styles.scss'

import innet from 'innet'
import dom, { Router } from '@innet/dom'

import { routing } from '/routing'

innet(<Router routing={routing} />, dom)
