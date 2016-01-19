(function (angular) {
  'use strict';

  angular
      .module('good-as-gold', [
        'ngRoute',
        'ngSanitize',
        'duScroll',
        'ui.bootstrap',
        'angular-cache',

        'good-as-gold.common',
        'good-as-gold.home',
        'good-as-gold.projects'
      ]);

})(window.angular);

(function (angular) {
  'use strict';

  angular
      .module('good-as-gold.common', [
          'good-as-gold.common.contentful'
      ]);

})(window.angular);
(function (angular) {
  'use strict';

  angular
      .module('good-as-gold.common.contentful', []);

})(window.angular);

(function (angular, contentful) {
  'use strict';

  angular
      .module('good-as-gold.common.contentful')
      .provider('ContentfulService', ContentfulService);

  /* @ngInject */
  function ContentfulService() {
    var options = {
      host: 'cdn.contentful.com',
      space: null,
      accessToken: null,
      secure: true
    };

    this.setOptions = function (newOptions) {
      angular.extend(options, newOptions);
      return this;
    };
    
    this.setHost = function (host) {
      options.host = host;
    };
    
    this.setSpace = function (space) {
      options.space = space;
    };
    
    this.setAccessToken = function (accessToken) {
      options.accessToken = accessToken;
    };
    
    this.setSecure = function (secure) {
      options.secure = secure;
    };

    this.$get = ['$q', function ($q) {
      var client = contentful.createClient(options);
      var methods = 'space contentTypes contentType entries entry assets asset'.split(' ');

      methods.forEach(function (method) {
        var originalMethod = client[method];
        client[method] = function () {
          return $q.when(originalMethod.apply(client, arguments));
        };
      });
      
      return client;
    }];
  }

})(window.angular, window.contentful);

//var BLOG_CONTENT_TYPE_ID = '65fl23ZdJYYMyUqwoOIieI';
//
//$scope.MAILCHIMP_CONFIG = {
//  username: 'boxever',
//  dc: 'us12',
//  u: '424fcde006af29ee3a8eef6a6',
//  id: '2791cac2ab'
//};
//
//ContentfulService.space()
//    .then(function (success) {
//      $scope.contentfulSpace = success;
//    });
//
//ContentfulService.contentTypes()
//    .then(function (success) {
//      $scope.contentTypes = success;
//    });
//
//ContentfulService.contentType(BLOG_CONTENT_TYPE_ID)
//    .then(function (success) {
//      $scope.blogContentType = success;
//    });
//
//ContentfulService.entries({content_type: BLOG_CONTENT_TYPE_ID})
//    .then(function (success) {
//      $scope.blogContents = success;
//    });
//
//ContentfulService.entry('3keZ1nqHu0qSsgueAawmoE')
//    .then(function (success) {
//      $scope.blogContent = success;
//    });
//
//ContentfulService.assets()
//    .then(function (success) {
//      $scope.blogAssets = success;
//    });
//
//ContentfulService.asset('4fJrLhRKmQgksOcUAi2AyU')
//    .then(function (success) {
//      $scope.blogAsset = success;
//    });

(function (angular, marked) {
  'use strict';

  angular
      .module('good-as-gold.common')
      .filter('markdown', markdown);

  /* @ngInject */
  function markdown() {
    return function (text) {
      return marked(text);
    };
  }

})(window.angular, window.marked);
/**
 * @preserve  textfill
 * @name      jquery.textfill.js
 * @author    Russ Painter
 * @author    Yu-Jie Lin
 * @author    Alexandre Dantas
 * @version   0.6.0
 * @date      2014-08-19
 * @copyright (c) 2014 Alexandre Dantas
 * @copyright (c) 2012-2013 Yu-Jie Lin
 * @copyright (c) 2009 Russ Painter
 * @license   MIT License
 * @homepage  https://github.com/jquery-textfill/jquery-textfill
 * @example   http://jquery-textfill.github.io/jquery-textfill/index.html
 */
; (function($) {

  /**
   * Resizes an inner element's font so that the
   * inner element completely fills the outer element.
   *
   * @param {Object} options User options that take
   *                         higher precedence when
   *                         merging with the default ones.
   *
   * @return All outer elements processed
   */
  $.fn.textfill = function(options) {

    // ______  _______ _______ _______ _     _        _______ _______
    // |     \ |______ |______ |_____| |     | |         |    |______
    // |_____/ |______ |       |     | |_____| |_____    |    ______|
    //
    // Merging user options with the default values

    var defaults = {
      debug            : false,
      maxFontPixels    : 40,
      minFontPixels    : 4,
      innerTag         : 'span',
      widthOnly        : false,
      success          : null, // callback when a resizing is done
      callback         : null, // callback when a resizing is done (deprecated, use success)
      fail             : null, // callback when a resizing is failed
      complete         : null, // callback when all is done
      explicitWidth    : null,
      explicitHeight   : null,
      changeLineHeight : false
    };

    var Opts = $.extend(defaults, options);

    // _______ _     _ __   _ _______ _______ _____  _____  __   _ _______
    // |______ |     | | \  | |          |      |   |     | | \  | |______
    // |       |_____| |  \_| |_____     |    __|__ |_____| |  \_| ______|
    //
    // Predefining the awesomeness

    // Output arguments to the Debug console
    // if "Debug Mode" is enabled
    function _debug() {
      if (!Opts.debug
          ||  typeof console       == 'undefined'
          ||  typeof console.debug == 'undefined') {
        return;
      }
      console.debug.apply(console, arguments);
    }

    // Output arguments to the Warning console
    function _warn() {
      if (typeof console      == 'undefined' ||
          typeof console.warn == 'undefined') {
        return;
      }
      console.warn.apply(console, arguments);
    }

    // Outputs all information on the current sizing
    // of the font.
    function _debug_sizing(prefix, ourText, maxHeight, maxWidth, minFontPixels, maxFontPixels) {

      function _m(v1, v2) {

        var marker = ' / ';

        if (v1 > v2)
          marker = ' > ';

        else if (v1 == v2)
          marker = ' = ';

        return marker;
      }

      _debug(
          '[TextFill] '  + prefix + ' { ' +
          'font-size: ' + ourText.css('font-size') + ',' +
          'Height: '    + ourText.height() + 'px ' + _m(ourText.height(), maxHeight) + maxHeight + 'px,' +
          'Width: '     + ourText.width()  + _m(ourText.width() , maxWidth)  + maxWidth + ',' +
          'minFontPixels: ' + minFontPixels + 'px, ' +
          'maxFontPixels: ' + maxFontPixels + 'px }'
      );
    }

    /**
     * Calculates which size the font can get resized,
     * according to constrains.
     *
     * @param {String} prefix Gets shown on the console before
     *                        all the arguments, if debug mode is on.
     * @param {Object} ourText The DOM element to resize,
     *                         that contains the text.
     * @param {function} func Function called on `ourText` that's
     *                        used to compare with `max`.
     * @param {number} max Maximum value, that gets compared with
     *                     `func` called on `ourText`.
     * @param {number} minFontPixels Minimum value the font can
     *                               get resized to (in pixels).
     * @param {number} maxFontPixels Maximum value the font can
     *                               get resized to (in pixels).
     *
     * @return Size (in pixels) that the font can be resized.
     */
    function _sizing(prefix, ourText, func, max, maxHeight, maxWidth, minFontPixels, maxFontPixels) {

      _debug_sizing(
          prefix, ourText,
          maxHeight, maxWidth,
          minFontPixels, maxFontPixels
      );

      // The kernel of the whole plugin, take most attention
      // on this part.
      //
      // This is a loop that keeps increasing the `font-size`
      // until it fits the parent element.
      //
      // - Start from the minimal allowed value (`minFontPixels`)
      // - Guesses an average font size (in pixels) for the font,
      // - Resizes the text and sees if its size is within the
      //   boundaries (`minFontPixels` and `maxFontPixels`).
      //   - If so, keep guessing until we break.
      //   - If not, return the last calculated size.
      //
      // I understand this is not optimized and we should
      // consider implementing something akin to
      // Daniel Hoffmann's answer here:
      //
      //     http://stackoverflow.com/a/17433451/1094964
      //

      while (minFontPixels < (maxFontPixels - 1)) {

        var fontSize = Math.floor((minFontPixels + maxFontPixels) / 2);
        ourText.css('font-size', fontSize);

        if (func.call(ourText) <= max) {
          minFontPixels = fontSize;

          if (func.call(ourText) == max)
            break;
        }
        else
          maxFontPixels = fontSize;

        _debug_sizing(
            prefix, ourText,
            maxHeight, maxWidth,
            minFontPixels, maxFontPixels
        );
      }

      ourText.css('font-size', maxFontPixels);

      if (func.call(ourText) <= max) {
        minFontPixels = maxFontPixels;

        _debug_sizing(
            prefix + '* ', ourText,
            maxHeight, maxWidth,
            minFontPixels, maxFontPixels
        );
      }
      return minFontPixels;
    }

    // _______ _______ _______  ______ _______
    // |______    |    |_____| |_____/    |
    // ______|    |    |     | |    \_    |
    //
    // Let's get it started (yeah)!

    _debug('[TextFill] Start Debug');

    this.each(function() {

      // Contains the child element we will resize.
      // $(this) means the parent container
      var ourText = $(Opts.innerTag + ':visible:first', this);

      // Will resize to this dimensions.
      // Use explicit dimensions when specified
      var maxHeight = Opts.explicitHeight || $(this).height();
      var maxWidth  = Opts.explicitWidth  || $(this).width();

      var oldFontSize = ourText.css('font-size');

      var lineHeight  = parseFloat(ourText.css('line-height')) / parseFloat(oldFontSize);

      _debug('[TextFill] Inner text: ' + ourText.text());
      _debug('[TextFill] All options: ', Opts);
      _debug('[TextFill] Maximum sizes: { ' +
          'Height: ' + maxHeight + 'px, ' +
          'Width: '  + maxWidth  + 'px' + ' }'
      );

      var minFontPixels = Opts.minFontPixels;

      // Remember, if this `maxFontPixels` is negative,
      // the text will resize to as long as the container
      // can accomodate
      var maxFontPixels = (Opts.maxFontPixels <= 0 ?
          maxHeight :
          Opts.maxFontPixels);


      // Let's start it all!

      // 1. Calculate which `font-size` would
      //    be best for the Height
      var fontSizeHeight = undefined;

      if (! Opts.widthOnly)
        fontSizeHeight = _sizing(
            'Height', ourText,
            $.fn.height, maxHeight,
            maxHeight, maxWidth,
            minFontPixels, maxFontPixels
        );

      // 2. Calculate which `font-size` would
      //    be best for the Width
      var fontSizeWidth = undefined;

      fontSizeWidth = _sizing(
          'Width', ourText,
          $.fn.width, maxWidth,
          maxHeight, maxWidth,
          minFontPixels, maxFontPixels
      );

      // 3. Actually resize the text!

      if (Opts.widthOnly) {
        ourText.css({
          'font-size'  : fontSizeWidth,
          'white-space': 'nowrap'
        });

        if (Opts.changeLineHeight)
          ourText.parent().css(
              'line-height',
              (lineHeight * fontSizeWidth + 'px')
          );
      }
      else {
        var fontSizeFinal = Math.min(fontSizeHeight, fontSizeWidth);

        ourText.css('font-size', fontSizeFinal);

        if (Opts.changeLineHeight)
          ourText.parent().css(
              'line-height',
              (lineHeight * fontSizeFinal) + 'px'
          );
      }

      _debug(
          '[TextFill] Finished { ' +
          'Old font-size: ' + oldFontSize              + ', ' +
          'New font-size: ' + ourText.css('font-size') + ' }'
      );

      // Oops, something wrong happened!
      // We weren't supposed to exceed the original size
      if ((ourText.width()  > maxWidth) ||
          (ourText.height() > maxHeight && !Opts.widthOnly)) {

        ourText.css('font-size', oldFontSize);

        // Failure callback
        if (Opts.fail)
          Opts.fail(this);

        _debug(
            '[TextFill] Failure { ' +
            'Current Width: '  + ourText.width()  + ', ' +
            'Maximum Width: '  + maxWidth         + ', ' +
            'Current Height: ' + ourText.height() + ', ' +
            'Maximum Height: ' + maxHeight        + ' }'
        );
      }
      else if (Opts.success) {
        Opts.success(this);
      }
      else if (Opts.callback) {
        _warn('callback is deprecated, use success, instead');

        // Success callback
        Opts.callback(this);
      }
    });

    // Complete callback
    if (Opts.complete)
      Opts.complete(this);

    _debug('[TextFill] End Debug');
    return this;
  };

})(window.jQuery);

(function (angular) {
  'use strict';

  configureApp.$inject = ["$routeProvider", "ContentfulServiceProvider"];
  angular
      .module('good-as-gold')
      .config(configureApp);

  /* @ngInject */
  function configureApp($routeProvider, ContentfulServiceProvider) {
    $routeProvider.otherwise({redirectTo: '/'});

    ContentfulServiceProvider.setSpace('36l42364mlvh');
    ContentfulServiceProvider.setAccessToken('013e524416a743038d909b96d0dc8ebfa32ac166a45ff48b9046580626faac5b');
  }
  
})(window.angular);

(function (angular) {
  'use strict';

  angular
      .module('good-as-gold')
      .constant('CACHE_KEYS', {
        PROJECTS_CACHE_KEY: '/projects',
        PROJECT_CACHE_KEY_BASE: '/project/'
      })
  
})(window.angular);

(function (angular) {
  'use strict';

  angular
      .module('good-as-gold.home', [])
      .value('duScrollDuration', 2000)
      .value('duScrollOffset', 0);

})(window.angular);

(function (angular) {
  'use strict';

  configureApp.$inject = ["$routeProvider"];
  angular
      .module('good-as-gold.home')
      .config(configureApp);

  /* @ngInject */
  function configureApp($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: '/assets/js/home/partials/main.html',
          controller: 'HomeCtrl'
        })
  }

})(window.angular);

(function (angular) {
  'use strict';

  HomeCtrl.$inject = ["$scope", "$location", "$document", "$window", "$rootScope", "CACHE_KEYS", "ContentfulService", "CacheFactory"];
  angular
      .module('good-as-gold.home')
      .controller('HomeCtrl', HomeCtrl);

  /* @ngInject */
  function HomeCtrl($scope, $location, $document, $window, $rootScope, CACHE_KEYS, ContentfulService, CacheFactory) {
    var PROJECT_CONTENT_TYPE_ID = '1ypg91RQScOIWcs0oQ8U2w';
    var contentCache = CacheFactory.get('ContentCache');
    
    var projects = contentCache.get(CACHE_KEYS.PROJECTS_CACHE_KEY);
    if (!projects) {
      ContentfulService.entries({
        limit: 3,
        order: '-sys.updatedAt',
        content_type: PROJECT_CONTENT_TYPE_ID
      }).then(function (success) {
        $scope.projects = success;

        contentCache.put(CACHE_KEYS.PROJECTS_CACHE_KEY, $scope.projects);
      });
    } else {
      $scope.projects = projects;
    }

    $scope.openProject = function (project) {
      contentCache.put(CACHE_KEYS.PROJECT_CACHE_KEY_BASE + project.sys.id, project);
      $location.path('/projects/' + project.sys.id);
    };

    $scope.scrollToTheTop = function () {
      $document.duScrollTop(0, 2000);
    };

    $scope.scrollToPage = function (pageId) {
      var page = angular.element(document.getElementById(pageId));
      $document.duScrollToElement(page, 0, 2000);
    };
    
    $scope.goToUrl = function (url) {
      $window.open(url,'_blank');
    };

    if (localStorage.getItem("goToWork") === 'true') {
      $scope.scrollToPage('WORK');
    } else {
      $scope.scrollToTheTop();
    }

    localStorage.setItem('goToWork', 'false');
    
    $rootScope.$on('duScrollspy:becameActive', function(event, element, target) {
      $scope.activeNav = element[0].innerText;
    });
  }

})(window.angular);

(function (angular, $) {
  'use strict';

  textFill.$inject = ["$timeout"];
  transitionImage.$inject = ["$timeout"];
  angular
      .module('good-as-gold.home')
      .directive('projectTileHover', projectTileHover)
      .directive('textFill', textFill)
      .directive('transitionImage', transitionImage)
      .directive('whiteHover', whiteHover)
      .directive('imageCacheBuster', imageCacheBuster);

  /* @ngInject */
  function projectTileHover() {
    return {
      restrict: 'A',
      scope: {
        projectTileUrl: '@'
      },
      link: function (scope, element) {
        var tab = element.find('.project-tile-tab');
        var tile = element.find('.project-tile');
        var button = element.find('.project-link');

        var originalTileState = {
          'background': 'linear-gradient(to bottom, rgba(112,128,144,0.8) 0%,rgba(112,128,144,0.7) 100%), url(' + scope.projectTileUrl + ') no-repeat',
          'background-size': '100%',
          'color': 'white'
        };
        
        tile.css(originalTileState);
        button.css('opacity', 1);
        
        element.on('mouseenter', function () {
          tile.css({
            'background': 'linear-gradient(to bottom, rgba(47,60,73,0.8) 0%,rgba(47,60,73,0.7) 100%), url(' + scope.projectTileUrl + ') no-repeat',
            'background-size': '100%',
            'color': 'white'
          });

          button.css('opacity', 0.6);
        });

        element.on('mouseleave', function () {
          tile.css(originalTileState);
          button.css('opacity', 1);
        });
      }
    };
  }

  /* @ngInject */
  function textFill($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element) {
        $timeout(function () {
          $(element).textfill({
            maxFontPixels: 70,
            innerTag: '.text-left'
          });
        });
      }
    };
  }

  /* @ngInject */
  function transitionImage($timeout) {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        var $element = $(elem);

        $timeout(function () {
          $element.fadeOut("slow", function () {
            $(this).load(function () {
              $(this).fadeIn("slow");
            });
            $(this).attr("src", attrs['transitionImage']);
          });
        }, 2000);
      }
    }
  }

  /* @ngInject */
  function whiteHover() {
    return {
      restrict: 'A',
      link: function (scope, element) {
        var color = $(element).css('color');
        
        $(element).hover(function () {
          $(this).css('color', 'white');
        }, function () {
          $(this).css('color', color);
        });
      }
    };
  }

  /* @ngInject */
  function imageCacheBuster() {
    return {
      restrict: 'A',
      link: function (scope, element) {
        var $element = $(element);

        var src = $($element).attr("src");
        $($element).attr("src", src + '?' + new Date().getTime());
      }
    };
  }

})(window.angular, window.jQuery);

(function (angular) {
  'use strict';

  angular
      .module('good-as-gold.projects', [])

})(window.angular);

(function (angular) {
  'use strict';

  configureApp.$inject = ["$routeProvider"];
  angular
      .module('good-as-gold.projects')
      .config(configureApp);

  /* @ngInject */
  function configureApp($routeProvider) {
    $routeProvider
        .when('/projects/:projectId', {
          templateUrl: '/assets/js/projects/partials/project.html',
          controller: 'ProjectCtrl'
        })
        .when('/studies/:projectId', {
          templateUrl: '/assets/js/projects/partials/study.html',
          controller: 'ProjectCtrl'
        })
  }

})(window.angular);

(function (angular) {
  'use strict';

  ProjectCtrl.$inject = ["$scope", "$location", "$routeParams", "CACHE_KEYS", "CacheFactory"];
  angular
      .module('good-as-gold.projects')
      .controller('ProjectCtrl', ProjectCtrl);

  /* @ngInject */
  function ProjectCtrl($scope, $location, $routeParams, CACHE_KEYS, CacheFactory) {
    var contentCache = CacheFactory.get('ContentCache');

    localStorage.setItem('goToWork', 'true');
    $scope.project = contentCache.get(CACHE_KEYS.PROJECT_CACHE_KEY_BASE + $routeParams.projectId);

    if (!$scope.project) {
      $location.path('/');
    }

    $scope.projectPhotos = $scope.project.fields.photos;
    $scope.labelChunks = chunk($scope.project.fields.labels, 2);

    $scope.returnToHome = function () {
      $location.path('/');
    };

    $scope.goToProject = function (projectId) {
      $location.path('/projects/' + projectId);
    };

    $scope.goToStudy = function (caseStudyId) {
      $location.path('/studies/' + caseStudyId);
    };

    function chunk(arr, len) {
      var chunks = [];
      var i = 0;
      var n = arr.length;

      while (i < n) {
        chunks.push(arr.slice(i, i += len));
      }

      return chunks;
    }
  }

})(window.angular);

(function (angular, $) {
  'use strict';

  centerImages.$inject = ["$timeout"];
  angular
      .module('good-as-gold.projects')
      .directive('whiteBackground', whiteBackground)
      .directive('centerImages', centerImages);

  /* @ngInject */
  function whiteBackground() {
    return {
      restrict: 'A',
      link: function (scope) {
        var $body = $('body');
        var $originalBackground = $body.css('background');

        $body.css('background', 'white');

        scope.$on('$destroy', function () {
          $body.css('background', $originalBackground);
        });
      }
    };
  }

  /* @ngInject */
  function centerImages($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element) {
        $timeout(function() {
          var images = $(element).find('img');
          for (var i = 0; i < images.length; i++) {
            var image = images[i];
            var src = $(image).attr('src');

            if (!!src && src.indexOf('contentful.com') > 0) {
              $(image).addClass('project-image img-responsive center-block animated fadeIn');
            }
          }
        });
      }
    };
  }

})(window.angular, window.jQuery);

(function (angular) {
  'use strict';

  setupContentCache.$inject = ["CacheFactory"];
  angular
      .module('good-as-gold')
      .run(setupContentCache);

  /* @ngInject */
  function setupContentCache(CacheFactory) {
    CacheFactory.createCache('ContentCache', {
      maxAge: 900000, // Items added to this cache expire after 15 minutes.
      cacheFlushInterval: 6000000, // This cache will clear itself every hour.
      deleteOnExpire: 'aggressive', // Items will be deleted from this cache right when they expire.
      storageMode: 'localStorage' // Use localStorage for cache
    });
  }

}(angular));

//# sourceMappingURL=good-as-gold.js.map