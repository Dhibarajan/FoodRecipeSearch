import React from 'react'
import Search from '../Search/Search';
import Recipes from '../Recipes/Recipes';
import Loading from '../Loading/Loading';
// import Footer from '../Footer/Footer'
import axios from 'axios';

function Home() {
    const [query,setQuery] = React.useState({value:'pizza'})
    const [recipes, setRecipes] = React.useState([])
    const [loading, setloading] = React.useState(true)
  // React hooks 
    const url = `https://api.edamam.com/search?q=${query.value}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`;
    React.useEffect(()=>{
        const getData = async()=>{
        const resp = await axios.get(url);
        setloading(false)
        setRecipes(resp.data.hits)
      
        }
        getData()
    },[url])


    const onSubmit = (e)=>{
        e.preventDefault()
        setQuery({value: e.target.elements.recipeName.value})
     }
    return (
        <div>
            <Search onSubmit={onSubmit}/>
            {/* Conditional (ternary) operator */}
            {loading ? <Loading /> : <Recipes recipes={recipes} />}
            {/* <Footer/> */}
        </div>
    )
}

export default Home
