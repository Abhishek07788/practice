import React, {memo} from 'react'

const Child = () => {
    console.log("Child component rendered!!");

  return (
    <div>Child</div>
  )
}

export default memo(Child);