import React from 'react';
import NavigateBar from '../../components/NavigateBar/NavigateBar';

function UserId() {
  return (
    <div>
      <NavigateBar />

      <form>
        <input
        type="text"
        />
        <input
        type="password"
        />
        <input
        type="password"
        />
        <input
        type="text"
        />
        <input
        type="text"
        />
      </form>
    </div>
  );
}

export default UserId;
