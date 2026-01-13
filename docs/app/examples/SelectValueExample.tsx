import { Select, Text, Row } from '@/components';

const items = ['One', 'Two', 'Three', 'Four', 'Five'];

export function SelectValueExample() {
  const renderValue = ({ defaultChildren, isPlaceholder }: any) => {
    return isPlaceholder ? (
      <Text>Choose wisely</Text>
    ) : (
      <Row gap>
        <Text>You selected:</Text>
        <Text weight="bold">{defaultChildren}</Text>
      </Row>
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
