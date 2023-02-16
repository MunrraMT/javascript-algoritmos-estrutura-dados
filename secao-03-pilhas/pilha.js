// PILHAS
// Princípio LIFO - Last In First Out
// O último a entrar é o primeiro a sair

const Stack = () => {
  let items = [];

  const push = (element) => {
    // adiciona um novo item a pilha
    items.unshift(element);
  };

  const pop = () => {
    // remove o item do topo da pilha
    items.pop();
  };

  const peek = () => {
    // devolve o elemento que está no topo da pilha
    return items[0];
  };

  const isEmpty = () => {
    // Informa se a pilha está vazia
    return items.length > 0;
  };

  const clear = () => {
    // Limpa a pilha
    items = [];
  };

  const size = () => {
    // Informa o tamanho da pilha
    return items.length;
  };

  const print = () => {
    // Imprime a pilha no console
    console.log(items);
  };

  return { push, pop, print, peek, isEmpty, size, clear };
};
