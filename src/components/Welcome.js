import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Input, DismissKeyboardView } from '../components';
import { colors, constants } from '../utils';
import { Button, Text, Container, Dot, ScrollViewContainer, Name } from '../styles';

class Welcome extends Component {
  state = {
    selected: null,
  }

  render() {
    const { navigation, listNames, hasQuery } = this.props;
    
    return (
      <ScrollViewContainer keyboardShouldPersistTaps='always' keyboardDismissMode='on-drag'>
        <Input name={constants.QUERY_NAME} placeholder="Quem é você?" />
        <Text>{JSON.stringify({ a: this.state.selected })}</Text>
        {hasQuery && listNames.map((name, index) => (
          <Name key={index} onPress={() => this.setState({ selected: name })}>
            <Text size={16} color={colors.white} bold>{name}</Text>
          </Name>
        ))}
      </ScrollViewContainer>
    );
  }
}


const mapStateToProps = ({ decks, inputs, names }) => {
  const query = inputs[constants.QUERY_NAME] ? inputs[constants.QUERY_NAME] : '';
  const regex = new RegExp(`${query}`, 'i');
  const listNames = names.list.filter(name => regex.test(name));
  return {
    listNames,
    hasQuery: query.length,
  }
};

export default withNavigation(connect(mapStateToProps)(Welcome));
