import React, { useContext } from 'react'
import { store } from './Details'
import Card from '../Component/Card'

const Tourism = () => {
    const [detail] = useContext(store);
    console.log(detail);
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Tourism: Andhra Pradesh</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        detail.filter((article) => { return article.category === "Tourism" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
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
export default Tourism