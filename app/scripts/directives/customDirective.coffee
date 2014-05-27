@app
  .directive('customDirective', () ->
    templateUrl: '/views/customView.html'
    restrict: 'E'
    link: (scope, element, attrs) ->
      element.text 'this is the customDirective directive'
  )
