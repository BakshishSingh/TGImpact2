/*
* print stack on js->cs error
*/
CS.CSEntry = CS.Call;
CS.Call = function ()
{
    var ret = undefined;
    try
    {
        ret = CS.CSEntry.apply(CS, arguments);
    }
    catch (ex)
    {
        var str = "JS call CS Exception!\n\n";

        str += "----------- 1) CS Stack -----------\n\n";
        str += ex.toString() + "\n\n\n";

        str += "----------- 2) JS Stack -----------\n\n";
        str += ex.stack;

        UnityEngine.Debug.LogError$$Object(str);
    }
    return ret;
};

/*
* print stack on cs-> js error
*/

CS.jsFunctionEntry = function ()
{
    var args = Array.prototype.slice.apply(arguments);
    var obj = args[0];
    var fun = args[1];
    var ret = undefined;

    try {
        ret = fun.apply(obj, args.slice(2));
    } catch (ex) {
        var str = "JS Error! Error:\n" + ex + "\n\nStack:\n\n" + ex.stack;
        UnityEngine.Debug.LogError$$Object(str);
    }
    return ret;
};