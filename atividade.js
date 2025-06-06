let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];

let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];  

// 1.Um item duplicado foi detectado no final do inventário Alpha. Remova a cópia.
let inventarioAlphaRemovido = inventarioAlpha.pop(); // Criando a let: iventarioAlphaRemovido com .pop para remover o último item da lista (duplicado)
console.log("Iventário com o item removido:", inventarioAlpha); // // Enviando console.log para mostrar o novo InventarioAlpha
console.log("Item removido:", inventarioAlphaRemovido); // Outro console.log para mostrar o item removido

// 2.Um artefato obsoleto foi removido do final da lista Beta após avaliação técnica.
let inventarioBetaRemovido = inventarioBeta.pop(); // Criando a let: iventarioBetaRemovido com .pop para remover o último item da lista (obsoleto)
console.log("Iventário com o item removido:", inventarioBeta); // // Enviando console.log para mostrar o novo InventarioBeta
console.log("Item removido:", inventarioBetaRemovido); // Outro console.log para mostrar o item obsoleto removido

// 3.Três novos artefatos da Terra foram entregues à nave Alpha. Adicione-os ao final.
let novoItem01 = ["Computador Gamer", "Terra", 7043]; // Criando a let do novo item 01
let novoItem02 = ["Playstation 2","Terra", 2562]; // Criando a let do novo item 02
let novoItem03 = ["Celular Motorola", "Terra", 6542]; // Criando a let do novo item 03
inventarioAlpha.push(novoItem01); // Adicionando o item 01 com push ao iventarioAlpha
inventarioAlpha.push(novoItem02); // Adicionando o item 02 com push ao iventarioAlpha
inventarioAlpha.push(novoItem03); // Adicionando o item 03 com push ao iventarioAlpha
console.table(inventarioAlpha); // Enviando a mensagem com console.log do novo iventário

// 4.Dois artefatos especiais de Kepler foram coletados e adicionados à nave Beta.
let novoItem001 = ["Notebook Asus", "Terra", 4678]; // Criando a let do novo item 001
let novoItem002 = ["Xbox 360", "Terra", 9864]; // Criando a let do novo item 002
inventarioBeta.push(novoItem001); // Adicionando o item 001 com push ao iventarioBeta
inventarioBeta.push(novoItem002); // Adicionando o item 002 com push ao iventarioBeta
console.table(inventarioBeta); // Enviando a mensagem com console.log do novo iventário

// 5.Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine.
let itemTopo = inventarioAlpha[7]; // Criando a let para o item TOP da índice 7
inventarioAlpha.unshift(itemTopo); // Adicionando uma novo item no início do Iventário
inventarioAlpha.splice(8, 1); // Removendo oitavo elemento
console.log("Lista com o novo item no Topo:", inventarioAlpha); // Enviando console.log do novo iventarioAlpha

// 6.Um item da Beta deve ser promovido para o início da lista para estudo prioritário.
let itemPromovido = inventarioBeta.splice(17,1); // Criando a let para o item promovido da índice 17
console.log(`Item de estudo promovido: ${itemPromovido}`); // Enviando o console.log para o item que foi promovido
inventarioBeta.unshift(itemPromovido); // Adicionando item com unshift
console.log("Lista com o item promovido:", inventarioBeta); // Enviando console.log com a lista do item promovido

// 7.Um artefato incorreto foi inserido no topo da Alpha por engano. Ele deve ser excluído.
let itemRemovido = inventarioAlpha.shift(); // Removendo item incorreto com shift
console.log(`Item removido: ${itemRemovido}`); // Enviando item removido com console.log
console.log("Lista com o item removido:", inventarioAlpha); // Nova lista com item removido

// 8.O primeiro item da Beta pertence a um museu e deve ser removido.
let itemRemovido1 = inventarioBeta.shift(); // Removendo item incorreto com shift
console.log(`Item removido: ${itemRemovido1}`); // Enviando item removido com console.log
console.log("Lista com o item removido:", inventarioBeta); // Nova lista com item removido

// 9.Verifique se a “Relíquia de Zordon” está presente no inventário Beta.

// 10.Verifique se o item “Nanofibra Luminosa” ainda está disponível na Alpha.

// 12.Crie um texto com os nomes dos 10 primeiros itens da Beta, separados por vírgulas.
let novaLista = []; // Criando let para a nova lista
novaLista = inventarioBeta.slice(0,10); // Encontrando os nomes dos 10 primeiros itens
console.log(`Lista com os nomes dos 10 primeiros: ${novaLista.join(';  ')}`); // Enviando o console.log com a nova lista

// 13.Gere uma nova lista com os 5 primeiros itens da nave Beta para inspeção.
let novaListaBeta = [] // Criando let para a nova lista Beta
novaListaBeta = inventarioBeta.slice(0, 5) // Encontrando os nomes dos 5 primeiros itens
console.log(`Lista com os 5 primeiros itens da nave Beta${novaListaBeta}`) // Enviando o console.log com a nova lista

// 14.Separe os 10 últimos itens do inventário Alpha para estudo temporal.
inventarioAlpha.reverse() // Fazendo a separação dos itens com reverse
console.log(`Novo inventário separado: ${inventarioAlpha.slice(0, 10)}`) // Enviando a separação com console.log dos últimos 10 itens

// 15.O quinto item da Alpha foi substituído por uma versão mais moderna. Atualize.
console.log(`Item substituido:${inventarioAlpha[4]}`); // Fazendo o console.log com a substituição do item na quinta posição
inventarioAlpha[4] = ["Flor de Andrômeda Moderna", "AndrômedaM", 16392] // Atualizando o item de indice 4
console.log(`Item na versão moderna: ${inventarioAlpha[4]}`); // Enviando o item na versão moderna
console.log("Lista com o item moderno:", inventarioAlpha); // Enviando o console.log com item atualizado

// 16.Dois itens no meio do inventário Beta foram contaminados e precisam ser removidos.