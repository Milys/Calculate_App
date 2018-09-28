// calculate RPM

var num1, num2, res;

function sumValues() {
    num1 = Number(document.formCal.SFM.value);
    num2 = Number(document.formCal.Dia.value);
    res = ((num1 * 3.82) / num2);
    document.formCal.txtRes.value = res.toFixed(4);
    //alert("me");

}

//convert in and mm

var numIN, numMM, resConvert;

function convertValues() {
    if (numMM = Number(document.formConvert.MM.value)) {
        resConvert = numMM * 0.0393701;
        document.formConvert.txtResConvert.value = resConvert.toFixed(4);
    } else if (numIN = Number(document.formConvert.IN.value)) {
        resConvert = numIN * 25.4;
        document.formConvert.txtResConvert.value = resConvert.toFixed(4);
    } else if (isNaN(numMM = Number(document.formConvert.MM.value))) {
        alert("Enter Number");
    } else if (isNaN(numIN = Number(document.formConvert.IN.value))) {
        alert("Enter Number");
    } else {
        alert("Enter Inch or Milimeters");
    }
}

// calculate feed rate
var numRPM, numFlutes, numChips, feedResult;

function calculateRPM (){
    numRPM = Number(document.formSpeedFeed.RPM_Feeds.value);
    numFlutes = Number(document.formSpeedFeed.Flutes_Nr.value);
    numChips = Number(document.formSpeedFeed.Chip_Load.value);
    Result = (numRPM * numFlutes * numChips);
    document.formSpeedFeed.txtFeedResult.value = Result.toFixed(4);

}

// calculate bevel tool depth
var numBevelDia, numToolDia, numToolAngle, depthResult;

function calculateDepth (){
    numBevelDia = Number(document.formBevel.bevelDia.value);
    numToolDia = Number(document.formBevel.toolDia.value);
    numToolAngle = Number(document.formBevel.bevelAngle.value);
    //depthResult = ((((numBevelDia - numToolDia)/2))/((Math.tan(numToolAngle/2))));
    depthResult = (((numBevelDia - numToolDia)/2)/(Math.tan(((((numToolAngle)/2))*Math.PI)/180)));
    document.formBevel.textToolDepth.value = depthResult.toFixed(4);

}

function clearValues() {

    document.formCal.SFM.value = "";
    document.formCal.Dia.value = "";
    document.formCal.txtRes.value = "";

    document.formConvert.IN.value = "";
    document.formConvert.MM.value = "";
    document.formConvert.txtResConvert.value = "";

    document.formSpeedFeed.RPM_Feeds.value = "";
    document.formSpeedFeed.Flutes_Nr.value = "";
    document.formSpeedFeed.Chip_Load.value = "";
    document.formSpeedFeed.txtFeedResult.value = "";

    document.formBevel.bevelDia.value = "";
    document.formBevel.toolDia.value = "";
    document.formBevel.bevelAngle.value = "";
    document.formBevel.textToolDepth.value = "";

}