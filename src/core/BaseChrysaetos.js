class BaseChrysaetos{
	constructor(o){
		this.__VERSION__ = "1.0.0";
		this.__NAME__ = "Chrysaetos";
		this.__Description__ = "An event driven javascript engine.";
		
		var _e = function(o) {
					const _private = ((o._private != undefined) && (typeof o._private === "object"))
					 ? 
					 (Object.defineProperty(this,'_private',{get:function(){return o._private;}, set:function(){}}))
					 :
					 undefined;
					const _public = ((o._public != undefined) && (typeof o._public === "object")) 
					? 
					Object.assign(this, o._public)
					:
					undefined;
				}
		_e = new _e(o);
		this._e = _e;
		this.plugins = {};
	}
	
	setPlugins(classes){
		classes.forEach(function(c){
			var t = new [c][0];
			this.plugins[t.name] = t;
		}, this)
	}
	
}
