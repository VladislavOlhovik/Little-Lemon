import * as SC from 'styled-components';
import { styles } from '@/theme';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { HashRouter } from 'react-router-dom';

export const withContext = (Component) =>{
    return (props)=>{
        return(
    <SC.ThemeProvider theme={{ styles, theme:'light' }}>
      <Provider store={store}>
        <HashRouter>
          <Component {...props}/>
        </HashRouter>
      </Provider>
    </SC.ThemeProvider> 
    )
    }
}