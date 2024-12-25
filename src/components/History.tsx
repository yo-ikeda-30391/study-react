import { FC } from 'react'
import { VStack, Text, Box, Heading } from '@chakra-ui/react'

type HistoryProps = {
  history: string[]
}

/**
 * 履歴表示コンポーネント
 * 操作履歴をリスト形式で表示
 */
export const History: FC<HistoryProps> = ({ history }) => {
  return (
    <VStack spacing={3} p={5} borderWidth="1px" borderRadius="lg" shadow="md" align="stretch">
      <Heading size="md">操作履歴</Heading>
      <Box maxH="200px" overflowY="auto">
        {history.map((action, index) => (
          <Text
            key={index}
            p={2}
            borderRadius="md"
            bg={index === 0 ? 'blue.50' : 'transparent'}
          >
            {action}
          </Text>
        ))}
      </Box>
    </VStack>
  )
}