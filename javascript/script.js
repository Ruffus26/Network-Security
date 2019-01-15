document.body.onload = function() {
	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if (!preloader.classList.contains('load_done')) {
			preloader.classList.add('load_done');
		}
	}, 1000);
}

function toggle_visibility(id1, id2) {
       var e = document.getElementById(id1);
       var i = document.getElementById(id2);
       if(e.style.display == 'block') {
          e.style.display = 'none';
          i.classList.remove('icon-down-dir');
      	  i.classList.add('icon-left-dir');
       }
       else {
          e.style.display = 'block';
          i.classList.remove('icon-left-dir');
      	  i.classList.add('icon-down-dir');
      	  i.style.background = red;
       }
    }
