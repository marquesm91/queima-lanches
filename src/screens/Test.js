import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DismissKeyboardView } from '../components';
import { colors, constants } from '../utils';
import { createDeck, selectDeck, resetInputs } from '../redux/actions';
import { Text } from '../styles';

class Test extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: (
      <Text color={colors.purple} size={20} bold>
        Test
      </Text>
    ),
  });

  componentDidMount() {
    console.log('mount');
  }

  render() {
    return (
      <DismissKeyboardView centered>
        <Text>App</Text>
      </DismissKeyboardView>
    );
  }
}

const mapStateToProps = ({ inputs }) => ({
})

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
