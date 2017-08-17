import React, { Component } from 'react';
import theme from './Theme';
import { Provider, Heading, Text } from 'rebass';
import { Card } from './UI';

class App extends Component {

  render() {
    return (
      <Provider theme={theme}>
        <Card bg={theme.colors.pink} my={4} w={320} mx={'auto'} color='white' p={4}>
          <Heading pb={2}>Custom Card</Heading>
          <Text pb={3}>This card is just like the Card component in Rebass, but without a box shadow option.</Text>
          <Text pb={3}>This excellent font choice comes from a custom Theme that extends the default Rebass theme.</Text>
        </Card>
      </Provider>
    );
  }
}

export default App;
