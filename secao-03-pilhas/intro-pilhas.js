// PILHAS
// Princípio LIFO - Last In First Out
// O último a entrar é o primeiro a sair

const Stack = () => {
  let items = [];

  const push = (element) => items.push(element);
  const pop = (element) => items.pop(element);

  const peek = () => items[items.length];
  const isEmpty = () => items.length === 0;
  const size = () => items.length;
  const clear = () => (items = []);

  const watchList = () => items;

  return { push, pop, watchList, peek, isEmpty, size, clear };
};

const stack = Stack();
