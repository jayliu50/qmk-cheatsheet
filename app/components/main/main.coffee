@app
  .component 'mainComponent',
    transclude: true
    templateUrl: 'components/main/main.html'
    controller: ->

      @awesomeThings = [
        title: 'AngularJS'
        url: 'http://angularjs.org'
      ,
        title: 'Lodash'
        url: 'https://lodash.com/'
      ,
        title: 'Susy'
        url: 'http://susy.oddbird.net/'
      ,
        title: 'Font-Awesome'
        url: 'http://fontawesome.io/icons/'
      ]

      return