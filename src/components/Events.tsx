import React, { FC } from 'react';
import EventInfo from './EventInfo';
import { Event, EventsProps } from '../types';

const Events: FC<EventsProps> = ({ state, dispatch }) => {
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {state.map((event: Event) => (
            <EventInfo key={event.id} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Events;
