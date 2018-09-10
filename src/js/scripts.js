$(document).ready(function() {

    // Hide submenus
    $('#body-row .collapse').collapse('hide');

    // Collapse/Expand icon
    $('#collapse-icon').addClass('fa-angle-double-left');

    // Collapse click
    $('[data-toggle=sidebar-colapse]').click(function() {
        SidebarCollapse();
    });

    //Copy to clipboard - clipboard.js
    //var btns = document.getElementByClassName('btn-clipboard');
    var clipboard = new Clipboard('.btn-clipboard');
    // clipboard.on('success', function(e) {
    //     console.log(e);
    // });
    // clipboard.on('error', function(e) {
    //     console.log(e);
    // });
});