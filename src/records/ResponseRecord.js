import Immutable from 'immutable';
import createImmutableFromJS from 'utils/createImmutableFromJS';

export const ResponseObject = {
  code: undefined,
  description: undefined,
  schema: undefined, //map or list of PropertyRecord
  isOk: undefined
};

const BaseRecord = Immutable.Record(ResponseObject);

export default class ResponseRecord extends BaseRecord {
  static createFromJS(json) {
    return createImmutableFromJS(ResponseRecord.createFromSeq, json);
  }

  static createFromSeq(seq) {
    return new ResponseRecord(seq);
  }
}
