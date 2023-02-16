// PILHAS
// Princípio LIFO - Last In First Out
// O último a entrar é o primeiro a sair

const Stack = () => {
  let items = [];
  let itemsSize = 0;

  const push = (element) => {
    // adiciona um novo item a pilha
    items.push(element);
    itemsSize++;
  };

  const pop = () => {
    // remove o item do topo da pilha
    items.pop();
    itemsSize--;
  };

  const peek = () => {
    // devolve o elemento que está no topo da pilha
    return items[itemsSize - 1];
  };

  const isEmpty = () => {
    // Informa se a pilha está vazia
    return itemsSize === 0;
  };

  const clear = () => {
    // Limpa a pilha
    items = [];
    itemsSize = 0;
  };

  const size = () => {
    // Informa o tamanho da pilha
    return itemsSize;
  };

  const print = () => {
    // Imprime a pilha no console
    console.log(items);
  };

  return { push, pop, print, peek, isEmpty, size, clear };
};

// testando a pilha
const start = Date.now();

const pilha = Stack();
pilha.push('Maria');
pilha.push('Camila');
pilha.push('André');
pilha.print();

for (let index = 0; index < 1000000; index++) {
  pilha.push(index);
}

pilha.print();
console.log(pilha.size());
pilha.peek();
pilha.print();
pilha.pop();
pilha.print();
console.log(pilha.size());
console.log(pilha.isEmpty());
pilha.clear();
console.log(pilha.isEmpty());

const end = Date.now();
console.log(`Benchmark: ${end - start}`);
