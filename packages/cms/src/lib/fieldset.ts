export const bindFieldsToFieldset = (fieldsetName: string, fields: any) =>
    fields.map((field: any) => {
        field.fieldset = fieldsetName;
        return field;
    });
