import httpService from '@/shared/services/http-service';
import { useEffect, useState } from 'react';
import { TableCustom } from '@/shared/components/table';
import Grid from '@material-ui/core/Grid';
import styles from './styles.module.scss';
import { Navbar } from '../navbar';
import { AddAddress } from '../add-address';
import { CustomButton } from '@/shared/components/button';

const options = {
  headers: ['Name', 'Address', 'Latitude', 'Longitude'],
  keys: ['name', 'address', 'latitude', 'longitude']
};
const url = 'favorite-addresses';

function FavoriteAddress() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<GAddress | null>(null);

  useEffect(() => {
    getAddresses();
  }, []);
  const getAddresses = () => {
    httpService.get(url).then((response) => {
      setData(response.data);
    });
  };
  const handleClose = () => {
    getAddresses();
    setEditData(null);
    setOpen(false);
  };
  const handleOpen = () => setOpen(true);
  const editHandler = (data: GAddress) => {
    setEditData(data);
    handleOpen();
  };
  const deleteHandler = async (data: GAddress) => {
    await httpService.delete(`${url}/${data?.id}`);
    getAddresses();
  };
  return (
    <>
      <Navbar />
      <Grid container alignItems='center' direction='column' spacing={2}>
        <div className={styles.GridContainer}>
          <h1>Favorite Address</h1>
          <Grid container direction='row' justifyContent='space-between'>
            <CustomButton onClick={handleOpen} label='Cerate Favorite Address' />
            <AddAddress editData={editData} open={open} url={url} onclose={handleClose} />
          </Grid>
          <TableCustom
            onDelete={deleteHandler}
            onEdit={editHandler}
            gridData={data}
            options={options}
          />
        </div>
      </Grid>
    </>
  );
}

export { FavoriteAddress };
