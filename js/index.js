import Highway from '@dogstudio/highway'
import {Fade} from './transition'


const H = new Highway.Core({
    
    transitions:{
        default:Fade
    }

});

const menu = document.getElementById('toggle');
const nav = document.getElementById('nav');
menu.onclick = function() {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
}


const data =  new Date();

const tempo = data.getFullYear() - 1993;

document.querySelector('.year-text').innerHTML = `Atuamos há ${tempo} anos e somos reconhecidos no mercado como Excelência em Distribuição.`