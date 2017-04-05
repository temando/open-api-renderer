import Immutable from 'immutable';

export default function createImmutableFromJS(fromSeq, json) {
  return Immutable.fromJS(json, function(key, valueSeq) {
    // top level object use the passed fromSeq function
    if (key === '') {
      return fromSeq(valueSeq);
    }
    // other objects become Map or List
    const isIndexed = Immutable.Iterable.isIndexed(valueSeq);
    return isIndexed ? valueSeq.toList() : valueSeq.toMap();
  });
}
