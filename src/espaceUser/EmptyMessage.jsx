import { Link } from 'react-router-dom';
import useStyles from '../rdvs/rdvs.styles';

const EmptyMessage = () => {
  const classes = useStyles();
  return (
    <h4 className={classes.emptyMsg}>
      Pas de reservations <Link to="/rdvs"> cliquer ici </Link> pour reserver!
    </h4>
  );
};
export default EmptyMessage;
