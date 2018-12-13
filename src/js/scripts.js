$(document).ready(function() {
    // header+nav
    // $('#navbarNavDropdown .navbar-nav a').on('click', function() {
    //     $('#navbarNavDropdown .navbar-nav').find('li.active').removeClass('active');
    //     $(this).parent('li').addClass('active');
    // });

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

    // Initialize clipboard.js
    var clipboard = new ClipboardJS('.btn-clipboard');

    // Initialize exlink.js - used to identify and open external links in new window (replaces target="_blank" attribute)
    exLink.init({
     	protocols: ['http', 'https'],
    	filetypes: ['pdf', 'xls', 'docx', 'doc', 'ppt', 'pptx'],
    	linkWarning: false,
    	hostCompare: false,
    	noFollow: false,
    	fancyBoxIgnore: true,
    	linkCallback: null,
        fileCallback: null,
        gaTracking: false,
        gaTrackLabel: 'External Links',
        gaTrackOld: false,
    	linkWarningBody: 'You are about to leave this website and navigate to the link below. Would you like to continue?',
    	fileWarning: false,
    	fileWarningBody: 'You are about to open the file below. Do you wish to continue?',
    	dialogConfirm: '#006600',
    	dialogCancel: '#CC0000',
    	dialogConfirmText: '#fff',
    	dialogCancelText: '#fff',
    	dialogCancelButton: 'Cancel',
    	dialogConfirmButton: 'Continue',
    	modalWidth: "320px",
    	modalHeight: "240px",
    	modalDisplayBG: true,
    	externalColor: '',
        documentColor: '',
        clickedColor: '',
        newWindow: false,
        widthWindow: '500',
        heightWindow: '400'
    });
});
