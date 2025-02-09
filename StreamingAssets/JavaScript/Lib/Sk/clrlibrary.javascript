
var System$Activator = {
    fullname: "System.Activator",
    baseTypeName: "System.Object",
    staticDefinition: {
        CreateInstance$$Type: function (type){
            return new type._JsType.ctor();
        },
        CreateInstance$$Type$$BindingFlags$$Binder$$Object$Array$$CultureInfo: function (type, bindingAttr, binder, args, culture){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        CreateInstance$$Type$$BindingFlags$$Binder$$Object$Array$$CultureInfo$$Object$Array: function (type, bindingAttr, binder, args, culture, activationAttributes){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        CreateInstance$$Type$$Object$Array: function (type, args){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        CreateInstance$$Type$$Object$Array$$Object$Array: function (type, args, activationAttributes){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        CreateInstance$$Type$$Boolean: function (type, nonPublic){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        CreateInstance$1: function (T){
            return System.Activator.CreateInstance$$Type(Typeof(T));
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Activator);
var System$Array = {
    fullname: "System.Array",
    baseTypeName: "System.Object",
    staticDefinition: {
        Sort$$Array: function (array){
            System.Array.Sort$1$$T$Array(System.Object.ctor, array);
        },
        Sort$1$$T$Array: function (T, array){
            System.Array.Sort$1$$T$Array$$Comparison$1(T, array, null);
        },
        Sort$1$$T$Array$$Comparison$1: function (T, array, cmpFunc){
            var needConvert = !(array instanceof Array);
            var sortArray;
            if (needConvert){
                sortArray = new Array(array.length);
                for (var i = 0; i < array.length; i++)
                    sortArray[i] = array[i];
            }
            else
                sortArray = array;
            if (cmpFunc == null){
                cmpFunc = $CreateDelegate(System.Collections.Generic.Comparer$1.get_Default(), System.Collections.Generic.Comparer$1.get_Default().Compare);
            }
            if (cmpFunc == null){
                sortArray.sort();
            }
            else
                sortArray.sort(cmpFunc);
            if (!needConvert)
                return;
            for (var i = 0; i < array.length; i++)
                array[i] = sortArray[i];
        },
        Sort$1$$T$Array$$IComparer$1: function (T, array, cmp){
            System.Array.Sort$1$$T$Array$$Comparison$1(T, array, $CreateDelegate(new SharpKit.JavaScript.Private.JsComparerHelper$1.ctor(T, cmp), new SharpKit.JavaScript.Private.JsComparerHelper$1.ctor(T, cmp).Compare));
        },
        Sort$$Array$$IComparer: function (array, cmp){
            System.Array.Sort$1$$T$Array$$IComparer$1(System.Object.ctor, array, cmp);
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Array);

var SharpKit$JavaScript$Private$JsComparerHelper$1 = {
    fullname: "SharpKit.JavaScript.Private.JsComparerHelper$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IComparer$1"],
    Kind: "Class",
    definition: {
        ctor: function (T, cmp){
            this.T = T;
            this.cmp = null;
            System.Object.ctor.call(this);
            this.cmp = cmp;
        },
        Compare: function (x, y){
            return this.cmp.Compare(x, y);
        }
    }
};
jst_pushOrReplace(SharpKit$JavaScript$Private$JsComparerHelper$1);

var System$Attribute = {
    fullname: "System.Attribute",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Attribute);

var System$Collections$Comparer = {
    fullname: "System.Collections.Comparer",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            System.Collections.Comparer._Default = null;
        },
        Default$$: "SharpKit.JavaScript.Private.JsImplComparer",
        get_Default: function (){
            if (System.Collections.Comparer._Default == null)
                System.Collections.Comparer._Default = new SharpKit.JavaScript.Private.DefaultComparer.ctor();
            return System.Collections.Comparer._Default;
        }
    },
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.IComparer"],
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Collections$Comparer);

var SharpKit$JavaScript$Private$DefaultComparer = {
    fullname: "SharpKit.JavaScript.Private.DefaultComparer",
    baseTypeName: "System.Collections.Comparer",
    staticDefinition: {
        cctor: function (){
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Collections.Comparer.ctor.call(this);
        },
        Compare: function (x, y){
            var xx = x;
            var yy = y;
            if (xx.CompareTo)
                return xx.CompareTo(y);
            if (xx > yy)
                return 1;
            if (xx < yy)
                return -1;
            return 0;
        }
    }
};
jst_pushOrReplace(SharpKit$JavaScript$Private$DefaultComparer);

var System$Collections$Generic$Comparer$1 = {
    fullname: "System.Collections.Generic.Comparer$1",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (T){
            System.Collections.Generic.Comparer$1._Default = null;
        },
        Default$$: "SharpKit.JavaScript.Private.JsImplComparer`1[[`0]]",
        get_Default: function (){
            if (System.Collections.Generic.Comparer$1._Default == null)
                System.Collections.Generic.Comparer$1._Default = new SharpKit.JavaScript.Private.DefaultComparer.ctor();
            return System.Collections.Generic.Comparer$1._Default;
        }
    },
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IComparer$1"],
    Kind: "Class",
    definition: {
        ctor: function (T){
            this.T = T;
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Collections$Generic$Comparer$1);

var System$Collections$Generic$KeyNotFoundException = {
    fullname: "System.Collections.Generic.KeyNotFoundException",
    baseTypeName: "System.Exception",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Exception.ctor$$String.call(this, "JsImplKeyNotFoundException");
        },
        ctor$$String: function (s){
            System.Exception.ctor$$String.call(this, "JsImplKeyNotFoundException: " + s);
        },
        ctor$$String$$Exception: function (s, innerException){
            System.Exception.ctor$$String$$Exception.call(this, "JsImplKeyNotFoundException: " + s, innerException);
        }
    }
};
jst_pushOrReplace(System$Collections$Generic$KeyNotFoundException);

var System$Collections$Generic$IEnumerator$1 = {
    fullname: "System.Collections.Generic.IEnumerator$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$Collections$Generic$IEnumerator$1);

var System$Collections$Generic$IEnumerable$1 = {
    fullname: "System.Collections.Generic.IEnumerable$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.IEnumerable"],
    Kind: "Interface"
};
jst_pushOrReplace(System$Collections$Generic$IEnumerable$1);

var System$Collections$Generic$IList$1 = {
    fullname: "System.Collections.Generic.IList$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.ICollection$1"],
    Kind: "Interface"
};
jst_pushOrReplace(System$Collections$Generic$IList$1);

var System$Collections$Generic$ICollection$1 = {
    fullname: "System.Collections.Generic.ICollection$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IEnumerable$1"],
    Kind: "Interface"
};
jst_pushOrReplace(System$Collections$Generic$ICollection$1);

var System$Collections$Generic$IDictionary$2 = {
    fullname: "System.Collections.Generic.IDictionary$2",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$Collections$Generic$IDictionary$2);

var System$Collections$Generic$ISet$1 = {
    fullname: "System.Collections.Generic.ISet$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.ICollection$1", "System.Collections.Generic.IEnumerable$1", "System.Collections.IEnumerable"],
    Kind: "Interface"
};
jst_pushOrReplace(System$Collections$Generic$ISet$1);

var System$Collections$IEqualityComparer = {
    fullname: "System.Collections.IEqualityComparer",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$Collections$IEqualityComparer);

var System$Collections$Generic$IEqualityComparer$1 = {
    fullname: "System.Collections.Generic.IEqualityComparer$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$Collections$Generic$IEqualityComparer$1);

var System$Comparison$1 = {
    fullname: "System.Comparison$1",
    Kind: "Delegate",
    definition: {
        ctor: function (T, obj, func){
            this.T = T;
            System.MulticastDelegate.ctor.call(this, obj, func);
        }
    }
};
jst_pushOrReplace(System$Comparison$1);

var System$Collections$IDictionary = {
    fullname: "System.Collections.IDictionary",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.ICollection", "System.Collections.IEnumerable"],
    Kind: "Interface"
};
jst_pushOrReplace(System$Collections$IDictionary);

var System$Collections$IEnumerable = {
    fullname: "System.Collections.IEnumerable",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$Collections$IEnumerable);

var System$Collections$IEnumerator = {
    fullname: "System.Collections.IEnumerator",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$Collections$IEnumerator);

var System$Collections$ICollection = {
    fullname: "System.Collections.ICollection",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.IEnumerable"],
    Kind: "Interface"
};
jst_pushOrReplace(System$Collections$ICollection);

var System$Collections$IList = {
    fullname: "System.Collections.IList",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.ICollection"],
    Kind: "Interface"
};
jst_pushOrReplace(System$Collections$IList);

var System$IComparer = {
    fullname: "System.IComparer",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$IComparer);

var System$Collections$Specialized$NotifyCollectionChangedAction = {
    fullname: "System.Collections.Specialized.NotifyCollectionChangedAction",
    staticDefinition: {
        Add: 0,
        Remove: 1,
        Replace: 2,
        Move: 3,
        Reset: 4
    },
    Kind: "Enum"
};
jst_pushOrReplace(System$Collections$Specialized$NotifyCollectionChangedAction);

var System$Collections$Specialized$INotifyCollectionChanged = {
    fullname: "System.Collections.Specialized.INotifyCollectionChanged",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$Collections$Specialized$INotifyCollectionChanged);

var System$Collections$Specialized$NotifyCollectionChangedEventArgs = {
    fullname: "System.Collections.Specialized.NotifyCollectionChangedEventArgs",
    baseTypeName: "System.EventArgs",
    staticDefinition: {
        cctor: function (){
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor$$NotifyCollectionChangedAction: function (action){
            this.action = 0;
            this.oldItems = null;
            this.newItems = null;
            this.oldIndex = -1;
            this.newIndex = -1;
            System.EventArgs.ctor.call(this);
            this.action = action;
            if (action != 4)
                throw $CreateException(new System.ArgumentException.ctor$$String$$String("This constructor can only be used with the Reset action.", "action"), new Error());
        },
        ctor$$NotifyCollectionChangedAction$$IList: function (action, changedItems){
            this.action = 0;
            this.oldItems = null;
            this.newItems = null;
            this.oldIndex = -1;
            this.newIndex = -1;
            System.Collections.Specialized.NotifyCollectionChangedEventArgs.ctor$$NotifyCollectionChangedAction$$IList$$Int32.call(this, action, changedItems, -1);
        },
        ctor$$NotifyCollectionChangedAction$$Object: function (action, changedItem){
            this.action = 0;
            this.oldItems = null;
            this.newItems = null;
            this.oldIndex = -1;
            this.newIndex = -1;
            System.Collections.Specialized.NotifyCollectionChangedEventArgs.ctor$$NotifyCollectionChangedAction$$Object$$Int32.call(this, action, changedItem, -1);
        },
        ctor$$NotifyCollectionChangedAction$$IList$$IList: function (action, newItems, oldItems){
            this.action = 0;
            this.oldItems = null;
            this.newItems = null;
            this.oldIndex = -1;
            this.newIndex = -1;
            System.Collections.Specialized.NotifyCollectionChangedEventArgs.ctor$$NotifyCollectionChangedAction$$IList$$IList$$Int32.call(this, action, newItems, oldItems, -1);
        },
        ctor$$NotifyCollectionChangedAction$$IList$$Int32: function (action, changedItems, startingIndex){
            this.action = 0;
            this.oldItems = null;
            this.newItems = null;
            this.oldIndex = -1;
            this.newIndex = -1;
            System.EventArgs.ctor.call(this);
            this.action = action;
            if (action == 0 || action == 1){
                if (changedItems == null)
                    throw $CreateException(new System.ArgumentNullException.ctor$$String("changedItems"), new Error());
                if (startingIndex < -1)
                    throw $CreateException(new System.ArgumentException.ctor$$String$$String("The value of startingIndex must be -1 or greater.", "startingIndex"), new Error());
                if (action == 0)
                    this.InitializeAdd(changedItems, startingIndex);
                else
                    this.InitializeRemove(changedItems, startingIndex);
            }
            else if (action == 4){
                if (changedItems != null)
                    throw $CreateException(new System.ArgumentException.ctor$$String$$String("This constructor can only be used with the Reset action if changedItems is null", "changedItems"), new Error());
                if (startingIndex != -1)
                    throw $CreateException(new System.ArgumentException.ctor$$String$$String("This constructor can only be used with the Reset action if startingIndex is -1", "startingIndex"), new Error());
            }
            else {
                throw $CreateException(new System.ArgumentException.ctor$$String$$String("This constructor can only be used with the Reset, Add, or Remove actions.", "action"), new Error());
            }
        },
        ctor$$NotifyCollectionChangedAction$$Object$$Int32: function (action, changedItem, index){
            this.action = 0;
            this.oldItems = null;
            this.newItems = null;
            this.oldIndex = -1;
            this.newIndex = -1;
            System.EventArgs.ctor.call(this);
            var changedItems = [changedItem];
            this.action = action;
            if (action == 0)
                this.InitializeAdd(changedItems, index);
            else if (action == 1)
                this.InitializeRemove(changedItems, index);
            else if (action == 4){
                if (changedItem != null)
                    throw $CreateException(new System.ArgumentException.ctor$$String$$String("This constructor can only be used with the Reset action if changedItem is null", "changedItem"), new Error());
                if (index != -1)
                    throw $CreateException(new System.ArgumentException.ctor$$String$$String("This constructor can only be used with the Reset action if index is -1", "index"), new Error());
            }
            else {
                throw $CreateException(new System.ArgumentException.ctor$$String$$String("This constructor can only be used with the Reset, Add, or Remove actions.", "action"), new Error());
            }
        },
        ctor$$NotifyCollectionChangedAction$$Object$$Object: function (action, newItem, oldItem){
            this.action = 0;
            this.oldItems = null;
            this.newItems = null;
            this.oldIndex = -1;
            this.newIndex = -1;
            System.Collections.Specialized.NotifyCollectionChangedEventArgs.ctor$$NotifyCollectionChangedAction$$Object$$Object$$Int32.call(this, action, newItem, oldItem, -1);
        },
        ctor$$NotifyCollectionChangedAction$$IList$$IList$$Int32: function (action, newItems, oldItems, startingIndex){
            this.action = 0;
            this.oldItems = null;
            this.newItems = null;
            this.oldIndex = -1;
            this.newIndex = -1;
            System.EventArgs.ctor.call(this);
            this.action = action;
            if (action != 2)
                throw $CreateException(new System.ArgumentException.ctor$$String$$String("This constructor can only be used with the Replace action.", "action"), new Error());
            if (newItems == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("newItems"), new Error());
            if (oldItems == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("oldItems"), new Error());
            this.oldItems = oldItems;
            this.newItems = newItems;
            this.oldIndex = startingIndex;
            this.newIndex = startingIndex;
        },
        ctor$$NotifyCollectionChangedAction$$IList$$Int32$$Int32: function (action, changedItems, index, oldIndex){
            this.action = 0;
            this.oldItems = null;
            this.newItems = null;
            this.oldIndex = -1;
            this.newIndex = -1;
            System.EventArgs.ctor.call(this);
            this.action = action;
            if (action != 3)
                throw $CreateException(new System.ArgumentException.ctor$$String$$String("This constructor can only be used with the Move action.", "action"), new Error());
            if (index < -1)
                throw $CreateException(new System.ArgumentException.ctor$$String$$String("The value of index must be -1 or greater.", "index"), new Error());
            this.InitializeMove(changedItems, index, oldIndex);
        },
        ctor$$NotifyCollectionChangedAction$$Object$$Int32$$Int32: function (action, changedItem, index, oldIndex){
            this.action = 0;
            this.oldItems = null;
            this.newItems = null;
            this.oldIndex = -1;
            this.newIndex = -1;
            System.Collections.Specialized.NotifyCollectionChangedEventArgs.ctor$$NotifyCollectionChangedAction$$IList$$Int32$$Int32.call(this, action, [changedItem], index, oldIndex);
        },
        ctor$$NotifyCollectionChangedAction$$Object$$Object$$Int32: function (action, newItem, oldItem, index){
            this.action = 0;
            this.oldItems = null;
            this.newItems = null;
            this.oldIndex = -1;
            this.newIndex = -1;
            System.EventArgs.ctor.call(this);
            this.action = action;
            if (action != 2)
                throw $CreateException(new System.ArgumentException.ctor$$String$$String("This constructor can only be used with the Replace action.", "action"), new Error());
            this.InitializeReplace([newItem], [oldItem], index);
        },
        Action$$: "System.Collections.Specialized.NotifyCollectionChangedAction",
        get_Action: function (){
            return this.action;
        },
        NewItems$$: "System.Collections.IList",
        get_NewItems: function (){
            return this.newItems;
        },
        NewStartingIndex$$: "System.Int32",
        get_NewStartingIndex: function (){
            return this.newIndex;
        },
        OldItems$$: "System.Collections.IList",
        get_OldItems: function (){
            return this.oldItems;
        },
        OldStartingIndex$$: "System.Int32",
        get_OldStartingIndex: function (){
            return this.oldIndex;
        },
        InitializeAdd: function (items, index){
            this.newItems = new System.Collections.Generic.List$1.ctor(System.Object.ctor);
            var $it1 = items.GetEnumerator();
            while ($it1.MoveNext()){
                var item = $it1.get_Current();
                this.newItems.Add(item);
            }
            this.newIndex = index;
        },
        InitializeRemove: function (items, index){
            this.oldItems = new System.Collections.Generic.List$1.ctor(System.Object.ctor);
            var $it2 = items.GetEnumerator();
            while ($it2.MoveNext()){
                var item = $it2.get_Current();
                this.oldItems.Add(item);
            }
            this.oldIndex = index;
        },
        InitializeMove: function (changedItems, newItemIndex, oldItemIndex){
            this.InitializeAdd(changedItems, newItemIndex);
            this.InitializeRemove(changedItems, oldItemIndex);
        },
        InitializeReplace: function (addedItems, removedItems, index){
            this.InitializeAdd(addedItems, index);
            this.InitializeRemove(removedItems, index);
        }
    }
};
jst_pushOrReplace(System$Collections$Specialized$NotifyCollectionChangedEventArgs);

var System$ComponentModel$AsyncCompletedEventHandler = {
    fullname: "System.ComponentModel.AsyncCompletedEventHandler",
    Kind: "Delegate",
    definition: {
        ctor: function (obj, func){
            System.MulticastDelegate.ctor.call(this, obj, func);
        }
    }
};
jst_pushOrReplace(System$ComponentModel$AsyncCompletedEventHandler);

var System$ComponentModel$AsyncCompletedEventArgs = {
    fullname: "System.ComponentModel.AsyncCompletedEventArgs",
    baseTypeName: "System.EventArgs",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (error, cancelled, userState){
            this._error = null;
            this._cancelled = false;
            this._userState = null;
            System.EventArgs.ctor.call(this);
            this._error = error;
            this._cancelled = cancelled;
            this._userState = userState;
        },
        RaiseExceptionIfNecessary: function (){
            if (this._error != null)
                throw $CreateException(new System.Reflection.TargetInvocationException.ctor$$Exception(this._error), new Error());
            else if (this._cancelled)
                throw $CreateException(new System.InvalidOperationException.ctor$$String("The operation was cancelled"), new Error());
        },
        Cancelled$$: "System.Boolean",
        get_Cancelled: function (){
            return this._cancelled;
        },
        Error$$: "System.Exception",
        get_Error: function (){
            return this._error;
        },
        UserState$$: "System.Object",
        get_UserState: function (){
            return this._userState;
        }
    }
};
jst_pushOrReplace(System$ComponentModel$AsyncCompletedEventArgs);

var System$ComponentModel$CancelEventHandler = {
    fullname: "System.ComponentModel.CancelEventHandler",
    Kind: "Delegate",
    definition: {
        ctor: function (obj, func){
            System.MulticastDelegate.ctor.call(this, obj, func);
        }
    }
};
jst_pushOrReplace(System$ComponentModel$CancelEventHandler);

var System$ComponentModel$CancelEventArgs = {
    fullname: "System.ComponentModel.CancelEventArgs",
    baseTypeName: "System.EventArgs",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            this._Cancel = false;
            System.EventArgs.ctor.call(this);
            this._Cancel = false;
        },
        ctor$$Boolean: function (cancel){
            this._Cancel = false;
            System.EventArgs.ctor.call(this);
            this._Cancel = cancel;
        },
        Cancel$$: "System.Boolean",
        get_Cancel: function (){
            return this._Cancel;
        },
        set_Cancel: function (value){
            this._Cancel = value;
        }
    }
};
jst_pushOrReplace(System$ComponentModel$CancelEventArgs);

var System$ComponentModel$INotifyPropertyChanging = {
    fullname: "System.ComponentModel.INotifyPropertyChanging",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$ComponentModel$INotifyPropertyChanging);
var System$ComponentModel$INotifyPropertyChanged = {
    fullname: "System.ComponentModel.INotifyPropertyChanged",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$ComponentModel$INotifyPropertyChanged);
var System$ComponentModel$PropertyChangedEventHandler = {
    fullname: "System.ComponentModel.PropertyChangedEventHandler",
    Kind: "Delegate",
    definition: {
        ctor: function (obj, func){
            System.MulticastDelegate.ctor.call(this, obj, func);
        }
    }
};
jst_pushOrReplace(System$ComponentModel$PropertyChangedEventHandler);
var System$ComponentModel$PropertyChangedEventArgs = {
    fullname: "System.ComponentModel.PropertyChangedEventArgs",
    baseTypeName: "System.EventArgs",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (propertyName){
            this._PropertyName = null;
            System.EventArgs.ctor.call(this);
            this._PropertyName = propertyName;
        },
        PropertyName$$: "System.String",
        get_PropertyName: function (){
            return this._PropertyName;
        }
    }
};
jst_pushOrReplace(System$ComponentModel$PropertyChangedEventArgs);
//var System$DateTime = {
//    fullname: "System.DateTime",
//    baseTypeName: "Date",
//    staticDefinition: {
//        cctor: function (){
//            System.DateTime.MinValue = null;
//            System.DateTime.MaxValue = null;
//            System.DateTime.MinValue = new Date(0);
//            System.DateTime.MinValue.setUTCFullYear(1, 0, 1);
//            System.DateTime.MaxValue = new Date(0);
//            System.DateTime.MaxValue.setUTCFullYear(9999, 11, 31);
//        },
//        Parse$$String: function (str){
//            return new Date(Date.parse(str));
//        },
//        DaysInMonth: function (year, month){
//            return 32 - new Date(year, month - 1, 32).getDate();
//        },
//        Compare: function (t1, t2){
//            return t1.valueOf() - t2.valueOf();
//        },
//        op_Equality: function (t1, t2){
//            return System.DateTime.Compare(t1, t2) == 0;
//        },
//        op_Inequality: function (t1, t2){
//            return System.DateTime.Compare(t1, t2) != 0;
//        },
//        op_GreaterThan$$DateTime$$DateTime: function (t1, t2){
//            return System.DateTime.Compare(t1, t2) > 0;
//        },
//        op_LessThan$$DateTime$$DateTime: function (t1, t2){
//            return System.DateTime.Compare(t1, t2) < 0;
//        },
//        op_LessThanOrEqual$$DateTime$$DateTime: function (t1, t2){
//            return System.DateTime.Compare(t1, t2) <= 0;
//        },
//        op_GreaterThanOrEqual$$DateTime$$DateTime: function (t1, t2){
//            return System.DateTime.Compare(t1, t2) >= 0;
//        },
//        op_Subtraction$$DateTime$$DateTime: function (t1, t2){
//            return System.TimeSpan.FromMilliseconds(t1.getTime() - t2.getTime());
//        },
//        op_Subtraction$$DateTime$$TimeSpan: function (t1, t2){
//            return new Date(t1.getDate() - Cast(t2.get_TotalMilliseconds(), System.Int64.ctor));
//        },
//        op_Addition$$DateTime$$DateTime: function (t1, t2){
//            return System.TimeSpan.FromMilliseconds(t1.getTime() + t2.getTime());
//        },
//        op_Addition$$DateTime$$TimeSpan: function (t1, t2){
//            return new Date(t1.getDate() + Cast(t2.get_TotalMilliseconds(), System.Int64.ctor));
//        },
//        CompareJsDates: function (d1, d2){
//            if (d1 == d2)
//                return 0;
//            if (d1 == null)
//                return 1;
//            if (d2 == null)
//                return -1;
//            return d1.valueOf() - d2.valueOf();
//        },
//        Now$$: "SharpKit.JavaScript.Private.JsImplDateTime",
//        get_Now: function (){
//            return new Date();
//        },
//        UtcNow$$: "SharpKit.JavaScript.Private.JsImplDateTime",
//        get_UtcNow: function (){
//            return System.DateTime.get_Now();
//        }
//    },
//    assemblyName: "SharpKit.JsClr",
//    Kind: "Class",
//    definition: {
//        ctor: function (){
//            var x = System.DateTime.MinValue;
//            return x;
//        },
//        ctor$$Int64: function (ticks){
//            throw $CreateException(new System.NotSupportedException.ctor$$String("Ticks are not available due to JavaScript number limitation"), new Error());
//        },
//        ctor$$Int32$$Int32$$Int32: function (year, month, day){
//            var x = new Date();
//            x.set_Year(year);
//            x.set_Month(month);
//            x.set_Day(day);
//            return x;
//        },
//        ctor$$Int32$$Int32$$Int32$$Int32$$Int32$$Int32: function (year, month, day, hour, minute, second){
//            var x = new Date();
//            x.set_Year(year);
//            x.set_Month(month);
//            x.set_Day(day);
//            x.set_Hour(hour);
//            x.set_Minute(minute);
//            x.set_Second(second);
//            return x;
//        },
//        ctor$$Int32$$Int32$$Int32$$Int32$$Int32$$Int32$$DateTimeKind: function (year, month, day, hour, minute, second, kind){
//            var x = new Date();
//            x._Kind = kind;
//            x.set_Year(year);
//            x.set_Month(month);
//            x.set_Day(day);
//            x.set_Hour(hour);
//            x.set_Minute(minute);
//            x.set_Second(second);
//            return x;
//        },
//        Equals$$Object: function (obj){
//            if (obj == null)
//                return false;
//            return obj.valueOf() == this.valueOf();
//        },
//        GetHashCode: function (){
//            return this.valueOf();
//        }
//    }
//};
//jst_pushOrReplace(System$DateTime);
var System$DateTimeKind = {
    fullname: "System.DateTimeKind",
    staticDefinition: {
        Unspecified: 0,
        Utc: 1,
        Local: 2
    },
    Kind: "Enum"
};
jst_pushOrReplace(System$DateTimeKind);
var System$Delegate = {
    fullname: "System.Delegate",
    baseTypeName: "System.Object",
    staticDefinition: {
        Combine$$Delegate$Array: function (delegates){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Combine$$Delegate$$Delegate: function (delegate1, delegate2){
            return CombineDelegates(delegate1, delegate2);
        },
        Remove: function (delegate1, delegate2){
            return RemoveDelegate(delegate1, delegate2);
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        },
        DynamicInvoke: function (args){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        }
    }
};
jst_pushOrReplace(System$Delegate);
var System$MulticastDelegate = {
    fullname: "System.MulticastDelegate",
    baseTypeName: "System.Delegate",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Delegate.ctor.call(this);
        },
        GetInvocationList: function (){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Equals$$MulticastDelegate: function (del){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Invoke: function (varargs){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        }
    }
};
jst_pushOrReplace(System$MulticastDelegate);
var System$Action = {
    fullname: "System.Action",
    Kind: "Delegate",
    definition: {
        ctor: function (obj, func){
            System.MulticastDelegate.ctor.call(this, obj, func);
        }
    }
};
jst_pushOrReplace(System$Action);
var System$Action$1 = {
    fullname: "System.Action$1",
    Kind: "Delegate",
    definition: {
        ctor: function (T, obj, func){
            this.T = T;
            System.MulticastDelegate.ctor.call(this, obj, func);
        }
    }
};
jst_pushOrReplace(System$Action$1);
var System$Action$2 = {
    fullname: "System.Action$2",
    Kind: "Delegate",
    definition: {
        ctor: function (T1, T2, obj, func){
            this.T1 = T1;
            this.T2 = T2;
            System.MulticastDelegate.ctor.call(this, obj, func);
        }
    }
};
jst_pushOrReplace(System$Action$2);
var System$Action$3 = {
    fullname: "System.Action$3",
    Kind: "Delegate",
    definition: {
        ctor: function (T1, T2, T3, obj, func){
            this.T1 = T1;
            this.T2 = T2;
            this.T3 = T3;
            System.MulticastDelegate.ctor.call(this, obj, func);
        }
    }
};
jst_pushOrReplace(System$Action$3);
var System$Func$1 = {
    fullname: "System.Func$1",
    Kind: "Delegate",
    definition: {
        ctor: function (TResult, obj, func){
            this.TResult = TResult;
            System.MulticastDelegate.ctor.call(this, obj, func);
        }
    }
};
jst_pushOrReplace(System$Func$1);
var System$Func$2 = {
    fullname: "System.Func$2",
    Kind: "Delegate",
    definition: {
        ctor: function (T, TResult, obj, func){
            this.T = T;
            this.TResult = TResult;
            System.MulticastDelegate.ctor.call(this, obj, func);
        }
    }
};
jst_pushOrReplace(System$Func$2);
var System$Func$3 = {
    fullname: "System.Func$3",
    Kind: "Delegate",
    definition: {
        ctor: function (T1, T2, TResult, obj, func){
            this.T1 = T1;
            this.T2 = T2;
            this.TResult = TResult;
            System.MulticastDelegate.ctor.call(this, obj, func);
        }
    }
};
jst_pushOrReplace(System$Func$3);
var System$Func$4 = {
    fullname: "System.Func$4",
    Kind: "Delegate",
    definition: {
        ctor: function (T1, T2, T3, TResult, obj, func){
            this.T1 = T1;
            this.T2 = T2;
            this.T3 = T3;
            this.TResult = TResult;
            System.MulticastDelegate.ctor.call(this, obj, func);
        }
    }
};
jst_pushOrReplace(System$Func$4);
var System$EventHandler = {
    fullname: "System.EventHandler",
    Kind: "Delegate",
    definition: {
        ctor: function (obj, func){
            System.MulticastDelegate.ctor.call(this, obj, func);
        }
    }
};
jst_pushOrReplace(System$EventHandler);
var System$EventHandler$1 = {
    fullname: "System.EventHandler$1",
    Kind: "Delegate",
    definition: {
        ctor: function (TEventArgs, obj, func){
            this.TEventArgs = TEventArgs;
            System.MulticastDelegate.ctor.call(this, obj, func);
        }
    }
};
jst_pushOrReplace(System$EventHandler$1);
var System$Predicate$1 = {
    fullname: "System.Predicate$1",
    Kind: "Delegate",
    definition: {
        ctor: function (T, obj, func){
            this.T = T;
            System.MulticastDelegate.ctor.call(this, obj, func);
        }
    }
};
jst_pushOrReplace(System$Predicate$1);
var System$Enum = {
    fullname: "System.Enum",
    baseTypeName: "System.Object",
    staticDefinition: {
        GetName: function (enumType, value){
            if (enumType == null || value == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("enumType"), new Error());
            var jsType = enumType._JsType;
            for (var p in jsType.staticDefinition)
                if (p == value)
                    return p;
            throw $CreateException(new System.ArgumentException.ctor$$String("value"), new Error());
        },
        GetNames: function (enumType){
            if (enumType == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("enumType"), new Error());
            var jsType = enumType._JsType;
            var array = new Array();
            for (var p in jsType.staticDefinition)
                array.push(p);
            return array;
        },
        GetValues: function (enumType){
            if (enumType == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("enumType"), new Error());
            var jsType = enumType._JsType;
            var array = new Array();
            for (var p in jsType.staticDefinition)
                array.push(jsType.staticDefinition[p]);
            return array;
        },
        Parse$$Type$$String: function (enumType, value){
            return System.Enum.Parse$$Type$$String$$Boolean(enumType, value, false);
        },
        Parse$$Type$$String$$Boolean: function (enumType, value, ignoreCase){
            if (enumType == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("enumType"), new Error());
            if (value == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("value"), new Error());
            if (value.trim() == System.String.Empty)
                throw $CreateException(new System.ArgumentException.ctor$$String("value is either an empty string or only contains white space."), new Error());
            var jsType = enumType._JsType;
            for (var p in jsType.staticDefinition)
                if (ignoreCase ? p.toUpperCase() == value.toUpperCase() : p == value)
                    return jsType.staticDefinition[p];
            throw $CreateException(new System.ArgumentException.ctor$$String("value is a name, but not one of the named constants defined for the enumeration."), new Error());
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Enum);
var System$Environment = {
    fullname: "System.Environment",
    baseTypeName: "System.Object",
    staticDefinition: {
        GetResourceString: function (p){
            return p;
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Environment);
var System$EventArgs = {
    fullname: "System.EventArgs",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$EventArgs);
var System$Exception = {
    fullname: "System.Exception",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor$$String$$Exception: function (message, innerException){
            this._InnerException = null;
            this._Message = null;
            System.Object.ctor.call(this);
            this._Message = message;
            this._InnerException = innerException;
        },
        ctor$$String: function (message){
            this._InnerException = null;
            this._Message = null;
            System.Object.ctor.call(this);
            this._Message = message;
        },
        ctor: function (){
            this._InnerException = null;
            this._Message = null;
            System.Object.ctor.call(this);
        },
        InnerException$$: "System.Exception",
        get_InnerException: function (){
            return this._InnerException;
        },
        Message$$: "System.String",
        get_Message: function (){
            return this._Message;
        },
        toString: function (){
            var ie = this.get_InnerException();
            if (ie == null)
                return this.get_Message();
            return this.get_Message() + ", " + this.get_InnerException();
        },
        SetErrorCode: function (hr){
        }
    }
};
jst_pushOrReplace(System$Exception);
var System$NotImplementedException = {
    fullname: "System.NotImplementedException",
    baseTypeName: "System.Exception",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Exception.ctor$$String.call(this, "NotImplementedException");
        },
        ctor$$String: function (s){
            System.Exception.ctor$$String.call(this, "NotImplementedException: " + s);
        }
    }
};
jst_pushOrReplace(System$NotImplementedException);
var System$SystemException = {
    fullname: "System.SystemException",
    baseTypeName: "System.Exception",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Exception.ctor$$String.call(this, System.Environment.GetResourceString("Arg_SystemException"));
            this.SetErrorCode(-2146233087);
        },
        ctor$$String: function (message){
            System.Exception.ctor$$String.call(this, message);
            this.SetErrorCode(-2146233087);
        },
        ctor$$String$$Exception: function (message, innerException){
            System.Exception.ctor$$String$$Exception.call(this, message, innerException);
            this.SetErrorCode(-2146233087);
        }
    }
};
jst_pushOrReplace(System$SystemException);
var System$ArgumentException = {
    fullname: "System.ArgumentException",
    baseTypeName: "System.SystemException",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            this.m_paramName = null;
            System.SystemException.ctor$$String.call(this, System.Environment.GetResourceString("Arg_ArgumentException"));
            this.SetErrorCode(-2147024809);
        },
        ctor$$String: function (message){
            this.m_paramName = null;
            System.SystemException.ctor$$String.call(this, message);
            this.SetErrorCode(-2147024809);
        },
        ctor$$String$$Exception: function (message, innerException){
            this.m_paramName = null;
            System.SystemException.ctor$$String$$Exception.call(this, message, innerException);
        },
        ctor$$String$$String: function (message, paramName){
            this.m_paramName = null;
            System.SystemException.ctor$$String.call(this, message);
            this.m_paramName = paramName;
            this.SetErrorCode(-2147024809);
        },
        ctor$$String$$String$$Exception: function (message, paramName, innerException){
            this.m_paramName = null;
            System.SystemException.ctor$$String$$Exception.call(this, message, innerException);
            this.m_paramName = paramName;
            this.SetErrorCode(-2147024809);
        },
        ParamName$$: "System.String",
        get_ParamName: function (){
            return this.m_paramName;
        }
    }
};
jst_pushOrReplace(System$ArgumentException);
var System$NullReferenceException = {
    fullname: "System.NullReferenceException",
    baseTypeName: "System.SystemException",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.SystemException.ctor$$String.call(this, "Object reference not set to an instance of object");
        },
        ctor$$String: function (message){
            System.SystemException.ctor$$String.call(this, message);
        }
    }
};
jst_pushOrReplace(System$NullReferenceException);
var System$NotSupportedException = {
    fullname: "System.NotSupportedException",
    baseTypeName: "System.SystemException",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.SystemException.ctor$$String.call(this, "Arg_NotSupportedException");
        },
        ctor$$String: function (message){
            System.SystemException.ctor$$String.call(this, message);
        },
        ctor$$String$$Exception: function (message, innerException){
            System.SystemException.ctor$$String$$Exception.call(this, message, innerException);
        }
    }
};
jst_pushOrReplace(System$NotSupportedException);
var System$ArgumentOutOfRangeException = {
    fullname: "System.ArgumentOutOfRangeException",
    baseTypeName: "System.ArgumentException",
    staticDefinition: {
        cctor: function (){
            System.ArgumentOutOfRangeException._rangeMessage = null;
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            this.m_actualValue = null;
            System.ArgumentException.ctor$$String.call(this, "Arg_ArgumentOutOfRangeException");
            this.SetErrorCode(-2146233086);
        },
        ctor$$String: function (paramName){
            this.m_actualValue = null;
            System.ArgumentException.ctor$$String$$String.call(this, "Arg_ArgumentOutOfRangeException", paramName);
            this.SetErrorCode(-2146233086);
        },
        ctor$$String$$Exception: function (message, innerException){
            this.m_actualValue = null;
            System.ArgumentException.ctor$$String$$Exception.call(this, message, innerException);
            this.SetErrorCode(-2146233086);
        },
        ctor$$String$$String: function (paramName, message){
            this.m_actualValue = null;
            System.ArgumentException.ctor$$String$$String.call(this, message, paramName);
            this.SetErrorCode(-2146233086);
        },
        ctor$$String$$Object$$String: function (paramName, actualValue, message){
            this.m_actualValue = null;
            System.ArgumentException.ctor$$String$$String.call(this, message, paramName);
            this.m_actualValue = actualValue;
            this.SetErrorCode(-2146233086);
        },
        ActualValue$$: "System.Object",
        get_ActualValue: function (){
            return this.m_actualValue;
        },
        RangeMessage$$: "System.String",
        get_RangeMessage: function (){
            if (System.ArgumentOutOfRangeException._rangeMessage == null){
                System.ArgumentOutOfRangeException._rangeMessage = "Arg_ArgumentOutOfRangeException";
            }
            return System.ArgumentOutOfRangeException._rangeMessage;
        }
    }
};
jst_pushOrReplace(System$ArgumentOutOfRangeException);
var System$Guid = {
    fullname: "System.Guid",
    baseTypeName: "System.ValueType",
    staticDefinition: {
        cctor: function (){
            System.Guid.Empty = new System.Guid.ctor();
            System.Guid._random = new System.Random.ctor();
            System.Guid._hexChars = "0123456789abcdef";
        },
        NewGuid: function (){
            var array = new Uint8Array(16);
            for (var i = 0; i < 16; i++){
                array[i] = System.Guid._random.Next$$Int32(256);
            }
            var result = new System.Guid.ctor$$Byte$Array(array);
            result._d = ((result._d & 63) | 128);
            result._c = ((result._c & 4095) | 16384);
            return result;
        },
        AppendByte: function (builder, value){
            builder.Append$$String(System.Guid.ToHex(value >> 4 & 15));
            builder.Append$$String(System.Guid.ToHex((value & 15)));
        },
        AppendInt: function (builder, value){
            builder.Append$$String(System.Guid.ToHex(value >> 28 & 15));
            builder.Append$$String(System.Guid.ToHex(value >> 24 & 15));
            builder.Append$$String(System.Guid.ToHex(value >> 20 & 15));
            builder.Append$$String(System.Guid.ToHex(value >> 16 & 15));
            builder.Append$$String(System.Guid.ToHex(value >> 12 & 15));
            builder.Append$$String(System.Guid.ToHex(value >> 8 & 15));
            builder.Append$$String(System.Guid.ToHex(value >> 4 & 15));
            builder.Append$$String(System.Guid.ToHex(value & 15));
        },
        AppendShort: function (builder, value){
            builder.Append$$String(System.Guid.ToHex(value >> 12 & 15));
            builder.Append$$String(System.Guid.ToHex(value >> 8 & 15));
            builder.Append$$String(System.Guid.ToHex(value >> 4 & 15));
            builder.Append$$String(System.Guid.ToHex((value & 15)));
        },
        CheckArray: function (o, l){
            System.Guid.CheckNull(o);
            System.Guid.CheckLength(o, l);
        },
        CheckLength: function (o, l){
            if (o.length != l){
                throw $CreateException(new System.ArgumentException.ctor$$String(System.String.Format$$String$$Object("Array should be exactly {0} bytes long.", l)), new Error());
            }
        },
        CheckNull: function (o){
            if (o == null){
                throw $CreateException(new System.ArgumentNullException.ctor$$String("Value cannot be null."), new Error());
            }
        },
        Compare: function (x, y){
            return (x >= y) ? 1 : -1;
        },
        CreateFormatException: function (s){
            return new System.FormatException.ctor$$String(System.String.Format$$String$$Object("Invalid Guid format: {0}", s));
        },
        ToHex: function (b){
            return System.Guid._hexChars.substr(b, 1);
        },
        op_Equality: function (a, b){
            return a.Equals$$Guid(b);
        },
        op_Inequality: function (a, b){
            return !a.Equals$$Guid(b);
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Struct",
    definition: {
        ctor$$Byte$Array: function (b){
            this._i = 0;
            this._h = 0;
            this._k = 0;
            this._j = 0;
            this._g = 0;
            this._c = 0;
            this._b = 0;
            this._a = 0;
            this._f = 0;
            this._e = 0;
            this._d = 0;
            System.ValueType.ctor.call(this);
            this._a = b[0] | (b[1] << 8) | (b[2] << 16) | (b[3] << 24);
            this._b = (b[4] | (b[5] << 8));
            this._c = (b[6] | (b[7] << 8));
            this._d = b[8];
            this._e = b[9];
            this._f = b[10];
            this._g = b[11];
            this._h = b[12];
            this._i = b[13];
            this._j = b[14];
            this._k = b[15];
        },
        ctor$$UInt32$$UInt16$$UInt16$$Byte$$Byte$$Byte$$Byte$$Byte$$Byte$$Byte$$Byte: function (a, b, c, d, e, f, g, h, i, j, k){
            this._i = 0;
            this._h = 0;
            this._k = 0;
            this._j = 0;
            this._g = 0;
            this._c = 0;
            this._b = 0;
            this._a = 0;
            this._f = 0;
            this._e = 0;
            this._d = 0;
            System.Guid.ctor$$Int32$$Int16$$Int16$$Byte$$Byte$$Byte$$Byte$$Byte$$Byte$$Byte$$Byte.call(this, a, b, c, d, e, f, g, h, i, j, k);
        },
        ctor$$Int32$$Int16$$Int16$$Byte$$Byte$$Byte$$Byte$$Byte$$Byte$$Byte$$Byte: function (a, b, c, d, e, f, g, h, i, j, k){
            this._i = 0;
            this._h = 0;
            this._k = 0;
            this._j = 0;
            this._g = 0;
            this._c = 0;
            this._b = 0;
            this._a = 0;
            this._f = 0;
            this._e = 0;
            this._d = 0;
            System.ValueType.ctor.call(this);
            this._a = a;
            this._b = b;
            this._c = c;
            this._d = d;
            this._e = e;
            this._f = f;
            this._g = g;
            this._h = h;
            this._i = i;
            this._j = j;
            this._k = k;
        },
        BaseToString: function (h, p, b){
            var stringBuilder = new System.Text.StringBuilder.ctor$$Int32(40);
            if (p){
                stringBuilder.Append$$Char("(");
            }
            else {
                if (b){
                    stringBuilder.Append$$Char("{");
                }
            }
            System.Guid.AppendInt(stringBuilder, this._a);
            if (h){
                stringBuilder.Append$$Char("-");
            }
            System.Guid.AppendShort(stringBuilder, this._b);
            if (h){
                stringBuilder.Append$$Char("-");
            }
            System.Guid.AppendShort(stringBuilder, this._c);
            if (h){
                stringBuilder.Append$$Char("-");
            }
            System.Guid.AppendByte(stringBuilder, this._d);
            System.Guid.AppendByte(stringBuilder, this._e);
            if (h){
                stringBuilder.Append$$Char("-");
            }
            System.Guid.AppendByte(stringBuilder, this._f);
            System.Guid.AppendByte(stringBuilder, this._g);
            System.Guid.AppendByte(stringBuilder, this._h);
            System.Guid.AppendByte(stringBuilder, this._i);
            System.Guid.AppendByte(stringBuilder, this._j);
            System.Guid.AppendByte(stringBuilder, this._k);
            if (p){
                stringBuilder.Append$$Char(")");
            }
            else {
                if (b){
                    stringBuilder.Append$$Char("}");
                }
            }
            return stringBuilder.toString();
        },
        CompareTo$$Guid: function (value){
            if (this._a != value._a){
                return System.Guid.Compare(this._a, value._a);
            }
            if (this._b != value._b){
                return System.Guid.Compare(this._b, value._b);
            }
            if (this._c != value._c){
                return System.Guid.Compare(this._c, value._c);
            }
            if (this._d != value._d){
                return System.Guid.Compare(this._d, value._d);
            }
            if (this._e != value._e){
                return System.Guid.Compare(this._e, value._e);
            }
            if (this._f != value._f){
                return System.Guid.Compare(this._f, value._f);
            }
            if (this._g != value._g){
                return System.Guid.Compare(this._g, value._g);
            }
            if (this._h != value._h){
                return System.Guid.Compare(this._h, value._h);
            }
            if (this._i != value._i){
                return System.Guid.Compare(this._i, value._i);
            }
            if (this._j != value._j){
                return System.Guid.Compare(this._j, value._j);
            }
            if (this._k != value._k){
                return System.Guid.Compare(this._k, value._k);
            }
            return 0;
        },
        CompareTo$$Object: function (value){
            if (value == null){
                return 1;
            }
            if (!(Is(value, System.Guid.ctor))){
                throw $CreateException(new System.ArgumentException.ctor$$String$$String("value", "Argument of System.Guid.CompareTo should be a Guid."), new Error());
            }
            return this.CompareTo$$Guid(Cast(value, System.Guid.ctor));
        },
        Equals$$Object: function (o){
            return Is(o, System.Guid.ctor) && this.CompareTo$$Guid(Cast(o, System.Guid.ctor)) == 0;
        },
        Equals$$Guid: function (g){
            return this.CompareTo$$Guid(g) == 0;
        },
        GetHashCode: function (){
            var num = this._a;
            num ^= this._b << 16 | this._c;
            num ^= this._d << 24;
            num ^= this._e << 16;
            num ^= this._f << 8;
            num ^= this._g;
            num ^= this._h << 24;
            num ^= this._i << 16;
            num ^= this._j << 8;
            return num ^ this._k;
        },
        toString: function (){
            return this.BaseToString(true, false, false);
        },
        ToString$$String: function (format){
            var h = true;
            var p = false;
            var b = false;
            if (format != null){
                var a = format.ToLowerInvariant();
                if (a == "b"){
                    b = true;
                }
                else {
                    if (a == "p"){
                        p = true;
                    }
                    else {
                        if (a == "n"){
                            h = false;
                        }
                        else {
                            if (a != "d" && a != System.String.Empty){
                                throw $CreateException(new System.FormatException.ctor$$String("Argument to Guid.ToString(string format) should be \"b\", \"B\", \"d\", \"D\", \"n\", \"N\", \"p\" or \"P\""), new Error());
                            }
                        }
                    }
                }
            }
            return this.BaseToString(h, p, b);
        },
        ToString$$String$$IFormatProvider: function (format, provider){
            return this.ToString$$String(format);
        },
        ctor: function (){
            this._i = 0;
            this._h = 0;
            this._k = 0;
            this._j = 0;
            this._g = 0;
            this._c = 0;
            this._b = 0;
            this._a = 0;
            this._f = 0;
            this._e = 0;
            this._d = 0;
            System.ValueType.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Guid);
var System$ICloneable = {
    fullname: "System.ICloneable",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$ICloneable);
var System$IDisposable = {
    fullname: "System.IDisposable",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$IDisposable);
var System$Int64 = {
    fullname: "System.Int64",
    baseTypeName: "System.Object",
    staticDefinition: {
        op_Implicit$$UInt32: function (value){
            return new System.Int64.ctor$$Object(value);
        },
        op_Explicit: function (value){
            return new System.Int64.ctor$$Object(value);
        },
        op_Implicit$$Int64: function (value){
            return value._value;
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            this._value = null;
            System.Int64.ctor$$Object.call(this, 0);
        },
        ctor$$Object: function (value){
            this._value = null;
            System.Object.ctor.call(this);
            this._value = this.Convert(value);
        },
        Convert: function (value){
            if (value == null)
                throw $CreateException(new System.ArgumentNullException.ctor(), new Error());
            var regex = new RegExp("^-?([0-9]+)[^0-9]");
            var match = regex.exec(value.toString());
            if (match == null)
                throw $CreateException(new System.FormatException.ctor(), new Error());
            return new Number(match[1]);
        }
    }
};
jst_pushOrReplace(System$Int64);
var System$IComparable = {
    fullname: "System.IComparable",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$IComparable);
var System$IComparable$1 = {
    fullname: "System.IComparable$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$IComparable$1);
var System$IEquatable$1 = {
    fullname: "System.IEquatable$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$IEquatable$1);
var System$IComparer$1 = {
    fullname: "System.IComparer$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$IComparer$1);
var System$IFormattable = {
    fullname: "System.IFormattable",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$IFormattable);
Date.prototype.CompareTo = function (value){
    return this.valueOf() - value.valueOf();
};
Date.prototype.get_Year = function (){
    if (this._Kind == 1)
        return this.getUTCFullYear();
    return this.getFullYear();
};
Date.prototype.set_Year = function (value){
    if (this._Kind == 1)
        this.setUTCFullYear(value);
    else
        this.setFullYear(value);
};
Date.prototype.get_Month = function (){
    if (this._Kind == 1)
        return this.getUTCMonth() + 1;
    return this.getMonth() + 1;
};
Date.prototype.set_Month = function (value){
    if (this._Kind == 1)
        this.setUTCMonth(value - 1);
    else
        this.setMonth(value - 1);
};
Date.prototype.get_Day = function (){
    if (this._Kind == 1)
        return this.getUTCDate();
    return this.getDate();
};
Date.prototype.set_Day = function (value){
    if (this._Kind == 1)
        this.setUTCDate(value);
    else
        this.setDate(value);
};
Date.prototype.get_Hour = function (){
    if (this._Kind == 1)
        return this.getUTCHours();
    return this.getHours();
};
Date.prototype.set_Hour = function (value){
    if (this._Kind == 1)
        this.setUTCHours(value);
    else
        this.setHours(value);
};
Date.prototype.get_Minute = function (){
    if (this._Kind == 1)
        return this.getUTCMinutes();
    return this.getMinutes();
};
Date.prototype.set_Minute = function (value){
    if (this._Kind == 1)
        this.setUTCMinutes(value);
    else
        this.setMinutes(value);
};
Date.prototype.get_Second = function (){
    if (this._Kind == 1)
        return this.getUTCSeconds();
    return this.getSeconds();
};
Date.prototype.set_Second = function (value){
    if (this._Kind == 1)
        this.setUTCSeconds(value);
    else
        this.setSeconds(value);
};
Date.prototype.get_Millisecond = function (){
    if (this._Kind == 1)
        return this.getUTCMilliseconds();
    return this.getMilliseconds();
};
Date.prototype.set_Millisecond = function (value){
    if (this._Kind == 1)
        this.setUTCMilliseconds(value);
    else
        this.setMilliseconds(value);
};
Date.prototype.get_Ticks = function (){
    if (this._Kind == 1)
        return this.getUTCMilliseconds() * 10000;
    return this.getMilliseconds() * 10000;
};
Date.prototype.set_Ticks = function (value){
    var milliseconds = value / 10000;
    if (this._Kind == 1)
        this.setUTCMilliseconds(milliseconds);
    else
        this.setMilliseconds(milliseconds);
};
Date.prototype.get_DayOfWeek = function (){
    return this.getDay();
};
Date.prototype.ToLocalTime = function (){
    if (this._Kind != 1)
        return this;
    var x = this.Clone();
    x._Kind = 2;
    return x;
};
Date.prototype.ToUniversalTime = function (){
    if (this._Kind == 1)
        return this;
    var x = this.Clone();
    x._Kind = 1;
    return x;
};
Date.prototype.get_Today = function (){
    return new Date().RemoveTime();
};
Date.prototype.Subtract$$DateTime = function (value){
    var diff = this.valueOf() - value.valueOf();
    return new System.TimeSpan.ctor$$Int64(diff * 10000);
};
Date.prototype.Subtract$$TimeSpan = function (value){
    var newDate = this.Clone();
    newDate.setMilliseconds(this.getMilliseconds() + value.get_TotalMilliseconds());
    return newDate;
};
Date.prototype.ToString$$String = function (format){
    format = format.Replace$$String$$String("yyyy", this.get_Year().ToString$$String("0000"));
    format = format.Replace$$String$$String("yyyy", this.get_Year().ToString$$String("00"));
    format = format.Replace$$String$$String("y", this.get_Year().toString());
    format = format.Replace$$String$$String("MM", this.get_Month().ToString$$String("00"));
    format = format.Replace$$String$$String("M", this.get_Month().toString());
    format = format.Replace$$String$$String("dd", this.get_Day().ToString$$String("00"));
    format = format.Replace$$String$$String("d", this.get_Day().toString());
    format = format.Replace$$String$$String("HH", this.get_Hour().ToString$$String("00"));
    format = format.Replace$$String$$String("H", this.get_Hour().toString());
    format = format.Replace$$String$$String("mm", this.get_Minute().ToString$$String("00"));
    format = format.Replace$$String$$String("m", this.get_Minute().toString());
    format = format.Replace$$String$$String("ss", this.get_Second().ToString$$String("00"));
    format = format.Replace$$String$$String("s", this.get_Second().toString());
    return format;
};
Date.prototype.Clone = function (){
    var x = new Date(this.valueOf());
    x._Kind = this._Kind;
    return x;
};
Date.prototype.AddMilliseconds = function (miliseconds){
    var date2 = this.Clone();
    date2.setMilliseconds(date2.getMilliseconds() + miliseconds);
    return date2;
};
Date.prototype.AddSeconds = function (seconds){
    var date2 = this.Clone();
    date2.setSeconds(date2.getSeconds() + seconds);
    return date2;
};
Date.prototype.AddMinutes = function (minutes){
    var date2 = this.Clone();
    date2.setMinutes(date2.getMinutes() + minutes);
    return date2;
};
Date.prototype.AddHours = function (hours){
    var date2 = this.Clone();
    date2.setHours(date2.getHours() + hours);
    return date2;
};
Date.prototype.AddDays = function (days){
    var date2 = this.Clone();
    date2.setDate(date2.getDate() + days);
    return date2;
};
Date.prototype.AddMonths = function (months){
    var date2 = this.Clone();
    date2.setMonth(date2.getMonth() + months);
    return date2;
};
Date.prototype.AddYears = function (years){
    var date2 = this.Clone();
    date2.setMonth(date2.getFullYear() + years);
    return date2;
};
Date.prototype.RemoveTime = function (){
    var date2 = this.Clone();
    date2.setHours(0, 0, 0, 0);
    return date2;
};
Date.prototype.Equals$$Object = function (obj){
    if (obj == null)
        return false;
    return obj.valueOf() == this.valueOf();
};
Date.prototype.GetHashCode = function (){
    return this.valueOf();
};
Date.prototype.GetType = function (){
    return Typeof(System.DateTime.ctor);
};
Date.prototype.get_Kind = function (){
    if (this._Kind == null)
        return 2;
    return this._Kind;
};
Number.prototype.CompareTo$$Double = function (value){
    if (this < value)
        return -1;
    if (this > value)
        return 1;
    if (this == value)
        return 0;
    if (!System.Double.IsNaN(this))
        return 1;
    return !System.Double.IsNaN(value) ? -1 : 0;
};
Number.prototype.CompareTo$$Int32 = function (value){
    if (this < value)
        return -1;
    return this > value ? 1 : 0;
};
var System$Nullable$1 = {
    fullname: "System.Nullable$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (T, value){
            this.T = T;
            this.hasValue = false;
            this.value = null;
            System.Object.ctor.call(this);
            this.value = value;
            this.hasValue = true;
        },
        HasValue$$: "System.Boolean",
        get_HasValue: function (){
            return this.hasValue;
        },
        Value$$: "`0",
        get_Value: function (){
            if (!this.get_HasValue()){
                throw $CreateException(new System.InvalidOperationException.ctor$$String("InvalidOperation_NoValue"), new Error());
            }
            return this.value;
        },
        GetValueOrDefault: function (){
            return this.value;
        },
        GetValueOrDefault$$T: function (defaultValue){
            if (!this.get_HasValue()){
                return defaultValue;
            }
            return this.value;
        },
        Equals$$Object: function (other){
            if (!this.get_HasValue()){
                return (other == null);
            }
            if (other == null){
                return false;
            }
            return this.value.Equals$$Object(other);
        },
        GetHashCode: function (){
            if (!this.get_HasValue()){
                return 0;
            }
            return this.value.GetHashCode();
        },
        toString: function (){
            if (!this.get_HasValue()){
                return "";
            }
            return this.value.toString();
        }
    }
};
jst_pushOrReplace(System$Nullable$1);
var System$Random = {
    fullname: "System.Random",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            System.Random.MaxValue = 2147483647;
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        },
        ctor$$Int32: function (seed){
            System.Object.ctor.call(this);
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Next: function (){
            return Math.floor(Math.random() * 2147483647);
        },
        Next$$Int32: function (maxValue){
            return Math.floor(Math.random() * maxValue);
        },
        Next$$Int32$$Int32: function (minValue, maxValue){
            if (minValue > maxValue)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            return (Math.floor((maxValue - minValue) * Math.random() + minValue));
        },
        NextFloat: function (){
            return Math.random();
        },
        NextBytes: function (buffer){
            for (var l = 0; l < buffer.get_LongLength(); l++)
                buffer[l] = this.Next$$Int32$$Int32(0, 256);
        },
        NextDouble: function (){
            return Math.random();
        }
    }
};
jst_pushOrReplace(System$Random);
var System$StringSplitOptions = {
    fullname: "System.StringSplitOptions",
    staticDefinition: {
        None: 0,
        RemoveEmptyEntries: 1
    },
    Kind: "Enum"
};
jst_pushOrReplace(System$StringSplitOptions);
var System$Char = {
    fullname: "System.Char",
    baseTypeName: "System.Object",
    staticDefinition: {
        IsWhiteSpace: function (c){
            return /\s/.test(c);
        },
        IsUpper: function (c){
            return c.toUpperCase() == c;
        },
        IsDigit$$Char: function (s){
            return /[0-9]/.test(s);
        },
		IsNumber$$Char: function (s){
			return this.IsDigit$$Char(s);
		}
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Char);
var System$CharEnumerator = {
    fullname: "System.CharEnumerator",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IEnumerator$1", "System.Collections.IEnumerator"],
    Kind: "Class",
    definition: {
        ctor: function (str2){
            this.currentElement = "\0";
            this.index = 0;
            this.str = null;
            System.Object.ctor.call(this);
            this.str = str2;
            this.index = -1;
        },
        MoveNext: function (){
            if (this.index < (this.str.length - 1)){
                this.index++;
                this.currentElement = this.str.charAt(this.index);
                return true;
            }
            this.index = this.str.length;
            return false;
        },
        Reset: function (){
            this.currentElement = "\0";
            this.index = -1;
        },
        Current$$: "System.Char",
        get_Current: function (){
            if (this.index == -1){
                throw $CreateException(new System.InvalidOperationException.ctor$$String("Enum Not Started"), new Error());
            }
            if (this.index >= this.str.length){
                throw $CreateException(new System.InvalidOperationException.ctor$$String("Enum Ended"), new Error());
            }
            return this.currentElement;
        }
    }
};
jst_pushOrReplace(System$CharEnumerator);
var System$StringComparison = {
    fullname: "System.StringComparison",
    staticDefinition: {
        CurrentCulture: 0,
        CurrentCultureIgnoreCase: 1,
        InvariantCulture: 2,
        InvariantCultureIgnoreCase: 3,
        Ordinal: 4,
        OrdinalIgnoreCase: 5
    },
    Kind: "Enum"
};
jst_pushOrReplace(System$StringComparison);
var System$TimeSpan = {
    fullname: "System.TimeSpan",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            System.TimeSpan.TicksPerMillisecond = 10000;
            System.TimeSpan.MillisecondsPerTick = 0.0001;
            System.TimeSpan.TicksPerSecond = 10000000;
            System.TimeSpan.SecondsPerTick = 1E-07;
            System.TimeSpan.TicksPerMinute = 600000000;
            System.TimeSpan.MinutesPerTick = 1.66666666666667E-09;
            System.TimeSpan.TicksPerHour = 36000000000;
            System.TimeSpan.HoursPerTick = 2.77777777777778E-11;
            System.TimeSpan.TicksPerDay = 864000000000;
            System.TimeSpan.DaysPerTick = 1.15740740740741E-12;
            System.TimeSpan.MillisPerSecond = 1000;
            System.TimeSpan.MillisPerMinute = 60000;
            System.TimeSpan.MillisPerHour = 3600000;
            System.TimeSpan.MillisPerDay = 86400000;
            System.TimeSpan.MaxSeconds = 922337203685;
            System.TimeSpan.MinSeconds = -922337203685;
            System.TimeSpan.MaxMilliSeconds = 922337203685477;
            System.TimeSpan.MinMilliSeconds = -922337203685477;
            System.TimeSpan.TicksPerTenthSecond = 1000000;
            System.TimeSpan.Zero = new System.TimeSpan.ctor$$Int64(0);
            System.TimeSpan.MaxValue = new System.TimeSpan.ctor$$Int64(9223372036854775807);
            System.TimeSpan.MinValue = new System.TimeSpan.ctor$$Int64(-9223372036854775808);
        },
        Compare: function (t1, t2){
            if (t1._ticks > t2._ticks){
                return 1;
            }
            if (t1._ticks < t2._ticks){
                return -1;
            }
            return 0;
        },
        FromDays: function (value){
            return System.TimeSpan.Interval(value, 86400000);
        },
        Equals$$TimeSpan$$TimeSpan: function (t1, t2){
            return t1._ticks == t2._ticks;
        },
        FromHours: function (value){
            return System.TimeSpan.Interval(value, 3600000);
        },
        Interval: function (value, scale){
            if (System.Double.IsNaN(value)){
                throw $CreateException(new System.ArgumentException.ctor$$String("Arg_CannotBeNaN"), new Error());
            }
            var num = value * scale;
            var num2 = num + ((value >= 0) ? 0.5 : -0.5);
            if (num2 > 922337203685477 || num2 < -922337203685477){
                throw $CreateException(new System.OverflowException.ctor$$String("Overflow_TimeSpanTooLong"), new Error());
            }
            return new System.TimeSpan.ctor$$Int64((num2 * 10000));
        },
        FromMilliseconds: function (value){
            return System.TimeSpan.Interval(value, 1);
        },
        FromMinutes: function (value){
            return System.TimeSpan.Interval(value, 60000);
        },
        FromSeconds: function (value){
            return System.TimeSpan.Interval(value, 1000);
        },
        FromTicks: function (value){
            return new System.TimeSpan.ctor$$Int64(value);
        },
        TimeToTicks: function (hour, minute, second){
            var num = hour * 3600 + minute * 60 + second;
            if (num > 922337203685 || num < -922337203685){
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor$$String$$String(null, "Overflow_TimeSpanTooLong"), new Error());
            }
            return num * 10000000;
        },
        op_UnaryNegation: function (t){
            if (t._ticks == System.TimeSpan.MinValue._ticks){
                throw $CreateException(new System.OverflowException.ctor$$String("Overflow_NegateTwosCompNum"), new Error());
            }
            return new System.TimeSpan.ctor$$Int64(-t._ticks);
        },
        op_Subtraction: function (t1, t2){
            return t1.Subtract(t2);
        },
        op_UnaryPlus: function (t){
            return t;
        },
        op_Addition: function (t1, t2){
            return t1.Add(t2);
        },
        op_Equality: function (t1, t2){
            return t1._ticks == t2._ticks;
        },
        op_Inequality: function (t1, t2){
            return t1._ticks != t2._ticks;
        },
        op_LessThan: function (t1, t2){
            return t1._ticks < t2._ticks;
        },
        op_LessThanOrEqual: function (t1, t2){
            return t1._ticks <= t2._ticks;
        },
        op_GreaterThan: function (t1, t2){
            return t1._ticks > t2._ticks;
        },
        op_GreaterThanOrEqual: function (t1, t2){
            return t1._ticks >= t2._ticks;
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            this._ticks = 0;
            System.Object.ctor.call(this);
        },
        Ticks$$: "System.Int64",
        get_Ticks: function (){
            return this._ticks;
        },
        Days$$: "System.Int32",
        get_Days: function (){
            return (this._ticks / 864000000000);
        },
        Hours$$: "System.Int32",
        get_Hours: function (){
            return (this._ticks / 36000000000 % 24);
        },
        Milliseconds$$: "System.Int32",
        get_Milliseconds: function (){
            return (this._ticks / 10000 % 1000);
        },
        Minutes$$: "System.Int32",
        get_Minutes: function (){
            return (this._ticks / 600000000 % 60);
        },
        Seconds$$: "System.Int32",
        get_Seconds: function (){
            return (this._ticks / 10000000 % 60);
        },
        TotalDays$$: "System.Double",
        get_TotalDays: function (){
            return this._ticks * 1.15740740740741E-12;
        },
        TotalHours$$: "System.Double",
        get_TotalHours: function (){
            return this._ticks * 2.77777777777778E-11;
        },
        TotalMilliseconds$$: "System.Double",
        get_TotalMilliseconds: function (){
            var num = this._ticks * 0.0001;
            if (num > 922337203685477){
                return 922337203685477;
            }
            if (num < -922337203685477){
                return -922337203685477;
            }
            return num;
        },
        TotalMinutes$$: "System.Double",
        get_TotalMinutes: function (){
            return this._ticks / 10000 / 1000 / 60;
        },
        TotalSeconds$$: "System.Double",
        get_TotalSeconds: function (){
            return this._ticks * 1E-07;
        },
        ctor$$Int64: function (ticks){
            this._ticks = 0;
            System.Object.ctor.call(this);
            this._ticks = ticks;
        },
        ctor$$Int32$$Int32$$Int32: function (hours, minutes, seconds){
            this._ticks = 0;
            System.Object.ctor.call(this);
            this._ticks = System.TimeSpan.TimeToTicks(hours, minutes, seconds);
        },
        ctor$$Int32$$Int32$$Int32$$Int32: function (days, hours, minutes, seconds){
            this._ticks = 0;
            System.TimeSpan.ctor$$Int32$$Int32$$Int32$$Int32$$Int32.call(this, days, hours, minutes, seconds, 0);
        },
        ctor$$Int32$$Int32$$Int32$$Int32$$Int32: function (days, hours, minutes, seconds, milliseconds){
            this._ticks = 0;
            System.Object.ctor.call(this);
            var num = (days * 3600 * 24 + hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds;
            if (num > 922337203685477 || num < -922337203685477){
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor$$String$$String(null, "Overflow_TimeSpanTooLong"), new Error());
            }
            this._ticks = num * 10000;
        },
        Add: function (ts){
            var num = this._ticks + ts._ticks;
            if (this._ticks >> 63 == ts._ticks >> 63 && this._ticks >> 63 != num >> 63){
                throw $CreateException(new System.OverflowException.ctor$$String("Overflow_TimeSpanTooLong"), new Error());
            }
            return new System.TimeSpan.ctor$$Int64(num);
        },
        CompareTo$$Object: function (value){
            if (value == null){
                return 1;
            }
            if (!(Is(value, System.TimeSpan.ctor))){
                throw $CreateException(new System.ArgumentException.ctor$$String("Arg_MustBeTimeSpan"), new Error());
            }
            var ticks = (Cast(value, System.TimeSpan.ctor))._ticks;
            if (this._ticks > ticks){
                return 1;
            }
            if (this._ticks < ticks){
                return -1;
            }
            return 0;
        },
        CompareTo$$TimeSpan: function (value){
            var ticks = value._ticks;
            if (this._ticks > ticks){
                return 1;
            }
            if (this._ticks < ticks){
                return -1;
            }
            return 0;
        },
        Duration: function (){
            if (this.get_Ticks() == System.TimeSpan.MinValue.get_Ticks()){
                throw $CreateException(new System.OverflowException.ctor$$String("Overflow_Duration"), new Error());
            }
            return new System.TimeSpan.ctor$$Int64((this._ticks >= 0) ? this._ticks : (-this._ticks));
        },
        Equals$$Object: function (value){
            return Is(value, System.TimeSpan.ctor) && this._ticks == (Cast(value, System.TimeSpan.ctor))._ticks;
        },
        Equals$$TimeSpan: function (obj){
            return this._ticks == obj._ticks;
        },
        GetHashCode: function (){
            return (this._ticks ^ (this._ticks >> 32));
        },
        Negate: function (){
            if (this.get_Ticks() == System.TimeSpan.MinValue.get_Ticks()){
                throw $CreateException(new System.OverflowException.ctor$$String("Overflow_NegateTwosCompNum"), new Error());
            }
            return new System.TimeSpan.ctor$$Int64(-this._ticks);
        },
        Subtract: function (ts){
            var num = this._ticks - ts._ticks;
            if (this._ticks >> 63 != ts._ticks >> 63 && this._ticks >> 63 != num >> 63){
                throw $CreateException(new System.OverflowException.ctor$$String("Overflow_TimeSpanTooLong"), new Error());
            }
            return new System.TimeSpan.ctor$$Int64(num);
        }
    }
};
jst_pushOrReplace(System$TimeSpan);
var System$Tuple = {
    fullname: "System.Tuple",
    baseTypeName: "System.Object",
    staticDefinition: {
        Create$1$$T1: function (T1, item1){
            return new System.Tuple$1.ctor(T1, item1);
        },
        Create$2$$T1$$T2: function (T1, T2, item1, item2){
            return new System.Tuple$2.ctor(T1, T2, item1, item2);
        },
        Create$3$$T1$$T2$$T3: function (T1, T2, T3, item1, item2, item3){
            return new System.Tuple$3.ctor(T1, T2, T3, item1, item2, item3);
        },
        Create$4$$T1$$T2$$T3$$T4: function (T1, T2, T3, T4, item1, item2, item3, item4){
            return new System.Tuple$4.ctor(T1, T2, T3, T4, item1, item2, item3, item4);
        },
        Create$5$$T1$$T2$$T3$$T4$$T5: function (T1, T2, T3, T4, T5, item1, item2, item3, item4, item5){
            return new System.Tuple$5.ctor(T1, T2, T3, T4, T5, item1, item2, item3, item4, item5);
        },
        Create$6$$T1$$T2$$T3$$T4$$T5$$T6: function (T1, T2, T3, T4, T5, T6, item1, item2, item3, item4, item5, item6){
            return new System.Tuple$6.ctor(T1, T2, T3, T4, T5, T6, item1, item2, item3, item4, item5, item6);
        },
        Create$7$$T1$$T2$$T3$$T4$$T5$$T6$$T7: function (T1, T2, T3, T4, T5, T6, T7, item1, item2, item3, item4, item5, item6, item7){
            return new System.Tuple$7.ctor(T1, T2, T3, T4, T5, T6, T7, item1, item2, item3, item4, item5, item6, item7);
        },
        Create$8$$T1$$T2$$T3$$T4$$T5$$T6$$T7$$T8: function (T1, T2, T3, T4, T5, T6, T7, T8, item1, item2, item3, item4, item5, item6, item7, item8){
            return new System.Tuple$8.ctor(T1, T2, T3, T4, T5, T6, T7, System.Tuple$1.ctor, item1, item2, item3, item4, item5, item6, item7, new System.Tuple$1.ctor(T8, item8));
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Tuple);
var System$Tuple$1 = {
    fullname: "System.Tuple$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (T1, item1){
            this.T1 = T1;
            this._item1 = null;
            System.Object.ctor.call(this);
            this._item1 = item1;
        },
        Item1$$: "`0",
        get_Item1: function (){
            return this._item1;
        }
    }
};
jst_pushOrReplace(System$Tuple$1);
var System$Tuple$2 = {
    fullname: "System.Tuple$2",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (T1, T2, item1, item2){
            this.T1 = T1;
            this.T2 = T2;
            this._item1 = null;
            this._item2 = null;
            System.Object.ctor.call(this);
            this._item1 = item1;
            this._item2 = item2;
        },
        Item1$$: "`0",
        get_Item1: function (){
            return this._item1;
        },
        Item2$$: "`1",
        get_Item2: function (){
            return this._item2;
        }
    }
};
jst_pushOrReplace(System$Tuple$2);
var System$Tuple$3 = {
    fullname: "System.Tuple$3",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (T1, T2, T3, item1, item2, item3){
            this.T1 = T1;
            this.T2 = T2;
            this.T3 = T3;
            this._item1 = null;
            this._item2 = null;
            this._item3 = null;
            System.Object.ctor.call(this);
            this._item1 = item1;
            this._item2 = item2;
            this._item3 = item3;
        },
        Item1$$: "`0",
        get_Item1: function (){
            return this._item1;
        },
        Item2$$: "`1",
        get_Item2: function (){
            return this._item2;
        },
        Item3$$: "`2",
        get_Item3: function (){
            return this._item3;
        }
    }
};
jst_pushOrReplace(System$Tuple$3);
var System$Tuple$4 = {
    fullname: "System.Tuple$4",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (T1, T2, T3, T4, item1, item2, item3, item4){
            this.T1 = T1;
            this.T2 = T2;
            this.T3 = T3;
            this.T4 = T4;
            this._item1 = null;
            this._item2 = null;
            this._item3 = null;
            this._item4 = null;
            System.Object.ctor.call(this);
            this._item1 = item1;
            this._item2 = item2;
            this._item3 = item3;
            this._item4 = item4;
        },
        Item1$$: "`0",
        get_Item1: function (){
            return this._item1;
        },
        Item2$$: "`1",
        get_Item2: function (){
            return this._item2;
        },
        Item3$$: "`2",
        get_Item3: function (){
            return this._item3;
        },
        Item4$$: "`3",
        get_Item4: function (){
            return this._item4;
        }
    }
};
jst_pushOrReplace(System$Tuple$4);
var System$Tuple$5 = {
    fullname: "System.Tuple$5",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (T1, T2, T3, T4, T5, item1, item2, item3, item4, item5){
            this.T1 = T1;
            this.T2 = T2;
            this.T3 = T3;
            this.T4 = T4;
            this.T5 = T5;
            this._item1 = null;
            this._item2 = null;
            this._item3 = null;
            this._item4 = null;
            this._item5 = null;
            System.Object.ctor.call(this);
            this._item1 = item1;
            this._item2 = item2;
            this._item3 = item3;
            this._item4 = item4;
            this._item5 = item5;
        },
        Item1$$: "`0",
        get_Item1: function (){
            return this._item1;
        },
        Item2$$: "`1",
        get_Item2: function (){
            return this._item2;
        },
        Item3$$: "`2",
        get_Item3: function (){
            return this._item3;
        },
        Item4$$: "`3",
        get_Item4: function (){
            return this._item4;
        },
        Item5$$: "`4",
        get_Item5: function (){
            return this._item5;
        }
    }
};
jst_pushOrReplace(System$Tuple$5);
var System$Tuple$6 = {
    fullname: "System.Tuple$6",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (T1, T2, T3, T4, T5, T6, item1, item2, item3, item4, item5, item6){
            this.T1 = T1;
            this.T2 = T2;
            this.T3 = T3;
            this.T4 = T4;
            this.T5 = T5;
            this.T6 = T6;
            this._item1 = null;
            this._item2 = null;
            this._item3 = null;
            this._item4 = null;
            this._item5 = null;
            this._item6 = null;
            System.Object.ctor.call(this);
            this._item1 = item1;
            this._item2 = item2;
            this._item3 = item3;
            this._item4 = item4;
            this._item5 = item5;
            this._item6 = item6;
        },
        Item1$$: "`0",
        get_Item1: function (){
            return this._item1;
        },
        Item2$$: "`1",
        get_Item2: function (){
            return this._item2;
        },
        Item3$$: "`2",
        get_Item3: function (){
            return this._item3;
        },
        Item4$$: "`3",
        get_Item4: function (){
            return this._item4;
        },
        Item5$$: "`4",
        get_Item5: function (){
            return this._item5;
        },
        Item6$$: "`5",
        get_Item6: function (){
            return this._item6;
        }
    }
};
jst_pushOrReplace(System$Tuple$6);
var System$Tuple$7 = {
    fullname: "System.Tuple$7",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (T1, T2, T3, T4, T5, T6, T7, item1, item2, item3, item4, item5, item6, item7){
            this.T1 = T1;
            this.T2 = T2;
            this.T3 = T3;
            this.T4 = T4;
            this.T5 = T5;
            this.T6 = T6;
            this.T7 = T7;
            this._item1 = null;
            this._item2 = null;
            this._item3 = null;
            this._item4 = null;
            this._item5 = null;
            this._item6 = null;
            this._item7 = null;
            System.Object.ctor.call(this);
            this._item1 = item1;
            this._item2 = item2;
            this._item3 = item3;
            this._item4 = item4;
            this._item5 = item5;
            this._item6 = item6;
            this._item7 = item7;
        },
        Item1$$: "`0",
        get_Item1: function (){
            return this._item1;
        },
        Item2$$: "`1",
        get_Item2: function (){
            return this._item2;
        },
        Item3$$: "`2",
        get_Item3: function (){
            return this._item3;
        },
        Item4$$: "`3",
        get_Item4: function (){
            return this._item4;
        },
        Item5$$: "`4",
        get_Item5: function (){
            return this._item5;
        },
        Item6$$: "`5",
        get_Item6: function (){
            return this._item6;
        },
        Item7$$: "`6",
        get_Item7: function (){
            return this._item7;
        }
    }
};
jst_pushOrReplace(System$Tuple$7);
var System$UInt32 = {
    fullname: "System.UInt32",
    baseTypeName: "System.Object",
    staticDefinition: {
        op_Implicit$$UInt32: function (value){
            return value._value;
        },
        op_Explicit: function (value){
            return new System.UInt32.ctor$$Object(value);
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            this._value = null;
            System.UInt32.ctor$$Object.call(this, 0);
        },
        ctor$$Object: function (value){
            this._value = null;
            System.Object.ctor.call(this);
            this._value = this.Convert(value);
        },
        Convert: function (value){
            if (value == null)
                throw $CreateException(new System.ArgumentNullException.ctor(), new Error());
            var regex = new RegExp("^-?([0-9]+)[^0-9]");
            var match = regex.exec(value.toString());
            if (match == null)
                throw $CreateException(new System.FormatException.ctor(), new Error());
            return new Number(match[1]);
        }
    }
};
jst_pushOrReplace(System$UInt32);
var System$Uri = {
    fullname: "System.Uri",
    baseTypeName: "System.Object",
    staticDefinition: {
        op_Equality: function (u1, u2){
            if (u1 == u2){
                return true;
            }
            if (u1 == null){
                return false;
            }
            if (u2 == null){
                return false;
            }
            return u1._OriginalString == u2._OriginalString;
        },
        op_Inequality: function (u1, u2){
            return !(System.Uri.op_Equality(u1, u2));
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            this._OriginalString = null;
            this._Fragment = null;
            System.Object.ctor.call(this);
            this._OriginalString = null;
        },
        ctor$$String: function (uri){
            this._OriginalString = null;
            this._Fragment = null;
            System.Object.ctor.call(this);
            this._OriginalString = uri;
        },
        OriginalString$$: "System.String",
        get_OriginalString: function (){
            return this._OriginalString;
        },
        AbsoluteUri$$: "System.String",
        get_AbsoluteUri: function (){
            return this._OriginalString;
        },
        toString: function (){
            return this._OriginalString;
        },
        Equals$$Object: function (obj){
            return System.Uri.op_Equality(this, Cast(obj, System.Uri.ctor));
        },
        GetHashCode: function (){
            return System.Object.commonPrototype.GetHashCode.call(this);
        },
        Fragment$$: "System.String",
        get_Fragment: function (){
            if (this._Fragment == null){
                var idx = this._OriginalString.indexOf("#");
                if (idx == -1)
                    this._Fragment = "";
                else
                    this._Fragment = this._OriginalString.substr(idx);
            }
            return this._Fragment;
        }
    }
};
jst_pushOrReplace(System$Uri);
var System$ValueType = {
    fullname: "System.ValueType",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$ValueType);
var SharpKit$Html4$HtmlDomEventHandler = {
    fullname: "SharpKit.Html4.HtmlDomEventHandler",
    Kind: "Delegate",
    definition: {
        ctor: function (obj, func){
            System.MulticastDelegate.ctor.call(this, obj, func);
        }
    }
};
jst_pushOrReplace(SharpKit$Html4$HtmlDomEventHandler);
var JsRuntime = function (){
};
JsRuntime.Start = function (){
    Compile();
};

//kernel.js
var isIE = false;//navigator.userAgent.toLowerCase().indexOf("msie") > -1;
var isMoz = false;//document.implementation && document.implementation.createDocument;
var isWebkit = false;//navigator.userAgent.indexOf("WebKit") > -1; //navigator.vendor == "Apple Computer, Inc.";
//TODO: Add all the rest, or find another way
if (!isMoz) {
    var HTMLImageElement = null;
    var HTMLInputElement = null;
}
String.Format = function (format, varargs) {
    return String.format.apply(String, arguments);
}
String.prototype.startsWith = function (str) {
    return this.indexOf(str) == 0;
}
String.prototype.endsWith = function (str) {
    return this.substr(this.length - str.length, str.length) == str;
}
Object.ctor = Object;
Array.ctor = Array;
Date.ctor = Date;
Function.ctor = Function;
if (typeof (ActiveXObject) != "undefined")
    ActiveXObject.ctor$$String = ActiveXObject;
Number.prototype.get_Value = function () //nullable support
{
    return this;
}
Number.prototype.ToString$$String = function (format) {
    var s = this.toString();
    for (var i = 0; i < format.length; i++) {
        var ch = format.charAt(i);
        if (ch == "0") {
            if (s.length < i + 1)
                s = "0" + s;
        }
        else
            throw new Error("not implemented");
    }
    return s;
}
//whether to wrap functions with profiler functions
var ENABLE_PROFILER = typeof (appConfig) == "object" ? appConfig.enableProfiler : false;
//can be changed in runtime - whether to profile functions that are running
var ENABLE_PROFILING = typeof (appConfig) == "object" ? appConfig.enableProfiling : false;
if (ENABLE_PROFILER) {
    BeforeCompilation(function () { Profiler.Initialize(); });
}
//var envDebugFunction = (typeof (Debug) != "undefined" && Debug != null && Debug.writeln) ||
//											 (typeof (console) != "undefined" && console != null && console.log) ||
//											 function (t) { };
//if (typeof (Debug) != "undefined")
//	var Debug = { writeln: envDebugFunction }

Array.parse = function (value) {
    return eval('(' + value + ')');
}
jst_pushOrReplace(
    { fullname: "System.Object", definition:
    {
        ctor: function () {
        },
        toString: function () {
            return "{" + this.constructor._type.fullname + "}";
        },
        construct: function (type) {
            //		arguments.callee.caller._type.baseType.ctor.apply(this, arguments);
            type.baseType.ctor.apply(this, arguments);
        },
        GetType: function () {
            return System.Type._TypeOf(this.constructor._type);
        },
        getType: function () {
            return this.constructor._type;
        },
        getTypeName: function () {
            return this.constructor._type.name;
        },
        base: function () {
            //TODO: remove use of callee/caller!
            return arguments.callee.caller._type.baseType.ctor.prototype[arguments.callee.caller._name].apply(this, arguments);
        },
        callBase: function (methodName) {
            //TODO: remove use of callee/caller!
            return arguments.callee.caller._type.baseType.ctor.prototype[methodName].apply(this, Arguments.from(arguments, 1));
        }
    }, staticDefinition:
    {
        Equals$$Object$$Object: function (x, y) {
            //TODO: check value types for valueOf()
            return x == y;
        },
        ReferenceEquals: function (x, y) {
            return x == y;
        },
        ReferenceEquals$$Object$$Object: function (x, y) {
            return x == y;
        }
    }
    });

    // 当 new List<int>(new int[] {5,6,7}); 会使用到以下几个
Uint8Array.prototype.GetEnumerator = function() { return new ArrayEnumerator.ctor(this); };
Uint16Array.prototype.GetEnumerator = function() { return new ArrayEnumerator.ctor(this); };
Uint32Array.prototype.GetEnumerator = function() { return new ArrayEnumerator.ctor(this); };
Int8Array.prototype.GetEnumerator = function() { return new ArrayEnumerator.ctor(this); };
Int16Array.prototype.GetEnumerator = function() { return new ArrayEnumerator.ctor(this); };
Int32Array.prototype.GetEnumerator = function() { return new ArrayEnumerator.ctor(this); };
Float32Array.prototype.GetEnumerator = function() { return new ArrayEnumerator.ctor(this); };
Float64Array.prototype.GetEnumerator = function() { return new ArrayEnumerator.ctor(this); };

//jst_pushOrReplace({ fullname: "Object" });
//jst_pushOrReplace({ fullname: "Int8Array" });
//jst_pushOrReplace({ fullname: "Uint8Array"});
//jst_pushOrReplace({ fullname: "Int16Array"});
//jst_pushOrReplace({ fullname: "Uint16Array"});
//jst_pushOrReplace({ fullname: "Int32Array"});
//jst_pushOrReplace({ fullname: "Uint32Array"});
//jst_pushOrReplace({ fullname: "Float32Array"});
//jst_pushOrReplace({ fullname: "Float64Array"});

jst_pushOrReplace({ fullname: "Array", baseTypeName: "Object", definition:
{
    GetEnumerator: function () {
        return new ArrayEnumerator.ctor(this);
    },
    getItem: function (index) {
        return this[index];
    },
    getCount: function () {
        return this.length;
    },
    get_Count: function () {
        return this.length;
    },
    ///
    /// returns an array that contains the values of the specified
    /// property name from each item
    ///
    selectSingle: function (propName) {
        var result = [];
        for (var i = 0; i < this.length; i++) {
            var item = this[i];
            var value = item[propName]; //TODO: support getValue
            if (value === undefined) //array cannot contain undefined.
                value = null;
            result.push(value);
        }
        return result;
    },
    Clone: function () {
        return this.concat();
    },
    toArray: function () {
        return this;
    },
    Add: function (item) {
        this.push(item);
    },
    AddRange: function (items) {
        var length = items.length;
        var thisLength = this.length;
        for (var i = 0; i < length; i++) {
            this[thisLength] = items[i]; //Keep order
            thisLength++;
        }
    },
    Clear: function () {
        if (this.length > 0) {
            this.splice(0, this.length);
        }
    },
    clone: function () {
        return this.slice(0);
    },
    contains: function (item) {
        var index = this.indexOf(item);
        return (index >= 0);
    },
    Contains$$Object: function (item) {
        return Contains(item);
    },
    Contains: function (item) {
        var index = this.indexOf(item);
        return (index >= 0);
    },
    dequeue: function () {
        return this.shift();
    },
    indexOf: function (item, startFrom) {
        if (startFrom == null)
            startFrom = 0;
        var length = this.length;
        if (length != 0) {
            for (var index = startFrom; index < length; index++) {
                if (this[index] == item) {
                    return index;
                }
            }
        }
        return -1;
    },
    insert: function (index, item) {
        this.splice(index, 0, item);
    },
    addAt: function (index, item) {
        this.splice(index, 0, item);
    },
    queue: function (item) {
        this.push(item);
    },
    Remove$$Object: function (item) {
        return this.Remove(item);
    },
    Remove: function (item) {
        var index = this.indexOf(item);
        if (index >= 0) {
            this.splice(index, 1);
        }
        return index;
    },
    RemoveAt: function (index) {
        this.splice(index, 1);
    },
    copyTo: function (target, startIndex) {
        throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        //for (var i = startIndex; i < this.length; i++) {
        //    target.push(this[i]);
        //}
    },
    // By Qiucw
    CopyTo: function (target, startIndex) {
        for (var i = startIndex; i < this.length; i++) {
            target[i] = this[i];
        }
    },
    filter: function (pred) {
        var item, i = 0;
        for (var i = 0, j = this.length; i < j; i++) {
            item = this[i];
            if (!pred(item)) {
                this.splice(i, 1);
                i--; //prevent increase
                j--; //length is decreased
            }
        }
        return this;
    },
    filterOut: function (pred) {
        return this.filter(function (item) { return !pred(item); });
    },
    apply: function (modifier) {
        for (var i = 0, j = this.length; i < j; i++) {
            this[i] = modifier(this[i]);
        }
        return this;
    },
    findFirst: function (pred) {
        var item;
        for (var i = 0, j = this.length; i < j; i++) {
            item = this[i];
            if (pred(item))
                return item;
        }
        return null;
    },
    ToArray: function () {
        return this;
    },
    peek: function () {
        return this[this.length - 1];
    },
    getLast: function () {
        return this[this.length - 1];
    },
    getIterator: function () {
        return new ArrayIterator(this);
    },
    get_Length: function () {
        return this.length;
    },
    get_Item: function (index) {
        return this[index];
    },
    get_Item$$Int32: function (index) {
        return this[index];
    }
}
});
jst_pushOrReplace({ fullname: "ArrayEnumerator", baseTypeName: "System.Object", definition: //TODO: implement IEnumerator
{
    ctor: function (array) {
        this._array = array;
        this._idx = -1;
    },
    Reset: function () {
        this._idx = -1;
    },
    get_Current: function () {
        return this._array[this._idx];
    },
    MoveNext: function () {
        this._idx++;
        return this._array.length > this._idx;
    },
    Dispose: function () {
        //TODO
    }
}
});
AfterCompilation(function () {
    Function._type = System.Delegate;
});
jst_pushOrReplace({ fullname: "System.Boolean", baseTypeName: "System.ValueType", definition:
{
    ctor: Boolean,
    toString: function () {
        return this == true ? "true" : "false";
    }
}, staticDefinition:
{
    tryParse: function (s) {
        if (s == null)
            return false;
        return s.toLowerCase().trim() == "true";
    },
    Parse: function (s) {
        if (s == null)
            return false;
        return s.toLowerCase().trim() == "true";
    }
}
});
jst_pushOrReplace({ fullname: "System.Int32", baseTypeName: "System.ValueType", definition:
{
    ctor: Number,
    toString: Number.prototype.toString //avoid toString override by compiler (toString(radix) won't work if overriden)
}, staticDefinition:
{
    tryParse: function (s) {
        return parseInt(s);
    },
    Parse$$String: function (s) {
        return parseInt(s);
    },
    TryParse$$String$$Int32: function (s, out) {
        out.Value = parseInt(s);
        return true;
    }
}
});
// Qiucw
jst_pushOrReplace({ fullname: "System.Int64", baseTypeName: "System.ValueType", definition:
{
    ctor: Number,
    toString: Number.prototype.toString //avoid toString override by compiler (toString(radix) won't work if overriden)
}, staticDefinition:
{
    tryParse: function (s) {
        return parseInt(s);
    },
    Parse$$String: function (s) {
        return parseInt(s);
    },
    TryParse$$String$$Int64: function (s, out) {
        out.Value = parseInt(s);
        return true;
    }
}
});
// Qiucw
jst_pushOrReplace({ fullname: "System.UInt64", baseTypeName: "System.ValueType", definition:
{
    ctor: Number,
    toString: Number.prototype.toString //avoid toString override by compiler (toString(radix) won't work if overriden)
}, staticDefinition:
{
    tryParse: function (s) {
        return parseInt(s);
    },
    Parse$$String: function (s) {
        return parseInt(s);
    },
    TryParse$$String$$UInt64: function (s, out) {
        out.Value = parseInt(s);
        return true;
    }
}
});
jst_pushOrReplace({
    fullname: "System.Single", baseTypeName: "System.ValueType", definition:
    {
        ctor: Number,
        toString: Number.prototype.toString //avoid toString override by compiler (toString(radix) won't work if overriden)
    }, staticDefinition:
    {
        tryParse: function (s) {
            return parseFloat(s);
        },
        Parse$$String: function (s) {
            return parseFloat(s);
        }
    }
});

jst_pushOrReplace({ fullname: "System.Decimal", baseTypeName: "System.ValueType", definition:
{
    ctor: function (x) { return new Number(x); },
    toString: function () {
        return this.toString();
    }
}, staticDefinition:
{
    tryParse: function (s) {
        return parseFloat(s);
    }
}
});

jst_pushOrReplace({ fullname: "System.Double", baseTypeName: "System.ValueType", definition:
{
    ctor: function (x) { return new Number(x); }
},
    staticDefinition:
    {
        tryParse: function (s) {
            return parseFloat(s);
        },
        IsNaN: isNaN,
        PositiveInfinity: Number.POSITIVE_INFINITY,
        NegativeInfinity: Number.NEGATIVE_INFINITY
    }
});

String.prototype._toString = String.prototype.toString;
jst_pushOrReplace({ fullname: "System.String", baseTypeName: "System.Object", definition:
{
    ctor: String,
    GetEnumerator: function () {
        return new System.CharEnumerator.ctor$$String(this);
    },
    GetType: function () {
        return Typeof(System.String);
    },
    //Insert$$Int32$$String: function (startIndex, str) {
	Insert: function (startIndex, str) {
        var sub1 = this.substring(0, startIndex);
        var sub2 = this.substring(startIndex);
        return sub1 + str + sub2;
    },
    Split$$Char$Array: function (varargs) {
        if (arguments.length != 1) {
            var re = "[";
            for (var i = 0; i < arguments.length; i++) {
                re += arguments[i];
            }
            re += "]";
            var regExp = new RegExp(re);
            var arr = this.split(regExp);
            ////////////////////// Fix for FireFox
            if (isMoz) {
                var arr2 = [];
                for (var i = 0, j = arr.length; i < j; i++) {
                    if (arr[i].length > 0)
                        arr2.push(arr[i]);
                }
                arr = arr2;
            }
            ////////////////////////
            return arr;
        }
        var firstArg = varargs;
        return this.split(firstArg); //TODO: escape new value?
    },
    ReplaceFirst: function (find, replace) {
        return this.replace(find, replace);
    },
    Replace$$Char$$Char: function (oldValue, newValue) {
        return this.Replace(oldValue, newValue);
    },
    Replace$$String$$String: function (oldValue, newValue) {
        return this.Replace(oldValue, newValue);
    },
    Replace: function (oldValue, newValue) {
        //TODO: var regExp = new RegExp(RegExp.Escape(oldValue), "g");
        //        var last = this;
        //        var replaced = this.replace(oldValue, newValue);
        //        while (last != replaced)
        //        {
        //            last = replaced;
        //            replaced = replaced.replace(oldValue, newValue);
        //        }
        //        return replaced;

        var escape = function (str) {
            return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        };

        var regExp = new RegExp(escape(oldValue), "g");
        return this.replace(regExp, newValue);
    },
    Substring$$Int32: function (startIndex) {
        return this.substr(startIndex);
    },
    Substring$$Int32$$Int32: function (startIndex, length) {
        return this.substr(startIndex, length);
    },
    Substring: function (startIndex, length) {
        return this.substr(startIndex, length);
    },
    ToLower$$: function () {
        return this.toLowerCase();
    },
    ToLower: function () {
        return this.toLowerCase();
    },
    ToUpper: function () {
        return this.toUpperCase();
    },
    getItem: function (index) {
        return this.charAt(index);
    },
    IndexOf$$String: function (s) {
        return this.indexOf(s);
    },
    IndexOf$$Char: function (ch) {
        return this.indexOf(ch);
    },
    Split$$Char$Array$$StringSplitOptions: function (charArray, stringSplitOptions) {
        if (stringSplitOptions == System.StringSplitOptions.None)
            throw new Error("Not Implemented");
        return this.Split$$Char$Array.apply(this, charArray);
    },
    IndexOfAny$$Char$Array: function (charArray) {
        //TODO: Convert to RegExp
        var s = charArray.join("");
        for (var i = 0; i < this.length; i++) {
            var ch = this.charAt(i);
            if (s.search(ch) >= 0)
                return i;
        }
        return -1;
    },
    IndexOf: function (value, startIndex) {
        return this.indexOf.apply(this, arguments);
    },
    LastIndexOf: function (value, startIndex) {
        return this.lastIndexOf.apply(this, arguments);
    },
    LastIndexOf$$Char: function (ch) {
        return this.lastIndexOf(ch);
    },
    LastIndexOf$$String: function (s) {
        return this.lastIndexOf(s);
    },
    Remove$$Int32$$Int32: function (start, count) {
        return this.substr(0, start) + this.substr(start + count);
    },
	Remove$$Int32: function (start) {
		return this.substr(0, start);
	},
    StartsWith$$String: function (str) {
        if (str == null)
            throw new System.ArgumentNullException.ctor();
        return this.indexOf(str) == 0;
    },
    EndsWith$$String: function (str) {
        return this.lastIndexOf(str) == this.length - str.length;
    },
    Contains: function (s) {
        return this.indexOf(s) != -1;
    },
    toString: function () {
        return this._toString();
    },
    getLength: function () {
        return this.length;
    },
    get_Chars$$Int32: String.prototype.charAt,
    get_Chars: String.prototype.charAt,
    get_Length: function () {
        return this.length;
    },
    trim: function () {
        return this.replace(/^\s+|\s+$/g, "");
    },
    Trim: function () {
        return this.replace(/^\s+|\s+$/g, "");
    },
    ltrim: function () {
        return this.replace(/^\s+/, "");
    },
    rtrim: function () {
        return this.replace(/\s+$/, "");
    },
    FormatObject$$String$$Object$Array: function (formatStr, object) {
        var r = /{[A-Za-z]+}/g;
        var s = formatStr;
        var matches = s.match(r);
        for (var i = 0, j = matches.length; i < j; i++) {
            var m = matches[i];
            var n = m.substring(1, m.length - 1);
            var v = dataObject["get" + n]();
            s = s.split(m).join(v);
        }
        return s;
    },
    // The CRC32 calculation of a string seems like as good a hashcode as anything else to me. -- Yvan
    // http://noteslog.com/post/crc32-for-javascript/
    GetHashCode: function () {
        var table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";

        var str = this.toString();
        var crc = 0;
        var n = 0; //a number between 0 and 255
        var x = 0; //an hex number

        crc = crc ^ (-1);
        for( var i = 0, iTop = str.length; i < iTop; i++ ) {
            n = ( crc ^ str.charCodeAt( i ) ) & 0xFF;
            x = "0x" + table.substr( n * 9, 8 );
            crc = ( crc >>> 8 ) ^ x;
        }
        return crc ^ (-1);
    },
    PadLeft$$Int32$$Char: function (totalWidth, paddingChar) {
         if ( this.length < totalWidth) {
              var paddingString = new String();
              for (i = 1; i <= (totalWidth - this.length); i++)
                    paddingString += paddingChar;

              return (paddingString + this);
         } 
         else
              return this;
    },
    PadRight$$Int32$$Char: function (totalWidth, paddingChar) {
         if ( this.length < totalWidth) {
              var paddingString = new String();
              for (i = 1; i <= (totalWidth - this.length); i++)
                    paddingString += paddingChar;

              return (this + paddingString);
         } 
         else
              return this;
    }
}, staticDefinition:
{
    Empty: "",
    Format: function (format, varargs)
    {
        var format = arguments[0];
        for (var i = 1; i < arguments.length; i++)
        {
            var str = '{' + (i - 1) + '}';
            format = format.split(str).join(arguments[i]);
        }
        return format;
    },
    Format$$String$$Object$Array: function (format, argsArray){
        for (var i = 0; i < argsArray.length; i++) {
            var str = '{' + i + '}';
            format = format.split(str).join(argsArray[i]);
        }
        return format;
    },
    Format$$String$$Object$$Object$$Object: function (s, obj1, obj2, obj3) {
        return System.String.Format$$String$$Object$Array(s, [obj1, obj2, obj3]);
    },
    Format$$String$$Object$$Object: function (s, obj1, obj2) {
        return System.String.Format$$String$$Object$Array(s, [obj1, obj2]);
    },
    Format$$String$$Object: function (s, obj1) {
        return System.String.Format$$String$$Object$Array(s, [obj1]);
    },
    Join$$String$$String$Array: function (separator, values) {
        return values.join(separator);
    },
    Compare$$String$$String$$Boolean: function (s1, s2, ignoreCase) {
        if (ignoreCase) {
            s1 = s1.toLowerCase();
            s2 = s2.toLowerCase();
        }
        if (s1 > s2)
            return 1;
        else if (s1 < s2)
            return -1;
        else
            return 0;
    },
    IsNullOrEmpty: function (s) {
        return s == null || s.length == 0;
    }
}
});
var Arguments = function () {
}
//TODO: this method doesn't work good when argsObject contains undefineds
Arguments.from = function (argsObject, start) {
    //1;
    return Array.prototype.slice.call(argsObject, start);
    //	var end = argsObject.length;
    //	var list = new Array();
    //	for(var i=start;i<end;i++)
    //	{
    //		list.push(argsObject[i] || null);
    //	}
    //	return list;
}
Arguments.Range = function (argsObject, start, end) {
    if (end == null)
        end = argsObject.length - 1;
    var list = new Array();
    for (var i = start; i <= end; i++) {
        list.push(argsObject[i]);
    }
    return list;
}
Arguments.Contains = function (args, object) {
    for (var i = 0; i < args.length; i++) {
        if (args[i] == object)
            return true;
    }
    return false;
}
//jst_pushOrReplace({ fullname: "Date", definition:
//{
//    removeTime: function () {
//        return new Date(this.getFullYear(), this.getMonth(), this.getDate());
//    },
//    getStartMonthDayOfWeek: function () {
//        return new Date(this.getFullYear(), this.getMonth(), 1).getDay();
//    },
//    getShortDayOfWeek: function () {
//        return Date.shortDays[this.getDay()];
//    },
//    addMonths: function (months) {
//        return new Date(this.getFullYear(), this.getMonth() + months, this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
//    },
//    addDays: function (days) {
//        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + days, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
//    },
//    isInMonth: function (date) {
//        return this.getFullYear() == date.getFullYear() && this.getMonth() == date.getMonth();
//    }
//}, staticDefinition:
//{
//    shortDays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
//    getNow: function () {
//        return new Date();
//    },
//    getToday: function () {
//        return new Date().removeTime();
//    }
//}
//});
//THIS file is for backward compatability and should be deprecated
jst_pushOrReplace({ fullname: "VM", definition:
{
}, staticDefinition:
{
    tryParse: function (text, ctor) {
        if (ctor == null)
            return null;
        var type = ctor._type;
        return this._TryParse(text, type);
    },
    TryParse: function (text, type) {
        if (typeof (type) == "string")
            type = Typeof(type);
        if (type == null)
            return null;
        return this._TryParse(text, type._JsType);
    },
    _TryParse: function (text, jsType) {
        if (jsType == null)
            return null;
        if (typeof (jsType) == "string") {
            jsType = this.getType(jsType);
            if (jsType == null)
                return null;
        }
        if (jsType.tryParse == null)
            return null;
        return jsType.tryParse(text);
    },
    PropertyIs: function (object, propertyName, typeName) {
        var propertyCtor = VM.getPropertyType(object, propertyName);
        if (propertyCtor != null)//TODO: recieved ctor
        {
            var propertyType = propertyCtor._type;
            var type = Type.GetType(typeName, true);
            return TypeIs(propertyType, type);
        }
        return false;
    }
}
});
jst_pushOrReplace({ fullname: "SharpKit.DataModel.NotifyCollectionChangedEventArgs", baseTypeName: "System.Object", definition:
{
    ctor: function (action, changedItem) {
        if (arguments.length == 0)
            return; //TODO: Support serialization constructors
        this._Action = action;
        if (action == "Add") {
            this._NewItems = [changedItem];
        }
        else if (action == "Remove") {
            this._OldItems = [changedItem];
        }
        else
            throw new Error("Not implemented");
    },
    get_OldItems: function () {
        return this._OldItems;
    },
    get_NewItems: function () {
        return this._NewItems;
    },
    get_Action: function () {
        return this._Action;
    }
}
});

//jst_pushOrReplace({
//    fullname: "Uint8Array",
//    definition:
//    {
//        GetEnumerator: function () {
//            return new ArrayEnumerator.ctor(this);
//        },
//        Clone: function() {
//            return new Uint8Array(this);
//        }
//    }
//});
//
//jst_pushOrReplace({
//    fullname: "Int16Array",
//    definition:
//    {
//        GetEnumerator: function () {
//            return new ArrayEnumerator.ctor(this);
//        },
//        Clone: function() {
//            return new Int16Array(this);
//        }
//    }
//});
//
//jst_pushOrReplace({
//    fullname: "Uint16Array",
//    definition:
//    {
//        GetEnumerator: function () {
//            return new ArrayEnumerator.ctor(this);
//        },
//        Clone: function() {
//            return new Uint16Array(this);
//        }
//    }
//});
//
//jst_pushOrReplace({
//    fullname: "Int32Array",
//    definition:
//    {
//        GetEnumerator: function() {
//            return new ArrayEnumerator.ctor(this);
//        },
//        Clone: function() {
//            return new Int32Array(this);
//        }
//    }
//});
//
//jst_pushOrReplace({
//    fullname: "Uint32Array",
//    definition:
//    {
//        GetEnumerator: function () {
//            return new ArrayEnumerator.ctor(this);
//        },
//        Clone: function() {
//            return new Uint32Array(this);
//        }
//    }
//});
//
//jst_pushOrReplace({
//    fullname: "Float32Array",
//    definition:
//    {
//        GetEnumerator: function () {
//            return new ArrayEnumerator.ctor(this);
//        },
//        Clone: function() {
//            return new Float32Array(this);
//        }
//    }
//});
//
//jst_pushOrReplace({
//    fullname: "Float64Array",
//    definition:
//    {
//        GetEnumerator: function () {
//            return new ArrayEnumerator.ctor(this);
//        },
//        Clone: function() {
//            return new Float64Array(this);
//        }
//    }
//});

AfterCompilation(function()
{
    System.IO.Path.ctor();
});

var System$IO$Path = {
    fullname: "System.IO.Path",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            System.IO.Path.AltDirectorySeparatorChar = "/";
            System.IO.Path.DirectorySeparatorChar = "\\";
            System.IO.Path.MAX_DIRECTORY_PATH = 248;
            System.IO.Path.MAX_PATH = 260;
            System.IO.Path.MaxPath = 260;
            System.IO.Path.PathSeparator = ";";
            System.IO.Path.VolumeSeparatorChar = ":";
        },
        ChangeExtension: function (path, extension){
            if (path == null){
                return null;
            }
            System.IO.Path.CheckInvalidPathChars(path);
            var str = path;
            var length = path.length;
            while (--length >= 0){
                var ch = path.charAt(length);
                if (ch == "."){
                    str = path.substr(0, length);
                    break;
                }
                if (((ch == System.IO.Path.DirectorySeparatorChar) || (ch == System.IO.Path.AltDirectorySeparatorChar)) || (ch == System.IO.Path.VolumeSeparatorChar)){
                    break;
                }
            }
            if ((extension == null) || (path.length == 0)){
                return str;
            }
            if ((extension.length == 0) || (extension.charAt(0) != ".")){
                str = str + ".";
            }
            return (str + extension);
        },
        CharArrayStartsWithOrdinal: function (array, numChars, compareTo, ignoreCase){
            if (numChars < compareTo.length){
                return false;
            }
            if (ignoreCase){
                var str = new System.String.ctor$$Char$Array$$Int32$$Int32(array, 0, compareTo.length);
                return compareTo.Equals$$String$$StringComparison(str, 5);
            }
            for (var i = 0; i < compareTo.length; i++){
                if (array[i] != compareTo.charAt(i)){
                    return false;
                }
            }
            return true;
        },
        CheckInvalidPathChars: function (path){
            for (var i = 0; i < path.length; i++){
                var num2 = path.charCodeAt(i);
                if (((num2 == 34) || (num2 == 60)) || (((num2 == 62) || (num2 == 124)) || (num2 < 32))){
                    throw $CreateException(new System.ArgumentException.ctor$$String(System.Environment.GetResourceString("Argument_InvalidPathChars")), new Error());
                }
            }
        },
        CheckSearchPattern: function (searchPattern){
            var num;
            while ((num = searchPattern.indexOf("..", 4)) != -1){
                if ((num + 2) == searchPattern.length){
                    throw $CreateException(new System.ArgumentException.ctor$$String(System.Environment.GetResourceString("Arg_InvalidSearchPattern")), new Error());
                }
                if ((searchPattern.charAt(num + 2) == System.IO.Path.DirectorySeparatorChar) || (searchPattern.charAt(num + 2) == System.IO.Path.AltDirectorySeparatorChar)){
                    throw $CreateException(new System.ArgumentException.ctor$$String(System.Environment.GetResourceString("Arg_InvalidSearchPattern")), new Error());
                }
                searchPattern = searchPattern.substr(num + 2);
            }
        },
        Combine: function (path1, path2){
            if ((path1 == null) || (path2 == null)){
                throw $CreateException(new System.ArgumentNullException.ctor$$String((path1 == null) ? "path1" : "path2"), new Error());
            }
            System.IO.Path.CheckInvalidPathChars(path1);
            System.IO.Path.CheckInvalidPathChars(path2);
            if (path2.length == 0){
                return path1;
            }
            if (path1.length == 0){
                return path2;
            }
            if (System.IO.Path.IsPathRooted(path2)){
                return path2;
            }
            var ch = path1.charAt(path1.length - 1);
            if (((ch != System.IO.Path.DirectorySeparatorChar) && (ch != System.IO.Path.AltDirectorySeparatorChar)) && (ch != System.IO.Path.VolumeSeparatorChar)){
                return (path1 + System.IO.Path.DirectorySeparatorChar + path2);
            }
            return (path1 + path2);
        },
        FixupPath: function (path){
            return System.IO.Path.NormalizePath(path, false);
        },
        GetDirectoryName: function (path){
            if (path != null){
                System.IO.Path.CheckInvalidPathChars(path);
                path = System.IO.Path.FixupPath(path);
                var rootLength = System.IO.Path.GetRootLength(path);
                if (path.length > rootLength){
                    var length = path.length;
                    if (length == rootLength){
                        return null;
                    }
                    while (((length > rootLength) && (path.charAt(--length) != System.IO.Path.DirectorySeparatorChar)) && (path.charAt(length) != System.IO.Path.AltDirectorySeparatorChar)){
                    }
                    return path.substr(0, length);
                }
            }
            return null;
        },
        GetExtension: function (path){
            if (path == null){
                return null;
            }
            System.IO.Path.CheckInvalidPathChars(path);
            var length = path.length;
            var startIndex = length;
            while (--startIndex >= 0){
                var ch = path.charAt(startIndex);
                if (ch == "."){
                    if (startIndex != (length - 1)){
                        return path.substr(startIndex, length - startIndex);
                    }
                    return System.String.Empty;
                }
                if (((ch == System.IO.Path.DirectorySeparatorChar) || (ch == System.IO.Path.AltDirectorySeparatorChar)) || (ch == System.IO.Path.VolumeSeparatorChar)){
                    break;
                }
            }
            return System.String.Empty;
        },
        GetFileName: function (path){
            if (path != null){
                System.IO.Path.CheckInvalidPathChars(path);
                var length = path.length;
                var num2 = length;
                while (--num2 >= 0){
                    var ch = path.charAt(num2);
                    if (((ch == System.IO.Path.DirectorySeparatorChar) || (ch == System.IO.Path.AltDirectorySeparatorChar)) || (ch == System.IO.Path.VolumeSeparatorChar)){
                        return path.substr(num2 + 1, (length - num2) - 1);
                    }
                }
            }
            return path;
        },
        GetFileNameWithoutExtension: function (path){
            path = System.IO.Path.GetFileName(path);
            if (path == null){
                return null;
            }
            var length = path.lastIndexOf(".");
            if (length == -1){
                return path;
            }
            return path.substr(0, length);
        },
        GetFullPath: function (path){
            var fullPathInternal = System.IO.Path.GetFullPathInternal(path);
            return fullPathInternal;
        },
        GetFullPathInternal: function (path){
            if (path == null){
                throw $CreateException(new System.ArgumentNullException.ctor$$String("path"), new Error());
            }
            return System.IO.Path.NormalizePath(path, true);
        },
        GetInvalidFileNameChars: function (){
            return System.IO.Path.InvalidFileNameChars;
        },
        GetInvalidPathChars: function (){
            return System.IO.Path.RealInvalidPathChars;
        },
        GetPathRoot: function (path){
            if (path == null){
                return null;
            }
            path = System.IO.Path.FixupPath(path);
            return path.substr(0, System.IO.Path.GetRootLength(path));
        },
        GetRandomFileName: function (){
            throw $CreateException(new System.NotSupportedException.ctor(), new Error());
        },
        GetRootLength: function (path){
            System.IO.Path.CheckInvalidPathChars(path);
            var num = 0;
            var length = path.length;
            if ((length >= 1) && System.IO.Path.IsDirectorySeparator(path.charAt(0))){
                num = 1;
                if ((length >= 2) && System.IO.Path.IsDirectorySeparator(path.charAt(1))){
                    num = 2;
                    var num3 = 2;
                    while ((num < length) && (((path.charAt(num) != System.IO.Path.DirectorySeparatorChar) && (path.charAt(num) != System.IO.Path.AltDirectorySeparatorChar)) || (--num3 > 0))){
                        num++;
                    }
                }
                return num;
            }
            if ((length >= 2) && (path.charAt(1) == System.IO.Path.VolumeSeparatorChar)){
                num = 2;
                if ((length >= 3) && System.IO.Path.IsDirectorySeparator(path.charAt(2))){
                    num++;
                }
            }
            return num;
        },
        GetTempFileName: function (){
            throw $CreateException(new System.NotSupportedException.ctor(), new Error());
        },
        GetTempPath: function (){
            throw $CreateException(new System.NotSupportedException.ctor(), new Error());
        },
        HasExtension: function (path){
            if (path != null){
                System.IO.Path.CheckInvalidPathChars(path);
                var length = path.length;
                while (--length >= 0){
                    var ch = path.charAt(length);
                    if (ch == "."){
                        return (length != (path.length - 1));
                    }
                    if (((ch == System.IO.Path.DirectorySeparatorChar) || (ch == System.IO.Path.AltDirectorySeparatorChar)) || (ch == System.IO.Path.VolumeSeparatorChar)){
                        break;
                    }
                }
            }
            return false;
        },
        InternalCombine: function (path1, path2){
            if ((path1 == null) || (path2 == null)){
                throw $CreateException(new System.ArgumentNullException.ctor$$String((path1 == null) ? "path1" : "path2"), new Error());
            }
            System.IO.Path.CheckInvalidPathChars(path1);
            System.IO.Path.CheckInvalidPathChars(path2);
            if (path2.length == 0){
                throw $CreateException(new System.ArgumentException.ctor$$String$$String(System.Environment.GetResourceString("Argument_PathEmpty"), "path2"), new Error());
            }
            if (System.IO.Path.IsPathRooted(path2)){
                throw $CreateException(new System.ArgumentException.ctor$$String$$String(System.Environment.GetResourceString("Arg_Path2IsRooted"), "path2"), new Error());
            }
            var length = path1.length;
            if (length == 0){
                return path2;
            }
            var ch = path1.charAt(length - 1);
            if (((ch != System.IO.Path.DirectorySeparatorChar) && (ch != System.IO.Path.AltDirectorySeparatorChar)) && (ch != System.IO.Path.VolumeSeparatorChar)){
                return (path1 + System.IO.Path.DirectorySeparatorChar + path2);
            }
            return (path1 + path2);
        },
        IsDirectorySeparator: function (c){
            if (c != System.IO.Path.DirectorySeparatorChar){
                return (c == System.IO.Path.AltDirectorySeparatorChar);
            }
            return true;
        },
        IsPathRooted: function (path){
            if (path != null){
                System.IO.Path.CheckInvalidPathChars(path);
                var length = path.length;
                if (((length >= 1) && ((path.charAt(0) == System.IO.Path.DirectorySeparatorChar) || (path.charAt(0) == System.IO.Path.AltDirectorySeparatorChar))) || ((length >= 2) && (path.charAt(1) == System.IO.Path.VolumeSeparatorChar))){
                    return true;
                }
            }
            return false;
        },
        NormalizePath: function (path, fullCheck){
            return System.IO.Path.NormalizePathSlow(path, fullCheck);
        },
        NormalizePathSlow: function (path, fullCheck){
            return path;
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$IO$Path);

var System$Linq$Enumerable = {
    fullname: "System.Linq.Enumerable",
    baseTypeName: "System.Object",
    staticDefinition: {
        CombinePredicates$1: function (TSource, predicate1, predicate2){
            return function (x){
                return predicate1(x) && predicate2(x);
            };
        },
        CombineSelectors$3: function (TSource, TMiddle, TResult, selector1, selector2){
            return function (x){
                return selector2(selector1(x));
            };
        },
        First$1$$IEnumerable$1: function (TSource, source){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            var list = As(source, System.Collections.Generic.IList$1.ctor);
            if (list != null){
                if (list.get_Count() > 0){
                    return list.get_Item$$Int32(0);
                }
            }
            else {
                var enumerator = source.GetEnumerator();
                try{
                    if (enumerator.MoveNext()){
                        return enumerator.get_Current();
                    }
                }
                finally{
                    enumerator.Dispose();
                }
            }
            throw $CreateException(System.Linq.Error.NoElements(), new Error());
        },
        First$1$$IEnumerable$1$$Func$2: function (TSource, source, predicate){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            if (predicate == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("predicate"), new Error());
            }
            var $it5 = source.GetEnumerator();
            while ($it5.MoveNext()){
                var local = $it5.get_Current();
                if (predicate(local)){
                    return local;
                }
            }
            throw $CreateException(System.Linq.Error.NoMatch(), new Error());
        },
        FirstOrDefault$1$$IEnumerable$1: function (TSource, source){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            var list = As(source, System.Collections.Generic.IList$1.ctor);
            if (list != null){
                if (list.get_Count() > 0){
                    return list.get_Item$$Int32(0);
                }
            }
            else {
                var enumerator = source.GetEnumerator();
                try{
                    if (enumerator.MoveNext()){
                        return enumerator.get_Current();
                    }
                }
                finally{
                    enumerator.Dispose();
                }
            }
            return Default(TSource);
        },
        FirstOrDefault$1$$IEnumerable$1$$Func$2: function (TSource, source, predicate){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            if (predicate == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("predicate"), new Error());
            }
            var $it6 = source.GetEnumerator();
            while ($it6.MoveNext()){
                var local = $it6.get_Current();
                if (predicate(local)){
                    return local;
                }
            }
            return Default(TSource);
        },
        Single$1$$IEnumerable$1: function (TSource, source){
            if (source == null)
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            var list = As(source, System.Collections.Generic.IList$1.ctor);
            if (list != null){
                if (list.get_Count() == 1)
                    return list.get_Item$$Int32(0);
                else
                    throw $CreateException(new System.InvalidOperationException.ctor(), new Error());
            }
            else {
                var enumerator = source.GetEnumerator();
                try{
                    if (enumerator.MoveNext())
                        return enumerator.get_Current();
                }
                finally{
                    enumerator.Dispose();
                }
            }
            throw $CreateException(System.Linq.Error.NoElements(), new Error());
        },
        Single$1$$IEnumerable$1$$Func$2: function (TSource, source, predicate){
            if (source == null)
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            if (predicate == null)
                throw $CreateException(System.Linq.Error.ArgumentNull("predicate"), new Error());
            var $it7 = source.GetEnumerator();
            while ($it7.MoveNext()){
                var local = $it7.get_Current();
                if (predicate(local))
                    return local;
            }
            throw $CreateException(System.Linq.Error.NoMatch(), new Error());
        },
        SingleOrDefault$1$$IEnumerable$1: function (TSource, source){
            if (source == null)
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            var list = As(source, System.Collections.Generic.IList$1.ctor);
            if (list != null){
                if (list.get_Count() == 1)
                    return list.get_Item$$Int32(0);
                else
                    throw $CreateException(new System.InvalidOperationException.ctor(), new Error());
            }
            else {
                var enumerator = source.GetEnumerator();
                try{
                    if (enumerator.MoveNext())
                        return enumerator.get_Current();
                }
                finally{
                    enumerator.Dispose();
                }
            }
            return Default(TSource);
        },
        SingleOrDefault$1$$IEnumerable$1$$Func$2: function (TSource, source, predicate){
            if (source == null)
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            if (predicate == null)
                throw $CreateException(System.Linq.Error.ArgumentNull("predicate"), new Error());
            var $it8 = source.GetEnumerator();
            while ($it8.MoveNext()){
                var local = $it8.get_Current();
                if (predicate(local))
                    return local;
            }
            return Default(TSource);
        },
        Last$1$$IEnumerable$1: function (TSource, source){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            var list = As(source, System.Collections.Generic.IList$1.ctor);
            if (list != null){
                var count = list.get_Count();
                if (count > 0){
                    return list.get_Item$$Int32(count - 1);
                }
            }
            else {
                var enumerator = source.GetEnumerator();
                try{
                    if (enumerator.MoveNext()){
                        var current;
                        do{
                            current = enumerator.get_Current();
                        }
                        while (enumerator.MoveNext())
                        return current;
                    }
                }
                finally{
                    enumerator.Dispose();
                }
            }
            throw $CreateException(System.Linq.Error.NoElements(), new Error());
        },
        Last$1$$IEnumerable$1$$Func$2: function (TSource, source, predicate){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            if (predicate == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("predicate"), new Error());
            }
            var local = Default(TSource);
            var flag = false;
            var $it9 = source.GetEnumerator();
            while ($it9.MoveNext()){
                var local2 = $it9.get_Current();
                if (predicate(local2)){
                    local = local2;
                    flag = true;
                }
            }
            if (!flag){
                throw $CreateException(System.Linq.Error.NoMatch(), new Error());
            }
            return local;
        },
        LastOrDefault$1$$IEnumerable$1: function (TSource, source){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            var list = As(source, System.Collections.Generic.IList$1.ctor);
            if (list != null){
                var count = list.get_Count();
                if (count > 0){
                    return list.get_Item$$Int32(count - 1);
                }
            }
            else {
                var enumerator = source.GetEnumerator();
                try{
                    if (enumerator.MoveNext()){
                        var current;
                        do{
                            current = enumerator.get_Current();
                        }
                        while (enumerator.MoveNext())
                        return current;
                    }
                }
                finally{
                    enumerator.Dispose();
                }
            }
            return Default(TSource);
        },
        LastOrDefault$1$$IEnumerable$1$$Func$2: function (TSource, source, predicate){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            if (predicate == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("predicate"), new Error());
            }
            var local = Default(TSource);
            var $it10 = source.GetEnumerator();
            while ($it10.MoveNext()){
                var local2 = $it10.get_Current();
                if (predicate(local2)){
                    local = local2;
                }
            }
            return local;
        },
        Where$1$$IEnumerable$1$$Func$2: function (TSource, source, predicate){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            if (predicate == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("predicate"), new Error());
            }
            if (Is(source, System.Linq.Enumerable.Iterator.ctor)){
                return (Cast(source, System.Linq.Enumerable.Iterator.ctor)).Where(predicate);
            }
            if (source instanceof Array){
                return new System.Linq.Enumerable.WhereArrayIterator.ctor(TSource, source instanceof Array || source == null ? source : (function (){
                    throw new Error("InvalidCastException");
                }
                ()), predicate);
            }
            if (Is(source, System.Collections.Generic.List$1.ctor)){
                return new System.Linq.Enumerable.WhereListIterator.ctor(TSource, Cast(source, System.Collections.Generic.List$1.ctor), predicate);
            }
            return new System.Linq.Enumerable.WhereEnumerableIterator.ctor(TSource, source, predicate);
        },
        Where$1$$IEnumerable$1$$Func$3: function (TSource, source, predicate){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            if (predicate == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("predicate"), new Error());
            }
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Contains$1$$IEnumerable$1$$TSource: function (TSource, source, value){
            if (source == null)
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            var is2 = As(source, System.Collections.Generic.ICollection$1.ctor);
            if (is2 != null)
                return is2.Contains(value);
            var $it11 = source.GetEnumerator();
            while ($it11.MoveNext()){
                var local = $it11.get_Current();
                if (local == value)
                    return true;
            }
            return false;
        },
        Contains$1$$IEnumerable$1$$TSource$$IEqualityComparer$1: function (TSource, source, value, comparer){
            if (comparer == null){
                return System.Linq.Enumerable.Contains$1$$IEnumerable$1$$TSource(TSource, source, value);
            }
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            var $it12 = source.GetEnumerator();
            while ($it12.MoveNext()){
                var local = $it12.get_Current();
                if (comparer.Equals$$T$$T(local, value)){
                    return true;
                }
            }
            return false;
        },
        Any$1$$IEnumerable$1: function (TSource, source){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            var enumerator = source.GetEnumerator();
            try{
                if (enumerator.MoveNext()){
                    return true;
                }
            }
            finally{
                enumerator.Dispose();
            }
            return false;
        },
        Any$1$$IEnumerable$1$$Func$2: function (TSource, source, predicate){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            if (predicate == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("predicate"), new Error());
            }
            var $it13 = source.GetEnumerator();
            while ($it13.MoveNext()){
                var local = $it13.get_Current();
                if (predicate(local)){
                    return true;
                }
            }
            return false;
        },
        Concat$1: function (TSource, first, second){
            if (first == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("first"), new Error());
            }
            if (second == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("second"), new Error());
            }
            return new System.Linq.Enumerable.TakeIterator.ctor(TSource, first, second);
        },
        Count$1$$IEnumerable$1: function (TSource, source){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            var is2 = As(source, System.Collections.Generic.ICollection$1.ctor);
            if (is2 != null){
                return is2.get_Count();
            }
            var num = 0;
            var enumerator = source.GetEnumerator();
            try{
                while (enumerator.MoveNext()){
                    num++;
                }
            }
            finally{
                enumerator.Dispose();
            }
            return num;
        },
        Count$1$$IEnumerable$1$$Func$2: function (TSource, source, predicate){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            if (predicate == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("predicate"), new Error());
            }
            var num = 0;
            var $it14 = source.GetEnumerator();
            while ($it14.MoveNext()){
                var local = $it14.get_Current();
                if (predicate(local)){
                    num++;
                }
            }
            return num;
        },
        OfType$1: function (TResult, source){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            return new System.Linq.Enumerable.OfTypeIterator.ctor(TResult, source);
        },
        OrderBy$2$$IEnumerable$1$$Func$2: function (TSource, TKey, source, keySelector){
            return new System.Linq._OrderedEnumerable$2.ctor(TSource, TKey, source, keySelector, null, false);
        },
        OrderBy$2$$IEnumerable$1$$Func$2$$IComparer$1: function (TSource, TKey, source, keySelector, comparer){
            return new System.Linq._OrderedEnumerable$2.ctor(TSource, TKey, source, keySelector, comparer, false);
        },
        OrderByDescending$2$$IEnumerable$1$$Func$2: function (TSource, TKey, source, keySelector){
            return new System.Linq._OrderedEnumerable$2.ctor(TSource, TKey, source, keySelector, null, true);
        },
        OrderByDescending$2$$IEnumerable$1$$Func$2$$IComparer$1: function (TSource, TKey, source, keySelector, comparer){
            return new System.Linq._OrderedEnumerable$2.ctor(TSource, TKey, source, keySelector, comparer, true);
        },
        ThenBy$2$$IOrderedEnumerable$1$$Func$2: function (TSource, TKey, source, keySelector){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            return source.CreateOrderedEnumerable$1(TKey, keySelector, null, false);
        },
        ThenBy$2$$IOrderedEnumerable$1$$Func$2$$IComparer$1: function (TSource, TKey, source, keySelector, comparer){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            return source.CreateOrderedEnumerable$1(TKey, keySelector, comparer, false);
        },
        ThenByDescending$2$$IOrderedEnumerable$1$$Func$2: function (TSource, TKey, source, keySelector){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            return source.CreateOrderedEnumerable$1(TKey, keySelector, null, true);
        },
        ThenByDescending$2$$IOrderedEnumerable$1$$Func$2$$IComparer$1: function (TSource, TKey, source, keySelector, comparer){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            return source.CreateOrderedEnumerable$1(TKey, keySelector, comparer, true);
        },
        Select$2$$IEnumerable$1$$Func$2: function (TSource, TResult, source, selector){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            if (selector == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("selector"), new Error());
            }
            if (Is(source, System.Linq.Enumerable.Iterator.ctor)){
                return (Cast(source, System.Linq.Enumerable.Iterator.ctor)).Select$1(TResult, selector);
            }
            if (source instanceof Array){
                return new System.Linq.Enumerable.WhereSelectArrayIterator.ctor(TSource, TResult, source instanceof Array || source == null ? source : (function (){
                    throw new Error("InvalidCastException");
                }
                ()), null, selector);
            }
            if (Is(source, System.Collections.Generic.List$1.ctor)){
                return new System.Linq.Enumerable.WhereSelectListIterator.ctor(TSource, TResult, Cast(source, System.Collections.Generic.List$1.ctor), null, selector);
            }
            return new System.Linq.Enumerable.WhereSelectEnumerableIterator.ctor(TSource, TResult, source, null, selector);
        },
        Select$2$$IEnumerable$1$$Func$3: function (TSource, TResult, source, selector){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        SelectMany$2$$IEnumerable$1$$Func$2: function (TSource, TResult, source, selector){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            if (selector == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("selector"), new Error());
            }
            if (source instanceof Array){
                return new System.Linq.Enumerable.SelectManyArrayIterator.ctor(TSource, TResult, source instanceof Array || source == null ? source : (function (){
                    throw new Error("InvalidCastException");
                }
                ()), selector);
            }
            if (Is(source, System.Collections.Generic.List$1.ctor)){
                return new System.Linq.Enumerable.SelectManyListIterator.ctor(TSource, TResult, Cast(source, System.Collections.Generic.List$1.ctor), selector);
            }
            return new System.Linq.Enumerable.SelectManyEnumerableIterator.ctor(TSource, TResult, source, selector);
        },
        SelectMany$2$$IEnumerable$1$$Func$3: function (TSource, TResult, source, selector){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        SelectMany$3$$IEnumerable$1$$Func$2$$Func$3: function (TSource, TCollection, TResult, source, collectionSelector, resultSelector){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            if (collectionSelector == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("collectionSelector"), new Error());
            }
            if (resultSelector == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("resultSelector"), new Error());
            }
            return System.Linq.Enumerable.Select$2$$IEnumerable$1$$Func$2(System.Tuple$2.ctor, TResult, System.Linq.Enumerable.SelectMany$2$$IEnumerable$1$$Func$2(TSource, System.Tuple$2.ctor, source, function (t){
                return System.Linq.Enumerable.Select$2$$IEnumerable$1$$Func$2(TCollection, System.Tuple$2.ctor, collectionSelector(t), function (x){
                    return System.Tuple.Create$2$$T1$$T2(TSource, TCollection, t, x);
                });
            }), function (pair){
                return resultSelector(pair.get_Item1(), pair.get_Item2());
            });
        },
        Skip$1: function (TSource, source, count){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            var x = new System.Linq.Enumerable.SkipIterator.ctor(TSource, source, count);
            return x;
        },
        Take$1: function (TSource, source, count){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            var x = new System.Linq.Enumerable.TakeIterator.ctor(TSource, source, count);
            return x;
        },
        ToArray$1: function (TSource, source){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            var arr =  [];
            var $it15 = source.GetEnumerator();
            while ($it15.MoveNext()){
                var obj = $it15.get_Current();
                arr.push(obj);
            }
            return arr;
        },
        ToList$1: function (TSource, source){
            if (source == null){
                throw $CreateException(System.Linq.Error.ArgumentNull("source"), new Error());
            }
            return new System.Collections.Generic.List$1.ctor$$IEnumerable$1(TSource, source);
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Linq$Enumerable);
var System$Linq$Enumerable$Iterator = {
    fullname: "System.Linq.Enumerable.Iterator",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IEnumerable$1", "System.Collections.IEnumerable", "System.Collections.Generic.IEnumerator$1", "System.IDisposable", "System.Collections.IEnumerator"],
    Kind: "Class",
    definition: {
        ctor: function (TSource){
            this.TSource = TSource;
            this.state = 0;
            this.current = null;
            System.Object.ctor.call(this);
        },
        Current$$: "`0",
        get_Current: function (){
            return this.current;
        },
        Dispose: function (){
            this.current = Default(this.TSource);
            this.state = -1;
        },
        GetEnumerator: function (){
            if (this.state == 0){
                this.state = 1;
                return this;
            }
            var iterator = this.Clone();
            iterator.state = 1;
            return iterator;
        }
    }
};
jst_pushOrReplace(System$Linq$Enumerable$Iterator);
var System$Linq$Enumerable$SelectManyEnumerableIterator = {
    fullname: "System.Linq.Enumerable.SelectManyEnumerableIterator",
    baseTypeName: "System.Linq.Enumerable.Iterator",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (TSource, TResult, source, selector){
            this.TSource = TSource;
            this.TResult = TResult;
            this.source = null;
            this.selector = null;
            this.enumerator = null;
            this.innerEnumerator = null;
            System.Linq.Enumerable.Iterator.ctor.call(this, this.TResult);
            this.source = source;
            this.selector = selector;
        },
        Clone: function (){
            return new System.Linq.Enumerable.SelectManyEnumerableIterator.ctor(this.TSource, this.TResult, this.source, this.selector);
        },
        Dispose: function (){
            if (this.enumerator != null){
                this.enumerator.Dispose();
            }
            this.enumerator = null;
            System.Linq.Enumerable.Iterator.commonPrototype.Dispose.call(this);
        },
        MoveNext: function (){
            switch (this.state){
                case 1:
                    this.enumerator = this.source.GetEnumerator();
                    this.state = 2;
                    break;
                case 2:
                    break;
                default:
                    return false;
            }
            while (true){
                if (this.innerEnumerator == null){
                    if (this.enumerator.MoveNext()){
                        this.innerEnumerator = this.selector(this.enumerator.get_Current()).GetEnumerator();
                    }
                    else {
                        this.Dispose();
                        return false;
                    }
                }
                else {
                    if (this.innerEnumerator.MoveNext()){
                        this.current = this.innerEnumerator.get_Current();
                        return true;
                    }
                    this.innerEnumerator = null;
                }
            }
        },
        Select$1: function (TResult2, selector){
            return new System.Linq.Enumerable.WhereSelectEnumerableIterator.ctor(this.TResult, TResult2, this, null, selector);
        },
        Where: function (predicate){
            return new System.Linq.Enumerable.WhereEnumerableIterator.ctor(this.TResult, this, predicate);
        }
    }
};
jst_pushOrReplace(System$Linq$Enumerable$SelectManyEnumerableIterator);
var System$Linq$Enumerable$SelectManyListIterator = {
    fullname: "System.Linq.Enumerable.SelectManyListIterator",
    baseTypeName: "System.Linq.Enumerable.Iterator",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (TSource, TResult, source, selector){
            this.TSource = TSource;
            this.TResult = TResult;
            this.source = null;
            this.selector = null;
            this.index = 0;
            this.innerEnumerator = null;
            System.Linq.Enumerable.Iterator.ctor.call(this, this.TResult);
            this.source = source;
            this.selector = selector;
        },
        Clone: function (){
            return new System.Linq.Enumerable.SelectManyListIterator.ctor(this.TSource, this.TResult, this.source, this.selector);
        },
        MoveNext: function (){
            if (this.state == 1){
                while (this.index < this.source.get_Count() || this.innerEnumerator != null){
                    if (this.innerEnumerator == null){
                        var arg = this.source.get_Item$$Int32(this.index);
                        this.index++;
                        var innerEnumerable = this.selector(arg);
                        this.innerEnumerator = innerEnumerable.GetEnumerator();
                    }
                    var hadNext = this.innerEnumerator.MoveNext();
                    if (!hadNext){
                        this.innerEnumerator = null;
                        continue;
                    }
                    this.current = this.innerEnumerator.get_Current();
                    return true;
                }
                this.Dispose();
            }
            return false;
        },
        Select$1: function (TResult2, selector){
            return new System.Linq.Enumerable.WhereSelectEnumerableIterator.ctor(this.TResult, TResult2, this, null, selector);
        },
        Where: function (predicate){
            return new System.Linq.Enumerable.WhereEnumerableIterator.ctor(this.TResult, this, predicate);
        }
    }
};
jst_pushOrReplace(System$Linq$Enumerable$SelectManyListIterator);
var System$Linq$Enumerable$WhereArrayIterator = {
    fullname: "System.Linq.Enumerable.WhereArrayIterator",
    baseTypeName: "System.Linq.Enumerable.Iterator",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (TSource, source, predicate){
            this.TSource = TSource;
            this.source = null;
            this.predicate = null;
            this.index = 0;
            System.Linq.Enumerable.Iterator.ctor.call(this, this.TSource);
            this.source = source;
            this.predicate = predicate;
        },
        Clone: function (){
            return new System.Linq.Enumerable.WhereArrayIterator.ctor(this.TSource, this.source, this.predicate);
        },
        MoveNext: function (){
            if (this.state == 1){
                while (this.index < this.source.length){
                    var tSource = this.source[this.index];
                    this.index++;
                    if (this.predicate(tSource)){
                        this.current = tSource;
                        return true;
                    }
                }
                this.Dispose();
            }
            return false;
        },
        Select$1: function (TResult, selector){
            return new System.Linq.Enumerable.WhereSelectArrayIterator.ctor(this.TSource, TResult, this.source, this.predicate, selector);
        },
        Where: function (predicate){
            return new System.Linq.Enumerable.WhereArrayIterator.ctor(this.TSource, this.source, System.Linq.Enumerable.CombinePredicates$1(this.TSource, this.predicate, predicate));
        }
    }
};
jst_pushOrReplace(System$Linq$Enumerable$WhereArrayIterator);
var System$Linq$Enumerable$WhereEnumerableIterator = {
    fullname: "System.Linq.Enumerable.WhereEnumerableIterator",
    baseTypeName: "System.Linq.Enumerable.Iterator",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (TSource, source, predicate){
            this.TSource = TSource;
            this.source = null;
            this.predicate = null;
            this.enumerator = null;
            System.Linq.Enumerable.Iterator.ctor.call(this, this.TSource);
            this.source = source;
            this.predicate = predicate;
        },
        Clone: function (){
            return new System.Linq.Enumerable.WhereEnumerableIterator.ctor(this.TSource, this.source, this.predicate);
        },
        Dispose: function (){
            if (this.enumerator != null){
                this.enumerator.Dispose();
            }
            this.enumerator = null;
            System.Linq.Enumerable.Iterator.commonPrototype.Dispose.call(this);
        },
        MoveNext: function (){
            switch (this.state){
                case 1:
                    this.enumerator = this.source.GetEnumerator();
                    this.state = 2;
                    break;
                case 2:
                    break;
                default:
                    return false;
            }
            while (this.enumerator.MoveNext()){
                var current = this.enumerator.get_Current();
                if (this.predicate(current)){
                    this.current = current;
                    return true;
                }
            }
            this.Dispose();
            return false;
        },
        Select$1: function (TResult, selector){
            return new System.Linq.Enumerable.WhereSelectEnumerableIterator.ctor(this.TSource, TResult, this.source, this.predicate, selector);
        },
        Where: function (predicate){
            return new System.Linq.Enumerable.WhereEnumerableIterator.ctor(this.TSource, this.source, System.Linq.Enumerable.CombinePredicates$1(this.TSource, this.predicate, predicate));
        }
    }
};
jst_pushOrReplace(System$Linq$Enumerable$WhereEnumerableIterator);
var System$Linq$Enumerable$WhereListIterator = {
    fullname: "System.Linq.Enumerable.WhereListIterator",
    baseTypeName: "System.Linq.Enumerable.Iterator",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (TSource, source, predicate){
            this.TSource = TSource;
            this.source = null;
            this.predicate = null;
            this.enumerator = null;
            System.Linq.Enumerable.Iterator.ctor.call(this, this.TSource);
            this.source = source;
            this.predicate = predicate;
        },
        Clone: function (){
            return new System.Linq.Enumerable.WhereListIterator.ctor(this.TSource, this.source, this.predicate);
        },
        MoveNext: function (){
            switch (this.state){
                case 1:
                    this.enumerator = this.source.GetEnumerator();
                    this.state = 2;
                    break;
                case 2:
                    break;
                default:
                    return false;
            }
            while (this.enumerator.MoveNext()){
                var current = this.enumerator.get_Current();
                if (this.predicate(current)){
                    this.current = current;
                    return true;
                }
            }
            this.Dispose();
            return false;
        },
        Select$1: function (TResult, selector){
            return new System.Linq.Enumerable.WhereSelectListIterator.ctor(this.TSource, TResult, this.source, this.predicate, selector);
        },
        Where: function (predicate){
            return new System.Linq.Enumerable.WhereListIterator.ctor(this.TSource, this.source, System.Linq.Enumerable.CombinePredicates$1(this.TSource, this.predicate, predicate));
        }
    }
};
jst_pushOrReplace(System$Linq$Enumerable$WhereListIterator);
var System$Linq$Enumerable$WhereSelectArrayIterator = {
    fullname: "System.Linq.Enumerable.WhereSelectArrayIterator",
    baseTypeName: "System.Linq.Enumerable.Iterator",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (TSource, TResult, source, predicate, selector){
            this.TSource = TSource;
            this.TResult = TResult;
            this.source = null;
            this.predicate = null;
            this.selector = null;
            this.index = 0;
            System.Linq.Enumerable.Iterator.ctor.call(this, this.TResult);
            this.source = source;
            this.predicate = predicate;
            this.selector = selector;
        },
        Clone: function (){
            return new System.Linq.Enumerable.WhereSelectArrayIterator.ctor(this.TSource, this.TResult, this.source, this.predicate, this.selector);
        },
        MoveNext: function (){
            if (this.state == 1){
                while (this.index < this.source.length){
                    var arg = this.source[this.index];
                    this.index++;
                    if (this.predicate == null || this.predicate(arg)){
                        this.current = this.selector(arg);
                        return true;
                    }
                }
                this.Dispose();
            }
            return false;
        },
        Select$1: function (TResult2, selector){
            return new System.Linq.Enumerable.WhereSelectArrayIterator.ctor(this.TSource, TResult2, this.source, this.predicate, System.Linq.Enumerable.CombineSelectors$3(this.TSource, this.TResult, TResult2, this.selector, selector));
        },
        Where: function (predicate){
            return new System.Linq.Enumerable.WhereEnumerableIterator.ctor(this.TResult, this, predicate);
        }
    }
};
jst_pushOrReplace(System$Linq$Enumerable$WhereSelectArrayIterator);
var System$Linq$Enumerable$WhereSelectEnumerableIterator = {
    fullname: "System.Linq.Enumerable.WhereSelectEnumerableIterator",
    baseTypeName: "System.Linq.Enumerable.Iterator",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (TSource, TResult, source, predicate, selector){
            this.TSource = TSource;
            this.TResult = TResult;
            this.source = null;
            this.predicate = null;
            this.selector = null;
            this.enumerator = null;
            System.Linq.Enumerable.Iterator.ctor.call(this, this.TResult);
            this.source = source;
            this.predicate = predicate;
            this.selector = selector;
        },
        Clone: function (){
            return new System.Linq.Enumerable.WhereSelectEnumerableIterator.ctor(this.TSource, this.TResult, this.source, this.predicate, this.selector);
        },
        Dispose: function (){
            if (this.enumerator != null){
                this.enumerator.Dispose();
            }
            this.enumerator = null;
            System.Linq.Enumerable.Iterator.commonPrototype.Dispose.call(this);
        },
        MoveNext: function (){
            switch (this.state){
                case 1:
                    this.enumerator = this.source.GetEnumerator();
                    this.state = 2;
                    break;
                case 2:
                    break;
                default:
                    return false;
            }
            while (this.enumerator.MoveNext()){
                var current = this.enumerator.get_Current();
                if (this.predicate == null || this.predicate(current)){
                    this.current = this.selector(current);
                    return true;
                }
            }
            this.Dispose();
            return false;
        },
        Select$1: function (TResult2, selector){
            return new System.Linq.Enumerable.WhereSelectEnumerableIterator.ctor(this.TSource, TResult2, this.source, this.predicate, System.Linq.Enumerable.CombineSelectors$3(this.TSource, this.TResult, TResult2, this.selector, selector));
        },
        Where: function (predicate){
            return new System.Linq.Enumerable.WhereEnumerableIterator.ctor(this.TResult, this, predicate);
        }
    }
};
jst_pushOrReplace(System$Linq$Enumerable$WhereSelectEnumerableIterator);
var System$Linq$Enumerable$WhereSelectListIterator = {
    fullname: "System.Linq.Enumerable.WhereSelectListIterator",
    baseTypeName: "System.Linq.Enumerable.Iterator",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (TSource, TResult, source, predicate, selector){
            this.TSource = TSource;
            this.TResult = TResult;
            this.source = null;
            this.predicate = null;
            this.selector = null;
            this.enumerator = null;
            System.Linq.Enumerable.Iterator.ctor.call(this, this.TResult);
            this.source = source;
            this.predicate = predicate;
            this.selector = selector;
        },
        Clone: function (){
            return new System.Linq.Enumerable.WhereSelectListIterator.ctor(this.TSource, this.TResult, this.source, this.predicate, this.selector);
        },
        MoveNext: function (){
            switch (this.state){
                case 1:
                    this.enumerator = this.source.GetEnumerator();
                    this.state = 2;
                    break;
                case 2:
                    break;
                default:
                    return false;
            }
            while (this.enumerator.MoveNext()){
                var current = this.enumerator.get_Current();
                if (this.predicate == null || this.predicate(current)){
                    this.current = this.selector(current);
                    return true;
                }
            }
            this.Dispose();
            return false;
        },
        Select$1: function (TResult2, selector){
            return new System.Linq.Enumerable.WhereSelectListIterator.ctor(this.TSource, TResult2, this.source, this.predicate, System.Linq.Enumerable.CombineSelectors$3(this.TSource, this.TResult, TResult2, this.selector, selector));
        },
        Where: function (predicate){
            return new System.Linq.Enumerable.WhereEnumerableIterator.ctor(this.TResult, this, predicate);
        }
    }
};
jst_pushOrReplace(System$Linq$Enumerable$WhereSelectListIterator);
var System$Linq$Enumerable$OfTypeIterator = {
    fullname: "System.Linq.Enumerable.OfTypeIterator",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IEnumerator$1", "System.Collections.Generic.IEnumerable$1"],
    Kind: "Class",
    definition: {
        ctor: function (T, source){
            this.T = T;
            this.Source = null;
            this.SourceEnumerator = null;
            System.Object.ctor.call(this);
            this.Source = source;
        },
        Reset: function (){
            if (this.SourceEnumerator != null)
                this.SourceEnumerator.Reset();
        },
        Current$$: "`0",
        get_Current: function (){
            return this.SourceEnumerator.get_Current();
        },
        MoveNext: function (){
            if (this.SourceEnumerator == null)
                this.SourceEnumerator = this.Source.GetEnumerator();
            while (true){
                if (!this.SourceEnumerator.MoveNext())
                    return false;
                var item = this.SourceEnumerator.get_Current();
                if (Is(item, this.T))
                    return true;
            }
        },
        Dispose: function (){
            this.Source = null;
            this.SourceEnumerator = null;
        },
        GetEnumerator: function (){
            return this;
        }
    }
};
jst_pushOrReplace(System$Linq$Enumerable$OfTypeIterator);
var System$Linq$Enumerable$SkipIterator = {
    fullname: "System.Linq.Enumerable.SkipIterator",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IEnumerator$1", "System.Collections.Generic.IEnumerable$1"],
    Kind: "Class",
    definition: {
        ctor: function (T, source, skipCount){
            this.T = T;
            this.SkipCount = 0;
            this.Source = null;
            this.SourceEnumerator = null;
            this.State = 0;
            System.Object.ctor.call(this);
            this.Source = source;
            this.SkipCount = skipCount;
        },
        Reset: function (){
            if (this.SourceEnumerator != null)
                this.SourceEnumerator.Reset();
        },
        Current$$: "`0",
        get_Current: function (){
            return this.SourceEnumerator.get_Current();
        },
        MoveNext: function (){
            if (this.State == 0){
                this.SourceEnumerator = this.Source.GetEnumerator();
                this.State = 1;
            }
            if (this.State == 1){
                for (var i = 0; i < this.SkipCount; i++){
                    if (!this.SourceEnumerator.MoveNext())
                        return false;
                }
                this.State = 2;
            }
            if (this.State == 2){
                return this.SourceEnumerator.MoveNext();
            }
            return false;
        },
        Dispose: function (){
            this.Source = null;
            this.SourceEnumerator = null;
        },
        GetEnumerator: function (){
            if (this.State == 0)
                return this;
            return new System.Linq.Enumerable.SkipIterator.ctor(this.T, this.Source, this.SkipCount);
        }
    }
};
jst_pushOrReplace(System$Linq$Enumerable$SkipIterator);
var System$Linq$Enumerable$TakeIterator = {
    fullname: "System.Linq.Enumerable.TakeIterator",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IEnumerator$1", "System.Collections.Generic.IEnumerable$1"],
    Kind: "Class",
    definition: {
        ctor: function (T, source, takeCount){
            this.T = T;
            this.TakeCount = 0;
            this.Source = null;
            this.SourceEnumerator = null;
            this.State = 0;
            this.TakeIndex = 0;
            System.Object.ctor.call(this);
            this.Source = source;
            this.TakeCount = takeCount;
        },
        Reset: function (){
            if (this.SourceEnumerator != null)
                this.SourceEnumerator.Reset();
        },
        Current$$: "`0",
        get_Current: function (){
            return this.SourceEnumerator.get_Current();
        },
        MoveNext: function (){
            if (this.State == 0){
                this.SourceEnumerator = this.Source.GetEnumerator();
                this.State = 1;
            }
            if (this.State == 1){
                if (this.SourceEnumerator.MoveNext()){
                    this.TakeIndex++;
                    if (this.TakeIndex <= this.TakeCount)
                        return true;
                }
                this.State = 2;
                return false;
            }
            return false;
        },
        Dispose: function (){
            this.Source = null;
            this.SourceEnumerator = null;
        },
        GetEnumerator: function (){
            if (this.State == 0)
                return this;
            return new System.Linq.Enumerable.TakeIterator.ctor(this.T, this.Source, this.TakeCount);
        }
    }
};
jst_pushOrReplace(System$Linq$Enumerable$TakeIterator);
var System$Linq$Enumerable$TakeIterator = {
    fullname: "System.Linq.Enumerable.TakeIterator",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IEnumerator$1", "System.Collections.Generic.IEnumerable$1"],
    Kind: "Class",
    definition: {
        ctor: function (T, first, second){
            this.T = T;
            this.First = null;
            this.Second = null;
            this.FirstEnumerator = null;
            this.SecondEnumerator = null;
            this.State = 0;
            this.onFirst = true;
            System.Object.ctor.call(this);
            this.First = first;
            this.Second = second;
        },
        Reset: function (){
            if (this.FirstEnumerator != null)
                this.FirstEnumerator.Reset();
            if (this.SecondEnumerator != null)
                this.SecondEnumerator.Reset();
            this.onFirst = true;
        },
        Current$$: "`0",
        get_Current: function (){
            if (this.State == 1){
                return this.FirstEnumerator.get_Current();
            }
            if (this.State == 3){
                return this.SecondEnumerator.get_Current();
            }
            throw $CreateException(new System.InvalidOperationException.ctor(), new Error());
        },
        MoveNext: function (){
            if (this.State == 0){
                this.FirstEnumerator = this.First.GetEnumerator();
                this.State = 1;
            }
            if (this.State == 1){
                if (this.FirstEnumerator.MoveNext()){
                    return true;
                }
                this.State = 2;
            }
            if (this.State == 2){
                this.SecondEnumerator = this.Second.GetEnumerator();
                this.State = 3;
            }
            if (this.State == 3){
                if (this.SecondEnumerator.MoveNext()){
                    return true;
                }
                this.State = 4;
            }
            return false;
        },
        Dispose: function (){
            this.First = null;
            this.FirstEnumerator = null;
            this.Second = null;
            this.SecondEnumerator = null;
        },
        GetEnumerator: function (){
            if (this.State == 0)
                return this;
            return new System.Linq.Enumerable.TakeIterator.ctor(this.T, this.First, this.Second);
        }
    }
};
jst_pushOrReplace(System$Linq$Enumerable$TakeIterator);
var System$Linq$Enumerable$SelectManyArrayIterator = {
    fullname: "System.Linq.Enumerable.SelectManyArrayIterator",
    baseTypeName: "System.Linq.Enumerable.Iterator",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (TSource, TResult, source, selector){
            this.TSource = TSource;
            this.TResult = TResult;
            this.source = null;
            this.selector = null;
            this.index = 0;
            this.innerEnumerator = null;
            System.Linq.Enumerable.Iterator.ctor.call(this, this.TResult);
            this.source = source;
            this.selector = selector;
        },
        Clone: function (){
            return new System.Linq.Enumerable.SelectManyArrayIterator.ctor(this.TSource, this.TResult, this.source, this.selector);
        },
        MoveNext: function (){
            if (this.state == 1){
                while (this.index < this.source.length || this.innerEnumerator != null){
                    if (this.innerEnumerator == null){
                        var arg = this.source[this.index];
                        this.index++;
                        var innerEnumerable = this.selector(arg);
                        this.innerEnumerator = innerEnumerable.GetEnumerator();
                    }
                    var hadNext = this.innerEnumerator.MoveNext();
                    if (!hadNext){
                        this.innerEnumerator = null;
                        continue;
                    }
                    this.current = this.innerEnumerator.get_Current();
                    return true;
                }
                this.Dispose();
            }
            return false;
        },
        Select$1: function (TResult2, selector){
            return new System.Linq.Enumerable.WhereSelectEnumerableIterator.ctor(this.TResult, TResult2, this, null, selector);
        },
        Where: function (predicate){
            return new System.Linq.Enumerable.WhereEnumerableIterator.ctor(this.TResult, this, predicate);
        }
    }
};
jst_pushOrReplace(System$Linq$Enumerable$SelectManyArrayIterator);
var System$Linq$_Error = {
    fullname: "System.Linq._Error",
    baseTypeName: "System.Object",
    staticDefinition: {
        ArgumentArrayHasTooManyElements: function (p0){
            return new System.ArgumentException.ctor$$String("ArgumentArrayHasTooManyElements(p0");
        },
        ArgumentNotIEnumerableGeneric: function (p0){
            return new System.ArgumentException.ctor$$String("ArgumentNotIEnumerableGeneric(p0");
        },
        ArgumentNotSequence: function (p0){
            return new System.ArgumentException.ctor$$String("ArgumentNotSequence(p0");
        },
        ArgumentNotValid: function (p0){
            return new System.ArgumentException.ctor$$String("ArgumentNotValid(p0");
        },
        IncompatibleElementTypes: function (){
            return new System.ArgumentException.ctor$$String("IncompatibleElementTypes");
        },
        ArgumentNotLambda: function (p0){
            return new System.ArgumentException.ctor$$String("ArgumentNotLambda(p0");
        },
        MoreThanOneElement: function (){
            return new System.InvalidOperationException.ctor$$String("MoreThanOneElement");
        },
        MoreThanOneMatch: function (){
            return new System.InvalidOperationException.ctor$$String("MoreThanOneMatch");
        },
        NoArgumentMatchingMethodsInQueryable: function (p0){
            return new System.InvalidOperationException.ctor$$String("NoArgumentMatchingMethodsInQueryable(p0");
        },
        NoElements: function (){
            return new System.InvalidOperationException.ctor$$String("NoElements");
        },
        NoMatch: function (){
            return new System.InvalidOperationException.ctor$$String("NoMatch");
        },
        NoMethodOnType: function (p0, p1){
            return new System.InvalidOperationException.ctor$$String("NoMethodOnType(p0, p1");
        },
        NoMethodOnTypeMatchingArguments: function (p0, p1){
            return new System.InvalidOperationException.ctor$$String("NoMethodOnTypeMatchingArguments(p0, p1");
        },
        NoNameMatchingMethodsInQueryable: function (p0){
            return new System.InvalidOperationException.ctor$$String("NoNameMatchingMethodsInQueryable(p0");
        },
        ArgumentNull: function (paramName){
            return new System.ArgumentNullException.ctor$$String(paramName);
        },
        ArgumentOutOfRange: function (paramName){
            return new System.ArgumentOutOfRangeException.ctor$$String(paramName);
        },
        NotImplemented: function (){
            return new System.NotImplementedException.ctor();
        },
        NotSupported: function (){
            return new System.NotSupportedException.ctor();
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Linq$_Error);
var System$Linq$IGrouping$2 = {
    fullname: "System.Linq.IGrouping$2",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IEnumerable$1", "System.Collections.IEnumerable"],
    Kind: "Interface"
};
jst_pushOrReplace(System$Linq$IGrouping$2);
var System$Linq$IOrderedEnumerable$1 = {
    fullname: "System.Linq.IOrderedEnumerable$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IEnumerable$1", "System.Collections.IEnumerable"],
    Kind: "Interface"
};
jst_pushOrReplace(System$Linq$IOrderedEnumerable$1);
var System$Linq$Error = {
    fullname: "System.Linq.Error",
    baseTypeName: "System.Object",
    staticDefinition: {
        ArgumentNull: function (p){
            return new System.Exception.ctor$$String("ArgumentNull " + p);
        },
        NoElements: function (){
            return new System.Exception.ctor$$String("NoElements");
        },
        NoMatch: function (){
            return new System.Exception.ctor$$String("NoMatch");
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Linq$Error);
var System$Linq$_OrderedEnumerable$1 = {
    fullname: "System.Linq._OrderedEnumerable$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Linq.IOrderedEnumerable$1", "System.Collections.Generic.IEnumerable$1", "System.Collections.IEnumerable"],
    Kind: "Class",
    definition: {
        ctor: function (TElement){
            this.TElement = TElement;
            this.source = null;
            this.sorted = null;
            System.Object.ctor.call(this);
        },
        GetEnumerator: function (){
            if (this.sorted == null)
                this.sorted = this.SortSource();
            return this.sorted.GetEnumerator();
        },
        SortSource: function (){
            var list = System.Linq.Enumerable.ToArray$1(this.TElement, this.source);
            list.sort($CreateDelegate(this, this.Compare));
            return list;
        },
        CreateOrderedEnumerable$1: function (TKey, keySelector, comparer, descending){
            return (function (){
                var $v1 = new System.Linq._OrderedEnumerable$2.ctor(this.TElement, TKey, this.source, keySelector, comparer, descending);
                $v1.parent = this;
                return $v1;
            }).call(this);
        }
    }
};
jst_pushOrReplace(System$Linq$_OrderedEnumerable$1);
var System$Linq$_OrderedEnumerable$2 = {
    fullname: "System.Linq._OrderedEnumerable$2",
    baseTypeName: "System.Linq._OrderedEnumerable$1",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (TElement, TKey, source, keySelector, comparer, descending){
            this.TElement = TElement;
            this.TKey = TKey;
            this.parent = null;
            this.keySelector = null;
            this.comparer = null;
            this.descending = false;
            System.Linq._OrderedEnumerable$1.ctor.call(this, this.TElement);
            if (source == null){
                throw $CreateException(System.Linq._Error.ArgumentNull("source"), new Error());
            }
            if (keySelector == null){
                throw $CreateException(System.Linq._Error.ArgumentNull("keySelector"), new Error());
            }
            this.source = source;
            this.keySelector = keySelector;
            this.comparer = ((comparer != null) ? comparer : System.Collections.Generic.Comparer$1.get_Default());
            this.descending = descending;
        },
        Compare: function (x, y){
            if (this.parent != null){
                var z = this.parent.Compare(x, y);
                if (z != 0)
                    return z;
            }
            var xx = this.keySelector(x);
            var yy = this.keySelector(y);
            var zz = this.comparer.Compare(xx, yy);
            if (this.descending)
                zz *= -1;
            return zz;
        }
    }
};
jst_pushOrReplace(System$Linq$_OrderedEnumerable$2);

var System$Collections$ArrayList = {
    fullname: "System.Collections.ArrayList",
    baseTypeName: "System.Collections.Generic.List$1",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Collections.Generic.List$1.ctor.call(this, System.Object.ctor);
        }
    }
};
jst_pushOrReplace(System$Collections$ArrayList);
var System$Collections$Generic$Dictionary$2 = {
    fullname: "System.Collections.Generic.Dictionary$2",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IDictionary$2"],
    Kind: "Class",
    definition: {
        ctor: function (TKey, TValue){
            this.TKey = TKey;
            this.TValue = TValue;
            this._table = null;
            this._keys = null;
            this._version = 0;
            this.Comparer = null;
            System.Object.ctor.call(this);
            this._table = new Object();
            this._keys = new Object();
            this._version = 0;
        },
        ctor$$IEqualityComparer$1: function (TKey, TValue, comparer){
            this.TKey = TKey;
            this.TValue = TValue;
            this._table = null;
            this._keys = null;
            this._version = 0;
            this.Comparer = null;
            System.Object.ctor.call(this);
            this._table = new Object();
            this._keys = new Object();
            this._version = 0;
            this.Comparer = comparer;
        },
        GetHashKey: function (key){
            if (this.Comparer != null)
                return this.Comparer.GetHashCode$$T(key);
            return SharpKit.JavaScript.Utils.Js.GetHashKey(key);
        },
        Add: function (key, value){
            if (key == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("key"), new Error());
            if (this.ContainsKey(key))
                throw $CreateException(new System.ArgumentException.ctor$$String$$String$$Exception("The specified key already exists.", "key", null), new Error());
            var hashKey = this.GetHashKey(key);
            this._table[hashKey] = value;
            this._keys[hashKey] = key;
            this._version++;
        },
        Remove: function (key){
            if (key == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("key"), new Error());
            var result = this.ContainsKey(key);
            var hashKey = this.GetHashKey(key);
            delete this._table[hashKey];
            delete this._keys[hashKey];
            this._version++;
            return result;
        },
        Item$$: "`1",
        get_Item$$TKey: function (key){
            if (!this.ContainsKey(key))
                throw $CreateException(new System.Collections.Generic.KeyNotFoundException.ctor$$String("The specified key does not exist."), new Error());
            var hashKey = this.GetHashKey(key);
            return this._table[hashKey];
        },
        set_Item$$TKey: function (key, value){
            var hashKey = this.GetHashKey(key);
            this._table[hashKey] = value;
            this._keys[hashKey] = key;
            this._version++;
        },
        ContainsKey: function (key){
            var hashKey = this.GetHashKey(key);
            return typeof(this._table[hashKey]) != "undefined";
        },
        Keys$$: "System.Collections.Generic.ICollection`1[[`0]]",
        get_Keys: function (){
            var keys =  [];
            for (var p in this._keys){
                keys.push(this._keys[p]);
            }
            return keys;
        },
        Values$$: "System.Collections.Generic.ICollection`1[[`1]]",
        get_Values: function (){
            var values =  [];
            for (var p in this._table){
                values.push(this._table[p]);
            }
            return values;
        },
        GetEnumerator: function (){
            var array =  [];
            for (var hashKey in this._table){
                array.push(new System.Collections.Generic.KeyValuePair$2.ctor$$TKey$$TValue(this.TKey, this.TValue, this._keys[hashKey], this._table[hashKey]));
            }
            return array.GetEnumerator();
        },
        Clear: function (){
            for (var hashKey in this._table){
                this._keys = new Object();
                this._table = new Object();
                this._version++;
                return;
            }
        },
        TryGetValue: function (key, value){
            var hashKey = this.GetHashKey(key);
            var v = this._table[hashKey];
            value.Value = v;
            return typeof(v) != "undefined";
        },
        Count$$: "System.Int32",
        get_Count: function (){
            // throw $CreateException(new System.NotImplementedException.ctor(), new Error());
            var count = 0;
            for (var k in this._keys) {
                if (this._keys.hasOwnProperty(k)) {
                    count++;
                }
            }
            return count;
        },
        IsReadOnly$$: "System.Boolean",
        get_IsReadOnly: function (){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        }
    }
};
jst_pushOrReplace(System$Collections$Generic$Dictionary$2);
var System$Collections$Generic$HashSet$1 = {
    fullname: "System.Collections.Generic.HashSet$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.ISet$1", "System.Collections.Generic.ICollection$1", "System.Collections.Generic.IEnumerable$1", "System.Collections.IEnumerable"],
    Kind: "Class",
    definition: {
        ctor: function (T){
            this.T = T;
            this.Hashtable = new Object();
            this.Comparer = null;
            this._Count = 0;
            System.Object.ctor.call(this);
        },
        ctor$$IEqualityComparer$1: function (T, comparer){
            this.T = T;
            this.Hashtable = new Object();
            this.Comparer = null;
            this._Count = 0;
            System.Object.ctor.call(this);
            this.Comparer = comparer;
        },
        GetHashKey: function (key){
            if (this.Comparer != null)
                return this.Comparer.GetHashCode$$T(key);
            return SharpKit.JavaScript.Utils.Js.GetHashKey(key);
        },
        Add: function (item){
            var key = this.GetHashKey(item);
            if (this.Hashtable[key] != null)
                return false;
            this.Hashtable[key] = item;
            this._Count++;
            return true;
        },
        UnionWith: function (other){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        IntersectWith: function (other){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        ExceptWith: function (other){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        SymmetricExceptWith: function (other){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        IsSubsetOf: function (other){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        IsSupersetOf: function (other){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        IsProperSupersetOf: function (other){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        IsProperSubsetOf: function (other){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Overlaps: function (other){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        SetEquals: function (other){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Count$$: "System.Int32",
        get_Count: function (){
            return this._Count;
        },
        IsReadOnly$$: "System.Boolean",
        get_IsReadOnly: function (){
            return false;
        },
        Clear: function (){
            this.Hashtable = new Object();
            this._Count = 0;
        },
        Contains: function (item){
            var key = this.GetHashKey(item);
            if (this.Hashtable[key] === item)
                return true;
            return false;
        },
        CopyTo: function (array, arrayIndex){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Remove: function (item){
            var key = this.GetHashKey(item);
            if (this.Hashtable[key] === item){
                delete this.Hashtable[key];
                this._Count--;
                return true;
            }
            return false;
        },
        GetEnumerator: function (){
            var array =  [];
            for (var hashKey in this.Hashtable){
                array.push(this.Hashtable[hashKey]);
            }
            return new System.Collections.Generic.JsArrayEnumerator$1.ctor(this.T, array);
        }
    }
};
jst_pushOrReplace(System$Collections$Generic$HashSet$1);
var System$StringComparer = {
    fullname: "System.StringComparer",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            System.StringComparer._InvariantCultureIgnoreCase = null;
        },
        InvariantCultureIgnoreCase$$: "SharpKit.JavaScript.Private.StringComparer",
        get_InvariantCultureIgnoreCase: function (){
            if (System.StringComparer._InvariantCultureIgnoreCase == null)
                System.StringComparer._InvariantCultureIgnoreCase = new SharpKit.JavaScript.Private.StringComparer_InvariantCultureIgnoreCase.ctor();
            return System.StringComparer._InvariantCultureIgnoreCase;
        }
    },
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IEqualityComparer$1"],
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$StringComparer);
var SharpKit$JavaScript$Private$StringComparer_InvariantCultureIgnoreCase = {
    fullname: "SharpKit.JavaScript.Private.StringComparer_InvariantCultureIgnoreCase",
    baseTypeName: "System.StringComparer",
    staticDefinition: {
        cctor: function (){
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.StringComparer.ctor.call(this);
        },
        Equals$$T$$T: function (x, y){
            if (x == y)
                return true;
            if (x == null || y == null)
                return false;
            return x.toLowerCase() == y.toLowerCase();
        },
        GetHashCode$$T: function (obj){
            if (obj == null)
                return "null";
            return obj.toLowerCase();
        }
    }
};
jst_pushOrReplace(SharpKit$JavaScript$Private$StringComparer_InvariantCultureIgnoreCase);
var System$Collections$Generic$KeyValuePair$2 = {
    fullname: "System.Collections.Generic.KeyValuePair$2",
    baseTypeName: "System.ValueType",
    assemblyName: "SharpKit.JsClr",
    Kind: "Struct",
    definition: {
        ctor$$TKey$$TValue: function (TKey, TValue, key, value){
            this.TKey = TKey;
            this.TValue = TValue;
            this._Key = null;
            this._Value = null;
            System.ValueType.ctor.call(this);
            this._Key = key;
            this._Value = value;
        },
        Key$$: "`0",
        get_Key: function (){
            return this._Key;
        },
        Value$$: "`1",
        get_Value: function (){
            return this._Value;
        },
        ctor: function (TKey, TValue){
            this.TKey = TKey;
            this.TValue = TValue;
            this._Key = null;
            this._Value = null;
            System.ValueType.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Collections$Generic$KeyValuePair$2);
var System$Collections$Generic$List$1 = {
    fullname: "System.Collections.Generic.List$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IList$1", "System.Collections.IList"],
    Kind: "Class",
    definition: {
        ctor: function (T){
            this.T = T;
            this._list = null;
            System.Object.ctor.call(this);
            this._list = new Array();
        },
        ctor$$IEnumerable$1: function (T, collection){
            this.T = T;
            this._list = null;
            System.Object.ctor.call(this);
            this._list = new Array();
            this.AddRange(collection);
        },
        ctor$$Int32: function (T, capacity){
            this.T = T;
            this._list = null;
            System.Object.ctor.call(this);
            this._list = new Array();
        },
        RemoveRange: function (index, count){
            this._list.splice(index, count);
        },
        Clear: function (){
            this._list.Clear();
        },
        Item$$: "`0",
        get_Item$$Int32: function (index){
            if (index >= this._list.length || index < 0)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor$$String("index"), new Error());
            return this._list[index];
        },
        set_Item$$Int32: function (index, value){
            if (index >= this._list.length || index < 0)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor$$String("index"), new Error());
            this._list[index] = value;
        },
        Count$$: "System.Int32",
        get_Count: function (){
            return this._list.length;
        },
        GetEnumerator: function (){
            return new System.Collections.IListEnumerator$1.ctor(this.T, this);
        },
        ToArray: function (){
            var len = this.get_Count();
            var array = new Array(len);
            for (var i = 0; i < len; i++)
                array[i] = this.get_Item$$Int32(i);
            return array;
        },
        AddRange: function (items){
            var $it3 = items.GetEnumerator();
            while ($it3.MoveNext()){
                var item = $it3.get_Current();
                this.Add(item);
            }
        },
        Add: function (item){
            this._list.push(item);
        },
        Remove: function (item){
            var index = this._list.indexOf(item);
            if (index == -1)
                return false;
            this._list.RemoveAt(index);
            return true;
        },
        Contains: function (item){
            return this._list.contains(item);
        },
        SetItems: function (items){
            this.Clear();
            if (items != null)
                this.AddRange(items);
        },
        IndexOf: function (item){
            return this._list.indexOf(item);
        },
	    Exists: function (match) {
            for (var i = 0; i < this._list.length; i++) {
                if (match(this._list[i])) {
                    return true;
                }
            }
            return false;
		},
        IndexOf$$T: function (item) {
            return this._list.indexOf(item);
        },
        Insert: function (index, item){
            this._list.insert(index, item);
        },
        RemoveAt: function (index){
            this._list.RemoveAt(index);
        },
        RemoveAll: function (fun) {
            this._list.filterOut(fun);
        },
        TryRemove: function (item){
            throw $CreateException(new System.NotImplementedException.ctor$$String("TryRemove"), new Error());
        },
        CopyTo: function (array, arrayIndex){
            throw $CreateException(new System.NotImplementedException.ctor$$String("JsImplList$T"), new Error());
        },
        IsReadOnly$$: "System.Boolean",
        get_IsReadOnly: function (){
            throw $CreateException(new System.NotImplementedException.ctor$$String("JsImplList$T"), new Error());
        },
        Reverse: function (){
            this._list.reverse();
        },
        Sort: function (){
            System.Array.Sort$1$$T$Array(this.T, this._list);
        },
        Sort$$Comparison$1: function (comparison){
            this._list.sort(comparison);
        },
        ForEach: function (action){
            if (action == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("action"), new Error());
            for (var i = 0; i < this._list.length; i++){
                action(this._list[i]);
            }
        },
        // Qiucw
        Find: function (match) {
            var len = this.get_Count();
            for (var i = 0; i < len; i++) {
                var v = this.get_Item$$Int32(i);
                if (match(v)) {
                    return v;
                }
            }
            return undefined;
        }
    }
};
jst_pushOrReplace(System$Collections$Generic$List$1);
var System$Collections$Generic$Queue$1 = {
    fullname: "System.Collections.Generic.Queue$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IEnumerable$1", "System.Collections.ICollection"],
    Kind: "Class",
    definition: {
        ctor: function (T){
            this.T = T;
            this._list = null;
            System.Object.ctor.call(this);
            this._list = new Array();
        },
        ctor$$Int32: function (T, capacity){
            this.T = T;
            this._list = null;
            System.Object.ctor.call(this);
            this._list = new Array(capacity);
        },
        ctor$$IEnumerable$1: function (T, collection){
            this.T = T;
            this._list = null;
            System.Object.ctor.call(this);
            var enumerator = collection.GetEnumerator();
            this._list = new Array();
            var i = 0;
            while (enumerator.MoveNext())
                this._list[i++] = enumerator.get_Current();
        },
        Clear: function (){
            this._list.Clear();
        },
        Count$$: "System.Int32",
        get_Count: function (){
            return this._list.length;
        },
        GetEnumerator: function (){
            return this._list.GetEnumerator();
        },
        ToArray: function (){
            return this._list.Clone();
        },
        Enqueue: function (item){
            this._list.push(item);
        },
        Dequeue: function (){
            if (this._list.length == 0)
                throw $CreateException(new Error("Cannot dequeue - queue is empty"), new Error());
            var item = this._list[0];
            this._list.RemoveAt(0);
            return item;
        },
        Peek: function (){
            if (this._list.length == 0)
                throw $CreateException(new Error("Cannot peek in queue - queue is empty"), new Error());
            return this._list[0];
        },
        Contains: function (item){
            return this._list.contains(item);
        }
    }
};
jst_pushOrReplace(System$Collections$Generic$Queue$1);
var System$Collections$Generic$Stack$1 = {
    fullname: "System.Collections.Generic.Stack$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IEnumerable$1", "System.Collections.ICollection"],
    Kind: "Class",
    definition: {
        ctor: function (T){
            this.T = T;
            this._list = null;
            System.Object.ctor.call(this);
            this._list = new Array();
        },
        ctor$$Int32: function (T, capacity){
            this.T = T;
            this._list = null;
            System.Object.ctor.call(this);
            this._list = new Array(capacity);
        },
        ctor$$IEnumerable$1: function (T, collection){
            this.T = T;
            this._list = null;
            System.Object.ctor.call(this);
            var enumerator = collection.GetEnumerator();
            this._list = new Array();
            var i = 0;
            while (enumerator.MoveNext())
                this._list[i++] = enumerator.get_Current();
        },
        Count$$: "System.Int32",
        get_Count: function (){
            return this._list.length;
        },
        Clear: function (){
            this._list.Clear();
        },
        ToArray: function (){
            return this._list.Clone();
        },
        Push: function (item){
            this._list.push(item);
        },
        Pop: function (){
            if (this._list.length == 0)
                throw $CreateException(new Error("Cannot pop from stack - stack is empty"), new Error());
            return this._list.pop();
        },
        Peek: function (){
            if (this._list.length == 0)
                throw $CreateException(new Error("Cannot peek in stack - stack is empty"), new Error());
            return this._list[this._list.length - 1];
        },
        Contains: function (item){
            return this._list.contains(item);
        },
        GetEnumerator: function (){
            return this._list.GetEnumerator();
        }
    }
};
jst_pushOrReplace(System$Collections$Generic$Stack$1);
var System$Collections$Generic$JsArrayEnumerator$1 = {
    fullname: "System.Collections.Generic.JsArrayEnumerator$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IEnumerator$1"],
    Kind: "Class",
    definition: {
        ctor: function (T, list){
            this.T = T;
            this.List = null;
            this.Index = 0;
            this.ListCount = 0;
            System.Object.ctor.call(this);
            this.List = list;
            this.Index = -1;
            this.ListCount = list.length;
        },
        Current$$: "`0",
        get_Current: function (){
            return this.List[this.Index];
        },
        Dispose: function (){
            this.List = null;
        },
        MoveNext: function (){
            this.Index++;
            return this.Index < this.ListCount;
        },
        Reset: function (){
            this.Index = -1;
        }
    }
};
jst_pushOrReplace(System$Collections$Generic$JsArrayEnumerator$1);
var System$Collections$ObjectModel$Collection$1 = {
    fullname: "System.Collections.ObjectModel.Collection$1",
    baseTypeName: "System.Object",
    staticDefinition: {
        ConvertItem: function (item){
            if (System.Collections.ObjectModel.Collection$1.IsValidItem(item))
                return Cast(item, this.T);
            throw $CreateException(new System.ArgumentException.ctor$$String("item"), new Error());
        },
        CheckWritable: function (items){
            if (items.get_IsReadOnly())
                throw $CreateException(new System.NotSupportedException.ctor(), new Error());
        },
        IsSynchronized: function (items){
            var c = As(items, System.Collections.ICollection.ctor);
            return (c != null) ? c.get_IsSynchronized() : false;
        },
        IsFixedSize: function (items){
            var l = As(items, System.Collections.IList.ctor);
            return (l != null) ? l.get_IsFixedSize() : false;
        },
        IsValidItem: function (item){
            return Is(item, this.T) || (item == null && !Typeof(this.T).get_IsValueType());
        }
    },
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IList$1", "System.Collections.IList"],
    Kind: "Class",
    definition: {
        ctor: function (T){
            this.T = T;
            this.items = null;
            this.syncRoot = null;
            System.Object.ctor.call(this);
            var l = new System.Collections.Generic.List$1.ctor(this.T);
            var l2 = As(l, System.Collections.IList.ctor);
            this.items = l;
        },
        ctor$$IList$1: function (T, items){
            this.T = T;
            this.items = null;
            this.syncRoot = null;
            System.Object.ctor.call(this);
            if (items == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("items"), new Error());
            this.items = items;
            var l = As(items, System.Collections.ICollection.ctor);
        },
        Add: function (item){
            var idx = this.items.get_Count();
            this.InsertItem(idx, item);
        },
        Clear: function (){
            this.ClearItems();
        },
        ClearItems: function (){
            this.items.Clear();
        },
        Contains: function (item){
            return this.items.Contains(item);
        },
        CopyTo: function (array, index){
            this.items.CopyTo(array, index);
        },
        GetEnumerator: function (){
            return this.items.GetEnumerator();
        },
        IndexOf: function (item){
            return this.items.IndexOf(item);
        },
        Insert: function (index, item){
            this.InsertItem(index, item);
        },
        InsertItem: function (index, item){
            this.items.Insert(index, item);
        },
        Items$$: "System.Collections.Generic.IList`1[[`0]]",
        get_Items: function (){
            return this.items;
        },
        Remove: function (item){
            var idx = this.IndexOf(item);
            if (idx == -1)
                return false;
            this.RemoveItem(idx);
            return true;
        },
        RemoveAt: function (index){
            this.RemoveItem(index);
        },
        RemoveItem: function (index){
            this.items.RemoveAt(index);
        },
        Count$$: "System.Int32",
        get_Count: function (){
            return this.items.get_Count();
        },
        Item$$: "`0",
        get_Item$$Int32: function (index){
            return this.items.get_Item$$Int32(index);
        },
        set_Item$$Int32: function (index, value){
            this.SetItem(index, value);
        },
        SetItem: function (index, item){
            this.items.set_Item$$Int32(index, item);
        }
    }
};
jst_pushOrReplace(System$Collections$ObjectModel$Collection$1);
var System$Collections$ObjectModel$ObservableCollection$1 = {
    fullname: "System.Collections.ObjectModel.ObservableCollection$1",
    baseTypeName: "System.Collections.ObjectModel.Collection$1",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Specialized.INotifyCollectionChanged", "System.ComponentModel.INotifyPropertyChanged"],
    Kind: "Class",
    definition: {
        ctor: function (T){
            this.T = T;
            this.reentrant = new System.Collections.ObjectModel.ObservableCollection$1.Reentrant.ctor(this.T);
            this.CollectionChanged = null;
            this.PropertyChanged = null;
            this.PropertyChanged = null;
            System.Collections.ObjectModel.Collection$1.ctor.call(this, this.T);
        },
        ctor$$IEnumerable$1: function (T, collection){
            this.T = T;
            this.reentrant = new System.Collections.ObjectModel.ObservableCollection$1.Reentrant.ctor(this.T);
            this.CollectionChanged = null;
            this.PropertyChanged = null;
            this.PropertyChanged = null;
            System.Collections.ObjectModel.Collection$1.ctor.call(this, this.T);
            if (collection == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("collection"), new Error());
            var $it4 = collection.GetEnumerator();
            while ($it4.MoveNext()){
                var item = $it4.get_Current();
                this.Add(item);
            }
        },
        ctor$$List$1: function (T, list){
            this.T = T;
            this.reentrant = new System.Collections.ObjectModel.ObservableCollection$1.Reentrant.ctor(this.T);
            this.CollectionChanged = null;
            this.PropertyChanged = null;
            this.PropertyChanged = null;
            System.Collections.ObjectModel.Collection$1.ctor$$IList$1.call(this, this.T, list != null ? new System.Collections.Generic.List$1.ctor$$IEnumerable$1(this.T, list) : null);
        },
        add_CollectionChanged: function (value){
            this.CollectionChanged = $CombineDelegates(this.CollectionChanged, value);
        },
        remove_CollectionChanged: function (value){
            this.CollectionChanged = $RemoveDelegate(this.CollectionChanged, value);
        },
        add_PropertyChanged: function (value){
            this.PropertyChanged = $CombineDelegates(this.PropertyChanged, value);
        },
        remove_PropertyChanged: function (value){
            this.PropertyChanged = $RemoveDelegate(this.PropertyChanged, value);
        },
        BlockReentrancy: function (){
            this.reentrant.Enter();
            return this.reentrant;
        },
        CheckReentrancy: function (){
            var eh = this.CollectionChanged;
            if (this.reentrant.get_Busy() && eh != null && eh.GetInvocationList().length > 1)
                throw $CreateException(new System.InvalidOperationException.ctor$$String("Cannot modify the collection while reentrancy is blocked."), new Error());
        },
        ClearItems: function (){
            this.CheckReentrancy();
            System.Collections.ObjectModel.Collection$1.commonPrototype.ClearItems.call(this);
            this.OnCollectionChanged(new System.Collections.Specialized.NotifyCollectionChangedEventArgs.ctor$$NotifyCollectionChangedAction(4));
            this.OnPropertyChanged(new System.ComponentModel.PropertyChangedEventArgs.ctor("Count"));
            this.OnPropertyChanged(new System.ComponentModel.PropertyChangedEventArgs.ctor("Item[]"));
        },
        InsertItem: function (index, item){
            this.CheckReentrancy();
            System.Collections.ObjectModel.Collection$1.commonPrototype.InsertItem.call(this, index, item);
            this.OnCollectionChanged(new System.Collections.Specialized.NotifyCollectionChangedEventArgs.ctor$$NotifyCollectionChangedAction$$Object$$Int32(0, item, index));
            this.OnPropertyChanged(new System.ComponentModel.PropertyChangedEventArgs.ctor("Count"));
            this.OnPropertyChanged(new System.ComponentModel.PropertyChangedEventArgs.ctor("Item[]"));
        },
        Move: function (oldIndex, newIndex){
            this.MoveItem(oldIndex, newIndex);
        },
        MoveItem: function (oldIndex, newIndex){
            this.CheckReentrancy();
            var item = this.get_Items().get_Item$$Int32(oldIndex);
            System.Collections.ObjectModel.Collection$1.commonPrototype.RemoveItem.call(this, oldIndex);
            System.Collections.ObjectModel.Collection$1.commonPrototype.InsertItem.call(this, newIndex, item);
            this.OnCollectionChanged(new System.Collections.Specialized.NotifyCollectionChangedEventArgs.ctor$$NotifyCollectionChangedAction$$Object$$Int32$$Int32(3, item, newIndex, oldIndex));
            this.OnPropertyChanged(new System.ComponentModel.PropertyChangedEventArgs.ctor("Item[]"));
        },
        OnCollectionChanged: function (e){
            var eh = this.CollectionChanged;
            if (eh != null){
                var $r1 = this.BlockReentrancy();
                try{
                    eh(this, e);
                }
                finally{
                    $r1.Dispose();
                }
            }
        },
        OnPropertyChanged: function (e){
            var eh = this.PropertyChanged;
            if (eh != null)
                eh(this, e);
        },
        RemoveItem: function (index){
            this.CheckReentrancy();
            var item = this.get_Items().get_Item$$Int32(index);
            System.Collections.ObjectModel.Collection$1.commonPrototype.RemoveItem.call(this, index);
            this.OnCollectionChanged(new System.Collections.Specialized.NotifyCollectionChangedEventArgs.ctor$$NotifyCollectionChangedAction$$Object$$Int32(1, item, index));
            this.OnPropertyChanged(new System.ComponentModel.PropertyChangedEventArgs.ctor("Count"));
            this.OnPropertyChanged(new System.ComponentModel.PropertyChangedEventArgs.ctor("Item[]"));
        },
        SetItem: function (index, item){
            this.CheckReentrancy();
            var oldItem = this.get_Items().get_Item$$Int32(index);
            System.Collections.ObjectModel.Collection$1.commonPrototype.SetItem.call(this, index, item);
            this.OnCollectionChanged(new System.Collections.Specialized.NotifyCollectionChangedEventArgs.ctor$$NotifyCollectionChangedAction$$Object$$Object$$Int32(2, item, oldItem, index));
            this.OnPropertyChanged(new System.ComponentModel.PropertyChangedEventArgs.ctor("Item[]"));
        }
    }
};
jst_pushOrReplace(System$Collections$ObjectModel$ObservableCollection$1);
var System$Collections$ObjectModel$ObservableCollection$1$Reentrant = {
    fullname: "System.Collections.ObjectModel.ObservableCollection$1.Reentrant",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.IDisposable"],
    Kind: "Class",
    definition: {
        ctor: function (T){
            this.T = T;
            this.count = 0;
            System.Object.ctor.call(this);
        },
        Enter: function (){
            this.count++;
        },
        Dispose: function (){
            this.count--;
        },
        Busy$$: "System.Boolean",
        get_Busy: function (){
            return this.count > 0;
        }
    }
};
jst_pushOrReplace(System$Collections$ObjectModel$ObservableCollection$1$Reentrant);
var System$Collections$ObjectModel$ReadOnlyCollection$1 = {
    fullname: "System.Collections.ObjectModel.ReadOnlyCollection$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.ICollection$1", "System.Collections.Generic.IList$1", "System.Collections.Generic.IEnumerable$1", "System.Collections.ICollection", "System.Collections.IEnumerable", "System.Collections.IList"],
    Kind: "Class",
    definition: {
        ctor: function (T, list){
            this.T = T;
            this.list = null;
            System.Object.ctor.call(this);
            if (list == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("list"), new Error());
            this.list = list;
        },
        Contains: function (value){
            return this.list.Contains(value);
        },
        CopyTo: function (array, index){
            this.list.CopyTo(array, index);
        },
        GetEnumerator: function (){
            return this.list.GetEnumerator();
        },
        IndexOf: function (value){
            return this.list.IndexOf(value);
        },
        Count$$: "System.Int32",
        get_Count: function (){
            return this.list.get_Count();
        },
        Items$$: "System.Collections.Generic.IList`1[[`0]]",
        get_Items: function (){
            return this.list;
        },
        Item$$: "`0",
        get_Item$$Int32: function (index){
            return this.list.get_Item$$Int32(index);
        }
    }
};
jst_pushOrReplace(System$Collections$ObjectModel$ReadOnlyCollection$1);
var System$Collections$ObjectModel$ReadOnlyObservableCollection$1 = {
    fullname: "System.Collections.ObjectModel.ReadOnlyObservableCollection$1",
    baseTypeName: "System.Collections.ObjectModel.ReadOnlyCollection$1",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Specialized.INotifyCollectionChanged", "System.ComponentModel.INotifyPropertyChanged"],
    Kind: "Class",
    definition: {
        ctor: function (T, list){
            this.T = T;
            this.CollectionChanged = null;
            this.PropertyChanged = null;
            this.CollectionChanged = null;
            this.PropertyChanged = null;
            System.Collections.ObjectModel.ReadOnlyCollection$1.ctor.call(this, this.T, list);
            (list).add_PropertyChanged($CreateDelegate(this, this.SourceCollection_PropertyChanged));
            (list).add_CollectionChanged($CreateDelegate(this, this.SourceCollection_CollectionChanged));
        },
        add_CollectionChanged: function (value){
            this.CollectionChanged = $CombineDelegates(this.CollectionChanged, value);
        },
        remove_CollectionChanged: function (value){
            this.CollectionChanged = $RemoveDelegate(this.CollectionChanged, value);
        },
        add_PropertyChanged: function (value){
            this.PropertyChanged = $CombineDelegates(this.PropertyChanged, value);
        },
        remove_PropertyChanged: function (value){
            this.PropertyChanged = $RemoveDelegate(this.PropertyChanged, value);
        },
        OnCollectionChanged: function (args){
            var eh = this.CollectionChanged;
            if (eh != null)
                eh(this, args);
        },
        OnPropertyChanged: function (args){
            var eh = this.PropertyChanged;
            if (eh != null)
                eh(this, args);
        },
        SourceCollection_CollectionChanged: function (sender, e){
            this.OnCollectionChanged(e);
        },
        SourceCollection_PropertyChanged: function (sender, e){
            this.OnPropertyChanged(e);
        }
    }
};
jst_pushOrReplace(System$Collections$ObjectModel$ReadOnlyObservableCollection$1);
var System$Collections$IListEnumerator$1 = {
    fullname: "System.Collections.IListEnumerator$1",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    interfaceNames: ["System.Collections.Generic.IEnumerator$1"],
    Kind: "Class",
    definition: {
        ctor: function (T, list){
            this.T = T;
            this.List = null;
            this.Index = 0;
            this.ListCount = 0;
            System.Object.ctor.call(this);
            this.List = list;
            this.Index = -1;
            this.ListCount = list.get_Count();
        },
        Current$$: "`0",
        get_Current: function (){
            return this.List.get_Item$$Int32(this.Index);
        },
        Dispose: function (){
            this.List = null;
        },
        MoveNext: function (){
            this.Index++;
            return this.Index < this.ListCount;
        },
        Reset: function (){
            this.Index = -1;
        }
    }
};
jst_pushOrReplace(System$Collections$IListEnumerator$1);

var System$Reflection$BindingFlags = {
    fullname: "System.Reflection.BindingFlags",
    staticDefinition: {
        CreateInstance: 512,
        DeclaredOnly: 2,
        Default: 0,
        ExactBinding: 65536,
        FlattenHierarchy: 64,
        GetField: 1024,
        GetProperty: 4096,
        IgnoreCase: 1,
        IgnoreReturn: 16777216,
        Instance: 4,
        InvokeMethod: 256,
        NonPublic: 32,
        OptionalParamBinding: 262144,
        Public: 16,
        PutDispProperty: 16384,
        PutRefDispProperty: 32768,
        SetField: 2048,
        SetProperty: 8192,
        Static: 8,
        SuppressChangeType: 131072
    },
    Kind: "Enum"
};
jst_pushOrReplace(System$Reflection$BindingFlags);
var System$Reflection$MemberInfo = {
    fullname: "System.Reflection.MemberInfo",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            this._Name = null;
            this._DeclaringType = null;
            this._CustomAttributes = null;
            System.Object.ctor.call(this);
        },
        Name$$: "System.String",
        get_Name: function (){
            return this._Name;
        },
        DeclaringType$$: "SharpKit.JavaScript.Private.JsImplType",
        get_DeclaringType: function (){
            return this._DeclaringType;
        },
        VerifyCustomAttributes: function (){
            this.get_DeclaringType().VerifyCustomAttributesOnTypeAndMembers();
        },
        GetBaseMember: function (){
            return null;
        },
        AddCustomAttributes: function (list, attributeType, inherit){
            this.VerifyCustomAttributes();
            if (this._CustomAttributes != null){
                for (var i = 0; i < this._CustomAttributes.length; i++){
                    var att = this._CustomAttributes[i];
                    if (attributeType.IsInstanceOfType(att))
                        list.Add(att);
                }
            }
            if (inherit){
                var bm = this.GetBaseMember();
                if (bm != null)
                    bm.AddCustomAttributes(list, attributeType, inherit);
            }
        },
        GetCustomAttributes$$Type$$Boolean: function (attributeType, inherit){
            var list = new System.Collections.Generic.List$1.ctor(System.Object.ctor);
            this.AddCustomAttributes(list, attributeType, inherit);
            return list.ToArray();
        },
        GetCustomAttributes$$Boolean: function (inherit){
            if (inherit)
                throw $CreateException(new System.NotImplementedException.ctor$$String("GetCustomAttributes with inherit=true is not implemented"), new Error());
            this.VerifyCustomAttributes();
            return this._CustomAttributes;
        }
    }
};
jst_pushOrReplace(System$Reflection$MemberInfo);
var System$Reflection$MethodBase = {
    fullname: "System.Reflection.MethodBase",
    baseTypeName: "System.Reflection.MemberInfo",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Reflection.MemberInfo.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Reflection$MethodBase);
var System$Reflection$MethodInfo = {
    fullname: "System.Reflection.MethodInfo",
    baseTypeName: "System.Reflection.MethodBase",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            this._IsStatic = false;
            this.JsFunction = null;
            this.JsName = null;
            System.Reflection.MethodBase.ctor.call(this);
        },
        IsStatic$$: "System.Boolean",
        get_IsStatic: function (){
            return this._IsStatic;
        },
        Invoke: function (obj, parameters){
            var func;
            if (this._IsStatic)
                func = this.JsFunction;
            else {
                if (obj == null)
                    throw $CreateException(new System.Exception.ctor$$String("Cannot invoke non static method without a target object"), new Error());
                func = obj[this.JsName];
            }
            var res;
            if (parameters == null)
                res = func.apply(obj);
            else
                res = func.apply(obj, parameters);
            return res;
        }
    }
};
jst_pushOrReplace(System$Reflection$MethodInfo);
var System$Reflection$PropertyInfo = {
    fullname: "System.Reflection.PropertyInfo",
    baseTypeName: "System.Reflection.MemberInfo",
    staticDefinition: {
        op_Equality: function (left, right){
            return  left==right;
        },
        op_Inequality: function (left, right){
            return  left!=right;
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            this._PropertyType = null;
            this._IsStatic = false;
            this._Getter = null;
            this._Setter = null;
            System.Reflection.MemberInfo.ctor.call(this);
        },
        GetBaseMember: function (){
            return null;
        },
        GetValue$$Object$$Object$Array: function (obj, indexes){
            if (this._Getter == null)
                throw $CreateException(new System.Exception.ctor$$String("Property " + this._Name + " doesn\'t have a getter"), new Error());
            var value = this._Getter.apply(obj, (indexes != null ? indexes :  []));
            return value;
        },
        GetValue$$Object: function (obj){
            return this.GetValue$$Object$$Object$Array(obj, null);
        },
        GetValue$$Object$$BindingFlags$$Binder$$Object$Array$$CultureInfo: function (obj, invokeAttr, binder, index, culture){
            return this.GetValue$$Object$$Object$Array(obj, index);
        },
        SetValue$$Object$$Object$$Object$Array: function (obj, value, indexes){
            if (this._Setter == null)
                throw $CreateException(new System.Exception.ctor$$String("Property " + this._Name + " doesn\'t have a setter"), new Error());
            if (indexes == null || indexes.length == 0){
                this._Setter.call(obj, value);
            }
            else {
                var arr = new Array(indexes);
                arr.push(value);
                this._Setter.apply(obj, (indexes != null ? indexes :  []));
            }
        },
        SetValue$$Object$$Object: function (obj, value){
            this.SetValue$$Object$$Object$$Object$Array(obj, value, null);
        },
        SetValue$$Object$$Object$$BindingFlags$$Binder$$Object$Array$$CultureInfo: function (obj, value, invokeAttr, binder, index, culture){
            this.SetValue$$Object$$Object$$Object$Array(obj, value, index);
        },
        Name$$: "System.String",
        get_Name: function (){
            return this._Name;
        },
        PropertyType$$: "SharpKit.JavaScript.Private.JsImplType",
        get_PropertyType: function (){
            return this._PropertyType;
        }
    }
};
jst_pushOrReplace(System$Reflection$PropertyInfo);
var System$Type = {
    fullname: "System.Type",
    baseTypeName: "System.Reflection.MemberInfo",
    staticDefinition: {
        cctor: function (){
            System.Type.EmptyTypes = null;
        },
        _TypeOf: function (jsType){
            if (jsType == null)
                throw $CreateException(new System.Exception.ctor$$String("Cannot resovle type"), new Error());
            if (jsType._ClrType == null)
                jsType._ClrType = new System.Type.ctor(jsType);
            return jsType._ClrType;
        },
        GetType$$String: function (name){
            return System.Type.GetType$$String$$Boolean(name, false);
        },
        GetType$$String$$Boolean: function (name, throwOnError){
            if (JsTypeHelper._HasTypeArguments(name)){
                var jsTypeAndArgs = JsTypeHelper._GetTypeWithArguments(name, throwOnError);
                if (jsTypeAndArgs == null)
                    return null;
                var genericType = System.Type._TypeOf(jsTypeAndArgs[0]);
                var jsTypeArgs = jsTypeAndArgs[1];
                for (var i = 0; i < jsTypeArgs.length; i++){
                    jsTypeArgs[i] = System.Type._TypeOf(jsTypeArgs[i]);
                }
                var type = genericType._MakeGenericType(jsTypeArgs);
                return type;
            }
            var jsType = JsTypeHelper.GetType(name);
            if (jsType == null){
                if (throwOnError)
                    throw $CreateException(new System.Exception.ctor$$String("Type " + name + " was not found"), new Error());
                return null;
            }
            return System.Type._TypeOf(jsType);
        },
        GetType$$String$$Boolean$$Boolean: function (name, throwOnError, ignoreCase){
            if (ignoreCase)
                throw $CreateException(new System.NotImplementedException.ctor(), new Error());
            return System.Type.GetType$$String$$Boolean(name, throwOnError);
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (jsType){
            this._JsType = null;
            this.allPropertiesVerified = false;
            this._PropertiesByName = null;
            this._Properties = null;
            this._MethodsByName = null;
            this._Methods = null;
            this.verifiedCustomAttributesOnTypeAndMembers = false;
            this._GenericTypeDefinition = null;
            this._TypeArguments = null;
            this._MakeGenericTypeCache = null;
            System.Reflection.MemberInfo.ctor.call(this);
            this._JsType = jsType;
            this._Name = this._JsType.name;
            if (System.Type.EmptyTypes == null)
                System.Type.EmptyTypes = new Array(0);
        },
        IsEnum$$: "System.Boolean",
        get_IsEnum: function (){
            return this._JsType.Kind == "Enum";
        },
        GetBaseMember: function (){
            return this.get_BaseType();
        },
        BaseType$$: "SharpKit.JavaScript.Private.JsImplType",
        get_BaseType: function (){
            if (this._JsType.baseType == null)
                return null;
            return System.Type._TypeOf(this._JsType.baseType);
        },
        FillProperties: function (def){
            for (var funcName in def){
                var isGetter = funcName.startsWith("get_");
                var isSetter = funcName.startsWith("set_");
                if (isGetter || isSetter)
                    this.FillProperty(def, funcName, isSetter);
            }
        },
        FillProperty: function (def, funcName, isSetter){
            var member = def[funcName];
            var func = member;
            var propName = funcName.substr(4);
            var prop = this._PropertiesByName[propName];
            if (System.Reflection.PropertyInfo.op_Equality(prop, null)){
                prop = new System.Reflection.PropertyInfo.ctor();
                this._PropertiesByName[propName] = prop;
                this._Properties.push(prop);
                prop._Name = propName;
                prop._DeclaringType = this;
                prop._IsStatic = this._JsType.staticDefinition != null && this._JsType.staticDefinition[funcName] != null;
                var propTypeName = JsTypeHelper.getMemberTypeName(def, propName);
                if (propTypeName != null)
                    prop._PropertyType = System.Type.GetType$$String(propTypeName);
                else {
                }
            }
            if (isSetter)
                prop._Setter = func;
            else
                prop._Getter = func;
        },
        TryFillProperty: function (def, name){
            if (def == null)
                return false;
            var getterName = "get_" + name;
            var setterName = "set_" + name;
            if (def.hasOwnProperty(getterName))
                this.FillProperty(def, getterName, false);
            if (def.hasOwnProperty(setterName))
                this.FillProperty(def, setterName, true);
            return this._PropertiesByName[name] != null;
        },
        GetProperty$$String: function (name){
            this.VerifyProperty(name);
            return this._PropertiesByName[name];
        },
        GetProperty$$String$$BindingFlags: function (name, bindingAttr){
            if (name == null)
                throw $CreateException(new System.ArgumentNullException.ctor$$String("name"), new Error());
            return this.GetProperty$$String(name);
        },
        GetProperty$$String$$Type: function (name, returnType){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        VerifyProperty: function (name){
            if (this._PropertiesByName == null){
                this._PropertiesByName = new Object();
                this._Properties = new Array();
            }
            if (this._PropertiesByName.hasOwnProperty(name))
                return;
            if (this.TryFillProperty(this._JsType.definition, name))
                return;
            if (this.TryFillProperty(this._JsType.staticDefinition, name))
                return;
            var baseType = this.get_BaseType();
            if (baseType != null){
                var pe = baseType.GetProperty$$String(name);
                if (System.Reflection.PropertyInfo.op_Inequality(pe, null)){
                    this._PropertiesByName[name] = pe;
                    this._Properties.push(pe);
                    return;
                }
            }
            this._PropertiesByName[name] = null;
        },
        VerifyProperties: function (){
            if (!this.allPropertiesVerified){
                this.allPropertiesVerified = true;
                if (this._PropertiesByName == null){
                    this._PropertiesByName = new Object();
                    this._Properties = new Array();
                }
                this.FillProperties(this._JsType.definition);
                this.FillProperties(this._JsType.staticDefinition);
                var baseType = this.get_BaseType();
                if (baseType != null){
                    var props = baseType.GetProperties();
                    for (var $i17 = 0,$l17 = props.length,pe = props[$i17]; $i17 < $l17; $i17++, pe = props[$i17]){
                        if (!this._PropertiesByName.hasOwnProperty(pe._Name)){
                            this._PropertiesByName[pe._Name] = pe;
                            this._Properties.push(pe);
                        }
                    }
                }
            }
        },
        GetProperties: function (){
            this.VerifyProperties();
            return this._Properties;
        },
        FillMethods: function (def){
            var isStatic = def == this._JsType.staticDefinition;
            for (var funcName in def){
                if (funcName == "toString")
                    continue;
                var func = def[funcName];
                if (SharpKit.JavaScript.Utils.Js.Typeof(func) != "function")
                    continue;
                var methodName = SharpKit.JavaScript.JsNamingHelper.JsFunctionNameToClrMethodName(funcName);
                var methods = this._MethodsByName[methodName];
                if (methods == null){
                    methods =  [];
                    this._MethodsByName[methodName] = methods;
                }
                var method = new System.Reflection.MethodInfo.ctor();
                methods.push(method);
                this._Methods.push(method);
                method._Name = methodName;
                method.JsName = funcName;
                method.JsFunction = func;
                method._DeclaringType = this;
                method._IsStatic = this._JsType.staticDefinition != null && this._JsType.staticDefinition[funcName] == func;
            }
        },
        GetMethod: function (name){
            this.VerifyMethods();
            var methods = this._MethodsByName[name];
            if (methods == null)
                return null;
            return methods[0];
        },
        VerifyMethods: function (){
            if (this._MethodsByName == null){
                this._MethodsByName = new Object();
                this._Methods = new Array();
                this.FillMethods(this._JsType.definition);
                this.FillMethods(this._JsType.staticDefinition);
                var baseType = this.get_BaseType();
                if (baseType != null){
                    var methods = baseType.GetMethods();
                    for (var $i18 = 0,$l18 = methods.length,me = methods[$i18]; $i18 < $l18; $i18++, me = methods[$i18]){
                        if (this._JsType.definition != null && this._JsType.definition.hasOwnProperty(me.JsName))
                            continue;
                        if (this._JsType.staticDefinition != null && this._JsType.staticDefinition.hasOwnProperty(me.JsName))
                            continue;
                        var list = this._MethodsByName[me._Name];
                        if (list == null){
                            list =  [];
                            this._MethodsByName[me._Name] = list;
                        }
                        list.push(me);
                        this._Methods.push(me);
                    }
                }
            }
        },
        GetMethods: function (){
            this.VerifyMethods();
            var arr =  [];
            for (var i = 0; i < this._Methods.length; i++){
                arr.push(this._Methods[i]);
            }
            return arr;
        },
        GetMethods$$String: function (name){
            this.VerifyMethods();
            return this._MethodsByName[name];
        },
        GetMethods$$BindingFlags: function (bindingFlags){
            return this.GetMethods();
        },
        VerifyCustomAttributes: function (){
            this.VerifyCustomAttributesOnTypeAndMembers();
        },
        Name$$: "System.String",
        get_Name: function (){
            return JsTypeHelper.GetName(this._JsType);
        },
        FullName$$: "System.String",
        get_FullName: function (){
            return this._JsType.fullname;
        },
        AssemblyQualifiedName$$: "System.String",
        get_AssemblyQualifiedName: function (){
            return JsTypeHelper.GetAssemblyQualifiedName(this._JsType);
        },
        VerifyCustomAttributesOnTypeAndMembers: function (){
            if (this.verifiedCustomAttributesOnTypeAndMembers)
                return;
            this.verifiedCustomAttributesOnTypeAndMembers = true;
            if (this._JsType.customAttributes == null)
                return;
            for (var i = 0; i < this._JsType.customAttributes.length; i++){
                var attDef = this._JsType.customAttributes[i];
                var attType = JsTypeHelper.GetType(attDef.typeName);
                var jsCtor = attType[attDef.ctorName];
                var att = SharpKit.JavaScript.Utils.Js.ApplyNew(jsCtor, attDef.positionalArguments);
                if (attDef.namedArguments != null){
                    for (var propName in attDef.namedArguments){
                        var value = attDef.namedArguments[propName];
                        if (SharpKit.JavaScript.Utils.Js.Typeof(value) == "function")
                            value = value.call(null);
                        att["set_" + propName].call(att, value);
                    }
                }
                var target = this.GetAttributeTarget(attDef.targetType, attDef.targetMemberName);
                if (target._CustomAttributes == null)
                    target._CustomAttributes = new Array();
                target._CustomAttributes.push(att);
            }
        },
        GetAttributeTarget: function (memberType, memberName){
            if (memberType == "type")
                return this;
            else if (memberType == "method"){
                var methodName = SharpKit.JavaScript.JsNamingHelper.JsFunctionNameToClrMethodName(memberName);
                var methods = this.GetMethods$$String(methodName);
                for (var $i19 = 0,$l19 = methods.length,method = methods[$i19]; $i19 < $l19; $i19++, method = methods[$i19]){
                    if (method.JsName == memberName)
                        return method;
                }
                return null;
            }
            else if (memberType == "property"){
                return this.GetProperty$$String(memberName);
            }
            else
                throw $CreateException(new System.NotImplementedException.ctor$$String("GetAttributeTarget not supported yet for memberType: " + memberType), new Error());
        },
        IsAssignableFrom: function (type){
            return TypeIs(type._JsType, this._JsType);
        },
        IsInstanceOfType: function (obj){
            return Is(obj, this._JsType);
        },
        toString: function (){
            return System.String.Format$$String$$Object$Array("{Name = " + this.get_Name() + " FullName = " + this.get_FullName() + "}", new Array(0));
        },
        MakeGenericType: function (typeArguments){

            var x = [];
            for(var i=0;i<arguments.length;i++)
                x.push(arguments[i]|| null);
            return this._MakeGenericType(x);
        },
        GetGenericTypeDefinition: function (){
            return this._GenericTypeDefinition;
        },
        GetGenericArguments: function (){
            if (this._TypeArguments == null)
                return System.Type.EmptyTypes;
            return this._TypeArguments;
        },
        _MakeGenericType: function (typeArguments){
            if (this._MakeGenericTypeCache == null)
                this._MakeGenericTypeCache = new Object();
            var key = "";
            for (var i = 0; i < typeArguments.length; i++){
                var typeArg = typeArguments[i];
                key += typeArg._Name;
            }
            var t = this._MakeGenericTypeCache[key];
            if (t == null){
                t = new System.Type.ctor(this._JsType);
                this._MakeGenericTypeCache[key] = t;
                t._Name = this._Name;
                t._GenericTypeDefinition = this;
                t._TypeArguments = typeArguments;
                t._Properties = this._Properties;
                t._PropertiesByName = this._PropertiesByName;
                t._Methods = this._Methods;
                t._MethodsByName = this._MethodsByName;
                t._DeclaringType = this._DeclaringType;
                t._CustomAttributes = this._CustomAttributes;
            }
            return t;
        }
    }
};
jst_pushOrReplace(System$Type);

var System$Diagnostics$Debugger = {
    fullname: "System.Diagnostics.Debugger",
    baseTypeName: "System.Object",
    staticDefinition: {
        Break: function (){
            debugger;
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Diagnostics$Debugger);
var System$Diagnostics$Trace = {
    fullname: "System.Diagnostics.Trace",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            System.Diagnostics.Trace.Warnings = null;
            System.Diagnostics.Trace.Enabled = false;
        },
        TraceWarning$$String: function (msg){
            if (!System.Diagnostics.Trace.Enabled)
                return;
            if (System.Diagnostics.Trace.Warnings == null)
                System.Diagnostics.Trace.Warnings = new System.Collections.Generic.List$1.ctor(System.String.ctor);
            System.Diagnostics.Trace.Warnings.Add(msg);
        },
        TraceWarning$$String$$Object$Array: function (format, args){
            if (!System.Diagnostics.Trace.Enabled)
                return;
            System.Diagnostics.Trace.TraceWarning$$String(System.String.Format$$String$$Object$Array(format, args));
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Diagnostics$Trace);

var System$ComponentModel$ListSortDirection = {
    fullname: "System.ComponentModel.ListSortDirection",
    staticDefinition: {
        Ascending: 0,
        Descending: 1
    },
    Kind: "Enum"
};
jst_pushOrReplace(System$ComponentModel$ListSortDirection);
var System$Math = {
    fullname: "System.Math",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            System.Math.PI = Math.PI;
        },
        Abs$$Number: function (value){
            return Math.abs(value);
        },
        Abs$$Double: function (value){
            return Math.abs(value);
        },
        Abs$$Int32: function (value){
            return Math.abs(value);
        },
        Abs$$Int64: function (value){
            return Math.abs(value);
        },
        Abs$$Single: function (value){
            return Math.abs(value);
        },
        AbsHelper$$Int16: function (value){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        AbsHelper$$Int32: function (value){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        AbsHelper$$Int64: function (value){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        AbsHelper$$SByte: function (value){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Acos: function (d){
            return Math.acos(d);
        },
        Asin: function (d){
            return Math.asin(d);
        },
        Atan: function (d){
            return Math.atan(d);
        },
        Atan2: function (y, x){
            return Math.atan2(y, x);
        },
        BigMul: function (a, b){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Ceiling$$Decimal: function (d){
            return Math.ceil(d);
        },
        Ceiling$$Double: function (a){
            return Math.ceil(a);
        },
        Cos: function (d){
            return Math.cos(d);
        },
        Cosh: function (value){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Exp: function (d){
            return Math.exp(d);
        },
        Floor$$Decimal: function (d){
            return Math.floor(d);
        },
        Floor$$Double: function (d){
            return Math.floor(d);
        },
        IEEERemainder: function (x, y){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        InternalRound: function (value, digits, mode){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        InternalTruncate: function (d){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Log$$Double: function (d){
            return Math.log(d);
        },
        Log$$Double$$Double: function (a, newBase){
            return Math.log(a) / Math.log(newBase);
        },
        Log10: function (d){
            return Math.log(d) / Math.LN10;
        },
        Max$$Decimal$$Decimal: function (val1, val2){
            return Math.max(val1, val2);
        },
        Max$$Double$$Double: function (val1, val2){
            return Math.max(val1, val2);
        },
        Max$$Int32$$Int32: function (val1, val2){
            return Math.max(val1, val2);
        },
        Max$$Int64$$Int64: function (val1, val2){
            return Math.max(val1, val2);
        },
        Max$$SByte$$SByte: function (val1, val2){
            return Math.max(val1, val2);
        },
        Max$$Single$$Single: function (val1, val2){
            return Math.max(val1, val2);
        },
        Max$$UInt32$$UInt32: function (val1, val2){
            return Math.max(val1, val2);
        },
        Max$$UInt64$$UInt64: function (val1, val2){
            return Math.max(val1, val2);
        },
        Min$$Decimal$$Decimal: function (val1, val2){
            return Math.min(val1, val2);
        },
        Min$$Double$$Double: function (val1, val2){
            return Math.min(val1, val2);
        },
        Min$$Int32$$Int32: function (val1, val2){
            return Math.min(val1, val2);
        },
        Min$$Int64$$Int64: function (val1, val2){
            return Math.min(val1, val2);
        },
        Min$$SByte$$SByte: function (val1, val2){
            return Math.min(val1, val2);
        },
        Min$$Single$$Single: function (val1, val2){
            return Math.min(val1, val2);
        },
        Min$$UInt32$$UInt32: function (val1, val2){
            return Math.min(val1, val2);
        },
        Min$$UInt64$$UInt64: function (val1, val2){
            return Math.min(val1, val2);
        },
        Pow: function (x, y){
            return Math.pow(x, y);
        },
        Round$$Decimal: function (d){
            return Math.round(d);
        },
        Round$$Double: function (a){
            return Math.round(a);
        },
        Round$$Decimal$$Int32: function (d, decimals){
            var pow = Math.pow(10, decimals);
            return Math.round(d * pow) / pow;
        },
        Round$$Decimal$$MidpointRounding: function (d, mode){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Round$$Double$$Int32: function (value, digits){
            var pow = Math.pow(10, digits);
            return Math.round(value * pow) / pow;
        },
        Round$$Double$$MidpointRounding: function (value, mode){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Round$$Decimal$$Int32$$MidpointRounding: function (d, decimals, mode){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Round$$Double$$Int32$$MidpointRounding: function (value, digits, mode){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Sign$$Decimal: function (value){
            if (value < 0.0)
                return -1;
            if (value > 0.0)
                return 1;
            if (value == 0.0)
                return 0;
            throw $CreateException(new System.ArgumentException.ctor$$String("value"), new Error());
        },
        Sign$$Double: function (value){
            if (value < 0)
                return -1;
            if (value > 0)
                return 1;
            if (value == 0)
                return 0;
            throw $CreateException(new System.ArgumentException.ctor$$String("value"), new Error());
        },
        Sign$$Int16: function (value){
            if (value < 0)
                return -1;
            if (value > 0)
                return 1;
            if (value == 0)
                return 0;
            throw $CreateException(new System.ArgumentException.ctor$$String("value"), new Error());
        },
        Sign$$Int32: function (value){
            if (value < 0)
                return -1;
            if (value > 0)
                return 1;
            if (value == 0)
                return 0;
            throw $CreateException(new System.ArgumentException.ctor$$String("value"), new Error());
        },
        Sign$$Int64: function (value){
            if (value < 0)
                return -1;
            if (value > 0)
                return 1;
            if (value == 0)
                return 0;
            throw $CreateException(new System.ArgumentException.ctor$$String("value"), new Error());
        },
        Sign$$SByte: function (value){
            if (value < 0)
                return -1;
            if (value > 0)
                return 1;
            if (value == 0)
                return 0;
            throw $CreateException(new System.ArgumentException.ctor$$String("value"), new Error());
        },
        Sign$$Single: function (value){
            if (value < 0)
                return -1;
            if (value > 0)
                return 1;
            if (value == 0)
                return 0;
            throw $CreateException(new System.ArgumentException.ctor$$String("value"), new Error());
        },
        Sin: function (a){
            return Math.sin(a);
        },
        Sinh: function (value){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Sqrt: function (d){
            return Math.sqrt(d);
        },
        Tan: function (a){
            return Math.tan(a);
        },
        Tanh: function (value){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        Truncate$$Decimal: function (d){
            return d | 0;
        },
        Truncate$$Double: function (d){
            return d | 0;
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(System$Math);

var System$Text$StringBuilder = {
    fullname: "System.Text.StringBuilder",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            this.array = null;
            this.length = 0;
            System.Object.ctor.call(this);
            this.array = new Array(0);
            this.length = 0;
        },
        ctor$$Int32: function (len){
            this.array = null;
            this.length = 0;
            System.Object.ctor.call(this);
            this.array = new Array(0);
            this.length = 0;
        },
        ctor$$String: function (s){
            this.array = null;
            this.length = 0;
            System.Object.ctor.call(this);
            this.array = [s];
            this.length = s == null ? 0 : s.length;
        },
        Append$$Char: function (s){
            this.array.push(s);
            this.length += 1;
        },
        Append$$String: function (s){
            this.array.push(s);
            this.length += s.length;
        },
        AppendFormat$$String$$Object: function (s, arg0){
            var ss = System.String.Format$$String$$Object(s, arg0);
            this.array.push(ss);
            this.length += ss.length;
        },
        AppendFormat$$String$$Object$$Object: function (s, arg0, arg1){
            var ss = System.String.Format$$String$$Object$$Object(s, arg0, arg1);
            this.array.push(ss);
            this.length += ss.length;
        },
        AppendFormat$$String$$Object$$Object$$Object: function (s, arg0, arg1, arg2){
            var ss = System.String.Format$$String$$Object$$Object$$Object(s, arg0, arg1, arg2);
            this.array.push(ss);
            this.length += ss.length;
        },
        Append$$Object: function (obj){
            if (obj != null){
                var s = obj.toString();
                this.array.push(s);
                this.length += s.length;
            }
        },
        Insert$$Int32$$Boolean: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.IndexOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value.toString());
            return this;
        },
        Insert$$Int32$$Byte: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Char: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Char$Array: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Decimal: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Double: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Int16: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Int32: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Int64: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Object: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$SByte: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Single: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$String: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$UInt16: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$UInt32: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$UInt64: function (index, value){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$String$$Int32: function (index, value, count){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            for (var i = 0; i < count; i++)
                this.array.insert(index, value);
            return this;
        },
        Insert$$Int32$$Char$Array$$Int32: function (index, value, count){
            if (index < 0 || index > this.array.length)
                throw $CreateException(new System.ArgumentOutOfRangeException.ctor(), new Error());
            for (var i = 0; i < count; i++)
                this.array.insert(index, value);
            return this;
        },
        toString: function (){
            return this.array.join("");
        },
        Length$$: "System.Int32",
        get_Length: function (){
            return this.length;
        },
        set_Length: function (value){
            if (value == this.length)
                return;
            if (value > this.length)
                this.Append$$String(new Array(value + 1).join("\0"));
            else {
                this.Remove(value, this.length - value);
            }
        },
        Remove: function (start, count){
            var s = this.array.join("");
            s = s.Remove$$Int32$$Int32(start, count);
            this.array = [s];
            this.length = s.length;
            return this;
        }
    }
};
jst_pushOrReplace(System$Text$StringBuilder);

var System$Runtime$Serialization$IExtensibleDataObject = {
    fullname: "System.Runtime.Serialization.IExtensibleDataObject",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$Runtime$Serialization$IExtensibleDataObject);
var System$Runtime$Serialization$ISerializable = {
    fullname: "System.Runtime.Serialization.ISerializable",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Interface"
};
jst_pushOrReplace(System$Runtime$Serialization$ISerializable);
var SharpKit$PropertyInfoExtensions = {
    fullname: "SharpKit.PropertyInfoExtensions",
    baseTypeName: "System.Object",
    staticDefinition: {
        IsStatic: function (pi){
            return pi._IsStatic;
        },
        IsPublic: function (pi){
            throw new Error('Not Implemented');
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(SharpKit$PropertyInfoExtensions);
var SharpKit$Extensions2 = {
    fullname: "SharpKit.Extensions2",
    baseTypeName: "System.Object",
    staticDefinition: {
        GetValueOrDefaultIfNullOrEmpty: function (s, defaultValue){
            if(s==null || s.length==0) return defaultValue; return s;
        },
        IsNullOrEmpty$$String: function (s){
            return s == null || s.length == 0;
        },
        IsNotNullOrEmpty$$String: function (s){
            return s != null && s.length > 0;
        },
        HtmlEscape: function (s){
            return s.Replace$$String$$String("&", "&amp;").Replace$$String$$String("<", "&lt;").Replace$$String$$String(">", "&gt;").Replace$$String$$String("\n", "<br/>");
        },
        ReplaceFirst$$String$$String$$String: function (s, search, replace){
            return s.ReplaceFirst(search, replace);
        },
        ReplaceFirst$$String$$String$$String$$StringComparison: function (s, search, replace, comparisonType){
            var index = s.indexOf(search, comparisonType);
            if (index != -1){
                var finalStr = System.String.Concat$$String$$String$$String(s.substr(0, index), replace, s.substr(search.length + index));
                return finalStr;
            }
            return s;
        },
        FixCamelCasing: function (s){
            var sb = new System.Text.StringBuilder.ctor();
            var first = true;
            var $it19 = s.GetEnumerator();
            while ($it19.MoveNext()){
                var c = $it19.get_Current();
                if (System.Char.IsUpper$$Char(c) && !first){
                    sb.Append$$Char(" ");
                }
                sb.Append$$Char(c);
                first = false;
            }
            return sb.toString();
        },
        RemoveLast: function (s, count){
            return s.substr(s, s.length-count);
        },
        TrimEnd: function (s, trimText){
            if (s.EndsWith$$String(trimText))
                return SharpKit.Extensions2.RemoveLast(s, trimText.length);
            return s;
        },
        EqualsIgnoreCase: function (s1, s2){
            return System.String.Compare$$String$$String$$Boolean(s1, s2, true) == 0;
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(SharpKit$Extensions2);
var SharpKit$JavaScript$Utils$Js = {
    fullname: "SharpKit.JavaScript.Utils.Js",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            SharpKit.JavaScript.Utils.Js.undefined = null;
        },
        escape: function (s){
            return escape(s);
        },
        JsEquals: function (obj, value){
            return obj==value;
        },
        JsExactEqualsToUndefined: function (obj){
            return obj===undefined;
        },
        JsExactEquals: function (obj, value){
            return obj===value;
        },
        Typeof: function (obj){
            return typeof(obj);
        },
        ApplyFunction: function (func, thisArg, prms){
            throw $CreateException(new System.NotImplementedException.ctor$$String("TODO: Implement"), new Error());
        },
        CallFunction: function (func, thisArg, prms){
            throw $CreateException(new System.NotImplementedException.ctor$$String("TODO: Implement"), new Error());
        },
        CallFunction2: function (obj, funcName, prms){
            return obj[funcName].apply(obj, Arguments.from(arguments, 2));
        },
        FindOverloadedMethodName: function (obj, funcName){
            funcName+='$$';for(var o in obj)
                if (typeof(obj[o])=='function' && o.indexOf(funcName)==0)
                    return o;
            return null;
        },
        Eval: function (code){
            eval(code)
        },
        Compile: function (){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        GetHashKey: function (key){
            return JsCompiler.GetHashKey(key);
        },
        DeleteMember: function (obj, name){
            delete obj[name];
        },
        parseFloat: function (s){
            return parseFloat(s);
        },
        parseInt: function (s){
            return parseInt(s);
        },
        ApplyNew: function (jsCtor, prms){
            if(prms==null || prms.length==0) return new jsCtor(); return new jsCtor(prms[0], prms[1], prms[2], prms[3], prms[4], prms[5], prms[6], prms[7], prms[8]);
        },
        IsArray: function (obj){
            return obj instanceof Array;
        },
        isNaN: function (obj){
            return isNaN(obj);
        },
        decodeURIComponent: function (encodedURIString){
            return decodeURIComponent(encodedURIString)
        },
        encodeURIComponent: function (encodedURIString){
            return encodeURIComponent(encodedURIString)
        },
        encodeURI: function (URIString){
            return encodeURI(URIString)
        },
        decodeURI: function (URIString){
            return decodeURI(URIString)
        },
        unescape: function (s){
            return unescape(s)
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(SharpKit$JavaScript$Utils$Js);
var SharpKit$JsClr$Utils$JsClrClientSerializer = {
    fullname: "SharpKit.JsClr.Utils.JsClrClientSerializer",
    baseTypeName: "System.Object",
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            this.ObjInfos = null;
            this.RefIndex = 0;
            this.IgnoreFields = null;
            System.Object.ctor.call(this);
            this.ObjInfos = new System.Collections.Generic.Dictionary$2.ctor(System.Object.ctor, "SharpKit.JsClr.Utils.ObjInfo");
            this.IgnoreFields = new Object();
            this.IgnoreFields["_type"] = true;
            this.IgnoreFields["_hashKey"] = true;
        },
        Serialize: function (obj){
            var obj2 = this.Serialize2(obj);
            return JSON.stringify(obj2);
        },
        Serialize2: function (obj){
            if (obj === undefined)
                return undefined;
            if (obj === null)
                return null;
            var jsType = typeof(obj);
            if (jsType == "object"){
                return this.SerializeRefOrContent(obj);
            }
            else if (jsType == "function"){
                return undefined;
            }
            else {
                return obj;
            }
        },
        SerializeRefOrContent: function (obj){
            if (!this.ObjInfos.ContainsKey(obj)){
                var info = {};
                this.ObjInfos.Add(obj, info);
                this.SerializeFirstRef(obj, info);
                return info.FirstRef;
            }
            else {
                var info = this.ObjInfos.get_Item$$TKey(obj);
                if (info.Ref == null){
                    this.RefIndex++;
                    info.Ref = {
                        $r: this.RefIndex.toString(),
                        $t: "ObjRef"
                    };
                    info.FirstRef.$k = info.Ref.$r;
                }
                return info.Ref;
            }
        },
        SerializeFirstRef: function (obj, info){
            var obj2 = {};
            info.FirstRef = obj2;
            var type = obj.GetType();
            obj2.$t = type.get_FullName();
            var obj3 = obj;
            if (Is(obj, System.Collections.IList.ctor)){
                var list = obj;
                obj2.$l =  [];
                var $it20 = list.GetEnumerator();
                while ($it20.MoveNext()){
                    var item = $it20.get_Current();
                    var item2 = this.Serialize2(item);
                    obj2.$l.push(item2);
                }
            }
            else {
                for (var p in obj3){
                    if (this.IgnoreFields[p])
                        continue;
                    if (!obj3.hasOwnProperty(p))
                        continue;
                    var value = obj3[p];
                    obj2[p] = this.Serialize2(value);
                }
            }
            return obj2;
        }
    }
};
jst_pushOrReplace(SharpKit$JsClr$Utils$JsClrClientSerializer);
var SharpKit$JavaScript$JsNamingHelper = {
    fullname: "SharpKit.JavaScript.JsNamingHelper",
    baseTypeName: "System.Object",
    staticDefinition: {
        JsFunctionNameToClrMethodName: function (jsFuncName){
            var methodName = jsFuncName;
            var di = jsFuncName.indexOf("$");
            if (di > 0)
                methodName = jsFuncName.substr(0, di);
            return methodName;
        },
        ClrTypeToJsTypeRef: function (type){
            var att = System.Linq.Enumerable.FirstOrDefault$1$$IEnumerable$1(SharpKit.JavaScript.JsTypeAttribute.ctor, System.Linq.Enumerable.OfType$1(SharpKit.JavaScript.JsTypeAttribute.ctor, type.GetCustomAttributes$$Type$$Boolean(Typeof(SharpKit.JavaScript.JsTypeAttribute.ctor), false)));
            if (att != null && SharpKit.Extensions2.IsNotNullOrEmpty$$String(att.get_Name())){
                return att.get_Name().Replace$$Char$$Char("`", "$");
            }
            return type.get_Namespace() + "." + type.get_Name().Replace$$Char$$Char("`", "$");
        },
        ClrConstructorToJsFunctionName: function (mi){
            var sb = new System.Text.StringBuilder.ctor();
            var typeRef = SharpKit.JavaScript.JsNamingHelper.ClrTypeToJsTypeRef(mi.get_DeclaringType());
            sb.Append$$String(typeRef);
            sb.Append$$String(".ctor");
            SharpKit.JavaScript.JsNamingHelper.ConvertParametersToJsFunctionName(mi.GetParameters(), sb);
            return sb.toString();
        },
        ConvertParametersToJsFunctionName: function (prms, sb){
            for (var $i22 = 0,$l22 = prms.length,prm = prms[$i22]; $i22 < $l22; $i22++, prm = prms[$i22]){
                sb.Append$$String("$$");
                sb.Append$$String(prm.get_ParameterType().get_Name());
            }
        },
        ClrMethodBaseToJsFunctionName: function (mi){
            if (mi.get_MemberType() == 1){
                return SharpKit.JavaScript.JsNamingHelper.ClrMethodToJsFunctionName(Cast(mi, System.Reflection.MethodInfo.ctor));
            }
            else if (mi.get_MemberType() == 8){
                return SharpKit.JavaScript.JsNamingHelper.ClrConstructorToJsFunctionName(Cast(mi, System.Reflection.ConstructorInfo.ctor));
            }
            else
                throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        ClrMethodToJsFunctionName: function (mi){
            if (SharpKit.JavaScript.JsNamingHelper.IsPropertySetter(mi)){
                return mi.get_Name();
            }
            var name = mi.get_Name();
            var type = mi.get_DeclaringType();
            if (type.get_IsGenericType()){
                type = type.GetGenericTypeDefinition();
                mi = type.GetMethod$$String(name);
            }
            var sb = new System.Text.StringBuilder.ctor();
            if (mi.get_IsStatic()){
                sb.Append$$String(SharpKit.JavaScript.JsNamingHelper.ClrTypeToJsTypeRef(type));
                var att = System.Linq.Enumerable.FirstOrDefault$1$$IEnumerable$1(SharpKit.JavaScript.JsTypeAttribute.ctor, System.Linq.Enumerable.OfType$1(SharpKit.JavaScript.JsTypeAttribute.ctor, type.GetCustomAttributes$$Type$$Boolean(Typeof(SharpKit.JavaScript.JsTypeAttribute.ctor), false)));
                if (att == null || att.get_Mode() == 2){
                    sb.Append$$String(".staticDefinition.");
                }
                else {
                    sb.Append$$String(".");
                }
            }
            sb.Append$$String(name);
            SharpKit.JavaScript.JsNamingHelper.ConvertParametersToJsFunctionName(mi.GetParameters(), sb);
            return sb.toString();
        },
        IsPropertySetter: function (mi){
            var name = mi.get_Name();
            return name.StartsWith$$String("set_") && mi.GetParameters().length == 1;
        }
    },
    assemblyName: "SharpKit.JsClr",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
jst_pushOrReplace(SharpKit$JavaScript$JsNamingHelper);
