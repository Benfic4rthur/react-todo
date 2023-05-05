import React, {useContext} from 'react'
import { AppContext } from '../App'
type Props = {}

const Context = (props: Props) => {

    const details = useContext(AppContext)


  return <>
  {details && (
  <div>
    <h2>linguagem: {<details.language}</h2>
    <h2>framework: {<details.framework}</h2>
    <h2>project: {<details.project}</h2>
    </div>
    )}
    </>;
}

export default Context