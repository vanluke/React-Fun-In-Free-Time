import React, { PureComponent, PropTypes } from 'react';
import { remoteFetchNews } from '../actions';
import Card from './card';

export class Cards extends PureComponent {
  constructor(props) {
    super(...props);
  }

  async componentWillMount() {
    const { dispatch } = this.props;
    dispatch(await remoteFetchNews());
  }

  createCards(news = []) {
    return news.map((props, index) => {
      return (<Card
        key={index}
        {...props}
      />);
    });
  }

  render() {
    const { items } = this.props;
    return (<div>{this.createCards(items)}</div>);
  }

  static propsTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }
}
