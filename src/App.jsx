import NotificationList from './components/NotificationList'
import NotificationHeader from './components/NotificationHeader'
import { useState } from 'react'

const App = () => {
  const [mark, setMark] = useState(false)

  const toggleMark = () => {
    setMark(!mark)
  }

  return (
    <div className="notification">
      <NotificationHeader toggleMark={toggleMark} mark={mark} />
      <NotificationList mark={mark} />
    </div>
  )
}
export default App
