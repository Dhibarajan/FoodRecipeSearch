import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

function Search({onSubmit}) {
    return (
        <div style={{marginBottom:'20px'}}>
          <h1 style={{textAlign:'center'}}>Search your favorite Recipe</h1>
            <form noValidate autoComplete="off" onSubmit={onSubmit} style={{position:'relative', display:'flex',justifyContent:'center'}}>
              <Input placeholder="Find a Recipe" inputProps={{ 'aria-label': 'description' }} name='recipeName'/>
              <div style={{marginLeft:'5px'}}>
              <Button variant="outlined" color="primary" type='submit'>Search</Button>
              </div>
            </form>
        </div>
    )
}

export default Search
