"use client"
import { useRouter } from "next/navigation"

function TaskCard({task}) {
    const router = useRouter();
    return (
        <div 
        className="bg-slate-900 p-3 hover:bg-slate-800 cursor-pointer"
        onClick={() => {
            router.push(`/task/edit/${task.id}`)
        }}>
            <h3 className="font-bold text-2xl mb-2">{task.titule}</h3>
            <p>{task.description}</p>
            <p>{new Date(task.createAt).toLocaleDateString()}</p>
        </div>
    )
}

export default TaskCard