import { useState, useEffect } from "react";

type WithId = { id: string | number };

function useLocalListState<T extends WithId>(key: string, initial: T[] = []) {
  const [list, setList] = useState<T[]>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(list));
  }, [key, list]);

  // Add a new item
  const add = (item: Omit<T, "id">) => {
    const newItem = { ...item, id: Date.now() } as T;
    setList(l => [...l, newItem]);
  };

  // Update an item by id
  const update = (id: string | number, updater: (item: T) => T) => {
    setList(l => l.map(item => (item.id === id ? updater(item) : item)));
  };

  // Remove an item by id
  const remove = (id: string | number) => {
    setList(l => l.filter(item => item.id !== id));
  };

  return { list, add, update, remove, setList };
}

export default useLocalListState;