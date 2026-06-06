import React from 'react'
import Card from './components/Card'
import User from './components/User'


const App = () => {
   const jobOpenings = [

{
brandLogo: "https://cdn.simpleicons.org/google",
companyName: "Google",
datePosted: "5 days ago",
post: "Frontend Developer",
tag1: "Full Time",
tag2: "Junior Level",
pay: "$45/hr",
location: "Mumbai, India"
},

{
brandLogo: "https://cdn.simpleicons.org/microsoft",
companyName: "Microsoft",
datePosted: "2 weeks ago",
post: "Backend Developer",
tag1: "Full Time",
tag2: "Senior Level",
pay: "$60/hr",
location: "Bangalore, India"
},

{
brandLogo: "https://cdn.simpleicons.org/amazon",
companyName: "Amazon",
datePosted: "3 days ago",
post: "Software Engineer",
tag1: "Full Time",
tag2: "Junior Level",
pay: "$50/hr",
location: "Hyderabad, India"
},

{
brandLogo: "https://cdn.simpleicons.org/meta",
companyName: "Meta",
datePosted: "1 week ago",
post: "React Developer",
tag1: "Part Time",
tag2: "Mid Level",
pay: "$55/hr",
location: "Delhi, India"
},

{
brandLogo: "https://cdn.simpleicons.org/apple",
companyName: "Apple",
datePosted: "10 days ago",
post: "UI Engineer",
tag1: "Full Time",
tag2: "Senior Level",
pay: "$70/hr",
location: "Pune, India"
},

{
brandLogo: "https://cdn.simpleicons.org/netflix",
companyName: "Netflix",
datePosted: "4 weeks ago",
post: "Full Stack Developer",
tag1: "Full Time",
tag2: "Mid Level",
pay: "$65/hr",
location: "Chennai, India"
},

{
brandLogo: "https://cdn.simpleicons.org/tesla",
companyName: "Tesla",
datePosted: "2 days ago",
post: "Node.js Developer",
tag1: "Contract",
tag2: "Junior Level",
pay: "$48/hr",
location: "Gurgaon, India"
},

{
brandLogo: "https://cdn.simpleicons.org/ibm",
companyName: "IBM",
datePosted: "6 days ago",
post: "Cloud Engineer",
tag1: "Full Time",
tag2: "Senior Level",
pay: "$58/hr",
location: "Noida, India"
},

{
brandLogo: "https://cdn.simpleicons.org/oracle",
companyName: "Oracle",
datePosted: "8 weeks ago",
post: "Java Developer",
tag1: "Full Time",
tag2: "Mid Level",
pay: "$52/hr",
location: "Kolkata, India"
},

{
brandLogo: "https://cdn.simpleicons.org/adobe",
companyName: "Adobe",
datePosted: "1 day ago",
post: "MERN Stack Developer",
tag1: "Internship",
tag2: "Junior Level",
pay: "$35/hr",
location: "Ahmedabad, India"
}

];


  return (
    <div className='parent'>
     {jobOpenings.map(function(elem){
      return <Card brand={elem.brandLogo} company={elem.companyName} date={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />

     })}
    </div>
  )
}

export default App