import React, {useContext} from 'react'
import { store } from './Details'
import Card from '../Component/Card'

export const Technology = () => {
  const [detail] = useContext(store);
  return (
    <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Technology</h1>

            <div className="main__container">
            <div className='rightbar'>
                  {
                    detail.filter((article) =>{return article.category === "Technology"}).map((n)=>( <Card 

                      articleid={n.id}
                      imgUrl = {n.Image}
                      description={n.description}
                      title={n.title}

                      />))
                  }
            </div>
            

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
            </div>
  )
}

export default Technology