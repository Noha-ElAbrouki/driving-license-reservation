import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import * as React from 'react';

const headCells = [
  {
    id: 'name',
    numeric: false,
    label: 'Raison sociale',
  },
  {
    id: 'date',
    numeric: false,
    label: 'date',
  },
  {
    id: 'adresse',
    numeric: false,
    label: 'adresse',
  },
  {
    id: 'agrement',
    numeric: true,
    label: "numero d'agrément",
  },
  {
    id: 'actions',
    numeric: false,
    label: 'Actions',
  },
];

const EnhancedTableHead = (props) => {
  const { order, orderBy, onRequestSort } = props;

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={() => onRequestSort(headCell.id, headCell.numeric)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
