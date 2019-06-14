config = {
	_private:{fun0:function(){console.log('fun0: This is a private function!!');}},
	_public:{fun1:function(){this._private.fun0(); console.log('fun1: This is a public function!!');}},
	_init:{},
	_deinit:{},
}
