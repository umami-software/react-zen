import { Select, Text } from '@/components';

const items = ['One', 'Two', 'Three', 'Four', 'Five'];

export function SelectValueExample() {
  const renderValue = ({ defaultChildren, isPlaceholder }: any) => {
    return isPlaceholder ? (
      <Text>Choose wisely</Text>
    ) : (
      <Text weight="bold">{defaultChildren}</Text>
    );
  };

  return (
    <Select
      items={items}
      label="Select"
      placeholder="Please select an option"
      renderValue={renderValue}
    />
  );
}
