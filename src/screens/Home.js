import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Welcome, DeckList } from '../components';
import { colors, constants } from '../utils';
import { getDecks, getNames } from '../redux/actions';
import { HeaderButton, Text } from '../styles';

class Home extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: (
      <Text color={colors.purple} size={20} bold>
        Flash Cards
      </Text>
    ),
    headerRight: (
      <HeaderButton right onPress={() => navigation.navigate(constants.DECK_ADD)}>
        <Text color={colors.black} size={18} bold>
          Create
        </Text>
      </HeaderButton>
    ),
  });

  async componentDidMount() {
    const { isDecksLoaded, getDecks, isNamesLoaded, getNames } = this.props;

    if (!isDecksLoaded) {
      await getDecks();
    }

    if (!isNamesLoaded) {
      await getNames();
    }
  }

  render() {
    const { isDecksLoaded, decks, isNamesLoaded } = this.props;

    if (!isDecksLoaded && !isNamesLoaded) {
      return null;
    }

    return decks.length ? <DeckList /> : <Welcome />;
  }
}

const mapStateToProps = ({ names, decks }) => ({
  decks: decks.list,
  isDecksLoaded: decks.loaded,
  names: names.list,
  isNamesLoaded: names.loaded,
});

const mapDispatchToProps = dispatch => ({
  getDecks: () => dispatch(getDecks()),
  getNames: () => dispatch(getNames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
