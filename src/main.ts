import './style.css'
import { Game } from './game'

const app = document.getElementById('app')!

const canvas = document.createElement('canvas')
canvas.id = 'gm'
app.appendChild(canvas)

new Game(canvas)
