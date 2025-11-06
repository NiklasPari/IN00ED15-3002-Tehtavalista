export default function Row({ item, deleteTask }) {
  return (
    <li>
      {item.description}
      <button
        className='delete-button'
        onClick={() => deleteTask(item.id)}
      >Poista
      </button>
    </li>
  )
}