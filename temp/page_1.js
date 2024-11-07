export default function Page() {
  const todos = [
    {
      "id": 1,
      "title": "Eat breakfasts"
    },
    {
      "id": 2,
      "title": "Go to class"
    },
    {
      "id": 3,
      "title": "Do homework"
    }
  ]
  return (
    <div>
      <h1>My Todo List</h1>
      <div>
        {todos.map(({ id, title }) => {
          return (
            <li key={id}>
              {id} {title}
            </li>
          );
        })}
      </div>
      <br />
    </div>
  );
}