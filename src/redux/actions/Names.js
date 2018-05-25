import storage from '../../storage';

export const SET_NAMES = 'SET_NAMES';
export const SET_NAMES_LOADED = 'SET_NAMES_LOADED';

const _setNames = names => ({
  type: SET_NAMES,
  names,
});

const setNamesLoaded = () => ({
  type: SET_NAMES_LOADED,
});

export const getNames = () => async (dispatch) => {
  const names = await storage.getNames();
  dispatch(setNamesLoaded());
  dispatch(_setNames(names));
};
