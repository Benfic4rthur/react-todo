import React from 'react'

type Props = {
    title: string
    content: string
    comentsQty: number
    tags: string[]

    //8 - ENUM
    category: Category
}

export enum Category {
    JS = 'Javascript',
    TS = 'Typescript',
    PY = 'Python'
}

const Destructuring = ({title, content, comentsQty, tags, category}:Props) => {
return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de comentários {comentsQty}</p>
        <div>
        {tags.map(tag => (
            <span>#{tag} </span>
        ))}
        <p>Categoria:{category}</p>
        </div>
    </div>
)
}

export default Destructuring