import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ChannelItem from '../ChannelItem';
import AddChannelModal from '../modals/AddChannelModal';
import { openModal } from '../slices/modal';

const Channels = () => {
  const channels = useSelector((state) => Object.values(state.channelsInfo.channels));
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleShow = () => {
    dispatch(openModal({ type: 'addChannel' }));
    return setShow(true);
  };

  return (
    <div className="col-3 border-right">
      <div className="d-flex mb-2">
        <span>Channels</span>
        <button onClick={() => handleShow(true)} type="button" className="ml-auto p-0 btn btn-link">+</button>
        <AddChannelModal show={show} closeModalWindow={() => setShow(false)} />
      </div>
      <ul className="nav flex-column nav-pills nav-fill">
        {channels
          .map(({ id, name, removable }) => (
            <ChannelItem
              key={id}
              id={id}
              name={name}
              removable={removable}
            />
          ))}
      </ul>
    </div>
  );
};

export default Channels;
