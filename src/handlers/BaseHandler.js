import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';

import Page from '../components/Page/Page';
import getDefinition from '../store/definition/actions';
import '../general.scss';

class BaseHandler extends Component {

  componentDidMount() {
    // TODO: refactor this to be more flexible, i.e. coming from multiple places
    const openApiUrl = this.props.location.query.url;
    const parserType = this.props.parserType;
    // Use mock data
    // this.props.getDefinition(openApiUrl, parserType);
  }

  render() {
    // const definition = this.props.parsedDefinition;
    // Mock data
    const definition = {
      title: 'Test API title',
      version: '1.0.0',
      description: 'Definition description',
      navigation: [
        { // could be moved to separate object / state
          title: 'Order',
          methods: [
            {
              title: 'POST /orders',
              link: '#order/post'
            },
            {
              title: 'GET /orders',
              link: '#order/get'
            }
          ]
        },
        {
          title: 'Shipment',
          methods: [
            {
              title: 'POST /shipments',
              link: '#shipment/post'
            },
            {
              title: 'GET /shipments',
              link: '#shipment/get'
            }
          ]
        }
      ],
      services: [
        {
          title: 'Order',
          methods: [
            {
              type: 'POST',
              link: '#order/post',
              summary: 'POST /orders',
              description: 'Method description',
              request: {
                description: 'Request description',
                schema: [
                  {
                    name: 'data',
                    type: 'object',
                    properties: [
                      {
                        name: 'property1',
                        type: 'string',
                        description: 'Property1 description',
                        required: false
                      },
                      {
                        name: 'property2',
                        type: 'string',
                        description: 'Property2 description',
                        required: false
                      },
                      {
                        name: 'property3',
                        type: 'object',
                        description: 'Property3 description',
                        required: true,
                        properties: [
                          {
                            name: 'subproperty',
                            type: 'string',
                            description: 'Subproperty description',
                            required: false
                          }
                        ]
                      }
                    ]
                  },
                  {
                    name: 'data2',
                    type: 'object',
                    properties: [
                      {
                        name: 'subproperty2',
                        type: 'string',
                        description: 'Subproperty2 description',
                        required: false
                      }
                    ]
                  }
                ],
                example: '{some: json}'
              },
              responses: [
                {
                  code: '201',
                  description: 'Response description',
                  schema: [
                    {
                      name: 'property4',
                      type: 'string',
                      description: 'Property4 description',
                      required: false
                    }
                  ],
                  isOk: true
                }
              ]
            },
            {
              type: 'GET',
              summary: 'GET /orders',
              link: '#order/get',
              description: 'Method description',
              parameters: {
                query: [
                  {
                    name: 'offset',
                    description: 'Parameter description',
                    required: false,
                    type: 'number'
                  }
                ]
              }
            }
          ]
        },
        {
          title: 'Shipment',
          methods: [
            {
              type: 'POST',
              link: '#shipment/post',
              summary: 'POST /shipments',
              description: 'Method description',
              request: {
                description: 'Request description',
                schema: [
                  {
                    name: 'property5',
                    type: 'string',
                    description: 'Property5 description',
                    required: false
                  }
                ],
                example: '{some: json}'
              },
              responses: [
                {
                  code: '201',
                  description: 'Response description',
                  schema: [
                    {
                      name: 'property1',
                      type: 'string',
                      description: 'Property1 description',
                      required: false
                    }
                  ],
                  isOk: true
                }
              ]
            },
            {
              type: 'GET',
              link: '#shipment/get',
              summary: 'GET /shipments',
              description: 'Method description',
              parameters: {
                query: [
                  {
                    name: 'limit',
                    description: 'Parameter description',
                    required: false,
                    type: 'number'
                  }
                ]
              }
            }
          ]
        }
      ]
    };
    return (
      <DocumentTitle title="Open API v3 renderer">
        <div className="main">
          {!definition && "Welcome to Temando's new Open API Renderer. Watch this space!"}
          {definition && <Page definition={definition}/>}
        </div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => {
  return {
    parsedDefinition: state.data.parsedDefinition,
    parserType: state.data.parserType
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDefinition
}, dispatch);

BaseHandler.contextTypes = {
  router: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseHandler);
