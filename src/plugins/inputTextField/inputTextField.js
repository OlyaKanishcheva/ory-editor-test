import React from 'react';

const onInput = (onChange) => {
  return (e) => {
    onChange({
      value: e.target.value
    })
  }
}

const inputTextField = (props) => {
  console.warn(props)
  const {
    state: { value },
    onChange,
    readOnly,
  } = props

  if (!readOnly) {
    return(
      <div className='input-text'>
        <input 
          type='text'
          onChange={onInput(onChange)}
          value={value}
        />
      </div>
    )
  }

  return(
    <div className='input-text'>
      {value}
    </div>
  )
}

export default inputTextField;

