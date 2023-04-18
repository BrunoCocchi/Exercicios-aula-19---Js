const alimentos = [
    {
        nome: 'alface',
        cor: 'verde', 
        peso: '5g',
        tipo: 'verdura',
    },
    {
        nome: 'banana',
        cor: 'amarelo', 
        peso: '50g',
        tipo: 'fruta',
    },
    {
        nome: 'beterraba',
        cor: 'roxa', 
        peso: '60g',
        tipo: 'legume',
    },
    {
        nome: 'pepino',
        cor: 'verde', 
        peso: '15g',
        tipo: 'verdura',
    },
    {
        nome: 'maça',
        cor: 'vermelha', 
        peso: '20g',
        tipo: 'fruta',
    },
];


function nomesFrutas() {
    alimentos.forEach((alimento) => {
      if (alimento.tipo === 'fruta') {
        console.log(alimento.nome);
      }
    });
  }
  
  function quantidadePorTipo() {
    let contadorFrutas = 0;
    let contadorVerduras = 0;
    let contadorLegumes = 0;
  
    alimentos.forEach((alimento) => {
      if (alimento.tipo === 'fruta') {
        contadorFrutas++;
      } else if (alimento.tipo === 'verdura') {
        contadorVerduras++;
      } else if (alimento.tipo === 'legume') {
        contadorLegumes++;
      }
    });
  
    console.log(`Quantidade de frutas: ${contadorFrutas}`);
    console.log(`Quantidade de verduras: ${contadorVerduras}`);
    console.log(`Quantidade de legumes: ${contadorLegumes}`);
  }
  
  nomesFrutas();
  quantidadePorTipo();