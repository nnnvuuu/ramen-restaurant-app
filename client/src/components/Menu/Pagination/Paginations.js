import React from 'react';
import { Pagination,PaginationItem} from '@material-ui/lab';
import {makeStyles} from '@material-ui/core';

const useStyle = makeStyles(({
  root:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:'1rem',
    marginTop: '1rem',
  
  },

}))

const Paginations = ({totalItems,itemPerPage,paginate,currentPage}) => {
const classes = useStyle();

let totalPage = Math.ceil(totalItems / itemPerPage);
let active =currentPage;
let items = [];
for (let number = 1; number <= Math.ceil(totalItems / itemPerPage); number++) {
  items.push(number);
}

const handleChange = (event, value) => {
  paginate(value);
};
    return ( 
        <div>     
             <Pagination 
             defaultPage={1}
             color="secondary" 
             count={totalPage} 
             onChange={handleChange}
             className={classes.root}
             size="large"
                  >
         {items.map(item=>(
            <PaginationItem 
             key={item} 
             page={currentPage}
            
             >
            </PaginationItem>
         ))}     
           </Pagination>
        </div>
     );
}
 
export default Paginations;