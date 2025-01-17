import Button from '@/components/Button';
import Input from '@/components/Input';
import { ErrorMessage } from '@/components/Input/styles';
import Label from '@/components/Label';

interface IAddressInputProps {
  value: string;
  onChange: (value: string) => void;
  isInvalid: boolean;
}

export default function AddressInput({
  value,
  onChange,
  isInvalid,
}: IAddressInputProps) {
  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const clearValue = () => {
    onChange('');
  };

  return (
    <Label htmlFor="targetAddress">
      Target wallet
      <div>
        <Input
          id="targetAddress"
          name="targetAddress"
          type="text"
          value={value}
          onChange={handleChangeAddress}
          aria-invalid={isInvalid}
          aria-errormessage="targetAddress_error"
          data-error={isInvalid}
        />
        <Button onClick={clearValue}>Clear</Button>
      </div>
      {isInvalid && (
        <ErrorMessage id="targetAddress_error" role="alert">
          Invalid addreess
        </ErrorMessage>
      )}
    </Label>
  );
}
