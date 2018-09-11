// calculate bevel tool depth
var numBevelDia, numToolDia, numToolAngle, depthResult;

function calculateBevelDepth (){
    numBevelDia = Number(document.formSpeedFeed.RPM_Feeds.value);
    numToolDia = Number(document.formSpeedFeed.Flutes_Nr.value);
    numToolAngle = Number(document.formSpeedFeed.Chip_Load.value);
    depthResult = (numRPM * numFlutes * numChips);
    document.formSpeedFeed.txtFeedResult.value = Result;

}