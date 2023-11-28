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
      <li className=" px-4 py-2 hover:bg-slate-700 rounded-lg w-full flex gap-6 lg:gap-4 items-center ">
        <input type="checkbox" checked={done} className=" scale-150 " />
        <span
          onClick={() => handleCheckboxChange(id)}
          className={`lg:text-lg text-xl cursor-pointer ${
            done == true ? 'line-through text-gray-500' : ''
          }`}
        >
          {text}
        </span>
        {link.length != link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <span className=" text-blue-400 text-lg">Link</span>
          </a>
        ) : (
          ''
        )}
      </li>
      <button onClick={() => handleDeleteTask(id)}>
        <BsTrash3 className=" text-3xl" />
      </button>
    </div>
  )
}
