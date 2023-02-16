// PILHAS
// Princípio LIFO - Last In First Out
// O último a entrar é o primeiro a sair

const Stack = () => {
  let items = [];

  const push = (element) => {
    // adiciona um novo item a pilha
  };

  const pop = () => {
    // remove o item do topo da pilha
  };

  const peek = () => {
    // devolve o elemento que está no topo da pilha
  };

  const isEmpty = () => {
    // Informa se a pilha está vazia
  };

  const clear = () => {
    // Limpa a pilha
  };

  const size = () => {
    // Informa o tamanho da pilha
  };

  const print = () => {
    // Imprime a pilha no console
  };

  return { push, pop, print, peek, isEmpty, size, clear };
};

const stack = Stack();
stack.push('sdn sda');
stack.push('sdn adt');
stack.push('sdn rdr');
stack.print();
