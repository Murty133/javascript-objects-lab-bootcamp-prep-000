var recipes = {}

function updateObjectWithKeyAndValue(object, key ,value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValues(object, key ,value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var object2 = Object.assign({}, object)
  delete object2[key]
  return object2
}