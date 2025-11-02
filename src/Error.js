import './Error.css'
import { Link } from 'react-router'

export default function Error() {
    
  return (
    <div className='error-container'>
        <h1>404 Not Found</h1>
        <Link to={'/'} className='link'>Return to Homepage</Link>
    </div>
  )
}
