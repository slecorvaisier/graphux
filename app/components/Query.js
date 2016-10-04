import React, { PropTypes } from 'react'
import { connect }          from 'react-redux';
import { getGraph }         from '../actions/actions';

class Query extends React.Component {

  componentDidMount() {
    this.props.getGraph("{goldberg(id: 2) {id, character, actor}}");
  }

  render () {
    let queryText;
    let fetchInProgress = String(this.props.store.get('fetching'));
    let goldberg        = this.props.store.get('data').toObject();

    return (
      <div>
        <p>Fetch in progress: {fetchInProgress}</p>
        <h3>{ goldberg.character }</h3>
        <p>{ goldberg.actor }</p>
        <p>{ goldberg.role }</p>
        <p>{ goldberg.traits }</p>
        <textarea ref={node => {queryText = node}} style={{height: '186px', width: '329px'}} />
        <button
          onClick={() => this.props.getGraph(queryText.value)}
        >query</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  store: state,
});

export default connect(
  mapStateToProps,
  { getGraph }
)(Query);
