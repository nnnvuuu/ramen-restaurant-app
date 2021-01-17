import React from 'react';
import {Card,CardHeader,makeStyles,Grid, Divider, CardMedia} from '@material-ui/core';

const useStyle = makeStyles((theme)=>({
    root: {
        // maxWidth: 345,
        // maxWidth: 700,
        display:'flex',
      },
    media:{
        // height: 0,
        // paddingTop: '56.25%', // 16:9
        // maxWidth: 700,
        // width:1000,
        height:'100%'
    },
    content:{
        flex: '1 0 auto',
    }
}));

const Ramens = (props) => {
    const classes = useStyle();
    return( 
            <Card className={classes.root}>
                <CardMedia 
                className={classes.media}
                image={props.image}
                title={props.mediaTitle}
                />
            <div className={classes.content}>
                <CardHeader
                 title="Shrimp and Chorizo Paella"
                 subheader="September 14, 2016"
                />
             </div>
            </Card>
      
    );
}


{/* <Paper className={classes.root}>
<Grid container >
    <Grid item lg={7}>
      <img src={props.image} className={classes.media} />
    </Grid>
    <Grid item lg={5}>
        sss
    </Grid>
</Grid>
</Paper>
  */}
export default Ramens;