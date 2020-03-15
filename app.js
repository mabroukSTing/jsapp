function $Tag(tagname) {
    return document.getElementsByTagName(tagname);
}

function SetData() {
    var values = GetNbRowCell();
    th = values[0] - 1;
    tr = values[1];
    var s_ = 0
    var sv_ = new Array(th + 1);
    sv_ = [0, 0, 0, 0];
    //console.log("somme verticale", sv_);
    //console.log("th value is  " + values[0]);
    //console.log("tr value is  " + values[1]);
    var Tdata = $Tag("tbody");
    console.log(Tdata);
    var TC = Tdata[0].getElementsByTagName("tr");
    console.log(TC.length);
    console.log("data with tr tagname==> ", TC);

    for (var j = 0; j < tr; j++) {
        for (var i = 0; i < th; i++) {
            var para = document.createElement("td");
            var node = document.createTextNode(TestMath(25, 200));

            console.log(node.nodeValue);
            s_ += parseFloat(node.nodeValue);
            sv_[i] += parseFloat(node.nodeValue);
            console.log("somme verticale element ", sv_[i]);
            para.appendChild(node);
            TC[j].appendChild(para);
        }
        console.log("this is s ", s_)
        s_ = s_.toFixed(3);
        sv_[th] += parseFloat(s_);
        var para = document.createElement("td");
        var node = document.createTextNode(s_);
        para.appendChild(node);
        TC[j].appendChild(para);
        s_ = 0;
        //Verticale somme manager 

    }


    console.log("somme verticale", sv_);
    var Tdata = $Tag("tfoot");
    var TC = Tdata[0].getElementsByTagName("tr");
    console.log(TC);
    for (var i = 0; i < th + 1; i++) {
        var para = document.createElement("td");
        var node = document.createTextNode(sv_[i].toFixed(3));
        para.appendChild(node);
        TC[0].appendChild(para);
    }



}

function GetNbRowCell() {
    var TheadData = $Tag("thead");
    var TbodyData = $Tag("tbody");
    var tr_ = TheadData[0].getElementsByTagName("tr");
    var tr = TbodyData[0].getElementsByTagName("tr");

    var th = tr_[1].getElementsByTagName("th");
    //console.log("thead contains ", th.length);
    //console.log("tbody contains ", tr.length);

    return [th.length, tr.length];
}

function TestMath(a, b) {
    if (a < b) {
        a = a;
        b = b
    } else {
        c = a;
        a = b;
        b = c;
    }
    var first = Math.random() * Math.abs(b - a) + a;
    var second = first.toFixed(3);
    return second;

}

function TestAll() {
    /*var data_ = $Tag("tfoot");
    var td_ = data_[0].getElementsByTagName("td");
    console.log("from sommAll", td_);
    var data = $Tag("tbody");
    var td = data[0].getElementsByTagName("td");
    console.log("from sommAll", td);
    */
    /*
    var sv_ = new Array(th);
    sv_[0] = 1;
    sv_[1] = 1;
    sv_[2] = 5;
    sv_[3] = 5;
    console.log(sv_);
*/
}


window.onload = function() {
    //GetNbRowCell();
    SetData();
    TestAll();
}