import { FC } from 'react'
import { VStack, Text, IconButton, HStack, Heading } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

export type CounterProps = {
  count: number
  onIncrement: () => void
  onDecrement: () => void
}

/**
 * カウンターコンポーネント
 */
export const Counter: FC<CounterProps> = ({ count, onIncrement, onDecrement }) => {
  return (
    <VStack spacing={4} p={5} borderWidth="1px" borderRadius="lg" shadow="md">
      <Heading size="md">カウンター</Heading>
      <Text fontSize="2xl" fontWeight="bold">{count}</Text>
      <HStack>
        <IconButton
          aria-label="減らす"
          icon={<MinusIcon />}
          onClick={onDecrement}
          colorScheme="red"
        />
        <IconButton
          aria-label="増やす"
          icon={<AddIcon />}
          onClick={onIncrement}
          colorScheme="blue"
        />
      </HStack>
    </VStack>
  )
}