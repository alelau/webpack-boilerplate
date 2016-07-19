require("!style!css!less!./style.less");
//document.write(require("./content.js"));

window.myFunction = function () {
    require(['./content'], function (cats) {
        //var content = require('./content');
        console.log('the content result', cats);
        var newdiv = document.createElement("H1");
        newdiv.appendChild(document.createTextNode(cats.content ));
        document.body.appendChild(newdiv);
    });
};

