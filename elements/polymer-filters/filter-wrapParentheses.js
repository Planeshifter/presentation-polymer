/**
* Wrap a string in parentheses if not empty
* @param {string} input
* @return {string} string wrapped in parents
*/
PolymerExpressions.prototype.wrapParentheses = function(input){
  return input ? ' (' + input + ').' : '.';
};
