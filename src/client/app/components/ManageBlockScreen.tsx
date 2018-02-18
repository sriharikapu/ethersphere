import React from 'react';
import fetchBlocksByOwner from 'shared/ethereum/fetchBlocksByOwner';
import get from 'lodash/get';

export default class ManageBlockScreen extends React.Component {

  componentDidMount() {
    try {
      this.fetchData()
    } catch (error) {
      console.error(error)
    }
  }

  async fetchData() {
    const address = get((window as any), 'metamaskProvider.publicConfigStore._state.selectedAddress', null);
    console.log(address);

    const blocks = await fetchBlocksByOwner(address)
  }

  render() {
    return (
      <div>
        add
      </div>
    )
  }
}
