import React, {useState} from 'react';
import { TabButtons, tabContent } from './TabButtons';

export const TabFile = () => {
    const [selectedTab, setSelectedTab] = useState()
    const onTabClick = (tabbtn) =>{
       const updatedContent = tabContent.filter((content , i) => content.tab === tabbtn.btn);
       setSelectedTab(updatedContent)
    }
    console.log("selectedTab" , selectedTab)
   
  return (
    <div className='tab'>
        <h3>TabsList</h3>
        <div className='tab-buttons'>
        {
            TabButtons?.map((tabbtn, i) =>{
                return(
                    <div key={i}>
                        <button onClick={() => onTabClick(tabbtn)}>
                            {tabbtn.btn}
                        </button>
                    </div>
                )
            })
        }
        </div>
        <div className='tab-contents'>
        {
          selectedTab?.map((content, i) =>{
                return(
                    <h4>{content.content}</h4>
                )
            })
        }
        </div>
    </div>
  )
}
