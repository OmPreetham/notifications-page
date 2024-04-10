const NotificationHeader = () => {
  return (
    <header className="notification__header header">
      <div className="header__heading">
        <h1 className="header__title">Notifications</h1>
        <p className="header__count">3</p>
      </div>
      <p className="header__toggle">Mark all as read</p>
    </header>
  )
}
export default NotificationHeader
