
import React from 'react';


const AuthPage = () => {
    const [counter, setCounter] =useState(300);

    useEffect(() => {
    
  
        counter > 0 && setTimeout(()=> setCounter(counter - 1), 1000);
      
        if(counter==0) return handleComplete();
     
      }, [counter]);

      

    return (
        <div>

        </div>
      );
}
 
export default AuthPage;