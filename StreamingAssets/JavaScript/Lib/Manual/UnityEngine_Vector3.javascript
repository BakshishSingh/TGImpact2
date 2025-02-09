_jstype = jst_find("UnityEngine.Vector3");

// UnityEngine$Vector3
//_jstype =
//{
//    definition: {},
//    staticDefinition: {},
//    fields: {},
//    staticFields: {},
//    assemblyName: "",
//    Kind: "Struct",
//    fullname: "UnityEngine.Vector3",
//    baseTypeName: "System.ValueType"
//};

_jstype.staticDefinition = _jstype.staticDefinition || {};
_jstype.definition = _jstype.definition || {};
delete _jstype.fields.x;
delete _jstype.fields.y;
delete _jstype.fields.z;

_jstype.staticDefinition.New = function(x, y, z) {
    return new UnityEngine.Vector3.ctor$$Single$$Single$$Single(x, y, z);
}

_jstype.definition.ctor = function() { 
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this._fullname = "UnityEngine.Vector3";
    this.__nativeObj = this;
}
_jstype.definition.ctor$$Single$$Single$$Single = function(a0, a1, a2) {
    this.x = a0;
    this.y = a1;
    this.z = a2;
    this._fullname = "UnityEngine.Vector3";
    this.__nativeObj = this;
}
_jstype.definition.ctor$$Single$$Single = function(a0, a1) { 
    this.x = a0;
    this.y = a1;
    this.z = 0;
    this._fullname = "UnityEngine.Vector3";
    this.__nativeObj = this;
}

// fields

//_jstype.staticFields.kEpsilon =  {
//            get: function() { return CS.Call(0, 242, 0, true); },
//            set: function(v) { return CS.Call(1, 242, 0, true, v); }
//        };

//_jstype.fields.x =  {
//            get: function() { return CS.Call(0, 242, 1, false, this.__nativeObj); },
//            set: function(v) { return CS.Call(1, 242, 1, false, this.__nativeObj, v); }
//        };
//
//_jstype.fields.y =  {
//            get: function() { return CS.Call(0, 242, 2, false, this.__nativeObj); },
//            set: function(v) { return CS.Call(1, 242, 2, false, this.__nativeObj, v); }
//        };
//
//_jstype.fields.z =  {
//            get: function() { return CS.Call(0, 242, 3, false, this.__nativeObj); },
//            set: function(v) { return CS.Call(1, 242, 3, false, this.__nativeObj, v); }
//        };

// properties

_jstype.definition.get_Item$$Int32 = function(ind0) {
    if (ind0 == 0) return this.x;
    else if (ind0 == 1) return this.y;
    else return this.z;
}
_jstype.definition.set_Item$$Int32 = function(ind0, v) {
    if (ind0 == 0) this.x = v;
    else if (ind0 == 1) this.y = v;
    else this.z = v;
}

_jstype.definition.get_normalized = function() {
    var mag = this.get_magnitude()
    if (mag == 1)
        return UnityEngine.Vector3.New(this.x, this.y, this.z);
    else if (mag > 1e-5)
        return UnityEngine.Vector3.op_Division(this, mag);
    else
        return UnityEngine.Vector3.get_zero();
}
//_jstype.definition.set_normalized = function(v) {}

_jstype.definition.get_magnitude = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
}
//_jstype.definition.set_magnitude = function(v) {}

_jstype.definition.get_sqrMagnitude = function() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
}
//_jstype.definition.set_sqrMagnitude = function(v) {}

_jstype.staticDefinition.get_zero = function() { return UnityEngine.Vector3.New(0, 0, 0); }
//_jstype.staticDefinition.set_zero = function(v) {}

_jstype.staticDefinition.get_one = function() { return UnityEngine.Vector3.New(1, 1, 1); }
//_jstype.staticDefinition.set_one = function(v) {}

_jstype.staticDefinition.get_forward = function() { return UnityEngine.Vector3.New(0, 0, 1); }
//_jstype.staticDefinition.set_forward = function(v) {}

_jstype.staticDefinition.get_back = function() { return UnityEngine.Vector3.New(0, 0, -1); }
//_jstype.staticDefinition.set_back = function(v) {}

_jstype.staticDefinition.get_up = function() { return UnityEngine.Vector3.New(0, 1, 0); }
//_jstype.staticDefinition.set_up = function(v) {}

_jstype.staticDefinition.get_down = function() { return UnityEngine.Vector3.New(0, -1, 0); }
//_jstype.staticDefinition.set_down = function(v) {}

_jstype.staticDefinition.get_left = function() { return UnityEngine.Vector3.New(-1, 0, 0); }
//_jstype.staticDefinition.set_left = function(v) {}

_jstype.staticDefinition.get_right = function() { return UnityEngine.Vector3.New(1, 0, 0); }
//_jstype.staticDefinition.set_right = function(v) {}

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) {
    return this.x == a0.x && this.y == a0.y && this.z == a0.z;
}
/* Int32 */
//_jstype.definition.GetHashCode = function() {
//    return CS.Call(4, 242, 1, false, this.__nativeObj, false);
//}
/* Void */
_jstype.definition.Normalize = function() {
    var mag = this.get_magnitude()
    if (mag == 1)
        return;
    else if (mag > 1e-5) {
        this.x /= mag;
        this.y /= mag;
        this.z /= mag;
    }
    else {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
}
/* Void */
_jstype.definition.Scale$$Vector3 = function(a0/*Vector3*/) {
    this.x *= a0.x;
    this.y *= a0.y;
    this.z *= a0.z;
}
/* Void */
_jstype.definition.Set = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    this.x = a0;
    this.y = a1;
    this.z = a2;
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) {
    return String.concat("(", this.x, ",", this.y, ",", this.z, ")");
}
/* String */
_jstype.definition.toString = function() {
    return String.concat("(", this.x, ",", this.y, ",", this.z, ")");
}
/* static Single  */
_jstype.staticDefinition.Angle = function(a0/*Vector3*/, a1/*Vector3*/) { 
    var dot = UnityEngine.Vector3.Dot(a0.get_normalized(), a1.get_normalized());
    if (dot < -1) dot = -1;
    else if (dot > 1) dot = 1;
    var acos = Math.acos(dot);
    return acos / Math.PI * 180;
}
/* static Vector3  */
_jstype.staticDefinition.ClampMagnitude = function(a0/*Vector3*/, a1/*Single*/) {
    if (a0.get_sqrMagnitude() > a1 * a1) {
        a0.Normalize();
        a0.Scale$$Vector3(a1);
    }
}
/* static Vector3  */
_jstype.staticDefinition.Cross = function(a0/*Vector3*/, a1/*Vector3*/) {
    var x = a0.y * a1.z - a0.z * a1.y;
    var y = a0.z * a1.x - a0.x * a1.z;
    var z = a0.x * a1.y - a0.y * a1.x;
    return UnityEngine.Vector3.New(x, y, z)
}
/* static Single  */
_jstype.staticDefinition.Distance = function(a0/*Vector3*/, a1/*Vector3*/) {
    return UnityEngine.Vector3.op_Subtraction(a0, a1).get_magnitude();
}
/* static Single  */
_jstype.staticDefinition.Dot = function(a0/*Vector3*/, a1/*Vector3*/) {
    return a0.x * a1.x + a0.y * a1.y + a0.z * a1.z;
}
/* static Vector3  */
_jstype.staticDefinition.Lerp = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) {
    if (a2 < 0) a2 = 0; else if (a2 > 1) a2 = 1;
    return UnityEngine.Vector3.New(
        a0.x + (a1.x - a0.x) * a2,
        a0.y + (a1.y - a0.y) * a2,
        a0.z + (a1.z - a0.z) * a2
    );
}
/* static Single  */
_jstype.staticDefinition.Magnitude = function(a0/*Vector3*/) {
    return a0.get_magnitude();
}
/* static Vector3  */
_jstype.staticDefinition.Max = function(a0/*Vector3*/, a1/*Vector3*/) {
    return UnityEngine.Vector3.New(Math.max(a0.x, a1.x), Math.max(a0.y, a1.y), Math.max(a0.z, a1.z));
}
/* static Vector3  */
_jstype.staticDefinition.Min = function(a0/*Vector3*/, a1/*Vector3*/) {
    return UnityEngine.Vector3.New(Math.min(a0.x, a1.x), Math.min(a0.y, a1.y), Math.min(a0.z, a1.z));
}
/* static Vector3  */
//_jstype.staticDefinition.MoveTowards = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) {
//
//    return CS.Call(4, 242, 16, true, false, a0, a1, a2);
//}
/* static Vector3  */
_jstype.staticDefinition.Normalize$$Vector3 = function(a0/*Vector3*/) {
    return a0.get_normalized();
}
/* static Vector3  */
_jstype.staticDefinition.op_Addition = function(a0/*Vector3*/, a1/*Vector3*/) {
    return UnityEngine.Vector3.New(a0.x + a1.x, a0.y + a1.y, a0.z + a1.z);
}
/* static Vector3  */
_jstype.staticDefinition.op_Division = function(a0/*Vector3*/, a1/*Single*/) {
    return UnityEngine.Vector3.New(a0.x / a1, a0.y / a1, a0.z / a1);
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Vector3*/, a1/*Vector3*/) {
    return (a0.x == a1.x && a0.y == a1.y && a0.z == a1.z);
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Vector3*/, a1/*Vector3*/) {
    return (a0.x != a1.x || a0.y != a1.y || a0.z != a1.z);
}
/* static Vector3  */
_jstype.staticDefinition.op_Multiply$$Single$$Vector3 = function(a0/*Single*/, a1/*Vector3*/) {
    return UnityEngine.Vector3.New(a0 * a1.x, a0 * a1.y, a0 * a1.z);
}
/* static Vector3  */
_jstype.staticDefinition.op_Multiply$$Vector3$$Single = function(a0/*Vector3*/, a1/*Single*/) {
    return UnityEngine.Vector3.New(a0.x * a1, a0.y * a1, a0.z * a1);
}
/* static Vector3  */
_jstype.staticDefinition.op_Subtraction = function(a0/*Vector3*/, a1/*Vector3*/) {
    return UnityEngine.Vector3.New(a0.x - a1.x, a0.y - a1.y, a0.z - a1.z);
}
/* static Vector3  */
_jstype.staticDefinition.op_UnaryNegation = function(a0/*Vector3*/) {
    return UnityEngine.Vector3.New(-a0.x, -a0.y, -a0.z);
}
/* static Void  */
//_jstype.staticDefinition.OrthoNormalize$$Vector3$$Vector3$$Vector3 = function(a0/*Vector3&*/, a1/*Vector3&*/, a2/*Vector3&*/) {
//
//    return CS.Call(4, 242, 26, true, false, a0, a1, a2);
//}
/* static Void  */
//_jstype.staticDefinition.OrthoNormalize$$Vector3$$Vector3 = function(a0/*Vector3&*/, a1/*Vector3&*/) {
//
//    return CS.Call(4, 242, 27, true, false, a0, a1);
//}
/* static Vector3  */
//_jstype.staticDefinition.Project = function(a0/*Vector3*/, a1/*Vector3*/) {
//
//    return CS.Call(4, 242, 28, true, false, a0, a1);
//}
/* static Vector3  */
//_jstype.staticDefinition.ProjectOnPlane = function(a0/*Vector3*/, a1/*Vector3*/) {
//
//    return CS.Call(4, 242, 29, true, false, a0, a1);
//}
/* static Vector3  */
//_jstype.staticDefinition.Reflect = function(a0/*Vector3*/, a1/*Vector3*/) {
//
//    return CS.Call(4, 242, 30, true, false, a0, a1);
//}
/* static Vector3  */
//_jstype.staticDefinition.RotateTowards = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Single*/) {
//
//    return CS.Call(4, 242, 31, true, false, a0, a1, a2, a3);
//}
/* static Vector3  */
_jstype.staticDefinition.Scale$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    return UnityEngine.Vector3.New(
        a0.x * a1.x,
        a0.y * a1.y,
        a0.z * a1.z
    );
}
/* static Vector3  */
//_jstype.staticDefinition.Slerp = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) {
//
//    return CS.Call(4, 242, 33, true, false, a0, a1, a2);
//}
/* static Vector3  */
//_jstype.staticDefinition.SmoothDamp$$Vector3$$Vector3$$Vector3$$Single$$Single$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Vector3&*/, a3/*Single*/, a4/*Single*/, a5/*Single*/) {
//
//    return CS.Call(4, 242, 34, true, false, a0, a1, a2, a3, a4, a5);
//}
/* static Vector3  */
//_jstype.staticDefinition.SmoothDamp$$Vector3$$Vector3$$Vector3$$Single$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Vector3&*/, a3/*Single*/, a4/*Single*/) {
//
//    return CS.Call(4, 242, 35, true, false, a0, a1, a2, a3, a4);
//}
/* static Vector3  */
//_jstype.staticDefinition.SmoothDamp$$Vector3$$Vector3$$Vector3$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Vector3&*/, a3/*Single*/) {
//
//    return CS.Call(4, 242, 36, true, false, a0, a1, a2, a3);
//}
/* static Single  */
_jstype.staticDefinition.SqrMagnitude = function(a0/*Vector3*/) {
    return a0.get_sqrMagnitude();
}
