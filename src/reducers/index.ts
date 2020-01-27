type Event = {
  id: number;
  title: string;
  body: string;
};

type Action = {
  type: string;
  title: string;
  body: string;
};

const events = (state: Array<Event> = [], action: Action): Array<Event> => {
  switch (action.type) {
    case 'CREATE_EVENT': {
      const numOfStates: number = state.length;
      const id: number = numOfStates === 0 ? 0 : state[numOfStates - 1].id + 1;
      const event: Event = {
        id,
        title: action.title,
        body: action.body,
      };

      return [...state, event];
    }
    case 'DELETE_EVENT': {
      return state;
    }
    case 'DELETE_ALL_EVENTS': {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default events;
