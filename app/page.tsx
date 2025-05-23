import prisma from '@/lib/prisma';

export default async function Home() {
  const todos = await prisma.todo.findMany();
  console.log(todos);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
