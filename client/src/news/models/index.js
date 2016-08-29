import editional from './editional';
import image from './image';
import link from './link';
import { timeAgo } from '../../helpers';

export class News {
  constructor(props) {
    this.init(props);
  }

  init(props) {
    this.title = props.title ? props.title.title : '';
    this.location = props.location;
    this.editorial = editional(props.editorial);
    this.images = Array.isArray(props.images)
      ? props.images.map(p => image(p))
      : [];
    this.links = Array.isArray(props.links)
      ? props.images.map(p => link(p))
      : [];
    this.articleDetailsLink = Array.isArray(props.links)
      ? link(props.links[0])
      : {};
    this.createdAt = timeAgo(props.lifecycle.initialPublishDateTime);
  }
}
