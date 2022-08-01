import React, { useState , useEffect } from 'react'

// import { store } from './Details'
import Card from '../Component/Card'
// import SmallCard from '../Component/SmallCard';

const Food = () => {
    // const [detail] = useContext(store);
    const[data , setData] = useState([])
    useEffect(() => {
        fetch(`https://bhavana27.herokuapp.com/api/details`).then(res => res.json())
        .then(res => setData(res))
    }, [])
    
    console.log(data);
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Food</h1>
            <h1 style={{ margin: "20px 0px 20px 39%", display: "inline-block" }}>Top Posts</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        data.filter((article) => { return article.category === "Food" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 250)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
               
            </div>
    )
}
export default Food