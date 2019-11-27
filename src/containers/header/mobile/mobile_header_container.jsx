import { withRouter } from 'react-router'
import './index.scss'

function MobileHeaderContainer(props) {
  const navList = [
    {
      router: '/index', //跳转url
      activeUrl: ['/', '/home'], //高亮url
      text: '首页'
    },
    {
      router: '/activities_manage',
      activeUrl: ['/data_form'],
      text: '33'
    },
    {
      router: '/data_form',
      activeUrl: ['/data_form'],
      text: '44'
    }
  ]

  const handleClick = href => () => props.router.replace(href)

  // const getIcons = (path, active) => {
  //   return require(`./images${path}${active ? '_select' : ''}.svg`)
  // }

  const { location, showHeader } = props
  return (
    <div className={`header-nav-bar ${showHeader ? '' : 'hidden'}`}>
      {_.map(navList, ({ activeUrl, router, text }, k) => {
        const selected = _.includes(activeUrl, location.pathname)
        return (
          <span
            className={`nav-link ${selected ? 'selected' : ''}`}
            onClick={handleClick(router)}
            key={k}
          >
            <div className="icon">
              {/* <img src={getIcons(router, selected)} alt="imgs" /> */}
            </div>
            {text}
          </span>
        )
      })}
    </div>
  )
}

export default withRouter(MobileHeaderContainer)
