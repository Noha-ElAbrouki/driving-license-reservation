import SearchBar from 'material-ui-search-bar';
import useStyles from '../rdvs.styles';

const Search = ({ value, onCancel, onChange }) => {
  const { classes } = useStyles();

  return (
    <SearchBar
      value={value}
      onChange={onChange}
      onCancelSearch={onCancel}
      // style={{ width: 200 }}
      className={classes.searchBar}
    />
  );
};

export default Search;
