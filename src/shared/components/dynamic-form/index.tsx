import { Formik } from 'formik';
import { string, object } from 'yup';
import { CustomButton } from '../button';
import { Input } from '../Input';
import styles from './styles.module.scss';

interface Validation {
  type: string;
  params: string[];
}
interface Field {
  id: string;
  classes?: string;
  label: string;
  type: string;
  value?: unknown;
  validations?: Validation[];
}
interface Props {
  fields: Field[];
  buttonText: string;
  submit: <T>(values: T) => void;
  values?: any;
}

const DynamicForm = ({ fields, buttonText, submit, values }: Props) => {
  const renderFormElements = (props: any) =>
    fields.map((item: Field) => {
      const error = Object.prototype.hasOwnProperty.call(props.errors, item.id)
        ? props.errors[item.id]
        : '';

      return (
        <Input
          key={item.id}
          label={item.label}
          name={item.id}
          type={item.type}
          classes={item.classes}
          value={props.values[item.id] || ''}
          onChange={(name: string, val: unknown) => props.setFieldValue(name, val)}
          error={props.touched[item.id] ? error : ''}
        />
      );
    });

  function createYupSchema(schema: any, config: Field) {
    const { id, validations = [] } = config;
    let validator: any = string();
    validations.forEach((validation: Validation) => {
      const { params, type } = validation;
      if (!validator[type]) {
        return;
      }
      validator = validator[type](params).nullable();
    });
    schema[id] = validator;
    return schema;
  }
  const yepSchema = fields.reduce(createYupSchema, {});
  const validations = object().shape(yepSchema);
  return (
    <Formik validationSchema={validations} initialValues={values || {}} onSubmit={submit}>
      {(props: any) => (
        <form onSubmit={props.handleSubmit}>
          <div className={styles.formContainer}>
            {renderFormElements(props)}
            <CustomButton classes={styles.formButton} label={buttonText} />
          </div>
        </form>
      )}
    </Formik>
  );
};

export { DynamicForm };
