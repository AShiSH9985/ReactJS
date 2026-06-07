import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users=[
    {
      img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww",
      intro:"",
      tag:"Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
      intro:"",
      tag:"Underserved"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
      intro:"",
      tag:"Underbanked"
    }, {
      img:"https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
      intro:"",
      tag:"Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1585240975858-7264fd020798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1c2luZXNzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
      intro:"",
      tag:"Underserved"
    },
    {
      img:"https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1c2luZXNzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
      intro:"",
      tag:"Underbanked"
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App