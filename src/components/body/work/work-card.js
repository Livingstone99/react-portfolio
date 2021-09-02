import React from 'react'
import './work-card.css'

function WorkCard({item}) {
    return (
       <div className="work-card">
           <img src={item.companyLogo} alt="" className="work-logo" />
           <div className="work-info">
               <label htmlFor="" className="company-name">
                   {item.company}
               </label>
               <div className="work-dates">
                   <label htmlFor="">{item.dateJoining}</label><label htmlFor="">{item.dateEnd}</label>
               </div>
               <div className="work-desc">
                   {item.work}
               </div>
           </div>
       </div>
    )
}

export default WorkCard
