// import { EventEmitter } from 'events'
// export const eventBus = new EventEmitter()
import mitt from "mitt";

type Events = {
  openModal: void;
};

export const eventBus = mitt<Events>();
