import { BsTrash3 } from 'react-icons/bs'

export function Tasks({
  id,
  done,
  text,
  link,

  handleCheckboxChange,
  handleDeleteTask,
}) {
  return (
    <div className="flex justify-between items-center gap-12">
      <li className="border px-4 py-2 border-gray-700 rounded-lg w-full flex gap-2">
        <input
          type="checkbox"
          checked={done}
          onChange={() => handleCheckboxChange(id)}
          className="border rounded-sm"
        />
        <span
          style={
            done == true
              ? { textDecoration: 'line-through' }
              : { textDecoration: 'none' }
          }
          className="text-lg"
        >
          {text}
        </span>
        {link.length != link ? (
          <a href={link} target="_blank" rel="noreferrer">
            Link
          </a>
        ) : (
          ''
        )}
      </li>
      <button onClick={() => handleDeleteTask(id)}>
        <BsTrash3 className="text-lg" />
      </button>
    </div>
  )
}
