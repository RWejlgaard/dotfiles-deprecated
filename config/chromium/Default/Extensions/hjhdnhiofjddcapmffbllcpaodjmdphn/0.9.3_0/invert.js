(
    function() {
        // the css we are going to inject
        var css = 'html {-webkit-filter: invert(100%);}body{background-color: black !important;}',

        head = document.getElementsByTagName('head')[0],
        style = document.createElement('style');

        // a hack, so you can "invert back" 
        if (!window.counter) {
            window.counter = 1;
        } else {
            window.counter++;
            if (window.counter % 2 == 0) {
                var css = 'html {-webkit-filter: invert(0%);}body{background-color: white !important;}'
            }
        };

        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        //injecting the css to the head
        head.appendChild(style);
    }()
);
