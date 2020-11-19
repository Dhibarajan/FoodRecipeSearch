import React from 'react'
import loading from './pT7M5bBT9.gif'
import Container from '@material-ui/core/Container';



function Loading() {
    return (
        <Container style={{'height':'80vh','textAlign':'center'}}>
            <img src={loading} style={{'width':'50vh'}} alt='loading' />
        </Container>
        

    )
}

export default Loading
