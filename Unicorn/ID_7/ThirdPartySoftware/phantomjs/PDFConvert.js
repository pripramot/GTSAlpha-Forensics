var page = require('webpage').create(),
    system = require('system'),
    address, output, size;

if (system.args.length < 3) {
    console.log('Usage: PDFConvert.js URL filename');
    phantom.exit(1);
} else {
    address = system.args[1];
    output = system.args[2];

    page.paperSize = {
			format: 'A4',
			margin: {
				left: "5mm",
				right: "5mm",
				top: "15mm",
				bottom: "15mm"
			}
		};
		
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
            phantom.exit();
        } else {
                page.render(output);
                phantom.exit();
        }
    });
}
