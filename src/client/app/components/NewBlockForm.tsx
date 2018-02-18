import React from 'react';
import styled from 'styled-components';
import * as utm from 'utm';
import encodeUTM from 'shared/encodeUTM';
import BigNumber from 'bignumber.js';
import abi from 'server/lib/ethereum/abi';
import Web3 from 'web3';
import settings from 'settings';

//const provider = new Web3.providers.HttpProvider(settings.ETHEREUM_NODE_URL);
const web3 = new Web3((window as any).web3.currentProvider);
const contract = new web3.eth.Contract(abi, '0x182A520E304C496fd9F22aeEE003660C92C3E9b9');

interface Props {
  latlngkey
}

interface state {}

export default class NewBlockForm extends React.Component<any, any> {
  state = {
    message: '',
    txHash: ''
  }

  render() {
    const { latlngkey } = this.props
    const { message, txHash } = this.state

    return (
      <Container>
        <Form onSubmit={event => this.handleSubmit(event)}>
          <Input type="text" placeholder="message" value={message} onChange={event => this.handleMessage(event)} />
          <Button type="submit">Submit</Button>
        </Form>
        <TxHash>
        {txHash}
        </TxHash>
      </Container>
    )
  }

  handleMessage(event) {
    this.setState({
      message: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.sendTx()
  }

  async sendTx() {
    const { latlngkey } = this.props
    const { message } = this.state
    try {
      const tx = await contract.methods.claimPlotMultipleWithData([latlngkey], '0', message, '', '', '').send({
        value: web3.utils.toWei('0.015', 'ether'),
        from: (await web3.eth.getAccounts())[0]
      })
      this.setState({
        txHash: tx.transactionHash
      })
    } catch (err) {
      console.error(err)
    }

  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
`

const Form = styled.form`
  display: block;
  margin-top: 20px;
`

const TxHash = styled.div`
  display: inline-block;
  padding: 10px;
  color: #fff;
`

const Input = styled.input`
  display: inline-block;
  border: 0;
  padding: 10px;
  background: #00000073;
  color: #fff;
  font-size: 16px;
  width: 200px;
`

const Button = styled.button`
  display: inline-block;
  -webkit-appearance: none;
  border: 0;
  padding: 10px;
  font-size: 16px;
  background: #000000a1;
  color: #ffffff54;
`
