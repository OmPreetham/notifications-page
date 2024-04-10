const NotificationHeader = ({ toggleMark, mark }) => {
  return (
    <header className="notification__header header">
      <div className="header__heading">
        <h1 className="header__title">Notifications</h1>
        {mark && <p className="header__count">7</p>}
      </div>
      <p onClick={toggleMark} className="header__toggle">
        {mark ? 'Mark all as read' : 'Mark all as unread'}
      </p>
    </header>
  )
}
export default NotificationHeader
