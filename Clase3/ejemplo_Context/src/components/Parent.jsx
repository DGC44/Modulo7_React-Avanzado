import './Parent.css'
import { useContext } from 'react'
import { AppContext } from '../contexts/Provider'

export default function Parent({ children }) {
    const { value } = useContext(AppContext)

    return (
    <>
        <h1>Parent {value}</h1>
        <div className='parent-container'>
            {children}
        </div>
    </>
    )
}