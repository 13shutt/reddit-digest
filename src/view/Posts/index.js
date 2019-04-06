import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Posts from './Posts'

export default withRouter(connect()(Posts))