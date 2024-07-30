import {  makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  search: {
    display: 'flex',
    justifyContent: 'end'
  },
  body: {
    width: '80%',
    mb: 2
  },
  table: {
    minWidth: 750
  },
  containerDetails: {
    flexGrow: 1,
    backgroundColor: '#fff'
  },
  list: {
    width: '100%',
    bgcolor: 'background.paper'
  },
  emptyMessage: {
    display: 'flex',
    justifyContent: 'center'
  },
  actions: {
    display: 'flex',
    justifyContent: 'end',
    marginTop: 10
  },
  drawerLeft: {
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      backgroundColor: '#f5f5f5',
      width: 240,
      boxSizing: 'border-box'
    }
  },
  searchBar: {
    width: 200,
    marginBottom: 10
  },
  disablePading: {
    padding: 0
  }
});
export default useStyles;
