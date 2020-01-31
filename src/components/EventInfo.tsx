import React, { FC, Dispatch } from 'react';
import { Event, Action } from '../types';
import { DELETE_EVENT } from '../actions';

const EventInfo: FC<{ event: Event; dispatch: Dispatch<Action> }> = ({
  event,
  dispatch,
}) => {
  const deleteHandleClick = () => {
    // eslint-disable-next-line no-alert
    const result = window.confirm(
      `イベントid:${event.id}を本当に削除しても良いですか？`
    );
    if (result) dispatch({ id: event.id, type: DELETE_EVENT });
  };

  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={deleteHandleClick}
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default EventInfo;
