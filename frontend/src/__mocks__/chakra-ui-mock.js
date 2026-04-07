const React = require("react");

const make = (tag) => {
  const C = ({ children, ...rest }) =>
    React.createElement(tag, rest, children);
  return C;
};

module.exports = {
  Box: make("div"),
  Text: make("span"),
  Flex: make("div"),
  VStack: make("div"),
  ChakraProvider: make("div"),
  defaultSystem: {},
};
