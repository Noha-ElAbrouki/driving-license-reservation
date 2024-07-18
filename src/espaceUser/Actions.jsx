import Button from '@mui/material/Button';
import useStyles from "../rdvs/rdvs.styles"

const Actions = ({ onDelete, onUpdate }) => {
    const classes = useStyles()
    return (
        <div className={classes.actions}>
            <Button variant='contained' onClick={onUpdate} sx={{ marginRight: 1 }}>Edit</Button>
            <Button variant="contained" onClick={onDelete}>Delete</Button>
        </div>
    )
}
export default Actions