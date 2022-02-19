gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);



gsap.from('header',{
    duraion:2,
    opacity:0,
    y:-100
})


gsap.from('.bannerLeft',{
    duraion:2,
    opacity:0,
    x:-200,
    ease: "back"

})

gsap.from('.backLight',{
    duraion:4,
    opacity:0,
    scale:0,
    ease: "back"

})

gsap.from('.bannerRight img',{
    duraion:4,
    opacity:0,
    scale:0,
    delay: 0.5,
    ease: "back"

})


gsap.from('.aboutUsStag',{ scrollTrigger:{
    trigger:'.aboutUs',
    start: "top 80%",
  },
  stagger: 0.1,
  duration:0.5, 
  opacity: 0, 
  y:100,
 
});


gsap.from('.stepHeaderStagger',{ scrollTrigger:{
    trigger:'.stepSection',
    start: "top 80%",
    
  },
  stagger: 0.1,
  duration:0.5, 
  opacity: 0, 
  y:150,
 
});

gsap.from('.step1',{ scrollTrigger:{
    trigger:'.stepSection',
    start: "top 70%",
    
  },
  duration:0.5, 
  opacity: 0, 
  x:150,
 
});

    
gsap.from('.step2',{ scrollTrigger:{
    trigger:'.step1',
    start: "top 70%",
    
  },
    duration:0.5, 
    opacity: 0, 
    x:-150, 
   
});

    
gsap.from('.step3',{ scrollTrigger:{
    trigger:'.step2',
    start: "top 70%",
    
  },
    duration:0.5, 
    opacity: 0, 
    x:150, 
 
});

    
gsap.from('.step4',{ scrollTrigger:{
    trigger:'.step3',
    start: "top 70%",
    
  },
    duration:0.5, 
    opacity: 0, 
    x:-150,
   
    });

    gsap.from('.eventsTitleStag',{ scrollTrigger:{
        trigger:'.events',
        start: "top 80%",
        
      },
      stagger: 0.1,
      duration:0.5, 
      opacity: 0, 
      y:150,
     
    });

    gsap.from('.searchBar',{ scrollTrigger:{
      trigger:'.searchBar',
      start: "top 100%",
      
    },
 
    duration:0.5, 
    opacity:0,
    y:150
   
  });

    gsap.from('.eventBox',{ scrollTrigger:{
        trigger:'.eventsContainer',
        start: "top 80%",
        
      },
      stagger: 0.1,
      duration:0.5, 
      opacity: 0, 
      y:150
     
    });
    gsap.from('.demoContainer',{ scrollTrigger:{
      trigger:'.demo',
      start: "top 70%",
      
    },
 
    duration:0.5, 
    opacity:0,
    y:150
   
  });



    gsap.from('.last',{ scrollTrigger:{
      trigger:'.last',
      start: "top 100%",
      
    },
 
    duration:0.5, 
   
    y:150
   
  });

