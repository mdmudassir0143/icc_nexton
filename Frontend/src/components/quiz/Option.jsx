import React, { useState } from 'react'

const Option = ({item,id}) => {
  
  const [isClicked,setIsClicked] = useState(false);
  const handleClick = ()=>{
    setIsClicked(prev => !prev)
  }






  return (
   
    <div>
        <button className= {`option w-100 text-start btn_t text-white py-2 px-3 mt-3 rounded btn-dark ${isClicked && 'selected'}`} onClick={handleClick} >{item}</button>



                  {/* // key={index}
                  // className={`option w-100 text-start btn_t text-white py-2 px-3 mt-3 rounded btn-dark
                  // }`}
                  //   onClick={()=>{
                      
                  //     setClicked( prev => !prev)
                  //     setVotes(prev =>{
                  //       return {...prev,index}
                  //     })
                  //     console.log(votes);
                  //   }} */}



    </div>
  )
}

export default Option