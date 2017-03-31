import Immutable from 'immutable';
import createImmutableFromJS from 'utils/createImmutableFromJS';

export const PropertyObject = {
  name: undefined,
  type: undefined,
  description: undefined,
  required: undefined
};

const BaseRecord = Immutable.Record(PropertyObject);

export default class PropertyRecord extends BaseRecord {
  static createFromJS(json) {
    return createImmutableFromJS(PropertyRecord.createFromSeq, json);
  }

  static createFromSeq(seq) {
    return new PropertyRecord(seq);
  }
}
