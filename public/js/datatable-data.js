(function ($) {
    'use strict';
    $(document).ready(function () {
        $('#causes-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#pending-causes-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#issues-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#reported-issues-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#pending-issues-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#events-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#pending-events-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#reported-events-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#cancelled-events-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#polltypes-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#polls-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#pending-polls-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#customer-visit').DataTable({
            // "order": [[4, desc]]
            order: [[5, 'desc']]
            //DataTable Options
        });
        $('#userinquiryse-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#user-table').DataTable({
            // "ordering": asc,
            //DataTable Options
        });
        $('#pincode-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#constituency_table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#pending-registerUsers-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#Decline-registerUsers-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#Approved-registerUsers-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#locality-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#countrie-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#state-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#district-table').DataTable({
            "ordering": false
            //DataTable Options
        });
        $('#themes-table').DataTable({
            "order": [[ 0, "desc" ]]
            //DataTable Options
        });
        $('#reasons-table').DataTable({
            "order": [[ 0, "desc" ]]
            //DataTable Options
        });
       
        $('#example-height').DataTable({
            scrollY:        '50vh',
            scrollCollapse: true,
            paging:         false
        });
        $('#example-multi').DataTable({
            //DataTable Options
        });
        $('#example-multi tbody').on( 'click', 'tr', function () {
            $(this).toggleClass('bg-gray-400');
        } );
    });

})(window.jQuery);