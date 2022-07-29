   (function(Mapping, $, undefined) {
        var self = this;
      
        function Initialize() {
            var myOptions = {
              zoom: 11,
                center: new google.maps.LatLng(24.3382120847153, 54.57187186646656),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ]
    };
      
          self.map = new google.maps.Map(document.getElementById("map"),myOptions);
          self.markers = [];
          self.infoWindow = new google.maps.InfoWindow();
          
          $('.list-group-item').each(function() {
			   var dataparent = $(this).data("parent");  
			   if(dataparent == 'abu dhabi') {
		  	 var nam = $(this).data("name");
				   
               var url =  $(this).data("link");
				    var imgurl =  $(this).data("linnk");

            var $this = $(this);
            var pos = new google.maps.LatLng($this.data('lat'), $this.data('lng'));
            console.log(pos);
            var marker = new google.maps.Marker({
                            position: pos,
                            map: self.map,
							title:nam,
				             url:url,
				 icon: imgurl,
                          });
            self.markers.push(marker);
            
marker.addListener('click', function() {
    if (this.url) {
        
		window.open(url, '_blank');
        // Or like this if you want a new tab : window.open(this.url, '_blank');
    } else {
        infowindow.open(map, this);
    }       
});
 
		
			  
		  }});
      }
      
      Initialize();
   })(window.Mapping = window.Mapping || {}, jQuery);                                   
   

 
    }
	
