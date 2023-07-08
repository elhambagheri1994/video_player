import httpService from '@/shared/services/http-service';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TableCustom } from '@/shared/components/table';
import Grid from '@material-ui/core/Grid';
import { isAuth } from '@/shared/utils/is-auth';
import { CustomButton } from '@/shared/components/button';
import styles from './styles.module.scss';
import { AddAddress } from '../add-address';
import { Navbar } from '../navbar';
import { routes } from '@/shared/constants/routes';

const url = 'public-addresses';
const options = {
  headers: ['Name', 'Address', 'Latitude', 'Longitude'],
  keys: ['name', 'address', 'latitude', 'longitude']
};

function Dashboard() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<GAddress | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    getAddresses();
  }, []);
  const getAddresses = async () => {
    const { data } = await httpService.get(url);
    setData(data);
  };
  const favoriteAddressHandler = () => {
    navigate(routes.FAVORITE_ADDRESS);
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
          <h1>Dashboard</h1>
          <Grid container direction='row' justifyContent='space-between'>
            <CustomButton onClick={handleOpen} label='Cerate Public Address' />
            <AddAddress editData={editData} open={open} url={url} onclose={handleClose} />
            {isAuth() && (
              <CustomButton
                onClick={favoriteAddressHandler}
                label='Show Favorite Address'
              />
            )}
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

export { Dashboard };
