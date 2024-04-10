const NotificationList = () => {
  return (
    <main className="notification__main">
      <ul className="notification__list">
        <li className="notification__item item item-read">
          <img
            className="item__avatar"
            src="/images/avatar-mark-webber.webp"
            alt="Mark Webber"
          />
          <div className="item__content">
            <div className="item__notification-wrapper">
              <p className="item__notification">
                <span className="item__name">Mark Webber</span> reacted to your
                recent post{' '}
                <span className="item__post">My first tournament today!</span>
              </p>
              <p className="item__time">1m ago</p>
            </div>
          </div>
        </li>
        <li className="notification__item item item-read">
          <img
            className="item__avatar"
            src="/images/avatar-angela-gray.webp"
            alt="Angela Gray"
          />
          <div className="item__content">
            <div className="item__notification-wrapper">
              <p className="item__notification">
                <span className="item__name">Angela Gray</span> followed you
              </p>
              <p className="item__time">5m ago</p>
            </div>
          </div>
        </li>
        <li className="notification__item item item-read">
          <img
            className="item__avatar"
            src="/images/avatar-jacob-thompson.webp"
            alt="Jacob Thompson"
          />
          <div className="item__content">
            <div className="item__notification-wrapper">
              <p className="item__notification">
                <span className="item__name">Jacob Thompson</span> has joined
                your group <span className="item__group">Chess Club</span>
              </p>
              <p className="item__time">1 day ago</p>
            </div>
          </div>
        </li>
        <li className="notification__item item">
          <img
            className="item__avatar"
            src="/images/avatar-rizky-hasanuddin.webp"
            alt="Rizky Hasanuddin"
          />
          <div className="item__content">
            <div className="item__notification-wrapper">
              <p className="item__notification">
                <span className="item__name">Rizky Hasanuddin</span> sent you a
                private message
              </p>
              <p className="item__time">5 days ago</p>
              <p className="item__message">
                Hello, thanks for setting up the Chess Club. I've been a member
                for a few weeks now and I'm already having lots of fun and
                improving my game.
              </p>
            </div>
          </div>
        </li>
        <li className="notification__item item">
          <img
            className="item__avatar"
            src="/images/avatar-kimberly-smith.webp"
            alt="Kimberly Smith"
          />
          <div className="item__content">
            <div className="item__notification-wrapper">
              <p className="item__notification">
                <span className="item__name">Kimberly Smith</span> commented on
                your picture
              </p>
              <p className="item__time">1 week ago</p>
            </div>
            <img
              className="item__picture"
              src="/images/image-chess.webp"
              alt="Chess"
            />
          </div>
        </li>
        <li className="notification__item item">
          <img
            className="item__avatar"
            src="/images/avatar-nathan-peterson.webp"
            alt="Nathan Peterson"
          />
          <div className="item__content">
            <div className="item__notification-wrapper">
              <p className="item__notification">
                <span className="item__name">Nathan Peterson</span> reacted to
                your recent post{' '}
                <span className="item__post">
                  5 end-game strategies to increase your win rate
                </span>
              </p>
              <p className="item__time">2 weeks ago</p>
            </div>
          </div>
        </li>
        <li className="notification__item item">
          <img
            className="item__avatar"
            src="/images/avatar-anna-kim.webp"
            alt="Anna Kim"
          />
          <div className="item__content">
            <div className="item__notification-wrapper">
              <p className="item__notification">
                <span className="item__name">Anna Kim</span> left the group{' '}
                <span className="item__group">Chess Club</span>
              </p>
              <p className="item__time">2 weeks ago</p>
            </div>
          </div>
        </li>
      </ul>
    </main>
  )
}
export default NotificationList
