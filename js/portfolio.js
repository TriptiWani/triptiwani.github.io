$(document).ready(function(){
  setInterval(randomCreativeWorks,4000);
  $('.laptopDisplay').on('click',function(){
    console.log('clicked');
  });

  // $('.laptopDisplay').mouseleave(function(){
  //   console.log('leave');
  //   showImage($(this),"laptop.png");
  // });
  // $('.laptopDisplay').mouseenter(function(){
  //   console.log('enter');
  //   showImage($(this),"laptop2.png");
  // });
  $('.aboutme').append($divImg).append($divAboutMeContainer);

    projectViews($('.projects_container'),1,'laptop');
    projectViews($('.projects_container'),2,'laptop');
    projectViews($('.projects_container'),3,'mobile');
    projectViews($('.projects_container'),4,'mobile');
    projectViews($('.projects_container'),5,'tablet');
    projectViews($('.projects_container'),6,'tablet');
    _(num_of_projects).times(function(n){
      displayProjectDetails(n);
    });

    $('.github_link').append('<i class="fa fa-github" aria-hidden="true"></i>');
    $('.heroku_link').append('  <i class="fa fa-laptop" aria-hidden="true"></i>');

    $('.project3  .projectCaseStudy').attr('href','https://katmlee.github.io/palate.html');
    $('.project3  .projectCaseStudy').text('Case Study - Approach to this Project');
    $('.project1  .projectCaseStudy').attr('href','http://site-55311-9163-8820.strikingly.com');
    $('.project1  .projectCaseStudy').text('Case Study - Approach to this Project');

});
