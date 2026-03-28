gdjs.Level_324Code = {};
gdjs.Level_324Code.localVariables = [];
gdjs.Level_324Code.GDPlayerObjects1= [];
gdjs.Level_324Code.GDPlayerObjects2= [];
gdjs.Level_324Code.GDBlockObjects1= [];
gdjs.Level_324Code.GDBlockObjects2= [];
gdjs.Level_324Code.GDTileObjects1= [];
gdjs.Level_324Code.GDTileObjects2= [];
gdjs.Level_324Code.GDChronoObjects1= [];
gdjs.Level_324Code.GDChronoObjects2= [];
gdjs.Level_324Code.GDSpikeObjects1= [];
gdjs.Level_324Code.GDSpikeObjects2= [];
gdjs.Level_324Code.GDFlagObjects1= [];
gdjs.Level_324Code.GDFlagObjects2= [];
gdjs.Level_324Code.GDWallPaperObjects1= [];
gdjs.Level_324Code.GDWallPaperObjects2= [];


gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_324Code.GDPlayerObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDSpikeObjects1Objects = Hashtable.newFrom({"Spike": gdjs.Level_324Code.GDSpikeObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_324Code.GDPlayerObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDFlagObjects1Objects = Hashtable.newFrom({"Flag": gdjs.Level_324Code.GDFlagObjects1});
gdjs.Level_324Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_324Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_324Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Chrono"), gdjs.Level_324Code.GDChronoObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}{for(var i = 0, len = gdjs.Level_324Code.GDChronoObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDChronoObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) * 100) / 100));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_324Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spike"), gdjs.Level_324Code.GDSpikeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDPlayerObjects1Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDSpikeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 4", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.Level_324Code.GDFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_324Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDPlayerObjects1Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDFlagObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 5", false);
}}

}


};

gdjs.Level_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_324Code.GDPlayerObjects1.length = 0;
gdjs.Level_324Code.GDPlayerObjects2.length = 0;
gdjs.Level_324Code.GDBlockObjects1.length = 0;
gdjs.Level_324Code.GDBlockObjects2.length = 0;
gdjs.Level_324Code.GDTileObjects1.length = 0;
gdjs.Level_324Code.GDTileObjects2.length = 0;
gdjs.Level_324Code.GDChronoObjects1.length = 0;
gdjs.Level_324Code.GDChronoObjects2.length = 0;
gdjs.Level_324Code.GDSpikeObjects1.length = 0;
gdjs.Level_324Code.GDSpikeObjects2.length = 0;
gdjs.Level_324Code.GDFlagObjects1.length = 0;
gdjs.Level_324Code.GDFlagObjects2.length = 0;
gdjs.Level_324Code.GDWallPaperObjects1.length = 0;
gdjs.Level_324Code.GDWallPaperObjects2.length = 0;

gdjs.Level_324Code.eventsList0(runtimeScene);
gdjs.Level_324Code.GDPlayerObjects1.length = 0;
gdjs.Level_324Code.GDPlayerObjects2.length = 0;
gdjs.Level_324Code.GDBlockObjects1.length = 0;
gdjs.Level_324Code.GDBlockObjects2.length = 0;
gdjs.Level_324Code.GDTileObjects1.length = 0;
gdjs.Level_324Code.GDTileObjects2.length = 0;
gdjs.Level_324Code.GDChronoObjects1.length = 0;
gdjs.Level_324Code.GDChronoObjects2.length = 0;
gdjs.Level_324Code.GDSpikeObjects1.length = 0;
gdjs.Level_324Code.GDSpikeObjects2.length = 0;
gdjs.Level_324Code.GDFlagObjects1.length = 0;
gdjs.Level_324Code.GDFlagObjects2.length = 0;
gdjs.Level_324Code.GDWallPaperObjects1.length = 0;
gdjs.Level_324Code.GDWallPaperObjects2.length = 0;


return;

}

gdjs['Level_324Code'] = gdjs.Level_324Code;
