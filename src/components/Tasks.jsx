export function Tasks({
  id,
  done,
  text,
  link,

  handleCheckboxChange,
  handleDeleteTask,
}) {
  return (
    <li className="form-list">
      <input
        type="checkbox"
        checked={done}
        onChange={() => handleCheckboxChange(id)}
      />
      <span
        style={
          done == true
            ? { textDecoration: 'line-through' }
            : { textDecoration: 'none' }
        }
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
      <button onClick={() => handleDeleteTask(id)}>X</button>
    </li>
  )
}
