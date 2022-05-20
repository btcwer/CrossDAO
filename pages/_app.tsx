import * as React from 'react'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'

import {
  WagmiProvider,
  createClient,
  chain,
} from 'wagmi'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID

const mmConnector = new MetaMaskConnector({
  chains: [chain.mainnet, chain.rinkeby],
})

const client = createClient()

function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider client={client}>
      <NextHead>
        <title>CrossDAO</title>
      </NextHead>

      <Component {...pageProps} />
    </WagmiProvider>
  )
}

export default App
