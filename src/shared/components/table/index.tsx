import Table from '@mui/material/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Props {
  gridData: Record<string, any>[];
  options: {
    headers: string[];
    keys: string[];
    uniqueKey?: string;
  };
  onEdit?: (data: Record<string, any>) => void;
  onDelete?: (data: Record<string, any>) => void;
}

function TableCustom({ gridData, options, onEdit, onDelete }: Props) {
  const { headers, keys, uniqueKey = 'id' } = options || {};

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {headers?.map((item) => (
              <TableCell key={item}>{item}</TableCell>
            ))}
            {onEdit && <TableCell> Edit</TableCell>}
            {onDelete && <TableCell> Delete</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {gridData?.map((row) => (
            <TableRow
              key={row[uniqueKey]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {keys?.map((item) => (
                <TableCell key={item}>{row[item]}</TableCell>
              ))}
              {onEdit && (
                <TableCell onClick={() => onEdit?.(row)}>
                  <EditIcon cursor='pointer' />
                </TableCell>
              )}
              {onDelete && (
                <TableCell onClick={() => onDelete?.(row)}>
                  <DeleteIcon cursor='pointer' />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { TableCustom };
