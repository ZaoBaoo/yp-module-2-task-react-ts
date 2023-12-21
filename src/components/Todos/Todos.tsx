import { ChangeEvent, useCallback, useState } from "react";

// Components
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const Todos = () => {
  const [text, setText] = useState<string>("");
  const [filterText, setFilterText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChangeAddElementInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
    [],
  );

  const handleFilter = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    setTodos([...todos, { title: text, id: todos.length + 1 }]);
  }, [text, todos]);

  const handleRemove = useCallback(
    (id: number) => {
      setTodos(todos.filter((item: Todo) => item.id !== id));
    },
    [todos],
  );

  return (
    <div>
      <Input
        customField="str"
        value={text}
        placeholder="Введите название нового поля"
        onChange={handleChangeAddElementInput}
      />
      <Button onClick={handleAdd}>Добавить</Button>

      <div>
        <Input
          customField="filter"
          placeholder="Фильтруем"
          onChange={handleFilter}
        />

        <ul>
          {todos
            .filter((item: Todo) => item.title.includes(filterText))
            .map(({ title, id }) => (
              <li key={id}>
                <span>
                  {title} ({id})
                </span>
                <Button onClick={() => handleRemove(id)}>Удалить</Button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export { Todos };
