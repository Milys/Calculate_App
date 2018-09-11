// calculate RPM

var num1, num2, res;

function sumValues() {
    num1 = Number(document.formCal.SFM.value);
    num2 = Number(document.formCal.Dia.value);
    res = ((num1 * 3.82) / num2);
    document.formCal.txtRes.value = res;
    //alert("me");

}

//convert in and mm

var numIN, numMM, resConvert;

function convertValues() {
    if (numMM = Number(document.formConvert.MM.value)) {
        resConvert = numMM * 0.0393701;
        document.formConvert.txtResConvert.value = resConvert;
    } else if (numIN = Number(document.formConvert.IN.value)) {
        resConvert = numIN * 25.4;
        document.formConvert.txtResConvert.value = resConvert;
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
    document.formSpeedFeed.txtFeedResult.value = Result;

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

}