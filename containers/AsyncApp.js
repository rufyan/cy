import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchData } from '../actions/actions'

class AsyncApp extends Component {
	constructor(props) {
		super(props)
		//this.handleChange = this.handleChange.bind(this)
		//this.handleRefreshClick = this.handleRefreshClick.bind(this)
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(fetchData())
	}

	handleRefreshClick(e) {
		e.preventDefault()

		const { dispatch } = this.props
		dispatch(fetchData())
	}

	render() {
		const { data, isFetching } = this.props
		return (
			<div>hi</div>
		)
	}
}
AsyncApp.propTypes = {
	items: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	lastUpdated: PropTypes.number,
	dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { data } = state
  const { isFetching, lastUpdated, items: data } = data || {
    isFetching: true,
    items: []
  }

  return {
    data,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(AsyncApp)