import { TOGGLE_THEME } from './actionTypes';

const initialState = {
    isDarkTheme: false, // начальная тема - светлая
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                isDarkTheme: !state.isDarkTheme, // переключение темы
            };
        default:
            return state;
    }
};

export default themeReducer;