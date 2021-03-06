import { clienteService } from "../service/cliente-service";


const criarNovaLinha = (nome,email) => {
    
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


const tabela = document.querySelector('[data-tabela]');




clienteService.listaCliente()
.then(data =>{
     data.forEach(elemento =>{
        tabela.appendChild(criarNovaLinha(elemento.nome, elemento.email));
        })
});

