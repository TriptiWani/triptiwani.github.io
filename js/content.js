var num_of_projects = 6;
//creative works
var creativeWorks = [
  {'img':'images/lantern.jpg',
    'description1' : 'Lantern is made out of waste-materials like empty gift boxes, used A4 sheets, coffee stirrer',
    'description2': 'etc. The warli painting on the lantern gives countryside touch.'},
  {'img':'images/diya1.jpg',
    'description1' : 'This is Diya decoration for Diwali -',
    'description2': 'Indian festival of LIGHTS'},
  {'img':'images/diya2.jpg',
    'description1' : 'This Diya, specially decorated in a peacock style',
    'description2': 'has wings to fly'},
  {'img':'images/diya3.jpg',
    'description1' : 'This Diya was decorated in an hour',
    'description2': 'as a part of a contest in  my previous organisation'},
  {'img':'images/card1.jpg',
    'description1' : 'Chip and Dale ',
  'description2' : '-The Friendship Bond'},
  {'img':'images/card2.jpg',
    'description1' : 'This 3D card is made with a hope that',
    'description2': 'our friendship remains forever'},
  {'img':'images/pot_2.jpg',
    'description1' : 'Art for a Cause 2012 - This pot was painted and decorated on aquatic theme.',
    'description2': 'Auctioned and sold in a fund raising event for $900 '},
  {'img':'images/pot_1.jpg',
    'description1' : 'Art for a Cause 2013 - This pot was painted and decorated on peacock theme.',
    'description2': 'Auctioned and sold in a fund raising event for $1000 '}
];

//Interests
  var randomCreativeWorks = function(){
    var work =   _.sample(creativeWorks);
    $('.workImage').remove();
    $workImage = $('<img/>');
    $workImage.addClass('workImage');
    $workImage.attr('src',work['img']);
    $('.work section').append($workImage);
    // $('.workdetails').text(work['description']);
    returnMessage(work['description1'],"#detail1");
    returnMessage(work['description2'],"#detail2");
    // setInterval(returnMessage(work['description']),3000);
  };

//Project details
var projectDetails = [
  {'projectTitle':'TicTacToe',
    'projectLinkCode':'https://github.com/TriptiWani/project0',
    'projectLinkDemo':'https://triptiwani.github.io/project0/tictactoe.html',
    'projectDescription':'TicTacToe with a mood flavor- either choose your avtars based on your mood or the default colors will be selected. Two modes: - Player(Human) v/s Computer , and Player 1 (Human) v/s Player 2 (Human)',
    'projectStack':'HTML,CSS,Javascript,jQuery',
    'projectCredentials':'',
    'projectImage1':'ttt1.png',
    'projectImage2':'ttt2.png'
  },
  {'projectTitle':'Inventory Management',
    'projectLinkCode':'https://github.com/TriptiWani/project1',
    'projectLinkDemo':'https://store-inventory-management.herokuapp.com',
    'projectDescription':'This is an e-commerce website to procure, track and deal in Mobile handsets and accessories for wholesalers and retailers across multiple locations with the built-in payment feature',
    'projectStack':'HTML,CSS,Javascript,jQuery,Ruby,Rails, Cloudinary, SendGrid, Heroku, Stripe,Money-rails',
    'projectCredentials':'tripti.895@gmail.com/chicken',
    'projectImage1':'IM1.png',
    'projectImage2':'IM2.png'},
  {'projectTitle':'Palate',
    'projectLinkCode':'https://github.com/pkganti/project2',
    'projectLinkDemo':'https://wdi15project2.herokuapp.com',
    'projectDescription':'A mobile-first application for creating, bookmarking and sharing recipes- either via self or any existing recipe websites via chrome extension. This application fully supports 4 websites - Taste.com,BBCfood, Allrecipes,Foodnetwork and partially supports all the websites.',
    'projectStack':'Ruby, Rails 4.2.6, jQuery, CSS, HTML 5, Javascript, Nokogiri, Chrome dev tools extension for bookmarking, Heroku, Cloudinary, Disqus, RESTful APIs, Swipe Library',
    'projectCredentials':'tripti.895@gmail.com/chicken',
    'projectImage1':'Palate1.png',
    'projectImage2':'Palate2.png'},
  {'projectTitle':'Talk2Me',
    'projectLinkCode':'https://github.com/TriptiWani/Talk2Me',
    'projectLinkDemo':'https://talk2meapp.herokuapp.com/',
    'projectDescription':'User friendly web-based chat application where in a user can share text, photos, gifs and location with the other contacts in the group.This application also comes with a Mobile-first approach.',
    'projectStack':'HTML, JavaScript, CSS, jQuery, Ruby 2.2.4, Rails 5, Cloudinary, BootStrap, Heroku, Gifshot.js, GoogleMaps,jQueryAutoComplete.js',
    'projectCredentials':'Tripti/chicken',
    'projectImage1':'Talk2Me1.png',
    'projectImage2':'Talk2Me2.png'},
  {'projectTitle':'HangMan',
    'projectLinkCode':'https://github.com/TriptiWani/HangMan',
    'projectLinkDemo':'https://triptiwani.github.io/HangMan/index.html',
    'projectDescription':'This is >-O !!HANGMAN!! O-< . You have 8 lives to guess the word, else you loose. It keeps a track of all the letters gueesed, so that you dont guess the same letter again.' ,
    'projectStack':'HTML,CSS,Javascript,jQuery,Underscore.js',
    'projectCredentials':'',
    'projectImage1':'HangMan1.png',
    'projectImage2':'HangMan2.png'},
  {'projectTitle':'MTA- The Travel Planner',
    'projectLinkCode':'https://github.com/TriptiWani/MTA',
    'projectLinkDemo':'https://triptiwani.github.io/MTA/MTA3/index.html',
    'projectDescription':'This models a simple subway system.It takes the line and stop that a user is getting on at and  getting off at and prints the journey and the total number of stops for the trip. Enjoy this in all the flavors of code - Javascript, Ruby, Underscore',
    'projectStack':'HTML,CSS,Javascript,jQuery,Ruby,Underscore.js',
    'projectCredentials':'',
    'projectImage1':'MTA1.png',
    'projectImage2':'MTA2.png'},
];

//skillsImages
var skillsImages =
  {'image':['ajax.png','backbone.svg','bootstrap.svg','css3.svg','heroku.svg','html5.svg','jquery_logo.svg','js.svg','postgresql.svg','ror.svg','ruby.svg','underscore.png','rspec.png','cucumber.png'],
    'skill':['AJAX','BACKBONE','BOOTSTRAP','CSS3','HEROKU','HTML55','jQuery','JavaScript','POSTGRESQL','RubyOnRails','RUBY','UNDERSCORE','RSPEC','CUCUMBER'],
    'callout':['AJAX','BACKBONE','BOOTSTRAP','CSS3','HEROKU','HTML55','jQuery','JavaScript','POSTGRESQL','RubyOnRails','RUBY','UNDERSCORE'],
  'learning':['react.svg','nodejs.svg']};

  var projViewLeft = function(num){
    $divLeft = $('<div></div>');
    $divLeft.addClass('projectLeft back');

    $divDetails = $('<div></div>');
    $divDetails.addClass('projectDetails');
    $pTitle = $('<p></p>');
    $pTitle.addClass('projectTitle');
    $pDes = $('<p></p>');
    $pDes.addClass('projectDescription');

    $divDetails.append($pTitle).append($pDes);

    $divStack = $('<div></div>');
    $divStack.addClass('projectStack');
    $p = $('<p></p>');
    $divStack.append($p);

    $divControls = $('<div></div>');
    $divControls.addClass('projectControls');
    $aCode = $('<a />');
    $aCode.addClass('github_link');
    $aCode.attr('target','_blank');
    $aDemo = $('<a />');
    $aDemo.addClass('heroku_link');
    $aDemo.attr('target','_blank');
    $divControls.append($aCode).append($aDemo);

    $divCredentials = $('<div></div>');
    $pCredentials = $('<p></p>');
    $pCredentials.addClass('projectCredentials');
    $divCredentials.append($pCredentials);

    $divLeft.append($divDetails).append($divStack).append($divControls).append($divCredentials);
    // console.log($aCode,$aDemo);
    return $divLeft;

  };
  var projViewRight = function(typeDisplay){
    $divRight = $('<div></div>');
    $divRight.addClass('projectRight projectUI front');
    $imgProj = $('<img/>');
    $imgProj.addClass(typeDisplay+'Display');

    $divRight.append($imgProj);
    // console.log($divRight);
    return $divRight;
  };

  var projectViews = function($el,num,typeDisplay){
    $divNum = $('<div></div>');
    $divNum.addClass('project'+num);
    $divNum.addClass('flip-container');
    $divNum.attr('ontouchstart',"this.classList.toggle('hover')");
    console.log(projectDetails[num-1]['projectTitle']);
    $divTitle = $('<div></div>');
    $divTitle.addClass('projectTitle');
    $divTitle.html(projectDetails[num-1]['projectTitle']);
    $divNum.append($divTitle);
    $divFlipper = $('<div></div>');
    $divFlipper.addClass('flipper');

    $left = projViewLeft(num);
    $right = projViewRight(typeDisplay);
    $divFlipper.append($right).append($left);

    $divNum.append($divFlipper);
    $el.append($divNum);
  };
  var displayProjectDetails = function(num){
    var details = projectDetails[num];

    // $currentProjectTitle = $('.project'+(num+1)+' .projectTitle');
    // $currentProjectTitle.text(details['projectTitle']);

    $currentProjectLinkCode = $('.project'+(num+1)+' .projectControls :first-child');
    $currentProjectLinkCode.attr('href',details['projectLinkCode']);
    // $currentProjectLinkCode.html('Code');

    $currentProjectLinkDemo = $('.project'+(num+1)+' .projectControls :last-child');
    $currentProjectLinkDemo.attr('href',details['projectLinkDemo']);
    // $currentProjectLinkDemo.html('Demo');

    $currentProjectDescription = $('.project'+(num+1)+' .projectDescription');
    $currentProjectDescription.text(details['projectDescription']);
    // $ulStack = $('<ul></ul>');
    // $ulStack.addClass('projStack')
    $currentProjectStack = $('.project'+(num+1)+' .projectStack');
    // var stack = details['projectStack'].split(',');
    // _(stack).each(function(n){
    //   $liStack = $('<li></li>');
    //   $liStack.html(n);
    //   $ulStack.append($liStack);
    // });
    // console.log($ulStack);
    // $currentProjectStack.append($ulStack);
    $currentProjectStack.text(details['projectStack']);
    $currentProjectCredentials = $('.project'+(num+1)+' .projectCredentials');
    $currentProjectCredentials.text(details['projectCredentials']);

    $currentProjectImage = $('.project'+(num+1)+' img');
    $currentProjectImage.attr('src','images/'+details['projectImage1']);

  };
  //aboutme section
  var $divAboutMeContainer = $('<div></div>');
  $divAboutMeContainer.addClass('aboutme_container');
  var $divAboutMeSection = $('<div></div>');
  $divAboutMeSection.addClass('aboutme_section');
  $divAboutMeContainer.append($divAboutMeSection);
  var aboutmeImageSrc = "images/Me.png";
  var $divImg = $('<div></div>');
  $divImg.addClass('imageBox');
  var $myImage = $('<img/>');
  $myImage.attr('src',aboutmeImageSrc);
  $myImage.addClass('aboutmeImage roundaboutmeImage');

  $divImg.append($myImage);

  var aboutmeText1 = "Hi There! I am Tripti - a Sydney based Full-Stack Web Developer looking for full-time work";
  $pOne = $('<p></p>');
  $pOne.html(aboutmeText1);

  var aboutmeText2 = "Focused and self-motivated professional, with 7 years of experience in Information Technology, I love to solve problems with code while applying industry best practices in a collaborative environment. I am a happy-go-lucky person who likes coding day-in day-out, to the point where I even code in my dreams!  I am passionate about creating interactive, responsive and user-friendly websites and applications";
  $pTwo = $('<p></p>');
  $pTwo.html(aboutmeText2);

  var aboutmeText3 = "My eagerness to keep learning something new helped me enter this 'World of Websites' - via Web Development Immersive course at General Assembly. Looking forward to an aspiring position in this world!";



  var aboutmeText5 = "Apart from this, I have a keen interest in Painting/Crafting. Have a look ";

  var VCSkills = "Version Control: GIT,CLEARCASE,VSS";
  var SchSkills = "Scheduler: Control-M";

  $pVCSkills = $('<p></p>');
  $pVCSkills.html(VCSkills);

  $pSchSkills = $('<p></p>');
  $pSchSkills.html(SchSkills);

  var $aCreative = $('<a/>');
  $aCreative.attr('href','#interests');
  $aCreative.html('here');
  $pFive = $('<p></p>');
  $pFive.html(aboutmeText5);
  $pFive.append($aCreative);
  $pThree = $('<p></p>');
  $pThree.html(aboutmeText3);

  var displaySkills = function(skill){
    $imgSkill = $('<img />');
    $imgSkill.attr('src','images/'+skill);
    $imgSkill.addClass('imgSkills');

    if(skill === 'underscore.png'){
      $imgSkill.addClass('imgSkills underscoreSkill');
    } else{
      $imgSkill.addClass('imgSkills');
    }

    return $imgSkill;
  };
  var aboutmeSkills = "My STACK: ";

  $pSkills = $('<p></p>');
  $divSkills = $('<div><div>');

  $pSkills.html(aboutmeSkills);
  _(skillsImages['image']).each(function(i){
    $divSkills.append(displaySkills(i));
  });
  $pSkills.append($divSkills);


  var aboutmeText4 = "Currently Learning: ";
  $divExtras = $('<div></div>');
  $divExtras.addClass('stackExtras');
  $pFour = $('<p></p>');
  $pFour.html(aboutmeText4);

  $divLearningSkills = $('<div></div>');
  _(skillsImages['learning']).each(function(i){
    $divLearningSkills.append(displaySkills(i));
  });
  $pFour.append($divLearningSkills);
  $divExtras.append($pSchSkills).append($pVCSkills).append($pFour);
  $divAboutMeSection.append($pOne).append($pTwo).append($pThree).append($pFive).append($pSkills).append($divExtras);
  // $divAboutMeSection.append($pOne).append($pTwo).append($pThree).append($pFive).append($pSkills).append($pSchSkills).append($pVCSkills).append($pFour);
  $divAboutMeContainer.append($divAboutMeSection);


  var returnMessage = function(message,id) {
    $(id).typed({
        strings: [message],
        showCursor: false,
        typeSpeed: 1
    });
  };
