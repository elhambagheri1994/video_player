import { DynamicForm } from '@/shared/components/dynamic-form';
import CustomModal from '@/shared/components/modal';
import httpService from '@/shared/services/http-service';

const fields = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    validations: [
      {
        type: 'required',
        params: ['Name is Required']
      }
    ]
  },
  {
    id: 'address',
    label: 'Address',
    type: 'text',
    validations: [
      {
        type: 'required',
        params: ['Address is Required']
      }
    ]
  },
  {
    id: 'latitude',
    label: 'Latitude',
    type: 'text'
  },
  {
    id: 'longitude',
    label: 'Longitude',
    type: 'text'
  }
];

interface Props {
  url: string;
  onclose: () => void;
  open?: boolean;
  editData?: GAddress | null;
}

function AddAddress({ url, onclose, open, editData }: Props) {
  async function handleSubmit<GAddress>(values: GAddress) {
    if (!editData) {
      await httpService.post(url, values);
    } else {
      await httpService.put(`${url}/${editData.id}`, values);
    }
    onclose();
  }
  return (
    <CustomModal title='Add Address' open={open} handleClose={onclose}>
      <DynamicForm
        values={editData}
        fields={fields}
        buttonText={editData ? 'Edit' : 'Create'}
        submit={handleSubmit}
      />
    </CustomModal>
  );
}

export { AddAddress };
