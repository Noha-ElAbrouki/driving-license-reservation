import SendIcon from '@mui/icons-material/Send';
import ViewIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useAtom } from 'jotai';
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { reservationAtom } from '../espaceUser/userAtom';
import EnhancedTableHead from './Header';
import useStyles from './rdvs.styles';
import Search from './search';
import useSort from './useSort';
import { addDays } from './utils';


function createData(id, name, agrement, date, adresse) {
    return {
        id,
        name,
        agrement,
        date,
        adresse
    };
}


const originalRows = [
    createData(1, 'Auto ecole 1', 305, addDays(1), 'adresse 1'),
    createData(2, 'Buto ecole 2', 452, addDays(2), 'adresse 2'),
    createData(3, 'Euto ecole 3', 262, addDays(3), 'adresse 3'),
    createData(4, 'Duto ecole 4', 159, addDays(4), 'adresse 4'),
    createData(5, 'huto ecole 5', 356, addDays(5), 'adresse 5'),
    createData(6, 'Cuto ecole 6', 408, addDays(6), 'adresse 6'),
    createData(7, 'Zuto ecole 7', 237, addDays(7), 'adresse 7'),
    createData(8, 'Wuto ecole 8', 375, addDays(8), 'adresse 8'),
    createData(9, 'Puto ecole 9', 518, addDays(9), 'adresse 9'),
    createData(10, 'Uuto ecole 12', 392, addDays(10), 'adresse 10'),
    createData(11, 'Yuto ecole 11', 318, addDays(11), 'adresse 11'),
    createData(12, 'Guto ecole 13', 360, addDays(12), 'adresse 12'),
    createData(13, 'Xuto ecole 14', 437, addDays(13), 'adresse 13'),
];


export default function Rdvs() {
    const classes = useStyles()
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');
    const [isNumeric, setIsNumeric] = React.useState()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [data, setData] = React.useState()
    const [searched, setSearched] = React.useState()
    const [reservation,] = useAtom(reservationAtom)
    const navigate = useNavigate();
    const rows = originalRows.filter((item) => item.id !== reservation?.id)



    const rowsData = useSort({ order, isFieldNumeric: isNumeric, field: orderBy, data: rows }).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage)



    const handleRequestSort = (property, isNumeric) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        setIsNumeric(isNumeric)
    };


    const handleView = (row) => {
        navigate(`/details/${row.id}`, { state: row })

    };

    const handleReserve = (row) => {
        navigate(`/reservation/${row.id}`, { state: row })
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const requestSearch = (searchedVal) => {
        if (!searchedVal) {
            setData(rowsData)
            return
        }
        const filteredRows = rows.filter((row) => {
            return row.name.toLowerCase().includes(searchedVal?.toLowerCase());
        });
        setData(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        setData(rowsData)
    };


    React.useEffect(() => {
        setData(rowsData)
    }, [order, isNumeric, orderBy, page, rowsPerPage])


    return (
        <>
            <Box sx={{ width: '100%' }}>
                <div className={classes.search}>
                    <Search onCancel={cancelSearch} onChange={requestSearch} value={searched} />
                </div>
                <Paper className={classes.body}>
                    <TableContainer>
                        <Table
                            className={classes.table}
                            aria-labelledby="tableTitle"
                            size={'small'}
                        >
                            <EnhancedTableHead
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                            />
                            <TableBody>
                                {data?.map((row, index) => {
                                    const labelId = `enhanced-table-${index}`;
                                    return (
                                        <TableRow
                                            hover
                                            tabIndex={-1}
                                            key={row.name}
                                        >
                                            <TableCell component="th" id={labelId} scope="row" align='left'>
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="left">{row.date}</TableCell>
                                            <TableCell align="left">{row.adresse}</TableCell>
                                            <TableCell align="right">{row.agrement}</TableCell>
                                            <TableCell align="left">
                                                <IconButton aria-label="view" onClick={() => handleView(row)}
                                                >
                                                    <ViewIcon />
                                                </IconButton>
                                                <IconButton aria-label="reserve" onClick={() => handleReserve(row)}
                                                >
                                                    <SendIcon />
                                                </IconButton>
                                            </TableCell>

                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Box>
        </>
    );
}
