import React, { FC, useState, Dispatch, MouseEvent } from 'react';
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions';
import { Action } from '../types';

const EventForm: FC<{ dispatch: Dispatch<Action> }> = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (e: MouseEvent): void => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });
    setTitle('');
    setBody('');
  };

  const deleteAllEvent = (e: MouseEvent): void => {
    e.preventDefault();
    dispatch({
      type: DELETE_ALL_EVENTS,
    });
  };

  return (
    <div className="Container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            type="text"
            id="formEventTitle"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">内容</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={addEvent}>
          イベントを作成する
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={deleteAllEvent}
        >
          すべてのイベントを削除する
        </button>
      </form>
    </div>
  );
};

export default EventForm;
