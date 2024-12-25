import { FC, useState } from 'react'
import { ChakraProvider, Container, VStack, Heading } from '@chakra-ui/react'
import { Counter } from './components/Counter'
import { History } from './components/History'

/**
 * アプリケーションのメインコンポーネント
 * 状態管理と履歴管理を担当
 */
const App: FC = () => {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState<string[]>([])

  /**
   * 履歴を追加する関数
   */
  const addHistory = (message: string) => {
    setHistory(prev => [message, ...prev].slice(0, 10)) // 最新10件まで保持
  }

  const handleIncrement = () => {
    setCount(prev => prev + 1)
    addHistory(`カウントを ${count} から ${count + 1} に増やしました`)
  }

  const handleDecrement = () => {
    setCount(prev => prev - 1)
    addHistory(`カウントを ${count} から ${count - 1} に減らしました`)
  }

  return (
    <ChakraProvider>
      <Container py={8}>
        <VStack spacing={8}>
          <Heading>React基礎学習</Heading>
          <Counter
            count={count}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <History history={history} />
        </VStack>
      </Container>
    </ChakraProvider>
  )
}

export default App