import { Component } from 'react'
import './index.scss'
import Helmet from 'src/lib/pagehelmet.js'

class DataForm extends Component {
  render() {
    console.log(2)
    return (
      <div className="data-form—container">
        <Helmet title="data" link="/data_form" />
        data form
      </div>
    )
  }
}

export default DataForm
