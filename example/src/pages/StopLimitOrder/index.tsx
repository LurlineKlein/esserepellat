import React from 'react'
import { GelatoStopLimitOrderPanel, GelatoStopLimitOrdersHistoryPanel, GelatoProvider } from '@gelatonetwork/stop-limit-orders-react'
import { useActiveWeb3React } from '../../hooks/web3'
import { useWalletModalToggle } from '../../state/application/hooks'

function Gelato({ children }: { children?: React.ReactNode }) {
  const { library, chainId, account } = useActiveWeb3React()
  const toggleWalletModal = useWalletModalToggle()

  return (
    <GelatoProvider
      library={library}
      chainId={chainId}
      account={account ?? undefined}
      toggleWalletModal={toggleWalletModal}
      useDefaultTheme={false}
    >
      {children}
    </GelatoProvider>
  )
}

export default function StopLimitOrder() {
  return (
    <Gelato>
      <GelatoStopLimitOrderPanel />
      <GelatoStopLimitOrdersHistoryPanel />
    </Gelato>
  )
}
