var idFltI = charIDToTypeID( "FltI" );
executeAction( idFltI, undefined, DialogModes.NO );

//this is the size of our squares in pixels
var squareSize = 1280;



var docRef = app.activeDocument;

//set the ruler type
if (app.preferences.rulerUnits != Units.PIXELS)
{
    app.preferences.rulerUnits = Units.PIXELS;
}

var layerRef = docRef.activeLayer;

for (y = 0; y<docRef.height; y+=squareSize)
{
    for (x = 0; x<docRef.width; x+=squareSize)
    {
        //activate the original layer
        docRef.activeLayer = layerRef;
        //make the selection
        docRef.selection.select(Array (Array(x, y), Array(x, y+squareSize), Array(x+squareSize,y+squareSize), Array(x+squareSize,y)), SelectionType.REPLACE, 0, false);

        //copy the selection
        docRef.selection.copy();
        //create and paste new layer
        docRef.artLayers.add();
        docRef.paste();
    }
}

var idselectAllLayers = stringIDToTypeID( "selectAllLayers" );
    var desc6 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref1.putEnumerated( idLyr, idOrdn, idTrgt );
    desc6.putReference( idnull, ref1 );
executeAction( idselectAllLayers, desc6, DialogModes.NO );

var idHd = charIDToTypeID( "Hd  " );
    var desc7 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var list1 = new ActionList();
            var ref2 = new ActionReference();
            var idLyr = charIDToTypeID( "Lyr " );
            var idBckg = charIDToTypeID( "Bckg" );
            ref2.putProperty( idLyr, idBckg );
        list1.putReference( ref2 );
    desc7.putList( idnull, list1 );
executeAction( idHd, desc7, DialogModes.NO );
