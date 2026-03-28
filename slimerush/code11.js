gdjs.BootScreenCode = {};
gdjs.BootScreenCode.localVariables = [];
gdjs.BootScreenCode.GDIntroObjects1= [];
gdjs.BootScreenCode.GDIntroObjects2= [];


gdjs.BootScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Intro"), gdjs.BootScreenCode.GDIntroObjects1);
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.BootScreenCode.GDIntroObjects1.length ;i < len;++i) {
    gdjs.BootScreenCode.GDIntroObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Intro"), gdjs.BootScreenCode.GDIntroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BootScreenCode.GDIntroObjects1.length;i<l;++i) {
    if ( gdjs.BootScreenCode.GDIntroObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.BootScreenCode.GDIntroObjects1[k] = gdjs.BootScreenCode.GDIntroObjects1[i];
        ++k;
    }
}
gdjs.BootScreenCode.GDIntroObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.BootScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BootScreenCode.GDIntroObjects1.length = 0;
gdjs.BootScreenCode.GDIntroObjects2.length = 0;

gdjs.BootScreenCode.eventsList0(runtimeScene);
gdjs.BootScreenCode.GDIntroObjects1.length = 0;
gdjs.BootScreenCode.GDIntroObjects2.length = 0;


return;

}

gdjs['BootScreenCode'] = gdjs.BootScreenCode;
