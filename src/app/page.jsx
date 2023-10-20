import { prisma } from "@/libs/prisma"
import TaskCard from "@/components/TaskCard";
async function loadTask() {

  return await prisma.task.findMany()
  //Para hacer una peticion teniendo un backend aparte se hace con el fetch y se manda a llamar en la funcion principal
  // const res = fetch('http://localhost:3000/api/tasks')
  // const data = await res.json();
}


async function HomePage() {

  const tasks = await loadTask();
  console.log(tasks)
  //Aqui se llamaria la funcion utilizando el fetch
  // loadTask()
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map(task => (
          <TaskCard task={task} key={task.id}/>
        ))}

      </div>

    </section>
  );
}

export default HomePage