_jstype = jst_find("UnityEngine.Vector2");

// UnityEngine$Vector2
//_jstype = 
//{
//    definition: {},
//    staticDefinition: {},
//    fields: {},
//    staticFields: {},
//    assemblyName: "",
//    Kind: "Struct",
//    fullname: "UnityEngine.Vector2",
//    baseTypeName: "System.ValueType"
//};
//

_jstype.staticDefinition = _jstype.staticDefinition || {};
_jstype.definition = _jstype.definition || {};
delete _jstype.fields.x;
delete _jstype.fields.y;

_jstype.staticDefinition.New = function(x, y) {
    return new UnityEngine.Vector2.ctor$$Single$$Single(x, y);
}

_jstype.definition.ctor = function() 
{ 
    this.x = 0;
    this.y = 0;
    this._fullname = "UnityEngine.Vector2";
    this.__nativeObj = this;
}
_jstype.definition.ctor$$Single$$Single = function(a0, a1) 
{ 
    this.x = a0;
    this.y = a1;
    this._fullname = "UnityEngine.Vector2";
    this.__nativeObj = this;
}

// fields

//_jstype.staticFields.kEpsilon =  { 
//            get: function() { return CS.Call(0, 241, 0, true); }, 
//            set: function(v) { return CS.Call(1, 241, 0, true, v); } 
//        };
//
//_jstype.fields.x =  { 
//            get: function() { return CS.Call(0, 241, 1, false, this.__nativeObj); }, 
//            set: function(v) { return CS.Call(1, 241, 1, false, this.__nativeObj, v); } 
//        };
//
//_jstype.fields.y =  { 
//            get: function() { return CS.Call(0, 241, 2, false, this.__nativeObj); }, 
//            set: function(v) { return CS.Call(1, 241, 2, false, this.__nativeObj, v); } 
//        };
//

// properties

_jstype.definition.get_Item$$Int32 = function(ind0) { 
    if (ind0 == 0) return this.x;
    else return this.y;
}
_jstype.definition.set_Item$$Int32 = function(ind0, v) {
    if (ind0 == 0) this.x = v;
    else this.y = v;
}

_jstype.definition.get_normalized = function() {
    var mag = this.get_magnitude()
    if (mag == 1)
        return UnityEngine.Vector2.New(this.x, this.y);
    else if (mag > 1e-5)
        return UnityEngine.Vector2.op_Division(this, mag);
    else
        return UnityEngine.Vector2.get_zero();
}
//_jstype.definition.set_normalized = function(v) { return CS.Call(3, 241, 1, false, this.__nativeObj, v); }

_jstype.definition.get_magnitude = function() { 
    return Math.sqrt(this.x * this.x + this.y * this.y);
}
//_jstype.definition.set_magnitude = function(v) { return CS.Call(3, 241, 2, false, this.__nativeObj, v); }

_jstype.definition.get_sqrMagnitude = function() { 
    return this.x * this.x + this.y * this.y;
}
//_jstype.definition.set_sqrMagnitude = function(v) { return CS.Call(3, 241, 3, false, this.__nativeObj, v); }

_jstype.staticDefinition.get_zero = function() { return UnityEngine.Vector2.New(0, 0); }
//_jstype.staticDefinition.set_zero = function(v) { return CS.Call(3, 241, 4, true, v); }

_jstype.staticDefinition.get_one = function() { return UnityEngine.Vector2.New(1, 1); }
//_jstype.staticDefinition.set_one = function(v) { return CS.Call(3, 241, 5, true, v); }

_jstype.staticDefinition.get_up = function() { return UnityEngine.Vector2.New(0, 1); }
//_jstype.staticDefinition.set_up = function(v) { return CS.Call(3, 241, 6, true, v); }

_jstype.staticDefinition.get_right = function() { return UnityEngine.Vector2.New(1, 0); }
//_jstype.staticDefinition.set_right = function(v) { return CS.Call(3, 241, 7, true, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    return this.x == a0.x && this.y == a0.y;
}
/* Int32 */
//_jstype.definition.GetHashCode = function() { 
//    
//    return CS.Call(4, 241, 1, false, this.__nativeObj, false); 
//}
/* Void */
_jstype.definition.Normalize = function() { 
    var mag = this.get_magnitude()
    if (mag == 1)
        return;
    else if (mag > 1e-5) {
        this.x /= mag;
        this.y /= mag;
    }
    else {
        this.x = 0;
        this.y = 0;
    }
}
/* Void */
_jstype.definition.Scale$$Vector2 = function(a0/*Vector2*/) { 
    this.x *= a0.x;
    this.y *= a0.y;
}
/* Void */
_jstype.definition.Set = function(a0/*Single*/, a1/*Single*/) { 
    this.x = a0;
    this.y = a1;
}
/* Single */
_jstype.definition.SqrMagnitude = function() { 
    return this.get_sqrMagnitude();
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    return String.concat("(", this.x, ",", this.y, ")");
}
/* String */
_jstype.definition.toString = function() { 
    return String.concat("(", this.x, ",", this.y, ")"); 
}
/* static Single  */
_jstype.staticDefinition.Angle = function(a0/*Vector2*/, a1/*Vector2*/) { 
    var dot = UnityEngine.Vector2.Dot(a0.get_normalized(), a1.get_normalized());
    if (dot < -1) dot = -1;
    else if (dot > 1) dot = 1;
    var acos = Math.acos(dot);
    return acos / Math.PI * 180;
}
/* static Vector2  */
_jstype.staticDefinition.ClampMagnitude = function(a0/*Vector2*/, a1/*Single*/) { 
    if (a0.get_sqrMagnitude() > a1 * a1) {
        a0.Normalize();
        a0.Scale$$Vector2(a1);
    }
}
/* static Single  */
_jstype.staticDefinition.Distance = function(a0/*Vector2*/, a1/*Vector2*/) { 
    return UnityEngine.Vector2.op_Subtraction(a0, a1).get_magnitude();
}
/* static Single  */
_jstype.staticDefinition.Dot = function(a0/*Vector2*/, a1/*Vector2*/) { 
    return a0.x * a1.x + a0.y * a1.y;
}
/* static Vector2  */
_jstype.staticDefinition.Lerp = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/) { 
    if (a2 < 0) a2 = 0; else if (a2 > 1) a2 = 1;
	return UnityEngine.Vector2.New(
        a0.x + (a1.x - a0.x) * a2,
        a0.y + (a1.y - a0.y) * a2
    );
}
/* static Vector2  */
_jstype.staticDefinition.Max = function(a0/*Vector2*/, a1/*Vector2*/) { 
    return UnityEngine.Vector2.New(Math.max(a0.x, a1.x), Math.max(a0.y, a1.y));
}
/* static Vector2  */
_jstype.staticDefinition.Min = function(a0/*Vector2*/, a1/*Vector2*/) { 
    return UnityEngine.Vector2.New(Math.min(a0.x, a1.x), Math.min(a0.y, a1.y));
}
/* static Vector2  */
//_jstype.staticDefinition.MoveTowards = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/) { 
//    
//    return CS.Call(4, 241, 15, true, false, a0, a1, a2); 
//}
/* static Vector2  */
_jstype.staticDefinition.op_Addition = function(a0/*Vector2*/, a1/*Vector2*/) { 
    return UnityEngine.Vector2.New(a0.x + a1.x, a0.y + a1.y);
}
/* static Vector2  */
_jstype.staticDefinition.op_Division = function(a0/*Vector2*/, a1/*Single*/) { 
    return UnityEngine.Vector2.New(a0.x / a1, a0.y / a1);
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Vector2*/, a1/*Vector2*/) { 
    return (a0.x == a1.x && a0.y == a1.y);
}
/* static Vector3  */
_jstype.staticDefinition.op_Implicit$$Vector2 = function(a0/*Vector2*/) { 
    return UnityEngine.Vector3.New(a0.x, a0.y, 0);
}
/* static Vector2  */
_jstype.staticDefinition.op_Implicit$$Vector3 = function(a0/*Vector3*/) { 
    return UnityEngine.Vector2.New(a0.x, a0.y);
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Vector2*/, a1/*Vector2*/) { 
    return (a0.x != a1.x || a0.y != a1.y);
}
/* static Vector2  */
_jstype.staticDefinition.op_Multiply$$Single$$Vector2 = function(a0/*Single*/, a1/*Vector2*/) { 
    return UnityEngine.Vector2.New(a0 * a1.x, a0 * a1.y);
}
/* static Vector2  */
_jstype.staticDefinition.op_Multiply$$Vector2$$Single = function(a0/*Vector2*/, a1/*Single*/) { 
    return UnityEngine.Vector2.New(a0.x * a1, a0.y * a1);
}
/* static Vector2  */
_jstype.staticDefinition.op_Subtraction = function(a0/*Vector2*/, a1/*Vector2*/) { 
    return UnityEngine.Vector2.New(a0.x - a1.x, a0.y - a1.y);
}
/* static Vector2  */
_jstype.staticDefinition.op_UnaryNegation = function(a0/*Vector2*/) { 
    return UnityEngine.Vector2.New(-a0.x, -a0.y);
}
/* static Vector2  */
_jstype.staticDefinition.Scale$$Vector2$$Vector2 = function(a0/*Vector2*/, a1/*Vector2*/) { 
    return UnityEngine.Vector2.New(
        a0.x * a1.x,
        a0.y * a1.y
    );
}
/* static Single  */
_jstype.staticDefinition.SqrMagnitude$$Vector2 = function(a0/*Vector2*/) { 
    return a0.get_sqrMagnitude();
}
