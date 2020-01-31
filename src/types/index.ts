export type Event = {
  id: number;
  title?: string;
  body?: string;
};

export type Action = {
  type: string;
  title?: string;
  body?: string;
  id?: number;
};

export type EventsProps = {
  state: Event[];
  dispatch: React.Dispatch<Action>;
};
