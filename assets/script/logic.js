

// Materialize navbar 
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge: 'right'});
  });

  $(document).ready(function(){
    // $('.sidenav').sidenav();
    $('.sidenav').sidenav({ edge: 'right' });


  });

