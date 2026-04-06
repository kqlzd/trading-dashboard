import { Box, Text, VStack } from "@chakra-ui/react";

interface IProps {
  tickers: string[];
  prices: any;
  selected: string;
  onSelect: (ticker: string) => void;
}

export const TickerList = ({ tickers, prices, selected, onSelect }: IProps) => {
  return (
    <VStack gap={2} align="stretch" p={4} w="200px">
      <Text fontWeight="bold" fontSize="lg">
        Tickers
      </Text>

      {tickers.map((ticker: any) => (
        <Box
          key={ticker}
          onClick={() => onSelect(ticker)}
          cursor="pointer"
          p={3}
          borderRadius="md"
          bg={selected === ticker ? "blue.300" : "gray.300"}
          color={selected === ticker ? "white" : "black"}
        >
          <Text fontWeight="medium">{ticker}</Text>
          <Text fontSize="sm">${prices[ticker] ?? "..."}</Text>
        </Box>
      ))}
    </VStack>
  );
};
