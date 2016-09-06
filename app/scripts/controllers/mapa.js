'use strict';

/**
 * @ngdoc function
 * @name mapsoverApp.controller:MapaCtrl
 * @description
 * # MapaCtrl
 * Controller of the mapsoverApp
 */
angular.module('mapsoverApp')
  .controller('MapaCtrl', function ($scope) {
    angular.extend($scope,{
    	layercontrol: {
    		icons: {
    			uncheck: "fa fa-toggle-off",
    			check: "fa fa-toggle-on"
    		}
    	},
    	peru: {
        	lat: -10,
            lng: -75,
            zoom: 5
        },
        layers: {
        	baselayers: {
                googleHybrid: {
                    name: 'Google',
                    layerType: 'HYBRID',
                    type: 'google'
                },
                bingAerialWithLabels: {
                    name: 'Bing',
                    type: 'bing',
                    key: 'Aj6XtE1Q1rIvehmjn2Rh1LR2qvMGZ-8vPS9Hn3jCeUiToM77JFnf-kFRzyMELDol',
                    layerOptions: {
                        type: 'AerialWithLabels'
                    }
              	}
        	},
        	overlays: {
        		limpol: {
        			name: "Centro poblado",
			        type: "agsDynamic",
			        url: "http://sigmed.minedu.gob.pe/medgis/rest/services/carto_base/cp/MapServer",
			        visible: true,
			        layerOptions: {
			            layers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
			            		31, 32, 33, 34],
		                opacity: 1,
		                attribution: "Copyright:© 2014 Esri, DeLorme, HERE, TomTom"
			        }
        		}
        	}
        }
    });
  });
