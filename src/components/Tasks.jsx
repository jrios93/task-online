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
      <li className="border px-4 py-2 border-gray-700 rounded-lg w-full flex gap-6 lg:gap-4 items-center">
        <input
          type="checkbox"
          checked={done}
          onChange={() => handleCheckboxChange(id)}
          className="border rounded-sm  scale-150"
        />
        <span
          style={
            done == true
              ? { textDecoration: 'line-through' }
              : { textDecoration: 'none' }
          }
          className="lg:text-lg text-xl"
        >
          {text}
        </span>
        {link.length != link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <span className=" text-fuchsia-600">Link</span>
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
