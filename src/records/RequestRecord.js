import Immutable from 'immutable';
import createImmutableFromJS from 'utils/createImmutableFromJS';

export const RequestObject = {
  description: undefined,
  schema: undefined, //map or list of PropertyRecord
  example: undefined
};

const BaseRecord = Immutable.Record(RequestObject);

export default class RequestRecord extends BaseRecord {
  static createFromJS(json) {
    return createImmutableFromJS(RequestRecord.createFromSeq, json);
  }

  static createFromSeq(seq) {
    return new RequestRecord(seq);
  }
}
