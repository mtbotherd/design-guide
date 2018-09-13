$(document).ready(function() {

    // Hide submenus
    $('#body-row .collapse').collapse('hide');

    // Collapse/Expand icon
    $('#collapse-icon').addClass('fa-angle-double-left');

    // Collapse click
    $('[data-toggle=sidebar-colapse]').click(function() {
        SidebarCollapse();
    });

    // Copy to clipboard tooltips
    $('[data-toggle="tooltip"]').tooltip({
        placement: 'top'
    });
    $('[data-toggle="tooltip"]').on('click', function() {
        $(this).tooltip('hide');
    });

    //Initialize clipboard.js
    var clipboard = new Clipboard('.btn-clipboard');
});