import { Input, Button } from 'src/shared/ui';
import {
  ISignInFormData,
  ISignUpFormData,
  // ISignInFormData,
  // ISignUpFormData,
  TAuthFormField,
  TAuthFormType,
} from '../model/AuthForm.types';
import { useAuthForm } from '../model/useAuthForm.hook';

import './AuthForm.styles.scss';

interface IProps {
  formType: TAuthFormType;
  fields: TAuthFormField[];
  initialFormState: ISignInFormData | ISignUpFormData;
}

export const AuthForm = ({ formType, fields, initialFormState }: IProps) => {
  const { loading, handleSubmit, handleChange } = useAuthForm(
    formType,
    initialFormState,
  );

  return (
    <div className="form-container">
      <form
        name={formType}
        className="form-component"
        onSubmit={(e) => e.preventDefault()}
      >
        {fields.map(({ name, type, placeholder }, index) => (
          <div
            key={index + name}
            className={'form-component__input' + ` _${formType}`}
          >
            <Input
              name={name}
              type={type}
              placeholder={placeholder}
              onChange={(e) => handleChange(name, e.target.value)}
            />
          </div>
        ))}
        <div className="form-component__button">
          <Button loading={loading} onClick={handleSubmit}>
            {formType === 'signin' ? 'Войти' : 'Создать аккаунт'}
          </Button>
        </div>
      </form>
    </div>
  );
};
