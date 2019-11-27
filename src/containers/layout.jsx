import MobileHeaderContainer from 'src/containers/header/mobile/mobile_header_container'
import { withRouter } from 'react-router'

export function Layout(props) {
  return (
    <div className="g-layout">
      {props.children}
      <div>12321312</div>
      <MobileHeaderContainer />
    </div>
  )
}

export default withRouter(Layout)
