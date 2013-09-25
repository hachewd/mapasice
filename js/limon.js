// JavaScript Document
/* Stop IE crying if there is not console support */
if(!(window.console && console.log)) {
	console = {
	log: function(){},
	debug: function(){},
	info: function(){},
	warn: function(){},
	error: function(){}
	};
}

jQuery(function($){
     
    var r = Raphael('provincias', 400, 300);
	r.safari();
	var _label = r.popup(50, 50, "").hide();
	 attributes = {
            fill: '#ccc',
            stroke: '#FFFFFF',
            'stroke-width': 2,
            'stroke-linejoin': 'round'
        },
    arr = new Array();
     
    for (var country in paths) {
        var obj = r.path(paths["limon"].path);
        console.log(obj);
        arr[obj.id] = country;
		obj.attr(attributes);
        obj

        .click(function(){
            
			location.href = paths[arr[this.id]].url;
             
        })
		

    }
             
});
jQuery.expr[':'].raph=function
(objNode,intStackIndex,arrProperties,arrNodeStack){var c=objNode.getAttribute('class');return(c&&c.indexOf(arrProperties[3])!=-1);}