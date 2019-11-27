import { useHistory, useLocation } from 'react-router-dom'
import './index.scss'

export default function MobileHeaderContainer(props) {
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

  const history = useHistory()
  const location = useLocation()

  const handleClick = href => () => history.replace(href)

  // const getIcons = (path, active) => {
  //   return require(`./images${path}${active ? '_select' : ''}.svg`)
  // }

  const { showHeader } = props
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
