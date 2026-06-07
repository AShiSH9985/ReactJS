import React from 'react'

const App = () => {
  localStorage.clear()
  localStorage.setItem('user','sarthak')
  localStorage.setItem('age','19')
  let user =localStorage.getItem('user')
  localStorage.removeItem('user')
  let age =localStorage.getItem('age')
  console.log(age)

  const User={
    username:'Sarthak',
    age:69,
    city:'Bhopal'
  }
  localStorage.setItem('User',JSON.stringify(User))
  let USer=localStorage.getItem('User')
  console.log(JSON.parse(USer))

  return (
    <div>App</div>
  )
}

export default App