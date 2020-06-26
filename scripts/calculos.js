function calculo() {
    const retorno = document.querySelector("#retorno")
    const livre = document.querySelector("#livre")
    const vol = document.querySelector("#vol")
    const result = document.querySelector("#resultado")
    
    const n1 = Number(retorno.value / 100)
    const n2 = Number(livre.value / 100)
    const n3 = Number(vol.value / 100)

    const total = ((n1 - n2) / n3).toFixed(1)
    
    result.innerHTML = `Resultado: ${total}`
}