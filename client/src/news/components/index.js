import { connect } from 'react-redux';
import { Cards } from './cards';

function mapStateToProps(state) {
  const { newsReducer: { items, isLoading } } = state;
  return {
    items,
    isLoading
  };
}

export default connect(mapStateToProps)(Cards);
