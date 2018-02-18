import React from 'react';
import fetchBlocksByOwner from 'shared/ethereum/fetchBlocksByOwner';
import get from 'lodash/get';

export default class ManageBlockScreen extends React.Component {

  componentDidMount() {
    const address = get((window as any), 'metamaskProvider.publicConfigStore._state.selectedAddress', null);
    console.log(address);

    fetchBlocksByOwner(address).then(console.log);

  }

  render() {
    return (
      <div>
        add
      </div>
    )
  }
}
