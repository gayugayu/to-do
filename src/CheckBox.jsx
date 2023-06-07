import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'
  
const style={
  li:`flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete:`flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  row:`flex`,
  text:`ml-2 cursor-pointer`,
  textComplete:`m1-2 cursor-pointer line-through`,
  button:`cursor-pointer flex items-center`
}

const CheckBox = ({todo,toggleComplete,deleteTodos}) => {
  return (
    <div>
      <li className={style.li}>
        <div className={style.row}>
        <input onChange={()=> toggleComplete(todo)} type="checkbox"checked={todo.completed ? 'checked' : ''} />
         <label onClick={()=> toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>{todo.text}</label>
        </div>
        <button onClick={()=>deleteTodos(todo.id)}>{<FaRegTrashAlt/>}</button>
      </li>
    </div>
  )
}

export default CheckBox
