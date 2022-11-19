import { useEffect, useState, React } from "react";
import Pagination from "react-bootstrap/Pagination";

 function DisplayPagination({length,setPage,page}){

    const numberOfPages = []
    for (let i = 1; i <= length; i++) {
        numberOfPages.push(i)
    }
    const [currentButton, setCurrentButton] = useState(1)
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([])

    useEffect(() => {
        let tempNumberOfPages = []
        tempNumberOfPages = [...numberOfPages]
        let dotsInitial = '...'
        let dotsLeft = '... '
        let dotsRight = ' ...' 
        if(length > 0 ){
          setCurrentButton(page)
        }else{
          setCurrentButton(0)
        }
           
        if (numberOfPages.length < 6) {
          tempNumberOfPages = numberOfPages
        }
    
        else if (currentButton >= 1 && currentButton <= 3) {
          tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length]
        }
    
        else if (currentButton === 4) {
          const sliced = numberOfPages.slice(0, 5)
          tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
        }
    
        else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {              
          const sliced1 = numberOfPages.slice(currentButton - 2, currentButton)                
          const sliced2 = numberOfPages.slice(currentButton, currentButton + 1)                 
          tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length]) 
        }
        
        else if (currentButton > numberOfPages.length - 3) {                 
          const sliced = numberOfPages.slice(numberOfPages.length - 4)   
          tempNumberOfPages = ([1, dotsLeft, ...sliced])                        
        }
        
        else if (currentButton === dotsInitial) {
          setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length-3] + 1) 
        }
        else if (currentButton === dotsRight) {
          setCurrentButton(arrOfCurrButtons[3] + 2)
        }
    
        else if (currentButton === dotsLeft) {
          setCurrentButton(arrOfCurrButtons[3] - 2)
        }
        setArrOfCurrButtons(tempNumberOfPages)
      }, [currentButton])

      return(
        <>
        <Pagination>
        <Pagination.First key="prev" className={`${currentButton === 1 || currentButton === 0 ? 'disabled' : ''}`} onClick={()=>{setPage((prev) => prev === 1 ? prev : prev-1) ; setCurrentButton((prev) => prev === 1 ? prev : prev-1)}} />

        {arrOfCurrButtons.map(((item, index) => {
            return <Pagination.Item key={index}  active = {currentButton === item }  onClick={()=>{setPage(item) ; setCurrentButton(item)}} > {item}</Pagination.Item>
          }))}

        <Pagination.Last key="next" className={`${currentButton === numberOfPages.length ? 'disabled' : ''}`} onClick={()=>{setPage((prev) => prev >= numberOfPages.length ? prev : prev+1) ; setCurrentButton((prev) => prev >= numberOfPages.length ? prev : prev+1)}} />
        </Pagination>
        </>
        )

}

export default DisplayPagination

