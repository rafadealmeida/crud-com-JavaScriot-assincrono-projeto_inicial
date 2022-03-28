const http = new XMLHttpRequest();

const conteudo = (nome,email) => {
        
    const novaLinhaCliente = document.createElement('tr');
    const conteudo =
    
        `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
        <ul class="tabela__botoes-controle">
        <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
        </td> 
        `

        novaLinhaCliente.innerHTML=conteudo;
        return novaLinhaCliente;
}

http.open('GET','http://localhost:3000/profile');

http.send();

http.onload = () =>{
    const data = http.response;
    console.log(data);
}