 var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


 
     // GENERAL SETTING
window.sr = ScrollReveal({ reset: true });

// Custom Settings
sr.reveal('.foo-1', { duration: 200 });
sr.reveal('.foo-10', { duration: 3000 });
sr.reveal('.foo-11', { duration: 3500 });
sr.reveal('.foo-12', { duration: 4000 });
sr.reveal('.foo-13', { duration: 4500 });
sr.reveal('.foo-14', { duration: 5000 });

sr.reveal('.foo-2', { 
  origin: 'right', 
  duration: 2000 
});


sr.reveal('.foo-16', { 
  origin: 'top',
  duration: 6000 
});




sr.reveal('.foo-3', { 
  rotate: { x: 100, y: 100, z: 0 },
  duration: 1000
});

sr.reveal('.foo-4', { 
    rotate: { x: 100, y: 100, z: 0 },
  viewFactor: 0.5
});

sr.reveal('.foo-5', { 
    rotate: { x: 150, y: 150, z: 0 },
  duration: 2000 
});
sr.reveal('.foo-6', { 
    rotate: { y: 100, x: 100,  z: 0 },
  duration: 200 
});