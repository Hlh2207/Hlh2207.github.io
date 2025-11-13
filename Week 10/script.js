function calculate() {
            var a = document.frmCal.txta;
            var b = document.frmCal.txtb;
            var o = document.frmCal.slto;
            var r = document.frmCal.txtr;

            var numberFormat = /^[+-]?\d+(\.\d+)?$/;

            if (numberFormat.test(a.value) == false) {
                alert("A must be a number!");
                a.focus();
            } else if (numberFormat.test(b.value) == false) {
                alert("B must be a number!");
                b.focus();
            } else if ((o.value == "/" || o.value == "%") && parseInt(b.value) == 0) {
                alert("B can't be 0!");
                r.value = "";
                b.focus();
            } else {
                r.value = eval(a.value + o.value + b.value);
            }
        }