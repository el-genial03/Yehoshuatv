javascript
document.addEventListener("DOMContentLoaded") , ()  => {
    const botao =
    document.requerySelector ("#botaoInterativo") ;
    if (botao) {
        botao.addEventListener("click" , () => {
            alert("vocÊ clicou no botão!");

        });
    }
};  