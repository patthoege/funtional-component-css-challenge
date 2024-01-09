import React from 'react'
import Item from './Item'

function RenderingLists() {
    const itemList = [
        'one',
        'two',
        'three',
    ]

    const items = [
        {
            title:'one',
            name:'1',
            image:'',
            description:'first',
        },
        {
            title:'two',
            name:'2',
            image:'',
            description:'second',
        },
        {
            title:'three',
            name:'3',
            image:'',
            description:'third',
        }
    ]

    return (
        <div>
            {itemList.map(item => {
                return <h2 key={item}>{item}</h2>
            })}
            <hr />
        {items.map(item => {
                return <div key={item.content}>
                            <h5>{item.title}</h5>
                            <p>{item.name}</p>
                            <p>{item.image}</p>
                            <p>{item.description}</p>
                        </div>
            })}
            <hr />
            {
                items.map(item => {
                    return <Item key={item.title} item={item}/>
                })
            }
        </div>
        
    )
}

export default RenderingLists