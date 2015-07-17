module.exports = (response, template) ->
  @name = "Home"
  @response = response
  @template = @name + "/" + template
  return

module.exports.prototype =
  extend: (properties) ->
    Child = module.exports
    Child.prototype = module.exports.prototype
    for key of properties
      Child.prototype[key] = properties[key]
    Child
  render: (data) ->
    if @response and @template
      @response.render @template, data
    return