import { Box, Text } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const PriceChart = ({ ticker, data }: any) => {
  const formatted = data.map((d: any) => ({
    time: new Date(d.time).toLocaleTimeString(),
    price: d.price,
  }));

  return (
    <Box flex={1} p={4}>
      <Text fontWeight="bold" fontSize="lg" mb={4}>
        {ticker}
      </Text>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={formatted}>
          <XAxis dataKey="time" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#1890ff" dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};
