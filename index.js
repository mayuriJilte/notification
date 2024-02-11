const Notification = props => {
  //  Write your code here.
  const {name, className, image} = props
  return (
    <div className={className}>
      <img src={image} className='img' />
      <p class="notification-name">{name}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div class='container'>
    <h1 className='main-heading'>Notifications</h1>
    <Notification
      name='Information Message'
      className='box information'
      image='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
    />
    <Notification
      name='Success Message'
      className='box success'
      image='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
    />
    <Notification
      name='Warning Message'
      className='box warning'
      image='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
    />
    <Notification
      name='Error Message'
      className='box error'
      image='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
    />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
