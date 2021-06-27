var smartgrid = require('smart-grid');
 
/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: "20px", /* gutter width px || % */
    container: {
        maxWidth: '1170px', /* max-width оn very large screen */
        fields: '200px' /* side fields */
    },
    breakPoints: {
        md: {
            'width': '980px',
            'fields': '0px'
        },
        sm: {
            'width': '768px',
            'fields': '0px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            some_width: 'Npx',
            some_offset: 'N(px|%)'
        }
        */
    }
    

};
 
smartgrid('src/less/', settings);