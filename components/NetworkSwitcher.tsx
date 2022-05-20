import { Card, Text } from '@nextui-org/react'
import { useNetwork } from 'wagmi'

export default function NetworkSwitcher() {
  const {
    activeChain,
    chains,
    error,
    isLoading,
    pendingChainId,
    switchNetwork,
  } = useNetwork()

  return (
    <div>
      <div>
        <Card>
          <Text color="secondary" size={14}>{activeChain?.name ?? activeChain?.id}</Text>
        </Card>
        {activeChain?.unsupported && ' (unsupported)'}
      </div>
      <div>{error && error.message}</div>
    </div>
  )
}
