
/**
 * variaveis
 * funções
 * loop
 * condicionais
 */

// variaveis
const meuNome = 'Maria';
let minhaIdade = 20;

// console.log(meuNome);
// console.log(minhaIdade);

minhaIdade = 21;
// console.log(minhaIdade);
// meuNome = 'Maria Porcina'; => retorna um erro

// funções

// declaração de função
function imprimirNome(){
    console.log(meuNome);
}
// chamada/executando a função
// imprimirNome();

// loop
for(let contador = 0; contador < 5; contador++){
    // imprimirNome();
}

// condicionais
if(minhaIdade > 18) {
    // console.log('Atingiu a maioridade');
} else {
    // console.log('Não atingiu a maioridade');
}

/* ------------ */

/**
 *  <li>    
        <p class="primeiroItem">0 Good Enough</p>
        <p>MeiaUm</p>
        <p>Good Enough</p>
    </li>
    {
       'name': 'É TUDO SOBRE VOCÊ  SER MUDADO  MORADA AO VIVO',
       'artist': 'MORADA',
       'path': '',
       'album': 'Desconhecido',
    }
 */

/* Numero de Musicas */

const songs = baseMusicas.length

document.getElementById('number-songs').innerHTML = songs+" Songs"



const listaMusicas = document.querySelector('.listaMusicas');
const tagAudio = document.getElementById('saidaAudio');
const primeiraMusica = baseMusicas[0];
tagAudio.src = primeiraMusica.path;
atualizaPlayer(baseMusicas[0].album,baseMusicas[0].name)
const botaoPausar = document.getElementById('btnPause');
const botaoPlay = document.getElementById('btnControlPlay');

let musicaAtual = 0;

function construirPlaylist(musica, musicaId){
    const musicaElemento = document.createElement('li');
    const nomeMusica = document.createElement('p');
    const nomeArtista = document.createElement('p');
    const nomeAlbum = document.createElement('p');

    musicaElemento.dataset.id = musicaId;

    nomeMusica.className = 'primeiroItem';
    nomeMusica.innerText = musica.name;
    nomeArtista.innerText = musica.artist;
    nomeAlbum.innerText = musica.album;

    musicaElemento.appendChild(nomeMusica);
    musicaElemento.appendChild(nomeArtista);
    musicaElemento.appendChild(nomeAlbum);

    musicaElemento.addEventListener('click', tocarMusica);

    listaMusicas.appendChild(musicaElemento);
}

for(let contador = 0; contador < baseMusicas.length; contador++){
    construirPlaylist(baseMusicas[contador], contador);
}

function tocarMusica(evento){
    const elementoClicado = evento.currentTarget;

    if(elementoClicado.tagName === 'LI'){
        const musicaId = elementoClicado.dataset.id;
        const musicaSelecionada = baseMusicas[musicaId];
    
        tagAudio.src = musicaSelecionada.path;
        musicaAtual = Number(musicaId)
        tagAudio.play();
        botaoPlay.classList.add("pause")
        atualizaPlayer(baseMusicas[musicaAtual].album,baseMusicas[musicaAtual].name)
       
    } else {
        if(tagAudio.paused){
            tagAudio.play();
            botaoPlay.classList.add("pause")
            
        } else {
            tagAudio.pause();
            botaoPlay.classList.remove("pause")
        }
    }
}
botaoPlay.addEventListener('click', tocarMusica);

function pausarMusica(){
    tagAudio.pause();
    botaoPlay.classList.remove("pause")
}
botaoPausar.addEventListener('click', pausarMusica);


//NEXT
function tocarProximaMusica(){
    
    if(musicaAtual === baseMusicas.length - 1){
        musicaAtual = 0
    }else{
        musicaAtual++
    }
   
    tagAudio.src = baseMusicas[musicaAtual].path
    tagAudio.play()
    let nomeAlbum = baseMusicas[musicaAtual].album
    let nomeMusica = baseMusicas[musicaAtual].name
    atualizaPlayer(nomeAlbum,nomeMusica)
    botaoPlay.classList.add("pause")
}

const btnControlNext = document.getElementById('btnControlNext');
btnControlNext.addEventListener("click", tocarProximaMusica)



//PREV
function tocarMusicaAnterior(){
    
    if(musicaAtual === 0){
        musicaAtual = baseMusicas.length - 1
    }else{
        musicaAtual--
    }
    
    tagAudio.src = baseMusicas[musicaAtual].path
    tagAudio.play()
    atualizaPlayer(nomeAlbum,nomeMusica)
    botaoPlay.classList.add("pause")
}

const btnControlPrev = document.getElementById('btnControlPrev');
btnControlPrev.addEventListener("click", tocarMusicaAnterior)

const areaPlayerVolume = document.querySelector(".areaPlayerVolume input")

console.log(areaPlayerVolume)
areaPlayerVolume.addEventListener("input", ()=>{
    
    tagAudio.volume = areaPlayerVolume.value
})

function atualizaPlayer(nome,musica){
   
    //const fotoAlbum = document.getElementById('fotoAlbum');
    const nomeMusica = document.getElementById('nomeMusica');
    const nomeAlbum = document.getElementById('nomeAlbum');
    
   // fotoAlbum.src = foto
    nomeMusica.innerText = musica
    nomeAlbum.innerText = nome

}