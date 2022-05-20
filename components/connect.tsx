import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Grid, Button, Text, Spacer, Card } from "@nextui-org/react";
import { useIsMounted } from '../hooks'
import NetworkSwitcher from './NetworkSwitcher'

export default function Connect() {
    const isMounted = useIsMounted()
    const { data } = useAccount()
    const {
      activeConnector,
      connect,
      connectors,
      error,
      isConnecting,
      pendingConnector,
    } = useConnect()
    const { disconnect } = useDisconnect()
  
    return (
      <div>
        <div>
          {activeConnector && (
            <Grid.Container gap={2}>
                <Grid>
                    {isMounted && data && (<NetworkSwitcher />)} 
                </Grid>
                <Grid>
                    <Card>
                        <Text color="warning" size={14}>{data.address}</Text>  
                    </Card> 
                </Grid>     
                <Grid>
                    <Button auto onPress={() => disconnect()}>
                        Disconnect
                    </Button>
                </Grid>     
            </Grid.Container>
          )}
  
          {connectors
            .filter((x) => isMounted && x.ready && x.id !== activeConnector?.id)
            .map((x) => (
              <Button key={x.id} onPress={() => connect(x)}>
                Connect Wallet
                {isConnecting && x.id === pendingConnector?.id && ' (connecting)'}
              </Button>
            ))}
        </div>
  
        {error && <div>{error.message}</div>}
      </div>
    )
  }