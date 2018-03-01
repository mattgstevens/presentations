// @flow

declare type ThunkAction = (dispatch: (x: Object) => void) => void

declare type EthereumAddressT = string

declare type EthereumBlockHashT = string
declare type EthereumTransactionHashT = string

declare type EthereumWatchErrorT = Object
declare type EthereumWatchEventT<A> = {
  address: EthereumAddressT,
  args: A,
  blockHash: EthereumBlockHashT,
  blockNumber: number,
  event: string,
  logIndex: number,
  transactionHash: EthereumTransactionHashT,
  transactionIndex: number,
  type: 'mined'
}

declare type TokenT = {
  amount: number,
  symbol: string
}

export const tokenAdded = (
  error: EthereumWatchErrorT,
  response: EthereumWatchEventT<TokenT>
): ThunkAction => dispatch => {
  if (error) {
    console.error('tokenAdded :: ', error)
    return
  }
  dispatch({ type: 'TOKEN_ADDED', payload: response.args })
}
