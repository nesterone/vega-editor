import { connect } from 'react-redux';
import Renderer from './renderer';

function mapStateToProps (state, ownProps) {
  return {
    vegaSpec: state.app.vegaSpec,
    renderer: state.app.renderer,
    errorPane: state.app.errorPane,
    warningsLogger: state.app.warningsLogger,
    error: state.app.error
  };
}

export default connect(mapStateToProps)(Renderer);
