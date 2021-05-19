import React, {useRef} from 'react'

interface ITodoFormProps {
    onAdd(title:string): void
}


const TodoForm: React.FC<ITodoFormProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value);
            ref.current!.value = ''
        }
    }
    return (
        <div className='input-field mt2'>
             <input 
             onKeyPress={keyPressHandler}
            ref={ref}
             type="text" id='title' placeholder='Enter your deal'/>
             <label htmlFor="title" className='active'>Enter your deal</label>
        </div>
    )
}

export default TodoForm