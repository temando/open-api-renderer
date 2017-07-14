/**
 * Return the permalink for the given `path` and `methodType`. Note this is
 * not the link to the actual path, but it's a unique identifier to help
 * with deeplinking from UI applications.
 *
 * @todo Look at supporting `operationId` which does this purpose.
 * @param {string} path
 * @param {string} methodType
 */
function getPermalink (path, methodType) {
  return `${path}/${methodType}`
}

/**
 * Given the `path`, `method` and optionally the `tag`, construct
 * an object that represents the navigation method.
 *
 * @param {string} path
 * @param {object} method
 * @param {object} tag
 * @return {object}
 */
export function getNavigationMethod (path, method, tag) {
  return {
    type: method.type,
    title: method.summary,
    link: getPermalink(path, method.type)
  }
}

/**
 * Construct the object used to render the method in the body of the renderer.
 * This should represent all the information to create a request and receive
 * a response for the given `method`.
 *
 * @param {string} path
 * @param {Array} servers
 * @param {object} method
 * @param {object} request
 * @param {object} params
 * @param {object} responses
 */
export function getServicesMethod ({path, servers, method, request, params, responses}) {
  const servicesMethod = {
    type: method.type,
    title: method.summary,
    link: getPermalink(path, method.type),
    path,
    request,
    responses
  }

  if (method.description) {
    servicesMethod.description = method.description
  }

  if (params) {
    servicesMethod.parameters = params
  }

  if (servers && servers.length > 0) {
    servicesMethod.endpoints = servers.map(server => {
      const endpoint = {
        url: server.url + path
      }

      if (server.description) {
        endpoint.description = server.description
      }

      return endpoint
    })
  }

  return servicesMethod
}
