// PILHAS
// Princípio LIFO - Last In First Out
// O último a entrar é o primeiro a sair

function Stack() {
  var items = [];

  function push(element) {
    // adiciona um novo item a pilha
    items.push(element);
  }

  function pop() {
    // remove o item do topo da pilha
    items.pop();
  }

  function peek() {
    // devolve o elemento que está no topo da pilha
    return items[items.length - 1];
  }

  function isEmpty() {
    // Informa se a pilha está vazia
    return items.length > 0;
  }

  function clear() {
    // Limpa a pilha
    items = [];
  }

  function size() {
    // Informa o tamanho da pilha
    return items.length;
  }

  function print() {
    // Imprime a pilha no console
    console.log(items);
  }

  return { push, pop, print, peek, isEmpty, size, clear };
}

// testando a pilha
const start = Date.now();

const pilha = Stack();
pilha.push('Maria');
pilha.push('Camila');
pilha.push('André');
pilha.print();
console.log(pilha.size());
console.log(pilha.peek());

for (let index = 0; index < 1000000; index++) {
  pilha.push(index);
}

pilha.print();
console.log(pilha.size());
console.log(pilha.peek());
pilha.print();
pilha.pop();
pilha.print();
console.log(pilha.size());
console.log(pilha.isEmpty());
pilha.clear();
console.log(pilha.isEmpty());

const end = Date.now();
console.log(`Benchmark: ${end - start}`);
