export function TaskCard ({ task }) {
  return (
    <div>
      <h3>{task.tittle}</h3>
      <p>{task.description}</p>
    </div>
  )
}
