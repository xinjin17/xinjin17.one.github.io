function createXML() {
    var xml = false;
    if (window.ActiveXObject) {
        try {
            xml = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(e) {
            try{
                xml = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(e) {
                xml = false;
            }
        }
    }else if(window.XMLDocument) {
        xml = new XMLHttpRequest();
    }
    console.log(1)
    console.log(xml)
    return xml;
}

function check() {
    var xml = createXML();
    console.log(2)
    console.log(xml)
    var url = "check.php";
    emailTxt = document.getElementById('emailaddr');
    emailaddr = emailTxt.value;
    postStr = "emailaddr=" + emailaddr;
    xml.open("POST",url,true);
    xml.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf8");
    xml.send(postStr);
    console.log(postStr)

    xml.onreadystatechange = function() {
        if (xml.readyState == 4 && xml.status == 200) {
            var res = xml.responseText;
            if(res != "") {
                alert(res);
                emailTxt.focus();
                emailTxt.value='';
            }
        }
    }
}