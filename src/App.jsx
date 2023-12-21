import React from 'react'
import Card from './components/Card'
function App() {
  let data=[
    {
      plan:"FREE",
      price:0,
      user:"Single User",
      isUser:true,
      storage:"5GB Storage",
      isStorage:true,
      projects:"Unlimited Public Projects",
      isProjects:true,
      access:"Community access",
      isAccess:true,
      private:"Unlimited Private Projects",
      isPrivate:false,
      support:"Dedicated Phone Support",
      isSupport:false,
      domain:"Free Subdomain",
      isDomain:false,
      reports:"Monthly Status Reports",
      isReports:false,
    },
    {
      plan:"PLUS",
      price:9,
      user:"5 Users",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      projects:"Unlimited Public Projects",
      isProjects:true,
      access:"Community access",
      isAccess:true,
      private:"Unlimited Private Projects",
      isPrivate:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      domain:"Free Subdomain",
      isDomain:true,
      reports:"Monthly Status Reports",
      isReports:false,
    },
    {
      plan:"PRO",
      price:49,
      user:"Unlimited Users",
      isUser:true,
      storage:"150GB Storage",
      isStorage:true,
      projects:"Unlimited Public Projects",
      isProjects:true,
      access:"Community access",
      isAccess:true,
      private:"Unlimited Private Projects",
      isPrivate:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      domain:"Free Subdomain",
      isDomain:true,
      reports:"Monthly Status Reports",
      isReports:true,
    },

  ]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i)=>{
          return <Card data={e} key={i}/>
        })

        
      }

    
      
    </div>
  </div>
</section>
</>
}

export default App