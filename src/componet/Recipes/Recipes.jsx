import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import CardList from '../CardList/CardList'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function Recipe({recipes}) {
    return (
        <div>
            <Container>
             <Grid container spacing={3}>
               {recipes.map(recipes=><Grid key={uuidv4()}item lg={3} md={4} sm={12} xs={12}>
                   <CardList recipes={recipes}/>
               </Grid>)}
           </Grid>
            </Container>
           
        </div>
    )
}

export default Recipe   
