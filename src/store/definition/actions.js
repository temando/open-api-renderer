import Immutable from 'immutable';

import RequestRecord from 'records/RequestRecord';
import PropertyRecord from 'records/PropertyRecord';
import ResponseRecord from 'records/ResponseRecord';

const definition = new Immutable.Map({
  title: "Test title",
  version: "1.0.0",
  description: "Definition description",
  navigation: new Immutable.Map({ // could be moved to separate object / state
    order: new Immutable.Map({
      title: "Order",
      methods: new Immutable.Map({
        get: new Immutable.Map({
          title: "Method summary",
          link: "#order/get"
        })
      })
    })
  }),
  services: new Immutable.Map({
    order: new Immutable.Map({
      title: "Order",
      methods: new Immutable.Map({
        get: new Immutable.Map({
          type: "GET",
          summary: "Method summary",
          description: "Method description",
          request: RequestRecord.createFromJS({
            description: "Request description",
            schema: new Immutable.Map({
              property1: PropertyRecord.createFromJS({
                name: "property1",
                type: "string",
                description: "Property1 description",
                required: false
              })
            })
          }),
          responses: new Immutable.Map({
            201: ResponseRecord.createFromJS({
              code: "201",
              description: "Response description",
              schema: new Immutable.Map({
                property1: PropertyRecord.createFromJS({
                  name: "property1",
                  type: "string",
                  description: "Property1 description",
                  required: false
                })
              }),
              isOk: true
            })
          })
        })
      })
    })
  })
});

export default function getDefinition() {
  return {
    type: 'GET_DEFINITION',
    payload: definition
  };
}