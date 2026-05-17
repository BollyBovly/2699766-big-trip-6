import AbstractView from './abstract-view.js';

export default class EventListView extends AbstractView {
  get template() {
    return '<ul class="trip-events__list"></ul>';
  }
}
