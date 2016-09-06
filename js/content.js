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
  'description2' : '-THE Friendship Bond'},
  {'img':'images/card2.jpg',
    'description1' : 'This 3-d card is made with a hope that',
    'description2': 'our friendship remains forever'},
  {'img':'images/pot_2.jpg',
    'description1' : 'Art for a Cause 2012 - This pot was painted and decorated on aquatic theme.',
    'description2': 'Auctioned and sold in a fund raising event for $1000 '},
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
    'projectLinkDemo':'https://triptiwani.github.io/Games/TicTacToe/tictactoe.html',
    'projectDescription':'This is the start of my journey in this world. TicTacToe with a mood flavor- either choose your avtars based on your mood or the default colors will be selected. Two modes: - Player(Human) v/s Computer , and Player 1 (Human) v/s Player 2 (Human)',
    'projectStack':'HTML,CSS,Javascript,jQuery',
    'projectCredentials':'',
    'projectImage1':'laptop.png',
    'projectImage2':'laptop2.png'
  },
  {'projectTitle':'Inventory Management',
    'projectLinkCode':'https://github.com/TriptiWani/project1',
    'projectLinkDemo':'https://store-inventory-management.herokuapp.com',
    'projectDescription':'This is an e-commerce website to procure, track and deal in Mobile handsets and accessories for wholesalers and retailers across multiple locations with the built-in payment feature. Users can login via email, facebook, twitter',
    'projectStack':'HTML,CSS,Javascript,jQuery,Ruby,Rails, Cloudinary, SendGrid, Heroku, Stripe,Money-rails',
    'projectCredentials':'tripti.895@gmail.com/chicken',
    'projectImage1':'laptop.png',
    'projectImage2':'laptop2.png'},
  {'projectTitle':'Palate',
    'projectLinkCode':'https://github.com/pkganti/project2',
    'projectLinkDemo':'https://wdi15project2.herokuapp.com',
    'projectDescription':'This is a mobile-first application for creating, bookmarking and sharing recipes- either via self or any existing recipe websites via chrome extension. This application fully supports 4 websites - Taste.com,BBCfood, Allrecipes,Foodnetwork and partially supports all the websites.',
    'projectStack':'Ruby, Rails 4.2.6, jQuery, CSS, HTML 5, Javascript, Nokogiri, Chrome dev tools extension for bookmarking, Heroku, Cloudinary, Disqus, bcrypt, RESTful APIs',
    'projectCredentials':'tripti.895@gmail.com/chicken',
    'projectImage1':'mobile.png',
    'projectImage2':'mobile2.png'},
  {'projectTitle':'Talk2Me',
    'projectLinkCode':'https://github.com/TriptiWani/Talk2Me',
    'projectLinkDemo':'https://talk2meapp.herokuapp.com/',
    'projectDescription':'User friendly web-based chat application where in a user can share text, photos, gifs and location with the other contacts in the group.This application also comes with a Mobile-first approach.',
    'projectStack':'HTML, JavaScript, CSS, jQuery, Ruby 2.2.4, Rails 5, Cloudinary, BootStrap, bcrypt,httparty, Heroku, Gifshot.js, GoogleMaps.js,jQueryAutoComplete.js',
    'projectCredentials':'Tripti/chicken',
    'projectImage1':'mobile.png',
    'projectImage2':'mobile2.png'},
  {'projectTitle':'HangMan',
    'projectLinkCode':'https://github.com/TriptiWani/WDI15_Homework/tree/master/tripti_agarwal/week_10/Thursday_hangman',
    'projectLinkDemo':'check the link-deploy to gh-pages',
    'projectDescription':'This is >-O !!HANGMAN!! O-< . You have 8 lives to guess the word, else you loose. It keeps a track of all the letters gueesed, so that you dont guess the same letter again.' ,
    'projectStack':'HTML,CSS,Javascript,jQuery,Underscore.js',
    'projectCredentials':'',
    'projectImage1':'Tablet.png',
    'projectImage2':'Tablet1.png'},
  {'projectTitle':'MTA- The Travel Planner',
    'projectLinkCode':'https://github.com/TriptiWani/WDI15_Homework/tree/master/tripti_agarwal/week_10/Thursday_hangman',
    'projectLinkDemo':'check the link-deploy to gh-pages',
    'projectDescription':'This models a simple subway system.It takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip. You can enjoy this in all the flavors of code - Javascript, Ruby, Underscore',
    'projectStack':'HTML,CSS,Javascript,jQuery,Ruby,Underscore.js',
    'projectCredentials':'',
    'projectImage1':'Tablet.png',
    'projectImage2':'Tablet1.png'},
];

//skillsImages
var skillsImages =
  {'image':['ajax.png','backbone.svg','bootstrap.svg','css3.svg','heroku.svg','html5.svg','jquery_logo.svg','js.svg','postgresql.svg','ror.svg','ruby.svg','underscore.png'],
    'skill':['AJAX','BACKBONE','BOOTSTRAP','CSS3','HEROKU','HTML55','jQuery','JavaScript','POSTGRESQL','RubyOnRails','RUBY','UNDERSCORE'],
    'callout':['AJAX','BACKBONE','BOOTSTRAP','CSS3','HEROKU','HTML55','jQuery','JavaScript','POSTGRESQL','RubyOnRails','RUBY','UNDERSCORE'],
  'learning':['react.svg','nodejs.svg']};

  var projViewLeft = function(num){
    $divLeft = $('<div></div>');
    $divLeft.addClass('projectLeft');

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
    $aCode.attr('target','_blank');
    $aCode.val('Code');
    $aDemo = $('<a />');
    $aDemo.val('Demo');
    $aDemo.attr('target','_blank');
    $divControls.append($aCode).append($aDemo);

    $divCredentials = $('<div></div>');
    $divCredentials.addClass('projectCredentials');

    $divLeft.append($divDetails).append($divStack).append($divControls).append($divCredentials);
    // console.log($divLeft);
    return $divLeft;

  };
  var projViewRight = function(typeDisplay){
    $divRight = $('<div></div>');
    $divRight.addClass('projectRight projectUI');
    $imgProj = $('<img/>');
    $imgProj.addClass(typeDisplay+'Display');

    $divRight.append($imgProj);
    // console.log($divRight);
    return $divRight;
  };

  var projectViews = function($el,num,typeDisplay){
    $divNum = $('<div></div>');
    $divNum.addClass('project'+num);

    $left = projViewLeft(num);
    $right = projViewRight(typeDisplay);

    if ((num === 1) || (num === 2)){
      $divNum.append($left).append($right);
      $el.append($divNum);
    }else if ((num === 3) || (num === 4)){
      $divNum.append($right).append($left);
      $el.append($divNum);
    }else if ((num === 5) || (num === 6)){
      $divNum.append($left).append($right);
      $el.append($divNum);
    }
  };
  var displayProjectDetails = function(num){
    var details = projectDetails[num];
    // console.log(num,$('.project'+(num+1)+' .projectTitle').html(),details['projectTitle']);
    // debugger;

    $currentProjectTitle = $('.project'+(num+1)+' .projectTitle');
    // console.log('title', $('.project'+(num+1)+' .projectTitle').text());
    $currentProjectTitle.text(details['projectTitle']);

    $currentProjectLinkCode = $('.project'+(num+1)+' .projectControls :first-child');
    $currentProjectLinkCode.attr('href',details['projectLinkCode']);
    $currentProjectLinkCode.html('Code');

    $currentProjectLinkDemo = $('.project'+(num+1)+' .projectControls :last-child');
    $currentProjectLinkDemo.attr('href',details['projectLinkDemo']);
    $currentProjectLinkDemo.html('Demo');

    $currentProjectDescription = $('.project'+(num+1)+' .projectDescription');
    $currentProjectDescription.text(details['projectDescription']);

    $currentProjectStack = $('.project'+(num+1)+' .projectStack');
    $currentProjectStack.text(details['projectStack']);

    $currentProjectCredentials = $('.project'+(num+1)+' .projectCredentials');
    $currentProjectCredentials.text(details['projectCredentials']);

    $currentProjectImage = $('.project'+(num+1)+' img');
    $currentProjectImage.attr('src','images/'+details['projectImage1']);

  };
  //aboutme section
  var $divAboutMeContainer = $('<div></div>');
  $divAboutMeContainer.addClass('aboutme_container');
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

  var aboutmeText2 = "I am a happy-go-crazy person who likes coding day-in day-out, the weirdest being coding-in-dreams. I am passionate about creating interactive, responsive and user-friendly websites and applications";
  $pTwo = $('<p></p>');
  $pTwo.html(aboutmeText2);

  var aboutmeText3 = "My eagerness to keep learning something new helped me enter this 'World of Websites' - via Web Development Immersive course at General Assembly. Looking forward to an aspiring position in this world!";



  var aboutmeText5 = "Apart from this, I have a keen interest in Painting/Crafting. Have a look ";

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

  $pFour = $('<p></p>');
  $pFour.html(aboutmeText4);

  $divLearningSkills = $('<div></div>');
  _(skillsImages['learning']).each(function(i){
    $divLearningSkills.append(displaySkills(i));
  });
  $pFour.append($divLearningSkills);
  $divAboutMeContainer.append($pOne).append($pTwo).append($pThree).append($pFive).append($pSkills).append($pFour);

  var showText = function($el){
    $('.laptopDisplay').remove();
    $div = $('<div></div>');
    $div.text('It starts hereeeeee...Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    $el.append($div);
    $div.addClass('textDisplay');
  } ;
  var showImage = function($el,imageName){
    // $('.textDisplay').remove();
    // $img = $('.laptopDisplay');
    // console.log($img);
    $el.attr('src',"images/"+imageName);
    // $img.addClass('laptopDisplay');
    // $el.append($img);
  };
  var num_of_projects = 6;
  var returnMessage = function(message,id) {
    $(id).typed({
        strings: [message],
        showCursor: false,
        typeSpeed: 1
    });
  };
