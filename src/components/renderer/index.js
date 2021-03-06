import { connect } from 'react-redux';
import Renderer from './renderer';

function mapStateToProps (state, ownProps) {
  return {
    vegaSpec: state.app.vegaSpec,
    renderer: state.app.renderer,
    mode: state.app.mode
  };
}

export default connect(mapStateToProps)(Renderer);
