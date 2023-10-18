import './App.css';

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <p>
          Tumhari agar chaggi h aur tumhari placement nai lag rhi h
          <br />
          then you are at the right place.
        </p>

      </header>

      <section className="App-body">
        <div dangerouslySetInnerHTML={{
          __html: `<!-- Header-->
          <!DOCTYPE html>
          <html dir="ltr" lang="en" style="" class="js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths no-mobile nivo-lightbox-notouch"><head>
                  <link rel="preload" href="https://home.iitd.ac.in/images/preloaders/9.png" as="image">
          <!-- Meta Tags -->
          <meta http-equiv="Cache-Control" content="no-cache, must-revalidate">
          <meta http-equiv="Pragma" content="no-cache">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width,initial-scale=1.0">
          <meta http-equiv="content-type" content="text/html; charset=UTF-8">
          <meta name="description" content="IIT DELHI">
          <meta name="keywords" content="IIT DELHI">
          <meta name="author" content="IIT DELHI">
          <!-- Page Title -->
          <title>
            Home Page : IIT Delhi</title>
          <!-- Favicon and Touch Icons -->
          <link href="https://home.iitd.ac.in/images/favicon.png" rel="shortcut icon" type="image/png">
          <link href="https://home.iitd.ac.in/images/apple-touch-icon.png" rel="apple-touch-icon">
          <link href="https://home.iitd.ac.in/images/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72">
          <link href="https://home.iitd.ac.in/images/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114">
          <link href="https://home.iitd.ac.in/images/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144">
          
          <!-- Stylesheet -->
          <link href="Home%20Page%20IIT%20Delhi_files/bootstrap.min.css" rel="stylesheet" type="text/css">
          <link href="Home%20Page%20IIT%20Delhi_files/jquery-ui.min.css" rel="stylesheet" type="text/css">
          <link href="Home%20Page%20IIT%20Delhi_files/animate.css" rel="stylesheet" type="text/css">
          <link href="Home%20Page%20IIT%20Delhi_files/css-plugin-collections.css" rel="stylesheet">
          <!-- CSS | menuzord megamenu skins -->
          <link href="Home%20Page%20IIT%20Delhi_files/menuzord-megamenu.css" rel="stylesheet">
          <link id="menuzord-menu-skins" href="Home%20Page%20IIT%20Delhi_files/menuzord-rounded-boxed.css" rel="stylesheet">
          <!-- CSS | Main style file -->
          <link href="Home%20Page%20IIT%20Delhi_files/style-main.css" rel="stylesheet" type="text/css">
          <!-- CSS | Preloader Styles -->
          <link href="Home%20Page%20IIT%20Delhi_files/preloader.css" rel="stylesheet" type="text/css">
          <!-- CSS | Custom Margin Padding Collection -->
          <link href="Home%20Page%20IIT%20Delhi_files/custom-bootstrap-margin-padding.css" rel="stylesheet" type="text/css">
          
          <!-- Revolution Slider 5.x CSS settings -->
          <link href="Home%20Page%20IIT%20Delhi_files/settings.css" rel="stylesheet" type="text/css">
          <link href="Home%20Page%20IIT%20Delhi_files/layers.css" rel="stylesheet" type="text/css">
          <link href="Home%20Page%20IIT%20Delhi_files/navigation.css" rel="stylesheet" type="text/css">
          
          <!-- CSS | Style css. This is the file where you can place your own custom css code. Just uncomment it and use it. -->
          
          <!-- Dark Mode JS-->
          <script> 
              function darkMode(){
                
                var artheme = document.getElementById('darkmode').innerHTML;
                
                if (artheme == '<i class="fa fa-bookmark-o"></i> Dark Mode'){
                  localStorage.setItem('darkTheme', 'true')
                  setDarkTheme();  
                }else{
                  localStorage.setItem('darkTheme', 'false')
                  document.getElementById('darkmode').innerHTML = '<i class="fa fa-bookmark-o"></i> Dark Mode';
                  document.getElementById('darkmode1').innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i> Switch to Dark Mode';
                   $('link[href*="css/colors/ar-dark.css"]').attr("disabled", "true");
                }
              
                
              }
              
              function setDarkTheme(){
                
                // Create new link Element 
                var link = document.createElement('link');  
              
                // set the attributes for link element 
                link.rel = 'stylesheet';  
                
                link.type = 'text/css';
                
                document.getElementById('darkmode').innerHTML = '<i class="fa fa-bookmark-o"></i> Normal Mode';
                document.getElementById('darkmode1').innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i> Switch to Normal Mode';
                link.href = 'css/colors/ar-dark.css';
                document.getElementsByTagName('HEAD')[0].appendChild(link);
              }
              
              function checkDarkMode(){
                
                let darkDefault = localStorage.getItem('darkTheme') 
                if(darkDefault === 'true') {
                  setDarkTheme()
                } else {
                  
                }
                
              }
              /*setTimeout(()=>{
                console.log("Dark Mode")
                checkDarkMode();
                }, 1000)*/
          </script>
          <!--dark mode css end -->
          <link href="Home%20Page%20IIT%20Delhi_files/iitd-style.css" rel="stylesheet" type="text/css">
          <link href="Home%20Page%20IIT%20Delhi_files/ps-iitd-style.css" rel="stylesheet" type="text/css">
          <link href="Home%20Page%20IIT%20Delhi_files/kk-iitd-style.css" rel="stylesheet" type="text/css">
          <link href="Home%20Page%20IIT%20Delhi_files/ar-iitd-style.css" rel="stylesheet" type="text/css">
          <!-- CSS | Theme Color-->
          <link href="Home%20Page%20IIT%20Delhi_files/custom-color.css" rel="stylesheet" type="text/css">
          <!--<link href="css/colors/custom-color-bl.css" rel="stylesheet" type="text/css"> -->
          
          <!-- CSS | Responsive media queries -->
          <link href="Home%20Page%20IIT%20Delhi_files/responsive.css" rel="stylesheet" type="text/css">
          <script type="text/javascript">
            window.mobileCheck = function() {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            
            return check;
            
            };
          </script>	
          
          <script type="text/javascript">
            if (!localStorage.firstVisit && (window.mobileCheck() == false)) {
              var link = document.createElement("link");
              link.setAttribute("href", "css/driver.css");
              link.setAttribute("rel", "stylesheet");
              link.setAttribute("type", "text/css");
              document.head.appendChild(link);
            }
          </script><link href="Home%20Page%20IIT%20Delhi_files/driver.css" rel="stylesheet" type="text/css">
          
          <!-- external javascripts -->
          <script src="Home%20Page%20IIT%20Delhi_files/jquery-2.2.4.min.js"></script>
          <script src="Home%20Page%20IIT%20Delhi_files/jquery-ui.min.js"></script>
          <script src="Home%20Page%20IIT%20Delhi_files/bootstrap.min.js"></script>
          <!-- JS | jquery plugin collection for this theme -->
          <script src="Home%20Page%20IIT%20Delhi_files/jquery-plugin-collection.js"></script>
          <!-- Revolution Slider 5.x SCRIPTS -->
          <script src="Home%20Page%20IIT%20Delhi_files/jquery.themepunch.tools.min.js"></script>
                <script src="Home%20Page%20IIT%20Delhi_files/jquery.themepunch.revolution.min.js"></script><!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
          <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
          <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
          <![endif]-->
          <style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style></head>
          <body id="iitd-scroll" class="has-fixed-footer">
          <div id="wrapper" class="clearfix">
          
            <script type="text/javascript">
          
            $( "#light-version" ).click(function() {
              cname = 'lightVersion';
              cvalue = '1';
              document.cookie = cname + "=" + cvalue + ";path=/";
              alert('Switching to Light version...\nYou can switch versions (Normal or Light) anytime from the link present on the footer.');
              location.reload();
            });
            
            if (!localStorage.firstVisit && (window.mobileCheck() == false)) {
              $("#preloader").after('<div id="preloader2"><img class="tour-bgpic" src="images/tour-bgpic.png"><div id="spinner"><div class="loader"><h1 class="preloader-cap text-left">Welcome to the new <span class="typed-text-carousel" data-speed="90" data-back_delay="500" data-loop="true"><span>website!</span><span>approach!</span><span>world of opportunities!</span></span></h1><h2 class="preloader-cap text-left">Take a quick tour to explore more...</h2><div id="start-tour" class="btn btn-default btn-sm btn-preloader mt-30">Let&apos;s Go!</div><div id="skip-tour" class="btn btn-default btn-sm btn-preloader mt-30 ml-30">Skip Tour</div></div></div></div>');
            }
            else {
              localStorage.firstVisit = "1";
            }
          </script>
          
          
          <!-- Header -->
          
          <!-- Header Menu-->
          <a href="https://home.iitd.ac.in/kksearch" class="ar-search1"><i class="fa fa-search ar-search-mobile" aria-hidden="true"></i></a>
          <header id="header" class="header header-floating" role="banner">
            <div class="header-top bg-theme-colored2 sm-text-center">
              <div class="container">
                <div class="row">
                  <div class="col-md-7 top-section">
                    <div class="widget text-white">
                      <ul class="list-inline xs-text-center text-white">
                        <li class="m-0 pl-5 pr-5"> <a href="https://home.iitd.ac.in/jobs-iitd/index.php" target="_blank" class="text-white"><i class="fa fa-user text-white"></i> Jobs </a> </li>
                        <li class="m-0 pl-5 pr-5"> <a href="https://home.iitd.ac.in/academic-calendar.php" class="text-white"><i class="fa fa-calendar text-white mr-5"></i> Calendar </a> </li>
                        <li class="m-0 pl-5 pr-5"> <a href="https://home.iitd.ac.in/tenders.php" class="text-white"><i class="fa fa-rupee text-white mr-5"></i> Tenders</a> </li>
                        <li class="m-0 pl-5 pr-5"> <a href="https://home.iitd.ac.in/icollect/epay/index.php" class="text-white" target="_blank"><i class="fa fa-credit-card text-white mr-5"></i> Payment Gateway</a> </li>
                        <li class="m-0 pl-5 pr-5"><a href="https://ocs.iitd.ac.in/ocs/" title="" target="_blank"><i class="fa fa-suitcase"></i> Recruiters/Careers</a></li>
                        <li class="m-0 pl-5 pr-5"><a href="https://home.iitd.ac.in/compliance.php#iges" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="ANTI-SEXUAL HARASSMENT POLICY"><i class="fa fa-hand-paper-o" aria-hidden="true"></i> IGES</a></li>
                        <li class="m-0 pl-5 pr-5"><a href="https://unlimiitd.iitd.ac.in/" title="" target="_blank"><i class="fa fa-gift fa-lg"></i> <strong>GIVE</strong></a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-2 pr-0 social-links">
                    <div class="widget">
                      <ul class="styled-icons icon-sm pull-right flip sm-pull-none sm-text-center">
                        <li><a href="https://twitter.com/iitdelhi" target="_blank" aria-label="Twitter"><i class="fa fa-twitter text-white"></i></a></li>
                        <li><a href="https://linkedin.com/school/iitdelhi/" target="_blank" aria-label="Linkedin"><i class="fa fa-linkedin text-white"></i></a></li>
                        <li><a href="https://www.facebook.com/IITDelhi/" target="_blank" aria-label="Facebook"><i class="fa fa-facebook text-white"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-3 assist">
                    <div class="widget">
                      <ul class="list-inline sm-pull-none sm-text-center text-right text-white mb-sm-20">
                        <li class="m-0 pl-10 va-m"><a href="https://home.iitd.ac.in/index-hindi.php" class="text-white" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Hindi Version"><i class="fa fa-language mr-5 text-white"></i> हिन्दी  /</a></li>
                        <li class="m-0 pl-0 pr-10 va-m"> <a id="decfont" class="text-white" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Decrease text size"><i class="fa fa-font font-11"></i>-</a> <a id="incfont" class="text-white" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Increase text size"><i class="fa fa-font ml-5"></i>+</a> </li>
                        <li class="m-0 pl-5 va-m"><a href="https://webmail.iitd.ac.in/roundcube/" class="text-white" target="_blank"><i class="fa fa-envelope mr-5 text-white"></i>IITD Email</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="header-middle p-0 ar-bg-lightest xs-text-center pb-15">
              <div class="container pt-5 pb-0">
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-8">
                    <!-- <a class="menuzord-brand pull-left flip sm-pull-center m-0" href="index.php"><img class="mx-ht-70" src="images/logo-iit.png" alt=""><span class="ml-10 text-uppercase title va-m text-white">Indian Institute of Technology Delhi</span></a> -->
                    <div class="logo-wrapper menuzord-brand switchable-logo pull-left flip mt-0 pt-5 iitd-logo-section"> <span class="element-invisible">Indian Institute of Technology Delhi</span>
                      <a href="https://diamond.iitd.ac.in/" target="_blank" aria-label="Diamond Jubilee Logo"> <img class="logo-default mx-ht-70" src="Home%20Page%20IIT%20Delhi_files/logo-diamond.png" alt="Diamond Jubilee Logo"> </a>
                      <a href="https://home.iitd.ac.in/index.php" aria-label="IITD Logo"> <img class="logo-default mx-ht-70" src="Home%20Page%20IIT%20Delhi_files/logo-iit.png" alt="IITD Logo">
                        <div class="logo-animation-wrapper">
                          <h3>Indian Institute of Technology Delhi</h3>
                          <h3 class="ioe">An Institution of Eminence <i class="fa fa-certificate text-gold"></i></h3>
                          <h3 class="ar-fontfamily">भारतीय प्रौद्योगिकी संस्थान दिल्ली</h3> </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 iitd-location">
                    <div class="col-xs-12 col-sm-4 col-md-12 text-right">
                      <div class="ar-map-cursor widget no-border sm-text-center mt-15 mb-10 m-0" onclick="window.open('https://goo.gl/maps/1soxmusfuke72h1c7')" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Click to view location and get directions"> <i class="pe-7s-map-marker text-white font-48 mt-0 mr-15 mr-sm-0 sm-display-block pull-right flip sm-pull-none"></i> <a href="https://goo.gl/maps/1soxmusfuke72h1c7" target="_blank" class="font-12 text-white text-uppercase">Indian Institute of Technology Delhi</a>
                        <h5 class="font-13 text-black m-0 text-white"> Hauz Khas, New Delhi-110016, India</h5> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="sticky-wrapper" class="sticky-wrapper" style="height: 102px;"><div class="ar-nav-cent header-nav navbar-sticky navbar-sticky-animated ar-iitd-menu" style="width: 1176px;">
              <div class="header-nav-wrapper">
                <div class="container p-0">
                  <nav id="menuzord-right" class="menuzord default no-bg menuzord-responsive" role="navigation" style=""><a href="javascript:void(0)" class="showhide" style="display: none;"><em></em><em></em><em></em></a>
                    <a class="menuzord-brand ar-menu-brand  switchable-logo pull-left flip mb-15 ml-0" href="https://home.iitd.ac.in/index.php" aria-label="IITD Logo">
                      <!-- <img class="logo-default" src="images/logo-wide-white.png" alt=""> --><img class="logo-scrolled-to-fixed" src="Home%20Page%20IIT%20Delhi_files/logo-iit.png" alt="" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Indian Institute of Technology Delhi"> </a>
                    <ul class="menuzord-menu ar-fafa menuzord-right menuzord-indented scrollable" style="float: left !important; max-height: 400px;">
                      <li class="iitd-home"><a href="https://home.iitd.ac.in/index.php" class="ar-fahome" aria-label="Home"><i class="fa fa-home"></i></a></li>
                      <li class="academics" style=""> <a href="javascript:void(0)">Academics<span class="indicator"><i class="fa fa-angle-down"></i></span></a>
                        <div class="megamenu megamenu-bg-img" style="display: none; right: 0px;">
                          <div class="megamenu-row">
                            <div class="col3">
                              <a href="https://home.iitd.ac.in/departments.php">
                                <h4 class="megamenu-col-title">Departments</h4> </a>
                              <ul class="list-dashed list-icon">
                                <li><a href="https://am.iitd.ac.in/" target="_blank">Applied Mechanics</a> </li>
                                <li><a href="https://beb.iitd.ac.in/" target="_blank">Biochemical Engineering and Biotechnology</a> </li>
                                <li><a href="http://chemical.iitd.ac.in/" target="_blank">Chemical Engineering</a> </li>
                                <li><a href="https://chemistry.iitd.ac.in/" target="_blank">Chemistry</a> </li>
                                <li><a href="https://civil.iitd.ac.in/" target="_blank">Civil Engineering</a> </li>
                                <li><a href="https://www.cse.iitd.ac.in/" target="_blank">Computer Science and Engineering</a> </li>
                                <li><a href="https://design.iitd.ac.in/" target="_blank">Design</a> </li>
                                <li><a href="https://ee.iitd.ac.in/" target="_blank">Electrical Engineering</a> </li>
                                <li><a href="https://dese.iitd.ac.in/" target="_blank">Energy Science and Engineering</a> </li>
                                <li><a href="https://hss.iitd.ac.in/" target="_blank">Humanities and Social Sciences</a> </li>
                                <li><a href="https://dms.iitd.ac.in/" target="_blank">Management Studies</a> </li>
                                <li><a href="https://mse.iitd.ac.in/" target="_blank">Materials Science and Engineering</a> </li>
                                <li><a href="https://maths.iitd.ac.in/" target="_blank">Mathematics</a> </li>
                                <li><a href="https://mech.iitd.ac.in/" target="_blank">Mechanical Engineering</a> </li>
                                <li><a href="https://physics.iitd.ac.in/" target="_blank">Physics</a> </li>
                                <li><a href="https://textile.iitd.ac.in/" target="_blank">Textile and Fibre Engineering</a> </li>
                              </ul>
                            </div>
                            <div class="col3">
                              <a href="https://home.iitd.ac.in/centres.php">
                                <h4 class="megamenu-col-title">Centres</h4> </a>
                              <ul class="list-dashed list-icon">
                                <li><a href="https://care.iitd.ac.in/" target="_blank">Applied Research in Electronics</a></li>
                                <li><a href="https://cas.iitd.ac.in/" target="_blank">Atmospheric Sciences</a></li>
                                <li><a href="https://cart.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Formerly ITMMEC">Automotive Research and Tribology</a></li>
                                <li><a href="https://cbme.iitd.ac.in/" target="_blank">Biomedical Engineering</a></li>
                                <li><a href="https://csc.iitd.ac.in/" target="_blank">Computer Services Centre</a></li>
                                <li><a href="https://etsc.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="ETSC">Educational Technology</a></li>
                               
                                <li><a href="https://tripp.iitd.ac.in/" target="_blank">Transportation Research and Injury Prevention</a></li>
                                <li><a href="https://crdt.iitd.ac.in/" target="_blank">Rural Development and Technology</a></li>
                                <li><a href="https://sense.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="SeNSE (formerly IDDC)">Sensors, INstrumentation and <span class="ar-nowrap">Cyber-physical</span> Systems Engineering</a></li>
                                <li><a href="https://nrcvee.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="NRCVEE">Value Education in Engineering</a></li>
                                <li><a href="https://opc.iitd.ac.in/index.html" target="_blank">Optics and Photonics</a></li>
                              </ul>
                            </div>
                            <div class="col3">
                              <a href="https://home.iitd.ac.in/schools.php">
                                <h4 class="megamenu-col-title">Schools</h4> </a>
                              <ul class="list-dashed list-icon">
                                <li><a href="https://bioschool.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Kusuma School of Biological Sciences">Biological Sciences</a> </li>
                                <li><a href="https://sit.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Amar Nath and Shashi Khosla School of Information Technology">Information Technology </a> </li>
                                <li><a href="https://sire.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="SIRe">Interdisciplinary Research</a> </li>
                                <li><a href="https://spp.iitd.ac.in/" target="_blank">Public Policy</a> </li>
                                <li><a href="https://bhartischool.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Bharti School of Telecommunication Technology and Management">Telecommunication Technology and Management</a> </li>
                                <li><a href="https://scai.iitd.ac.in/" target="_blank">Artificial Intelligence</a> </li>
                              </ul>
                            </div>
                            <div class="col3">
                              <a href="https://home.iitd.ac.in/centres-of-excellence.php">
                                <h4 class="megamenu-col-title">Centres of Excellence (CoEs)</h4> </a>
                              <ul class="list-dashed list-icon">
                                <li><a href="https://cerca.iitd.ac.in/" target="_blank">Arun Duggal CoE for Research in Climate change and Air Pollution</a></li>
                                <li><a href="https://robotics.iitd.ac.in/ARL/" target="_blank">CoE on Biologically Inspired Robots and Drones (BIRD)</a></li>
                                <li><a href="https://espob.iitd.ac.in/">CoE on Energy Storage Platform on Batteries (ESPOB)</a></li>
                                <li><a href="https://receee.renewpower.in/">Renew Power CoE on Energy &amp; Environment</a></li>
                                <li><a href="https://home.iitd.ac.in/centres-of-excellence.php"><strong><i class="fa fa-caret-right d-inline m-0"></i> View All</strong></a></li>
                              </ul>
                              <!-- <a href="centres-of-excellence.php" class="btn btn-default btn-theme-colored btn-xs mt-10">View All <i class="fa fa-angle-right"></i></a> --></div>
                            <div class="col3">
                              <a href="https://home.iitd.ac.in/facilities.php">
                                <h4 class="megamenu-col-title mt-20">Facilities</h4> </a>
                              <ul class="list-dashed list-icon">
                                <li class="leaf first dhtml-menu"><a href="https://crf.iitd.ac.in/" target="_blank" id="dhtml_menu-1782">Central Research Facility</a></li>
                                <li class="leaf dhtml-menu "><a href="https://cw.iitd.ac.in/" target="_blank" id="dhtml_menu-2836">Central Workshop</a></li>
                                <li class="leaf dhtml-menu"><a href="https://web.iitd.ac.in/~sundar/dailab/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="DBT-AIST International Laboratory for Advanced Biomedicine">DAILAB</a></li>
                                <li class="leaf dhtml-menu "><a href="https://supercomputing.iitd.ac.in/" target="_blank" id="dhtml_menu-2623">High Performance Computing</a></li>
                                <li class="leaf dhtml-menu "><a href="https://nano.iitd.ac.in/" target="_blank" id="dhtml_menu-2562">Nanoscale Research Facility</a></li>
                                <li class="leaf dhtml-menu "><a href="https://www.scfbio-iitd.res.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Supercomputing Facility for Bioinformatics and Computational Biology">SCFBio@IITD</a></li>
                              </ul>
                            </div>
                            
                            <div class="col3">
                              <h4 class="megamenu-col-title">Interdisciplinary</h4>
                              <ul class="list-dashed list-icon">
                      
                      <li><a href="https://oeoc.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Opto Electronics &amp; Optical Communication">Optoelectronics</a>
                        </li><li><a href="https://tripp.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Transportation Research and Injury Prevention Programme">TRIPP</a> </li>
                        <li><a href="https://vdtt.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="VLSI Design Tools and Technology">VDTT</a></li>
                        </ul>
                        </div>
                        <div class="col3">
                          <a href="https://academics.iitd.ac.in/" target="_blank">
                            <h4 class="megamenu-col-title">Educational Programmes</h4> </a>
                          <ul class="list-dashed list-icon">
                            <li><a target="_blank" href="https://academics.iitd.ac.in/content/bachelor-technology-btech">Undergraduate</a></li>
                            <li><a target="_blank" href="https://academics.iitd.ac.in/content/master-technology-mtech">Masters</a></li>
                            <li><a target="_blank" href="https://academics.iitd.ac.in/content/doctor-philosphy">Doctoral</a></li>
                            <li><a target="_blank" href="https://cepqip.iitd.ac.in/">QIP/CEP/TEQIP</a></li>
                          </ul>
                        </div>
                        </div>
                        </div>
                      </li>
                      <li class="indicator" style=""> <a href="javascript:void(0)">Admissions<span class="indicator"><i class="fa fa-angle-down"></i></span></a>
                        <ul class="dropdown" style="right: auto;">
                          <li><a href="https://gate.iitd.ac.in/" target="_blank">GATE/JAM</a></li>
                          <li><a href="https://jeeadv.iitd.ac.in/" target="_blank">JEE (Advanced)</a></li>
                          <!-- <li><a href="http://intladm.iitd.ac.in/" target="_blank">Foreign Nationals</a></li> -->
                          <li><a href="https://international.iitd.ac.in/" target="_blank">International</a></li>
                          <li><a href="https://ecampus.iitd.ac.in/PGADM/" target="_blank">PG Admission including PhD</a></li>
                          <li><a href="https://dms.iitd.ac.in/admission-mba/" target="_blank">MBA Admission</a></li>
                          <li><a href="https://home.iitd.ac.in/pg-admissions.php" class="ar-menu-bt">Announcements</a></li>
                        </ul>
                      </li>
                      <li class="for-students" style=""> <a href="javascript:void(0)">For Students<span class="indicator"><i class="fa fa-angle-down"></i></span></a>
                        <div class="megamenu megamenu-bg-img-std" style="right: 0px;">
                          <div class="megamenu-row">
                            <div class="col3 prospective">
                              <h4 class="megamenu-col-title">Prospective Students</h4>
                              <ul class="list-dashed list-icon">
                                <li><a href="https://home.iitd.ac.in/why-iitd-student.php">Why IIT Delhi</a></li>
                                <li><a href="https://home.iitd.ac.in/gallery.php">Visit &amp; Explore</a></li>
                                <li><a href="https://home.iitd.ac.in/gallery.php">Discover Student Life</a></li>
                                <li><a href="https://academics.iitd.ac.in/" target="_blank">Courses Offered</a></li>
                                <li><a href="https://home.iitd.ac.in/curriculum.php" target="_blank">Prospectus</a></li>
                                <!--<li><a href="financial-aid.php">Financial Aid</a></li>-->
                                <li><a href="https://academics.iitd.ac.in/" target="_blank">How to Apply</a></li>
                                <li><a href="https://academics.iitd.ac.in/" target="_blank">Admissions Process</a></li>
                                <li><a href="https://web.iitd.ac.in/~vlfm/" target="_blank">VLFM (Visionary Leaders for Manufacturing)</a></li>
                              </ul>
                            </div>
                            <div class="col9">
                              <h4 class="megamenu-col-title">Existing Students</h4>
                              <div class="col3">
                                <ul class="list-dashed list-icon">
                                  <li><a href="https://webmail.iitd.ac.in/roundcube/" target="_blank"><i class="fa fa-bookmark-o"></i> Access IITD e-Mail</a></li>
                                  <li><a href="https://library.iitd.ac.in/" target="_blank"><i class="fa fa-bookmark-o"></i> Central Library</a></li>
                                  <li><a href="https://moodle.iitd.ac.in/" target="_blank"><i class="fa fa-bookmark-o"></i> Moodle</a></li>
                                  <li><a href="https://eacademics.iitd.ac.in/sportal/login" target="_blank"><i class="fa fa-bookmark-o"></i> Academic ERP</a></li>
                                  <li><a href="https://internal.iitd.ac.in/" target="_blank" onclick="internal()"><i class="fa fa-bookmark-o"></i> Internal Website</a></li>
                                  <li><a href="https://home.iitd.ac.in/academic-calendar.php"><i class="fa fa-bookmark-o"></i> Academic Calendar</a></li>
                                  <li><a href="https://home.iitd.ac.in/institute-holidays.php" target="_blank"><i class="fa fa-bookmark-o"></i> List of Holidays</a></li>
                                  <li><a href="https://ocs.iitd.ac.in/ocs/" target="_blank"><i class="fa fa-bookmark-o"></i> Career Services</a></li>
                                  <li><a href="https://timetable.iitd.ac.in/" target="_blank"><i class="fa fa-bookmark-o"></i> Time Table</a></li>
                                  <li><a href="https://www.ihfc.co.in/" target="_blank"><i class="fa fa-bookmark-o"></i> IHFC's Research Entrepreneurship and Development for You</a></li>
          
                                </ul>
                              </div>
                              <div class="col3">
                                <ul class="list-dashed list-icon">
                                  <li><a href="https://academics.iitd.ac.in/content/transcripts-degree-verification" target="_blank"><i class="fa fa-bookmark-o"></i> Transcripts / Certificates / Degree Verification</a></li>
                                  <li><a href="https://home.iitd.ac.in/curriculum.php"><i class="fa fa-bookmark-o"></i> Curriculum Information</a></li>
                                  <li><a href="https://internal.iitd.ac.in/?q=content/list-forms" target="_blank" onclick="return confirm('This is an IIT Delhi Internal Link, Please click on OK to continue.');"><i class="fa fa-bookmark-o"></i> Forms</a></li>
                                  <li><a href="https://bsw.iitd.ac.in/counselling.php" target="_blank"><i class="fa fa-bookmark-o"></i> Health and Wellness</a></li>
                                  <li><a href="https://hospital.iitd.ac.in/" target="_blank"><i class="fa fa-bookmark-o"></i> Health Services</a></li>
                                  <li><a href="https://home.iitd.ac.in/curriculum.php"><i class="fa fa-bookmark-o"></i> Prospectus</a></li>
                                  <li><a href="https://notices.smartcampus.iitd.ac.in/" target="_blank"><i class="fa fa-bookmark-o"></i> Smart Notice Board</a></li>
                                  <li><a href="https://convocation.iitd.ac.in/evidya.php" target="_blank"><i class="fa fa-bookmark-o"></i> eVIDYA@IITD</a></li>
                                </ul>
                              </div>
                              <div class="col3 bl-dotted">
                                <ul class="list-dashed list-icon pl-20">
                                  <li><a href="https://sac.iitd.ac.in/" target="_blank">Student Affairs Council</a></li>
                                  <li><a href="https://dos.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Dean of Student Affairs">DoSA</a></li>
                                  <li><a href="https://www.bspiitd.com/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Board for Student Publications">BSP</a></li>
                                  <li><a href="https://brca.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Board For Recreational and Creative Activties">BRCA</a></li>
                                  <li><a href="https://bsa.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Board of Sports Activities, IIT Delhi">BSA (Board for Sports Activities)</a></li>
                                  <li><a href="https://bhm.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Board for Hostel Management">BHM</a></li>
                                 
                                  <li><a href="https://bsw.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Board for Student Welfare">BSW</a></li>
                                  <li><a href="https://baja.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="top" title="" data-original-title="Intercollegiate design competition run by the Society of Automotive Engineers">BAJA SAE</a></li>
                                  <li><a href="https://nss.iitd.ac.in/#!/" target="_blank" data-toggle="tooltip" data-placement="top" title="" data-original-title="National Service Scheme, IIT Delhi">NSS</a></li>
                                </ul>
                              </div>
                              <div class="col3">
                                <ul class="list-dashed list-icon">
                                  <li><a href="https://edc.iitd.ac.in/" target="_blank">Entrepreneurship</a></li>
                                  <li><a href="https://automobileclub.iitd.ac.in/" target="_blank">Formula Society of Automotive Engineer</a></li>
                                  <li><a href="https://caic.iitd.ac.in/" target="_blank">Co-curricular and Academic Interaction Council (CAIC)</a></li>
                                  <li><a href="https://home.iitd.ac.in/hall-of-residence.php">Housing</a></li>
                                  <li><a href="https://bsw.iitd.ac.in/stic.php" target="_blank">Student Teacher Interaction Council</a></li>
                                  <li><a href="https://home.iitd.ac.in/student-awards.php">Awards</a></li>
                                  <li><a href="https://roboticsclub.iitd.ac.in/" target="_blank">Robotics Club</a></li>
                                  <li><a href="https://odi.iitd.ac.in/" target="_blank">Office of Diversity and Inclusion (Include SC/ST Cell)</a></li>
                                  <li><a href="https://home.iitd.ac.in/obc-welfare.php" target="_blank">OBC Welfare Cell</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
          
          
          
          
                      <li class="for-faculty" style=""> <a href="https://home.iitd.ac.in/for-faculty.php">For Faculty and Staff<span class="indicator"><i class="fa fa-angle-down"></i></span></a>
                        <div class="megamenu megamenu-bg-img-fac" style="right: 0px;">
                          <div class="megamenu-row">
                            <div class="col2">
                              <h4 class="megamenu-col-title"><a href="https://home.iitd.ac.in/for-faculty-thinking.php"> Thinking IIT Delhi </a></h4>
                              <ul class="list-dashed list-icon">
                                <li><a href="https://home.iitd.ac.in/for-faculty-thinking-what-iitd.php">What is IITD</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-thinking-why-iitd.php">Why Join IITD</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-thinking-how-join.php">How to Join IITD</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-thinking-stay-connected.php">Stay Connected</a></li>
                              </ul>
                            </div>
                            <!-- <div class="col2 prospective-fac">
                                        <h4 class="megamenu-col-title">Thinking IIT Delhi</h4>
                                        <ul class="list-dashed list-icon">
                                          <li><a href="why-iitd-faculty.php">Why IIT Delhi</a></li>
                                          <li><a href="gallery.php">Visit &amp; Explore</a></li>
                                          <li><a href="jobs-iitd/index.html" target="_blank">How to Apply</a></li>
                                        <li><a href="uploads/PROSPECTUS2020-2021.pdf" target="_blank">Prospectus</a></li>
                                          <li><a href="work-life.php">Work Life</a></li>
                                          <li><a href="faculty-housing.php">Faculty Housing</a></li>
                                          <li><a href="uploads/Benefits_and_incentives_to_faculty.pdf">Benefits</a></li>
                                          <li><a href="uploads/Benefits_and_incentives_to_faculty.pdf">Health Benefits</a></li>
                                        </ul>
                                        </div> -->
                            <div class="col2 ">
                              <h4 class="megamenu-col-title"><a href="https://home.iitd.ac.in/for-faculty-welcome.php">Joining IIT Delhi</a></h4>
                              <ul class="list-dashed list-icon">
                                <li><a href="https://home.iitd.ac.in/for-faculty-welcome.php">Welcome</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-director.php">Director's message</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-dean-corner.php">Deans' Corner</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-arrival.php">Arriving </a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-getting-started.php"> Getting Started</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-rules-policies.php"> Rules &amp; Policies</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-benefits-facilities.php">Benefits &amp; Facilities</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-around-campus.php">Around Campus</a></li>
                              </ul>
                            </div>
          
          
                         
                            <div class="col2 " id="ps-menu1">
                              <h4 class="megamenu-col-title"><a href="https://home.iitd.ac.in/for-faculty-serving.php">Serving IIT Delhi</a></h4>
                              <ul class="list-dashed list-icon">
                                <li><a href="https://home.iitd.ac.in/for-faculty-serving-assessment.php">Assessment</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-serving-incentives.php">Incentives</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-serving-teaching.php">Teaching</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-serving-research-personnel.php"> Research Personnel</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-serving-academic-outreach-iitd.php"> Academic Outreach</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-serving-outside-engagement.php"> Outside Engagement</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-serving-procurement.php">Procurement</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-serving-medical-facilities.php"> Medical</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-serving-leave.php"> Leave</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-serving-guest.php"> Guest house</a></li>
                                <li><a href="https://home.iitd.ac.in/for-faculty-serving-disciplinary.php"> Disciplinary Issues</a></li>
                                <li><a href="https://odi.iitd.ac.in/" target="_blank"> Office of Diversity and Inclusion</a></li>
                                <li><a href="https://home.iitd.ac.in/obc-welfare.php" target="_blank">OBC Welfare Cell</a></li>
                              </ul>
                            </div>
          
                            <div class="col2 " id="ps-menu2">
                              <h4 class="megamenu-col-title"><a href="https://home.iitd.ac.in/for-faculty-serving.php">Leaving IIT Delhi</a></h4>
                              <ul class="list-dashed list-icon">
                                <li><a href="https://home.iitd.ac.in/for-faculty-leaving-retire.php">Retirement</a></li>
                              </ul>
                            </div>
                            
                         
                            <!-- <div class="col2 prospective-fac">
                                        <h4 class="megamenu-col-title">Leaving IIT Delhi</h4>
                                        <ul class="list-dashed list-icon">
                                          <li><a href="why-iitd-faculty.php">Why IIT Delhi</a></li>
                                          <li><a href="gallery.php">Visit &amp; Explore</a></li>
                                          <li><a href="http://www.iitd.ac.in/jobs-iitd/index.html" target="_blank">How to Apply</a></li>
                                          <li><a href="uploads/PROSPECTUS2020-2021.pdf" target="_blank">Prospectus</a></li>
                                          <li><a href="work-life.php">Work Life</a></li>
                                          <li><a href="faculty-housing.php">Faculty Housing</a></li>
                                          <li><a href="facilities-incentives-benefits.php">Facilities, Incentives &amp; Other Benefits</a></li>
                                          <li><a href="http://hospital.iitd.ac.in/">Health Benefits</a></li>
                                        </ul>
                                        </div> -->
          
                            <div class="col4">
                              <h4 class="megamenu-col-title">Useful links</h4>
                              <div class=" col6">
                                <ul class="list-dashed list-icon">
                                  <li><a href="https://eadmin.iitd.ac.in/" target="_blank"> ERP</a></li>
                                  <li><a href="https://csc.iitd.ac.in/" target="_blank"> CSC</a></li>
                                  <li><a href="http://hospital.iitd.ac.in/" target="_blank"> IITD Hospital</a></li>
                                  <li><a href="http://ird.iitd.ac.in/" target="_blank"> IRD</a></li>
                                  <li><a href="https://iris.iitd.ac.in/ird/" target="_blank" onclick="return confirm('This is an IIT Delhi Internal Link, Please click on OK to continue.');">IRIS</a></li>
                                  <li><a href="https://ird.iitd.ac.in/IRD/IITIRDManualRev5.pdf" target="_blank">IRD Manual</a></li>
                                  <li><a href="http://infra.iitd.ac.in/" target="_blank">Infrastructure</a></li>
                                  <li><a href="https://sps.iitd.ac.in/" target="_blank">Store and Purchase</a></li>
                                  <li><a href="https://gem.gov.in/" target="_blank">GeM</a></li>
                                  <li><a href="http://academics.iitd.ac.in/" target="_blank">Academic</a></li>
                                  <li><a href="https://etwo.iitd.ac.in/" target="_blank">Establishments</a></li>
                                  <li><a href="https://home.iitd.ac.in/rules.php" target="_blank">Rules</a></li>
          
                                </ul>
                              </div>
                              <div class=" col5">
                                <ul class="list-dashed list-icon">
                                  <li><a href="https://www.driiv.co.in/" target="_blank">DRIIV</a> <i class="fa fa-external-link"></i></li>
                                  <li><a href="https://fitt-iitd.in/" target="_blank">FITT</a> <i class="fa fa-external-link"></i></li>
                                  <!-- <li><a href="https://iitdappln.iitd.ac.in/index.php" target="_blank" onclick="return confirm('This is an IIT Delhi Internal Link, Please click on OK to continue.');"> Faculty Information System</a></li> -->
                                  <li><a href="https://timetable.iitd.ac.in/" target="_blank">Time Table</a></li>
                                  <li><a href="https://home.iitd.ac.in/academic-calendar.php">Academic Calendar</a></li>
                              <!--    <li><a href="http://rti.iitd.ac.in/rti/rtiteldir.pdf" target="_blank">Telephone Directory</a></li>-->
                                  <li><a href="https://rti.iitd.ac.in/institute/manuals/" target="_blank">Institute Manuals</a></li>
                                  <li><a href="https://library.iitd.ac.in/" target="_blank">Library</a></li>
                                  <li><a href="https://moodle.iitd.ac.in/" target="_blank">Moodle</a></li>
                                  <li><a href="https://sac.iitd.ac.in/" target="_blank">SAC</a></li>
                                  <li><a href="https://home.iitd.ac.in/facilities.php" target="_blank">Facilities</a></li>
                                  <li><a href="https://webmail.iitd.ac.in/roundcube/" target="_blank">IITD Email</a></li>
                                  <li><a href="https://www.ihfc.co.in/" target="_blank">I-Hub Foundation for Cobotics (IHFC)</a></li>
                                  <li><a href="https://nctu-iitd.iitd.ac.in/" target="_blank">NCTU-IITD</a> <i class="fa fa-external-link"></i></li>
          
                                </ul>
                              </div>
                            </div>
          
          
          
                          </div>
                        </div>
                      </li>
                      <li class="research" style=""> <a href="#home">Research<span class="indicator"><i class="fa fa-angle-down"></i></span></a>
                        <ul class="dropdown" style="right: auto;">
                          <li><a href="https://home.iitd.ac.in/research-all.php">Latest Research</a></li>
                          <li><a href="https://ird.iitd.ac.in/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Formerly IRD">Research &amp; Development Unit (IRD Unit)</a></li>
                          <li><a href="https://corprel.iitd.ac.in/" target="_blank">Corporate Relations</a></li>
                  
                  
                   <li class="ar-inner-drop"> <a href="javascript:void(0)">Central Facilities<span class="indicator"><i class="fa fa-angle-right"></i></span></a>
                            <ul class="dropdown" style="">
                              <li><a href="https://crf.iitd.ac.in/">Central Research Facility</a></li>
                              <li><a href="https://cw.iitd.ac.in/">Central Workshops</a></li>
                     <li><a href="https://web.iitd.ac.in/~sundar/dailab/">DAILAB</a></li>
                      <li><a href="https://supercomputing.iitd.ac.in/?main">High Performance Computing</a></li>
                       <li><a href="https://nano.iitd.ac.in/">Nanoscale Research Facility</a></li>
                       <li><a href="https://www.scfbio-iitd.res.in/">SCFBIO@IITD</a></li>
                              
                            </ul>
                          </li>
                  
                          <li><a href="https://fitt-iitd.in/" target="_blank">FITT</a> <i class="fa fa-external-link"></i></li>
                          <li><a href="https://home.iitd.ac.in/conferences.php">Conferences</a></li>
                          <li class="ar-inner-drop"><a href="https://home.iitd.ac.in/chairs-iitd.php">Chairs</a> </li>
                          <li class="ar-inner-drop"> <a href="javascript:void(0)">MoUs<span class="indicator"><i class="fa fa-angle-right"></i></span></a>
                            <ul class="dropdown" style="">
                              <li><a href="https://home.iitd.ac.in/about-mous.php">About MoUs</a></li>
                              <li><a href="https://home.iitd.ac.in/active-mous.php">Active MoUs</a></li>
                              <!-- <li><a href="http://old.iitd.ac.in/archives/mous" target="_blank">Old MoUs (Archive)</a></li> -->
                              <!--<li><a href="archive-mous.php">Archives</a></li>-->
                            </ul>
                          </li>
                          <li><a href="https://home.iitd.ac.in/phd-seminar.php">PhD Seminars</a></li>
                          <!--<li><a href="research-spotlight.php">Research Spotlight</a></li>-->
                        <li><a href="https://www.ihfc.co.in/">I-Hub Foundation for Cobotics (IHFC) <i class="fa fa-external-link"></i></a></li>
                          <li><a href="https://nctu-iitd.iitd.ac.in/" target="_blank">NCTU-IITD <i class="fa fa-external-link"></i></a></li>
                          <li><a href="https://uqidar.org/" target="_blank">UQIDAR <i class="fa fa-external-link"></i></a></li>				
                  
                        </ul>
                      </li>
                      <li class="compliance" style=""> <a href="javascript:void(0)">Alumni<span class="indicator"><i class="fa fa-angle-down"></i></span></a>
                        <ul class="dropdown" style="right: auto;">
                          <li><a href="https://alumni.iitd.ac.in/" target="_blank">Alumni Affairs</a> </li>
                          <li><a href="https://iitd.almaconnect.com/" target="_blank">AlmaConnect</a></li>
                          <li><a href="https://home.iitd.ac.in/alumni-newsletters.php">Alumni Newsletters</a></li>
                          <li><a href="https://alumni.iitd.ac.in/home/index.php/distinguished-alums/" target="_blank">Distinguished Alumni</a></li>
                          <li><a href="https://endowment.iitd.ac.in/" target="_blank">Endowment Foundation</a></li>
                          <!-- <li><a href="https://unlimiitd.iitd.ac.in/" target="_blank">GIVE</a></li> -->
                        </ul>
                      </li>
                      <li class="important" style=""> <a href="#home">Resources<span class="indicator"><i class="fa fa-angle-down"></i></span></a>
                        <div class="megamenu megamenu-bg-img-fac" style="right: 0px;">
                          <div class="megamenu-row">
                            <div class="col12">
                              <h4 class="megamenu-col-title">Quick Access</h4>
                              <div class="col4">
                                <ul class="list-dashed list-icon">
                                  <!-- <li><a href="https://webmail.iitd.ac.in/roundcube/" target="_blank"><i class="fa fa-bookmark-o"></i> Access IITD e-Mail</a></li> -->
                                  <li><a href="https://home.iitd.ac.in/rules.php" target="_blank"><i class="fa fa-bookmark-o"></i>Rules</a></li>
                                  <li><a href="https://timetable.iitd.ac.in/" target="_blank"><i class="fa fa-bookmark-o"></i> Time Table</a></li>
                                  <li><a href="https://library.iitd.ac.in/" target="_blank"><i class="fa fa-bookmark-o"></i> Central Library</a></li>
                      <li><a href="https://home.iitd.ac.in/compliance.php" target="_blank"><i class="fa fa-bookmark-o"></i> Compliance</a></li>
                                  <li><a href="https://convocation.iitd.ac.in/" target="_blank"><i class="fa fa-bookmark-o"></i> Convocation</a></li>
                                  <li><a href="https://internal.iitd.ac.in/" target="_blank" onclick="internal()"><i class="fa fa-bookmark-o"></i> Internal Website</a></li>
                                  <li><a href="https://hospital.iitd.ac.in/" target="_blank"><i class="fa fa-bookmark-o"></i> Hospital</a></li>
                                  <li><a href="https://home.iitd.ac.in/news-all.php"><i class="fa fa-bookmark-o"></i> News</a></li>
                                  <li><a href="https://home.iitd.ac.in/media-english.php"><i class="fa fa-bookmark-o"></i> IIT Delhi in English Media</a></li>
                                  <li><a href="https://home.iitd.ac.in/media-hindi.php"><i class="fa fa-bookmark-o"></i> IIT Delhi in Hindi Media</a></li>
                                  <li><a href="https://home.iitd.ac.in/press-release.php"><i class="fa fa-bookmark-o"></i> Press Release</a></li>
                                  <li><a href="https://home.iitd.ac.in/institute-newsletters.php"><i class="fa fa-bookmark-o"></i> Institute Newsletter</a></li>
                                  <li><a href="https://home.iitd.ac.in/alumni-newsletters.php"><i class="fa fa-bookmark-o"></i> Alumni Newsletter</a></li>
                                  <li><a href="https://home.iitd.ac.in/startup-all.php"><i class="fa fa-bookmark-o"></i> Startups</a></li>
                                  <li><a href="https://home.iitd.ac.in/icollect/epay/index.php" target="_blank"><i class="fa fa-bookmark-o"></i> Online Payment Gateway</a></li>
                                  <li><a href="https://cepqip.iitd.ac.in/" target="_blank"><i class="fa fa-bookmark-o"></i> QIP/CEP/TEQIP</a></li>
                                  <li><a href="https://home.iitd.ac.in/jobs-iitd/index.php" target="_blank" class="text-white"><i class="fa fa-bookmark-o"></i> Jobs@IITD</a></li>
                                  <li><a href="https://home.iitd.ac.in/tenders.php" class="text-white"><i class="fa fa-bookmark-o"></i> Tenders</a></li>
                                  <li><a href="https://home.iitd.ac.in/social-initiative.php" class="text-white"><i class="fa fa-bookmark-o"></i> Social Initiatives</a></li>
                                  <li><a href="https://odi.iitd.ac.in/" target="_blank" class="text-white"><i class="fa fa-bookmark-o"></i> Office of Diversity and Inclusion</a></li>
                                  <li><a href="https://home.iitd.ac.in/obc-welfare.php" target="_blank" class="text-white"><i class="fa fa-bookmark-o"></i>OBC Welfare Cell</a></li>
                                  <!--for dark mode-->
                                  <li><a href="#" onclick="darkMode()" class="text-white" id="darkmode"><i class="fa fa-bookmark-o"></i> Dark Mode</a></li>
                                  <!--end-->
                                </ul>
                              </div>
                              <div class="col4 bl-dotted">
                                <ul class="list-dashed list-icon pl-20">
                                  <li><a href="https://home.iitd.ac.in/about.php">About IIT Delhi</a></li>
                                  <li><a href="https://ioe.iitd.ac.in/" target="_blank">Institution of Eminence</a></li>
                                  <li><a href="https://home.iitd.ac.in/about-board-of-governors.php">Board of Governors</a></li>
                                  <li><a href="https://home.iitd.ac.in/about-building-works-committee.php">Building &amp; Works Committee</a></li>
                                  <li><a href="https://home.iitd.ac.in/about-finance-committee.php">Finance Committee</a></li>
                                  <li><a href="https://home.iitd.ac.in/about-membership-of-senate.php">Membership of Senate</a></li>
                                  <li><a href="https://home.iitd.ac.in/administration.php">Administration</a></li>
                                  <li><a href="https://home.iitd.ac.in/about-mission-vision.php">Vision, Mission &amp; Values</a></li>
                                  <li><a href="https://home.iitd.ac.in/organization-chart.php">Organization Chart</a></li>
                                  
                                  <li><a href="https://www.iitdsonipat.com/" target="_blank" data-toggle="tooltip" data-placement="right" title="" data-original-title="IIT Delhi Technopark, Sonipat">I-TEC Sonipat</a></li>
                                  <li><a href="https://home.iitd.ac.in/index.php#faq">FAQs</a></li>
                                  <li><a href="https://home.iitd.ac.in/social-initiatives.php">Social Initiatives</a></li>
                                  <li><a href="https://ocs.iitd.ac.in/ocs/" target="_blank">Recruiter/Career Services</a></li>
                                  <li><a href="https://convocation.iitd.ac.in/evidya.php" target="_blank">eVIDYA@IITD</a></li>
                                  <li><a href="https://hindi.iitd.ac.in/" target="_blank">Hindi Cell</a></li>
                      <li><a href="https://crf.iitd.ac.in/">Central Research Facility</a></li>
                      <li><a href="https://cw.iitd.ac.in/">Central Workshops</a></li>
                      <li><a href="https://web.iitd.ac.in/~sundar/dailab/">DAILAB</a></li>
                      <li><a href="https://supercomputing.iitd.ac.in/?main">High Performance Computing</a></li>
                      <li><a href="https://nano.iitd.ac.in/">Nanoscale Research Facility</a></li>
                      <li><a href="http://www.scfbio-iitd.res.in/">SCFBIO@IITD</a></li>
                      <li><a href="https://iitpal.iitd.ac.in/"><strong>IIT-PAL</strong></a></li>
                      
                                </ul>
                              </div>
                              <div class="col3 wid-auto new-fac">
                                <h4 class="megamenu-col-title-new-fac">IIT Delhi Newsletter</h4>
                                <a target="_blank" href="https://home.iitd.ac.in/uploads/newsletters/Newsletter-Aug-23.pdf">
                                  <article class="post clearfix">
                                    <div class="entry-header overf-v">
                                      <div class="post-thumb"><img class="img-responsive wd150" src="Home%20Page%20IIT%20Delhi_files/aug-23.jpg" alt=""></div>
                                    </div>
                                    <div class="entry-content mt-5">
                                      <p class="text-left m-0">Latest Issue: <strong>August 2023 </strong></p>
                                    </div>
                                  </article>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li id="admn-ch" class="important" style="width: 132px;"><a href="https://home.iitd.ac.in/administration.php">Leadership</a></li>
                      
                      <li id="iitdsearch"><a aria-label="Search" id="iitd-extended-search" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Quick Search for everything you are looking for" class="kk-search ml-5" href="https://home.iitd.ac.in/kksearch"><i class="fa fa-search"></i></a></li>
                    <li class="scrollable-fix"></li></ul>
                  </nav>
                </div>
              </div>
              <div class="kk kkgradient dn"></div>
            </div></div>
          </header>
          
            <!-- Start main-content -->
            <div class="main-content" role="main">
             <!-- Section: home -->
            
            <section id="home" aria-hidden="true">
                <div class="container-fluid p-0 ar-bg-slide">
                  
                  <!-- START REVOLUTION SLIDER 5.0.7 -->
                  <div class="forcefullwidth_wrapper_tp_banner" id="rev_slider_home_forcefullwidth" style="position:relative;width:100%;height:auto;margin-top:0px;margin-bottom:0px"><div id="rev_slider_home_wrapper" class="rev_slider_wrapper" data-alias="news-gallery34" style="margin: 0px auto; background-color: rgb(255, 255, 255); padding: 0px; position: absolute; max-height: none; overflow: visible; height: 1004px; width: 1176px; left: 0px;">
                    <!-- START REVOLUTION SLIDER 5.0.7 fullwidth mode -->
                    <div id="rev_slider_home" class="rev_slider fullwidthabanner revslider-initialised tp-simpleresponsive rev_redraw_on_blurfocus" style="max-height: none; margin-top: 0px; margin-bottom: 0px; height: 100%;" data-version="5.0.7" data-slideactive="rs-1">
                      <ul class="tp-revslider-mainul" style="visibility: visible; display: block; overflow: hidden; width: 100%; height: 100%; max-height: none;">
                
                   <!-- SLIDE sample -->
          
          
                    
             
                        <!-- SLIDE 1 -->
                        <li data-index="rs-1" data-transition="fade" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="images/slider/slide1.jpg" data-rotate="0" data-fstransition="fade" data-saveperformance="off" data-title="Web Show" data-description="" class="tp-revslider-slidesli active-revslide" style="width: 100%; height: 100%; overflow: hidden; z-index: 20; visibility: inherit; opacity: 1; background-color: rgba(255, 255, 255, 0);">
                          <!-- MAIN IMAGE -->
                          <div class="slotholder" style="position: absolute; top: 0px; left: 0px; z-index: 0; width: 100%; height: 100%; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px); visibility: inherit; opacity: 1;"><!--Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="images/slider/slide1.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg defaultimg" data-no-retina="">--><div class="tp-bgimg defaultimg " data-bgcolor="undefined" style="background-repeat: no-repeat; background-image: url(&quot;images/slider/slide1.jpg&quot;); background-size: cover; background-position: center center; width: 100%; height: 100%; opacity: 1; visibility: inherit; z-index: 20;" src="images/slider/slide1.jpg"></div></div>
                          <!-- LAYERS -->
                          <!-- LAYER NR. 1 -->
                          <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: visible; left: 0px; top: 0px; z-index: 5;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption tp-shape tp-shapewrapper tp-resizeme rs-parallaxlevel-0 bg-theme-colored-transparent-3" id="slide-1-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="opacity:0;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="500" data-basealign="slide" data-responsive_offset="on" style="z-index: 5; background-color: rgba(0, 0, 0, 0.1); border-color: rgb(0, 0, 0); visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 82px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 59px; white-space: normal; min-height: 1004px; min-width: 1176px; opacity: 1; transform: translate3d(0px, 0px, 0px); transform-origin: 50% 50% 0px;"> 
                          </div></div></div></div>
                          <!-- LAYER NR. 2 -->
                          <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: visible; left: 161px; top: 463px; z-index: 5;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: hidden; transform: matrix(1, 0, 0, 1, 0, 0);"><div class="tp-caption tp-resizeme rs-parallaxlevel-0 text-white text-uppercase font-roboto-slab font-weight-700" id="slide-1-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['260','195','160','170']" data-fontsize="['40','40','35','28']" data-lineheight="['70','60','50','45']" data-fontweight="['800','700','700','700']" data-textalign="['center','center','center','center']" data-width="['900','650','600','420']" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:0;y:0;s:inherit;e:inherit;" data-start="600" data-splitin="none" data-splitout="none" data-responsive_offset="on" style="z-index: 5; white-space: normal; text-shadow: rgb(0, 0, 0) 6px -1px 5px !important; visibility: inherit; transition: none 0s ease 0s; text-align: center; line-height: 66px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 800; font-size: 38px; min-height: 0px; min-width: 854px; max-height: none; max-width: 854px; opacity: 1; transform: translate3d(0px, 0px, 0px); transform-origin: 50% 50% 0px;">Welcome&nbsp;&nbsp; to&nbsp;&nbsp; IIT&nbsp;&nbsp;Delhi
                            
                          </div></div></div></div> 
                          <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: visible; left: 514px; top: 596px; z-index: 5;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: hidden; transform: matrix(1, 0, 0, 1, 0, 0);"><div class="tp-caption tp-caption-ps rs-parallaxlevel-0 rs-hover-ready" id="slide-1-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['400','330','290','340']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="800" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-responsive="on" style="z-index: 5; white-space: nowrap; letter-spacing: 0px; visibility: inherit; transition: none 0s ease 0s; color: rgb(107, 107, 107); box-shadow: rgb(153, 153, 153) 0px 0px 0px 0px; text-align: inherit; line-height: 82px; margin: 0px; padding: 0px; font-weight: 400; font-size: 59px; min-height: 0px; min-width: 0px; max-height: none; max-width: none; opacity: 1; transform: translate3d(0px, 0px, 0px); transform-origin: 50% 50% 0px; border-width: 0px;">
                            <a class="btn btn-theme-colored2 btn-lg btn-flat text-white font-weight-600 tp-caption-ps ps-tp-parallax-wrap" href="https://home.iitd.ac.in/about.php">KNOW MORE</a>
                          </div></div></div></div> 
          
                      
                          <!-- LAYER NR. 4 -->
                          <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: visible; left: 0px; top: 548px; z-index: 5;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: hidden; transform: matrix(1, 0, 0, 1, 0, 0);"><div class="tp-caption rs-parallaxlevel-0 rs-hover-ready" id="slide-1-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['350','330','290','290']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="800" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-responsive="off" style="z-index: 5; white-space: nowrap; letter-spacing: 1px; visibility: inherit; transition: none 0s ease 0s; color: rgb(107, 107, 107); box-shadow: rgb(153, 153, 153) 0px 0px 0px 0px; text-align: inherit; line-height: 86px; margin: 0px; padding: 0px; font-weight: 400; font-size: 62px; min-height: 0px; min-width: 0px; max-height: none; max-width: none; opacity: 1; transform: translate3d(0px, 0px, 0px); transform-origin: 50% 50% 0px; border-width: 0px;">
                          </div></div></div></div>
                        </li>
          
          
          
                        <!-- SLIDE 2 -->
                        <li data-index="rs-2" data-transition="fade" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="images/slider/slider8.jpg" data-rotate="0" data-fstransition="fade" data-saveperformance="off" data-title="Web Show" data-description="" class="tp-revslider-slidesli" style="width: 100%; height: 100%; overflow: hidden;">
                          <!-- MAIN IMAGE -->
                          <div class="slotholder" style="position: absolute; top: 0px; left: 0px; z-index: 0; width: 100%; height: 100%; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px);"><!--Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="images/slider/slider8.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg defaultimg" data-no-retina="">--><div class="tp-bgimg defaultimg " data-bgcolor="undefined" style="background-repeat: no-repeat; background-image: url(&quot;images/slider/slider8.jpg&quot;); background-size: cover; background-position: center center; width: 100%; height: 100%; opacity: 0;" src="images/slider/slider8.jpg"></div></div>
                          <!-- LAYERS -->
                          <!-- LAYER NR. 1 -->
                          <div class="tp-parallax-wrap " style=" position:absolute;display:block;;visibility:hidden"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position:absolute;display:block;;"><div class="ar-bg-slide tp-caption tp-shape tp-shapewrapper tp-resizeme rs-parallaxlevel-0 bg-theme-colored-transparent-4" id="slide-2-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="opacity:0;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="500" data-basealign="slide" data-responsive_offset="on" style="z-index: 5; background-color: rgba(0, 0, 0, 0.35); border-color: rgb(0, 0, 0); visibility: hidden;"> 
                          </div></div></div></div>
                          <!-- LAYER NR. 2 -->
                          <div class="tp-parallax-wrap " style=" position:absolute;display:block;;visibility:hidden"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position:absolute;display:block;;"><div class="tp-caption tp-resizeme rs-parallaxlevel-0 text-uppercase font-roboto-slab font-weight-700" id="slide-2-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['220','195','160','170']" data-fontsize="['40','40','35','28']" data-lineheight="['70','60','50','45']" data-fontweight="['800','700','700','700']" data-textalign="['center','center','center','center']" data-width="['900','650','600','420']" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:0;y:0;s:inherit;e:inherit;" data-start="600" data-splitin="none" data-splitout="none" data-responsive_offset="on" style="z-index: 5; white-space: nowrap; text-shadow: rgb(0, 0, 0) 6px -1px 5px !important; color: white; visibility: hidden;">Follow&nbsp;&nbsp; Your&nbsp;&nbsp; Dreams @ IIT&nbsp;&nbsp; Delhi <p class="font-25"></p>
                          </div></div></div></div>
                          <!-- LAYER NR. 3 -->
                          <div class="tp-parallax-wrap " style=" position:absolute;display:block;;visibility:hidden"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position:absolute;display:block;;"><div class="tp-caption tp-resizeme text-white rs-parallaxlevel-0" id="slide-2-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['275','260','220','220']" data-fontsize="['16','16',18',16']" data-lineheight="['24','24','24','24']" data-fontweight="['400','400','400','400']" data-textalign="['center','center','center','center']" data-width="['800','650','600','460']" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:0;y:0;s:inherit;e:inherit;" data-start="700" data-splitin="none" data-splitout="none" data-responsive_offset="on" style="z-index: 5; white-space: nowrap; visibility: hidden;"><!-- We provides always our best educational services for our all students <br> and  always try to achieve our students trust and satisfaction -->
                          </div></div></div></div>
                          <!-- LAYER NR. 4 -->
                          <div class="tp-parallax-wrap " style=" position:absolute;display:block;;visibility:hidden"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position:absolute;display:block;;"><div class="tp-caption rs-parallaxlevel-0" id="slide-2-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['350','330','290','290']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="800" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-responsive="off" style="z-index: 5; white-space: nowrap; letter-spacing: 1px; visibility: hidden;">
                          </div></div></div></div>
                        </li>
          
                        <!-- SLIDE 3 -->
                        <li data-index="rs-3" data-transition="fade" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="images/slider/slide3.jpg" data-rotate="0" data-fstransition="fade" data-saveperformance="off" data-title="Web Show" data-description="" class="tp-revslider-slidesli" style="width: 100%; height: 100%; overflow: hidden;">
                          <!-- MAIN IMAGE -->
                          <div class="slotholder" style="position: absolute; top: 0px; left: 0px; z-index: 0; width: 100%; height: 100%; backface-visibility: hidden; transform: translate3d(0px, 0px, 0px);"><!--Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="images/slider/slide3.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg defaultimg" data-no-retina="">--><div class="tp-bgimg defaultimg " data-bgcolor="undefined" style="background-repeat: no-repeat; background-image: url(&quot;images/slider/slide3.jpg&quot;); background-size: cover; background-position: center center; width: 100%; height: 100%; opacity: 0;" src="images/slider/slide3.jpg"></div></div>
                          <!-- LAYERS -->
                          <!-- LAYER NR. 1 -->
                          <div class="tp-parallax-wrap " style=" position:absolute;display:block;;visibility:hidden"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position:absolute;display:block;;"><div class="ar-bg-slide tp-caption tp-shape tp-shapewrapper tp-resizeme rs-parallaxlevel-0 bg-theme-colored-transparent-4" id="slide-3-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="opacity:0;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="500" data-basealign="slide" data-responsive_offset="on" style="z-index: 5; background-color: rgba(0, 0, 0, 0.35); border-color: rgb(0, 0, 0); visibility: hidden;"> 
                          </div></div></div></div>
                          <!-- LAYER NR. 2 -->
                          <div class="tp-parallax-wrap " style=" position:absolute;display:block;;visibility:hidden"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position:absolute;display:block;;"><div class="tp-caption tp-resizeme rs-parallaxlevel-0 text-white text-uppercase font-roboto-slab font-weight-700" id="slide-3-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['220','195','160','170']" data-fontsize="['40','40','35','28']" data-lineheight="['70','60','50','45']" data-fontweight="['800','700','700','700']" data-textalign="['center','center','center','center']" data-width="['900','650','600','420']" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:0;y:0;s:inherit;e:inherit;" data-start="600" data-splitin="none" data-splitout="none" data-responsive_offset="on" style="z-index: 5; white-space: nowrap; text-shadow: rgb(0, 0, 0) 6px -1px 5px !important; visibility: hidden;">Excellence&nbsp;&nbsp; Through&nbsp;&nbsp; Research
                          </div></div></div></div>
                          <!-- LAYER NR. 3 -->
                          <div class="tp-parallax-wrap " style=" position:absolute;display:block;;visibility:hidden"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position:absolute;display:block;;"><div class="tp-caption tp-resizeme text-white rs-parallaxlevel-0" id="slide-3-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['275','260','220','220']" data-fontsize="['16','16',18',16']" data-lineheight="['24','24','24','24']" data-fontweight="['400','400','400','400']" data-textalign="['center','center','center','center']" data-width="['800','650','600','460']" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:0;y:0;s:inherit;e:inherit;" data-start="700" data-splitin="none" data-splitout="none" data-responsive_offset="on" style="z-index: 5; white-space: nowrap; visibility: hidden;"><!-- We provides always our best educational services for our all students <br> and  always try to achieve our students trust and satisfaction -->
                          </div></div></div></div>
                          <!-- LAYER NR. 4 -->
                          <div class="tp-parallax-wrap " style=" position:absolute;display:block;;visibility:hidden"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position:absolute;display:block;;"><div class="tp-caption rs-parallaxlevel-0" id="slide-3-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['350','330','290','290']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="800" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-responsive="off" style="z-index: 5; white-space: nowrap; letter-spacing: 1px; visibility: hidden;">
                          </div></div></div></div>
                        </li>
                  
                  <!-- SLIDE 4 -->
                        <!--<li data-index="rs-4" data-transition="fade" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="images/slider/slide4.jpg" data-rotate="0"  data-fstransition="fade" data-saveperformance="off" data-title="Web Show" data-description="">-->
                          <!-- MAIN IMAGE -->
                          <!--<img src="images/slider/slide4.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg" data-no-retina>-->
                          <!-- LAYERS -->
                          <!-- LAYER NR. 1 -->
                          <div class="tp-parallax-wrap " style=" position:absolute;display:block;;visibility:hidden"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position:absolute;display:block;;"><div class="ar-bg-slide tp-caption tp-shape tp-shapewrapper tp-resizeme rs-parallaxlevel-0 bg-theme-colored-transparent-4" id="slide-3-layer-1_7645" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="opacity:0;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="500" data-basealign="slide" data-responsive_offset="on" style="z-index: 5; background-color: rgba(0, 0, 0, 0.35); border-color: rgb(0, 0, 0); visibility: hidden;"> 
                          </div></div></div></div>
                          <!-- LAYER NR. 2 -->
                          <div class="tp-parallax-wrap " style=" position:absolute;display:block;;visibility:hidden"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position:absolute;display:block;;"><div class="tp-caption tp-resizeme rs-parallaxlevel-0 text-white text-uppercase font-roboto-slab font-weight-700" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['260','195','160','170']" data-fontsize="['40','40','35','28']" data-lineheight="['70','60','50','45']" data-fontweight="['800','700','700','700']" data-textalign="['center','center','center','center']" data-width="['900','650','600','420']" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:0;y:0;s:inherit;e:inherit;" data-start="600" data-splitin="none" data-splitout="none" data-responsive_offset="on" style="z-index: 5; white-space: nowrap; text-shadow: rgb(0, 0, 0) 6px -1px 5px !important; visibility: hidden;" id="layer-267533415">Adding&nbsp;&nbsp; life&nbsp;&nbsp; to&nbsp;&nbsp;  events
                          </div></div></div></div>
                          <!-- LAYER NR. 3 -->
                          <div class="tp-parallax-wrap " style=" position:absolute;display:block;;visibility:hidden"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position:absolute;display:block;;"><div class="tp-caption tp-resizeme text-white rs-parallaxlevel-0" id="slide-3-layer-3_8974" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['275','260','220','220']" data-fontsize="['16','16',18',16']" data-lineheight="['24','24','24','24']" data-fontweight="['400','400','400','400']" data-textalign="['center','center','center','center']" data-width="['800','650','600','460']" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:0;y:0;s:inherit;e:inherit;" data-start="700" data-splitin="none" data-splitout="none" data-responsive_offset="on" style="z-index: 5; white-space: nowrap; visibility: hidden;"><!-- We provides always our best educational services for our all students <br> and  always try to achieve our students trust and satisfaction -->
                          </div></div></div></div>
                          <!-- LAYER NR. 4 -->
                          <div class="tp-parallax-wrap " style=" position:absolute;display:block;;visibility:hidden"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position:absolute;display:block;;"><div class="tp-caption rs-parallaxlevel-0" id="slide-3-layer-4_7069" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['350','330','290','290']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="800" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-responsive="off" style="z-index: 5; white-space: nowrap; letter-spacing: 1px; visibility: hidden;">
                          </div></div></div></div>
                        
                      </ul>
                      <div class="tp-bannertimer tp-bottom" style="height: 5px; background-color: rgba(255, 255, 255, 0.2); width: 54.0125%; visibility: visible; transform: translate3d(0px, 0px, 0px);"></div>
                    <div class="tp-loader off" style="display: none;"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div><div class="tp-leftarrow tparrows zeus" style="top: 50%; transform: matrix(1, 0, 0, 1, 30, -35); left: 0px; visibility: hidden; opacity: 0;"><div class="tp-title-wrap">    <div class="tp-arr-imgholder" style="background-image: url(&quot;images/slider/slide3.jpg&quot;);"></div> </div></div><div class="tp-rightarrow tparrows zeus" style="top: 50%; transform: matrix(1, 0, 0, 1, -100, -35); left: 100%; visibility: hidden; opacity: 0;"><div class="tp-title-wrap">    <div class="tp-arr-imgholder" style="background-image: url(&quot;images/slider/slider8.jpg&quot;);"></div> </div></div><div class="tp-bullets metis horizontal nav-pos-hor-center nav-pos-ver-bottom nav-dir-horizontal" style="width: 160px; height: 50px; top: 100%; transform: matrix(1, 0, 0, 1, -80, -80); left: 50%; visibility: hidden; opacity: 0;"><div class="tp-bullet selected" style="left: 0px; top: 0px;"><span class="tp-bullet-img-wrap"><span class="tp-bullet-image" style="background-image: url(&quot;images/slider/slide1.jpg&quot;);"></span></span></div><div class="tp-bullet" style="left: 55px; top: 0px;"><span class="tp-bullet-img-wrap"><span class="tp-bullet-image" style="background-image: url(&quot;images/slider/slider8.jpg&quot;);"></span></span></div><div class="tp-bullet" style="left: 110px; top: 0px;"><span class="tp-bullet-img-wrap"><span class="tp-bullet-image" style="background-image: url(&quot;images/slider/slide3.jpg&quot;);"></span></span></div></div></div>
                  </div><div class="tp-fullwidth-forcer" style="width: 100%; height: 1004px;"></div></div>
          
                  <!-- END REVOLUTION SLIDER -->
                  <script type="text/javascript">
                    var tpj=jQuery;
                    var revapi34;
                    tpj(document).ready(function() {
                      if(tpj("#rev_slider_home").revolution == undefined){
                        revslider_showDoubleJqueryError("#rev_slider_home");
                      }else{
                        revapi34 = tpj("#rev_slider_home").show().revolution({
                          sliderType:"standard",
                          jsFileLocation:"js/revolution-slider/js/",
                          sliderLayout:"fullscreen",
                          dottedOverlay:"none",
                          delay:8000,
                          navigation: {
                            keyboardNavigation:"on",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation:"off",
                            onHoverStop:"off",
                            touch:{
                              touchenabled:"on",
                              swipe_threshold: 75,
                              swipe_min_touches: 1,
                              swipe_direction: "horizontal",
                              drag_block_vertical: false
                            }
                            ,
                            arrows: {
                              style:"zeus",
                              enable:true,
                              hide_onmobile:true,
                              hide_under:600,
                              hide_onleave:true,
                              hide_delay:200,
                              hide_delay_mobile:1200,
                              tmp:'<div class="tp-title-wrap">    <div class="tp-arr-imgholder"></div> </div>',
                              left: {
                                h_align:"left",
                                v_align:"center",
                                h_offset:30,
                                v_offset:0
                              },
                              right: {
                                h_align:"right",
                                v_align:"center",
                                h_offset:30,
                                v_offset:0
                              }
                            },
                            bullets: {
                              enable:true,
                              hide_onmobile:true,
                              hide_under:600,
                              style:"metis",
                              hide_onleave:true,
                              hide_delay:200,
                              hide_delay_mobile:1200,
                              direction:"horizontal",
                              h_align:"center",
                              v_align:"bottom",
                              h_offset:0,
                              v_offset:30,
                              space:5,
                              tmp:'<span class="tp-bullet-img-wrap"><span class="tp-bullet-image"></span></span>'
                            }
                          },
                          viewPort: {
                            enable:true,
                            outof:"pause",
                            visible_area:"80%"
                          },
                          responsiveLevels:[1240,1024,778,480],
                          gridwidth:[1240,1024,778,480],
                          gridheight:[600,550,500,450],
                          lazyType:"none",
                          parallax: {
                            type:"scroll",
                            origo:"enterpoint",
                            speed:400,
                            levels:[5,10,15,20,25,30,35,40,45,50],
                          },
                          shadow:0,
                          spinner:"off",
                          stopLoop:"off",
                          stopAfterLoops:-1,
                          stopAtSlide:-1,
                          shuffle:"off",
                          autoHeight:"off",
                          hideThumbsOnMobile:"off",
                          hideSliderAtLimit:0,
                          hideCaptionAtLimit:0,
                          hideAllCaptionAtLilmit:0,
                          debugMode:false,
                          fallbacks: {
                            simplifyAll:"off",
                            nextSlideOnWindowFocus:"off",
                            disableFocusListener:false,
                          }
                        });
                      }
                    }); /*ready*/
                  </script>
                <!-- END REVOLUTION SLIDER -->
          
                </div>
              </section>
              <section>
                <div class="container pt-0 pb-0">
                  <div class="section-content">
                    <div class="row equal-height-inner home-boxes" data-margin-top="-140px" style="margin-top: -140px;">
                      
                      <div class="col-xs-6 col-sm-6 col-md-3 pl-0 pl-sm-15 pr-0 pr-sm-0 mt-sm-0 wow fadeInLeft animation-delay1" style="min-height: 13.31em; visibility: visible; animation-name: fadeInLeft;">
                  <a href="#research" class="text-grey smooth-scroll-to-target">
                        <div class="ar-data-bg" style="min-height: 208.96px;">
                          <div class="features-box-colored text-center p-15 pt-30 pb-20">
                            <h4 class="text-uppercase font-weight-600 mt-0">Research</h4>
                            <i class="fa fa-flask font-54 mb-10 text-grey"></i>
                            
                            <p class="text-grey">Mapping the Innovations &amp; Collaborations</p>
                          </div>
                        </div>
                  </a>
                      </div>
                      <div class="col-xs-6 col-sm-6 col-md-3 pl-0 pl-sm-0 pr-0 pr-sm-15 mt-sm-0 wow fadeInLeft animation-delay2" style="min-height: 13.31em; visibility: visible; animation-name: fadeInLeft;">
                <a href="#startups" class="text-white smooth-scroll-to-target">
                        <div class="ar-data-bg1" style="min-height: 208.96px;">
                          <div class="features-box-colored text-center p-15 pt-30 pb-20">
                            <h4 class="text-uppercase font-weight-600 mt-0 text-white">Startups</h4>
                            <i class="fa fa-rocket font-54 mb-10 text-white"></i>
                            
                            <p class="text-white">Success stories of researchers &amp; entrepreneurs</p>
                          </div>
                        </div>
                  </a>
                      </div>
                <div class="col-xs-6 col-sm-6 col-md-3 pl-0 pl-sm-15 pr-0 pr-sm-0 mt-sm-0 wow fadeInLeft animation-delay3 news-blk" style="min-height: 13.31em; visibility: visible; animation-name: fadeInLeft;">
                <a href="#news" class="text-grey smooth-scroll-to-target">
                        <div class="ar-data-bg" style="min-height: 208.96px;">
                          <div class="features-box-colored text-center p-15 pt-30 pb-20">
                            <h4 class="text-uppercase font-weight-600 mt-0">News</h4>
                            <i class="fa fa-newspaper-o font-54 mb-10 text-grey"></i>
                                                                                  
                                                                                  
                               
                            <p class="text-grey">Panorama of Events</p>
                          </div>
                        </div>
                  </a>
                      </div>
                      <div class="col-xs-6 col-sm-6 col-md-3 pl-0 pl-sm-0 pr-0 pr-sm-15 mt-sm-0 wow fadeInLeft animation-delay4 campus-blk" style="min-height: 13.31em; visibility: visible; animation-name: fadeInLeft;">
                <a href="#faq" class="text-white smooth-scroll-to-target">
                        <div class="ar-data-bg1" style="min-height: 208.96px;">
                          <div class="features-box-colored text-center p-15 pt-30 pb-20">
                            <h4 class="text-uppercase font-weight-600 mt-0 text-white">Campus Life</h4>
                            <i class="fa fa-users font-54 mb-10 text-white"></i>
                            
                            <p class="text-white">Explore Beyond the Classrooms</p>
                          </div>
                        </div>
                  </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            
          
            
            <!--Important Announcements -->
            <section id="courses">
                <div class="container pb-40 ar-container-pad">
              <div class="section-title text-center">
                    <div class="row">
                      <div class="col-md-12">
                        <h2 class="title text-uppercase"><span class="text-theme-colored2">Important  </span> Announcement</h2>   
                        <div class="double-line-bottom-centered-theme-colored-2"></div>
                      </div>
          
                    </div>
                  </div>
                  <hr>
                  <div class="row">
              <div class="col-md-12 text-justify">
                  <h3 class="kk-bold mt-0 text-theme-colored2" style="display: inline-block; vertical-align: middle;">
                      <a href="https://home.iitd.ac.in/jobs-iitd/index.php" target="_blank" class="text-theme-colored2">Special Drive vacancy positions at Assistant Professor level Advertised. Last Date: 15 Dec 2023.</a>
                  </h3>
                  <div class="pulse-button" style="vertical-align: middle;"><a href="https://home.iitd.ac.in/jobs-iitd/index.php" target="_blank" class="text-white">Click Here</a></div>
              </div>
          </div>
          
                    <hr>
                  <div class="row">
                  <div class="col-md-12 text-justify">
                    <h3 class="kk-bold mt-0 text-theme-colored2">PG Admissions (2nd Semester 2023-24) for PhD/ MSR programmes</h3>
                    <ul class="list mb-30">
                      <li class="text-theme-colored2">Advertisement. <a href="https://owncloud.iitd.ac.in/nextcloud/index.php/s/Qo8j7cKfft5qtCE" target="_blank" class="text-theme-colored2"><strong>Hindi</strong></a> | <a href="https://owncloud.iitd.ac.in/nextcloud/index.php/s/zrQAAaT5tTHjkNo" target="_blank" class="text-theme-colored2"><strong>English</strong></a></li>
          
                      <li class=""><a href="https://owncloud.iitd.ac.in/nextcloud/index.php/s/4yBFrKd7NMoekf4" target="_blank" class="text-theme-colored2">Information Brochure</a></li>
          
                      <li class=""><a href="https://ecampus.iitd.ac.in/PGADM/login" target="_blank" class="text-theme-colored2">Apply Now</a></li>
          
                      <li class=""><a href="https://owncloud.iitd.ac.in/nextcloud/index.php/s/fHFrmBz66yrqyQC" target="_blank" class="text-theme-colored2">Frequently Asked Questions (FAQ) for PG Application</a></li>
          
                      <li class=""><a href="https://home.iitd.ac.in/uploads/announcements/hostel-accommodation-phd-msr-fulltime.pdf" target="_blank" class="text-theme-colored2">Regarding Hostel Accommodation </a></li>
          
                      <!-- <div class="text-center">
              <a href="https://ecampus.iitd.ac.in/PGADM/login" target="_blank" class="text-theme-colored2">PG Admissions including PhD</a>
          </div> -->
                </ul>
              </div>
            </div>
                 <!--  <div class="row">
                  <a href="ug-admissions.php" aria-label="UG Admissions">
                    <img src="images/ug.jpg" class="ar-imp-news" alt="UG">
                    </a> 
                <small class="text-black">
          
                Last Updated on: July 27 2023.		  </small>
                <hr>
                  </div> -->
              
              <!-- <h4 class="font-18 mb-5"><i class="fa fa-caret-right" aria-hidden="true"></i> <a href="pg-admissions.php">PG Admission (Semester 2) for PhD and MSR</a></h4>
              <p class="mt-5 text-black">The Date for PG Admission for PhD and MSR has been extended to 7<sup>th</sup> November 2020, 5:00 PM</p> -->
              <hr>
                </div>
              </section>
                
          
            <!--Important Announcements End-->
            
            <!-- Horizontal News-->
          <!-- 	<section class="ar-announcement">
                <div class="container pt-20 pb-0">
                  <div class="section-content">
                <div class="row">
                <div class="col-md-12 arbn-news">
                    <div class="breakingNews bn-bordernone" id="bn1">
                      <div class="bn-title" style="width: auto;"><h2 class="d-inline-block">Bulletin</h2><span></span></div>
                      <ul style="left: 208px;">
                        <li style="display: block; width: 100%;"><a href="uploads/self-study-list-2nd-sem-2020-21.pdf" target="_blank">Self Study List 2nd Semester 2020-21</a></li>
                        <li style="display: none; width: 100%;"><a href="institute-lecture-jp-holdren.php">Institute Lecture: Indo-US Cooperation on Science and Technology for Sustainability: History, Challenges, and Opportunities</a></li>
                      </ul>
                      <div class="bn-navi">
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </section> -->
            <!--Horizontal News -->
          
          <!--   <section class=" page-section-ptb pb-10 pt-10 center text-center bg-silver-deep mt-20">
            <div class="container">
              <div class="row justify-content-center">
              </div>
              <div class="row">
          
                <div class="col-md-12 center">
                  <div class="section-title ">
                    <h2 class="package-type font-weight-400 bg-theme-colored2 text-white mt-0 mb-0 pt-10 pb-10 font-20 text-uppercase">Convocation 2022 Webcast Info <i class="fa fa-file-movie-o"></i></h2>
                  </div>
              <img class="img-fluid full-width d-none" src="images/webcast.jpg" alt="">
                  <div class="">
                    <ul class="font-25"> 
                      <a href="https://youtu.be/zpXhJUoVMh0" class=' text-uppercase text-theme-colored2'target="_blank"> <i class="fa fa-youtube-play"></i>  IIT DELHI ANNUAL CONVOCATION 2022 <strong>WEB BROADCAST</strong></a> 
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section> -->
            
            
            <!--About-->
                 <section>
                <div class="container pb-70 about-blk">
                  <div class="section-content ar-container-pad">
                    <div class="row">
                
                <div class="col-md-4">
                        <h2 class="text-uppercase text-theme-colored mt-0 mt-sm-30">About <span class="text-theme-colored2">IIT DELHI</span></h2>
                        <div class="double-line-bottom-theme-colored-2"></div>
                        <p class="text-gray text-justify">Indian Institute of 
          Technology Delhi is one of the Twenty Three IITs created to be Centres 
          of Excellence for training, research and development in science, 
          engineering and technology in India. Established as College of 
          Engineering in 1961, the Institute was later declared as an Institution 
          of...</p>
                  <a href="https://home.iitd.ac.in/about.php" class="btn btn-default btn-sm">Read more</a>
                  <a target="_blank" href="https://home.iitd.ac.in/uploads/newsletters/Newsletter-Aug-23.pdf" class="btn btn-theme-colored2 btn-sm">Newsletter</a>
                      </div>
                
                <div class="col-md-3" aria-hidden="true">
                <video width="100%" height="220px" poster="images/thumb1.jpg" controls="controls">
                  <source src="Home%20Page%20IIT%20Delhi_files/IIT-Delhi-Campus-Tour.mp4" type="video/mp4">
                  <source src="Home%20Page%20IIT%20Delhi_files/IIT-Delhi-Campus-Tour.mp4" type="video/ogg">
                </video>
                      </div>            <div class="col-md-5 director">
                  <div class="col-md-12 bg-theme-iitd">
                      <a href="javascript:void(0)"><h2 class="text-uppercase text-theme-colored mt-0 mt-sm-30">Director's <span class="text-theme-colored2">Corner</span></h2></a>
                      <div class="double-line-bottom-theme-colored-2"></div>
                      
                      <img class="maxwidth500 col-md-4 pl-0" src="Home%20Page%20IIT%20Delhi_files/director-h.jpg" alt="Prof. Rangan Banerjee">
                      
                      <p class="m-0"><span class="kk-bold font-16 text-black">Prof. Rangan Banerjee </span></p>
                     <!-- <p class="text-gray text-justify">Welcome to IIT Delhi. You have arrived at one of the finest institutions in India, an institution that is ranked among the top 50 in the world for Engineering &amp; Technology in the recent QS world subject rankings...</p> -->
                     <p class="text-gray text-justify">Prof. Rangan Banerjee has 
          taken over the charge as Director, Indian Institute of Technology Delhi 
          (IIT Delhi) with effect from the forenoon of 15th February, 2022.</p>
                      <a href="https://home.iitd.ac.in/uploads/Joining%20of%20Director%20IITD.pdf" target="_blank" class="btn btn-default btn-sm">Read more</a>
                  </div>
                      </div>
                
                    </div>
                  </div>
                </div>
              </section>
            <!--About End-->
          
            <!-- Section:Departments -->
            <section id="courses" class="bg-silver-deep">
                <div class="container pb-40 ar-container-pad">
                  <div class="section-title text-center">
                    <div class="row">
                      <div class="col-md-12">
                        <h2 class="title text-uppercase"><span class="text-theme-colored2">Academic</span> Units</h2>   
                        <div class="double-line-bottom-centered-theme-colored-2"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="row text-center">
                    <div class="col-sm-3 col-xs-6">
                      <a href="https://home.iitd.ac.in/departments.php" class="icon">
                      <div class="icon-box iconbox-border p-15">
                          <img class="pt-20" src="Home%20Page%20IIT%20Delhi_files/departments-1.png">
                        <h4 class="icon-box-title kk-lh2 kk-bold text-theme-colored2">Departments</h4>
                      </div>
                    </a>
                    </div>
                    
                    <div class="col-sm-3 col-xs-6">
                      <a href="https://home.iitd.ac.in/centres.php" class="icon">
                      <div class="icon-box iconbox-border p-15">
                          <img class="pt-20" src="Home%20Page%20IIT%20Delhi_files/centres.png">
                        <h4 class="icon-box-title kk-lh2 kk-bold text-theme-colored2">Centres</h4>
                      </div>
                    </a>
                    </div>
                    <div class="col-sm-3 col-xs-6">
                      <a href="https://home.iitd.ac.in/schools.php" class="icon">
                        <div class="icon-box iconbox-border p-15">
                          <img class="pt-20" src="Home%20Page%20IIT%20Delhi_files/school.png">
                          <h4 class="icon-box-title kk-lh2 kk-bold text-theme-colored2">Schools</h4>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-3 col-xs-6" id="ug-section">
                      <a href="https://home.iitd.ac.in/centres-of-excellence.php" class="icon">
                        <div class="icon-box iconbox-border p-15">
                          <img class="pt-20" src="Home%20Page%20IIT%20Delhi_files/centres-of-excellence.png">
                          <h4 class="icon-box-title kk-lh2 kk-bold text-theme-colored2">Centres of Excellence</h4>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            <!-- Section:Departments End-->
            
            
            <!-- Section:Admission zone -->
              <!-- <section id="admission-zone">
                <div class="container">
                  <div class="section-content">
                    <div class="row">
                <div class="col-md-12">
                        <h2 class="title text-uppercase text-center"><span class="text-theme-colored2">Admission</span> Zone</h2>   
                        <div class="double-line-bottom-centered-theme-colored-2"></div>
                      </div>
                                 </div>
                  </div>
                </div>
              </section> -->
             <!-- Section: Admission zone End-->
             
             <!-- Section:Covid zone -->
             <!-- Section:Harghar Tiranga zone -->
              <!-- <section id="admission-zone" class="bg-silver-deep">
                <div class="container">
                  <div class="section-content">
                    <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 mb-sm-30">
                        <div class="pricing-table bg-silver-deep text-center maxwidth400 pt-0">
                          <a href="http://www.harghartiranga.com/" target="_blank"><img class="ar-covid-banner" src="images/har-ghar.jpg"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> -->
             <!--Section:Covid zone End-->
             <!--Section:Covid zone End-->
            
            <!-- Section: Corona Update-->
             <section id="corona-update" class="popup bg-silver-deep">
                <div class="container pb-40 ar-container-pad">
                  <div class="section-content">
                
                    <div class="row">
                <!-- Advisory Note -->
                
                      <div id="startups" class="col-md-12">
                   <h2 class="text-uppercase title"><span class="text-theme-colored2">Startups</span>@IITD <i class="fa fa-rocket"></i> <a href="https://home.iitd.ac.in/startup-all.php" class="btn btn-theme-colored2 btn-xs ar-bt-margin">View all</a></h2>            
                          <p class="text-uppercase mb-0">Learning the vocabulary of business</p>
                  <div class="double-line-bottom-theme-colored-2"></div>
                        <div class="owl-carousel-3col owl-nav-top owl-carousel owl-theme owl-loaded owl-drag" data-nav="true">
                     <!-- Section: Startups-->
                            
                    
                    <!--Old Posts -->
                    
                   
                   
                  
                    <!--Old Posts End-->
          
                        <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-1273px, 0px, 0px); transition: all 0.25s ease 0s; width: 3184px;"><div class="owl-item cloned" style="width: 303.333px; margin-right: 15px;"><div class="item">
                            <article class="post clearfix mb-30">
                              <div class="entry-header">
                                <div class="post-thumb thumb"> 
                                  <img src="Home%20Page%20IIT%20Delhi_files/antim.jpg" alt="" class="img-responsive img-fullwidth"> 
                                </div>                    
                                
                              </div>
                              <div class="entry-content bg-white p-15">
                                <div class="entry-meta media no-bg no-border mt-0 mb-10">
                                  <div class="media-body pl-0">
                                    <div class="event-content pull-left flip">
                                      <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/press-antim.php" aria-label="IITD Startups">IIT Delhi-incubated Startup Launches Antimicrobial Water Storage Containers ‘AqCure’ </a></h4>
          
                                    </div>
                                  </div>
                                </div>
                                 <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/press-antim.php" aria-label="IITD Startups">Read more</a>
                              </div>
                            </article>
                          </div></div><div class="owl-item cloned" style="width: 303.333px; margin-right: 15px;"><div class="item">
                            <article class="post clearfix mb-30">
                              <div class="entry-header">
                                <div class="post-thumb thumb"> 
                                  <img src="Home%20Page%20IIT%20Delhi_files/etex.jpg" alt="" class="img-responsive img-fullwidth"> 
                                </div>                    
                                
                              </div>
                              <div class="entry-content bg-white p-15">
                                <div class="entry-meta media no-bg no-border mt-0 mb-10">
                                  <div class="media-body pl-0">
                                    <div class="event-content pull-left flip">
                                      <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/startup-etex.php" aria-label="IITD Startups">COVID-19 Care: IIT Delhi Startups E-TEX and Clensta Launch Antiviral Protection Kit for Masses</a></h4>
          
                                    </div>
                                  </div>
                                </div>
                                 <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/startup-etex.php" aria-label="IITD Startups">Read more</a>
                              </div>
                            </article>
                          </div></div><div class="owl-item cloned" style="width: 303.333px; margin-right: 15px;"><div class="item">
                            <article class="post clearfix mb-30">
                              <div class="entry-header">
                                <div class="post-thumb thumb"> 
                                  <img src="Home%20Page%20IIT%20Delhi_files/roposo.jpg" alt="" class="img-responsive img-fullwidth"> 
                                </div>                    
                                
                              </div>
                              <div class="entry-content bg-white p-15">
                                <div class="entry-meta media no-bg no-border mt-0 mb-10">
                                  <div class="media-body pl-0">
                                    <div class="event-content pull-left flip">
                                      <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/startup-roposo.php" aria-label="IITD Startups">Roposo: Indian video-sharing social media platform</a></h4>
          
                                    </div>
                                  </div>
                                </div>
                                 <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/startup-roposo.php" aria-label="IITD Startups">Read more</a>
                              </div>
                            </article>
                          </div></div><div class="owl-item" style="width: 303.333px; margin-right: 15px;"><div class="item">
                            <article class="post clearfix mb-30">
                              <div class="entry-header">
                                <div class="post-thumb thumb"> 
                                  <img src="Home%20Page%20IIT%20Delhi_files/escooter.jpg" alt="Geliose Mobility, an IIT Delhi incubated startup, launches ‘HOPE’, an affordable electric scooter for last mile delivery and personal commute" class="img-responsive img-fullwidth"> 
                                </div>                    
                                
                              </div>
                              <div class="entry-content bg-white p-15">
                                <div class="entry-meta media no-bg no-border mt-0 mb-10">
                                  <div class="media-body pl-0">
                                    <div class="event-content pull-left flip">
                                      <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/news-escooter.php" aria-label="IITD Startups">Geliose
           Mobility, an IIT Delhi incubated startup, launches ‘HOPE’, an 
          affordable electric scooter for last mile delivery and personal commute</a></h4>
          
                                    </div>
                                  </div>
                                </div>
                                 <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-escooter.php" aria-label="IITD Startups">Read more</a>
                              </div>
                            </article>
                          </div></div><div class="owl-item active" style="width: 303.333px; margin-right: 15px;"><div class="item">
                            <article class="post clearfix mb-30">
                              <div class="entry-header">
                                <div class="post-thumb thumb"> 
                                  <img src="Home%20Page%20IIT%20Delhi_files/antim.jpg" alt="" class="img-responsive img-fullwidth"> 
                                </div>                    
                                
                              </div>
                              <div class="entry-content bg-white p-15">
                                <div class="entry-meta media no-bg no-border mt-0 mb-10">
                                  <div class="media-body pl-0">
                                    <div class="event-content pull-left flip">
                                      <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/press-antim.php" aria-label="IITD Startups">IIT Delhi-incubated Startup Launches Antimicrobial Water Storage Containers ‘AqCure’ </a></h4>
          
                                    </div>
                                  </div>
                                </div>
                                 <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/press-antim.php" aria-label="IITD Startups">Read more</a>
                              </div>
                            </article>
                          </div></div><div class="owl-item active" style="width: 303.333px; margin-right: 15px;"><div class="item">
                            <article class="post clearfix mb-30">
                              <div class="entry-header">
                                <div class="post-thumb thumb"> 
                                  <img src="Home%20Page%20IIT%20Delhi_files/etex.jpg" alt="" class="img-responsive img-fullwidth"> 
                                </div>                    
                                
                              </div>
                              <div class="entry-content bg-white p-15">
                                <div class="entry-meta media no-bg no-border mt-0 mb-10">
                                  <div class="media-body pl-0">
                                    <div class="event-content pull-left flip">
                                      <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/startup-etex.php" aria-label="IITD Startups">COVID-19 Care: IIT Delhi Startups E-TEX and Clensta Launch Antiviral Protection Kit for Masses</a></h4>
          
                                    </div>
                                  </div>
                                </div>
                                 <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/startup-etex.php" aria-label="IITD Startups">Read more</a>
                              </div>
                            </article>
                          </div></div><div class="owl-item active" style="width: 303.333px; margin-right: 15px;"><div class="item">
                            <article class="post clearfix mb-30">
                              <div class="entry-header">
                                <div class="post-thumb thumb"> 
                                  <img src="Home%20Page%20IIT%20Delhi_files/roposo.jpg" alt="" class="img-responsive img-fullwidth"> 
                                </div>                    
                                
                              </div>
                              <div class="entry-content bg-white p-15">
                                <div class="entry-meta media no-bg no-border mt-0 mb-10">
                                  <div class="media-body pl-0">
                                    <div class="event-content pull-left flip">
                                      <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/startup-roposo.php" aria-label="IITD Startups">Roposo: Indian video-sharing social media platform</a></h4>
          
                                    </div>
                                  </div>
                                </div>
                                 <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/startup-roposo.php" aria-label="IITD Startups">Read more</a>
                              </div>
                            </article>
                          </div></div><div class="owl-item cloned" style="width: 303.333px; margin-right: 15px;"><div class="item">
                            <article class="post clearfix mb-30">
                              <div class="entry-header">
                                <div class="post-thumb thumb"> 
                                  <img src="Home%20Page%20IIT%20Delhi_files/escooter.jpg" alt="Geliose Mobility, an IIT Delhi incubated startup, launches ‘HOPE’, an affordable electric scooter for last mile delivery and personal commute" class="img-responsive img-fullwidth"> 
                                </div>                    
                                
                              </div>
                              <div class="entry-content bg-white p-15">
                                <div class="entry-meta media no-bg no-border mt-0 mb-10">
                                  <div class="media-body pl-0">
                                    <div class="event-content pull-left flip">
                                      <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/news-escooter.php" aria-label="IITD Startups">Geliose
           Mobility, an IIT Delhi incubated startup, launches ‘HOPE’, an 
          affordable electric scooter for last mile delivery and personal commute</a></h4>
          
                                    </div>
                                  </div>
                                </div>
                                 <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-escooter.php" aria-label="IITD Startups">Read more</a>
                              </div>
                            </article>
                          </div></div><div class="owl-item cloned" style="width: 303.333px; margin-right: 15px;"><div class="item">
                            <article class="post clearfix mb-30">
                              <div class="entry-header">
                                <div class="post-thumb thumb"> 
                                  <img src="Home%20Page%20IIT%20Delhi_files/antim.jpg" alt="" class="img-responsive img-fullwidth"> 
                                </div>                    
                                
                              </div>
                              <div class="entry-content bg-white p-15">
                                <div class="entry-meta media no-bg no-border mt-0 mb-10">
                                  <div class="media-body pl-0">
                                    <div class="event-content pull-left flip">
                                      <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/press-antim.php" aria-label="IITD Startups">IIT Delhi-incubated Startup Launches Antimicrobial Water Storage Containers ‘AqCure’ </a></h4>
          
                                    </div>
                                  </div>
                                </div>
                                 <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/press-antim.php" aria-label="IITD Startups">Read more</a>
                              </div>
                            </article>
                          </div></div><div class="owl-item cloned" style="width: 303.333px; margin-right: 15px;"><div class="item">
                            <article class="post clearfix mb-30">
                              <div class="entry-header">
                                <div class="post-thumb thumb"> 
                                  <img src="Home%20Page%20IIT%20Delhi_files/etex.jpg" alt="" class="img-responsive img-fullwidth"> 
                                </div>                    
                                
                              </div>
                              <div class="entry-content bg-white p-15">
                                <div class="entry-meta media no-bg no-border mt-0 mb-10">
                                  <div class="media-body pl-0">
                                    <div class="event-content pull-left flip">
                                      <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/startup-etex.php" aria-label="IITD Startups">COVID-19 Care: IIT Delhi Startups E-TEX and Clensta Launch Antiviral Protection Kit for Masses</a></h4>
          
                                    </div>
                                  </div>
                                </div>
                                 <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/startup-etex.php" aria-label="IITD Startups">Read more</a>
                              </div>
                            </article>
                          </div></div></div></div><div class="owl-nav"><button role="presentation" class="owl-prev"><i class="fa fa-chevron-left"></i></button><button role="presentation" class="owl-next"><i class="fa fa-chevron-right"></i></button></div><div class="owl-dots disabled"></div></div>
                      </div>
                  
                  
                    </div>
                  </div>
                </div>
              </section>
              <!-- Section: News -->
              <section id="news" class="bg-silver-deep">
            <div class="container pb-40 ar-container-pad">
              <div class="section-title">
          
                <div class="row">
                  <div class="col-md-8">
                    <h2 class="text-uppercase title">Latest <span class="text-theme-colored2">News </span><i class="fa fa-newspaper-o"></i> <a href="https://home.iitd.ac.in/news-all.php" class="btn btn-theme-colored2 btn-xs ar-bt-margin">View all</a></h2>
                    <p class="text-uppercase mb-0">Campus Bulletin</p>
                    <div class="double-line-bottom-theme-colored-2"></div>
          
                    <div class="owl-carousel-2col owl-nav-top owl-carousel owl-theme owl-loaded owl-drag" data-nav="true">
                
                   
                   
                   
                   
                   
                   
                   
                   
                         
                
                <!-- cep-->
                      <!-- <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="http://cepqip.iitd.ac.in/pdf/DesignThinkingInnovation.pdf" target="_blank">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/cep-innovation.jpg" alt="Certificate Programme in 'Design Thinking and Innovation'">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">17</li>
                                  <li class="font-12 text-white text-uppercase">March</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="http://cepqip.iitd.ac.in/pdf/DesignThinkingInnovation.pdf" target="_blank">Certificate Programme in 'Design Thinking and Innovation'</a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="http://cepqip.iitd.ac.in/pdf/DesignThinkingInnovation.pdf" target="_blank">Know More </a>
                          </div>
                        </article>
                      </div> -->
                      
          
                     <!--  <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="news-mg-motar.php">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/mg.jpg" alt="MG Motor India extends its relationship with IIT Delhi">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">17</li>
                                  <li class="font-12 text-white text-uppercase">March</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="news-mg-motar.php">MG Motor India extends its relationship with IIT Delhi</a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="news-mg-motar.php">Know More </a>
                          </div>
                        </article>
                      </div>
                      
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="news-huji.php">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/huji.jpg" alt="Certificate Programme in 'Industrial Design, Innovation &amp; Entrepreneurship'">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">12</li>
                                  <li class="font-12 text-white text-uppercase">March</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="huji.php">IIT Delhi, The Hebrew University of Jerusalem (HUJI) Partner to Support Collaborative and Interdisciplinary Research</a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="news-huji.php">Know More </a>
                          </div>
                        </article>
                      </div>
                      
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="http://cepqip.iitd.ac.in/pdf/eBrochure%20IDI&E.pdf" target="_blank">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/cep-id.jpg" alt="Certificate Programme in 'Industrial Design, Innovation &amp; Entrepreneurship'">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">11</li>
                                  <li class="font-12 text-white text-uppercase">March</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="http://cepqip.iitd.ac.in/pdf/eBrochure%20IDI&E.pdf" target="_blank">Certificate Programme in "Industrial Design, Innovation &amp; Entrepreneurship"</a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="http://cepqip.iitd.ac.in/pdf/eBrochure%20IDI&E.pdf" target="_blank">Know More </a>
                          </div>
                        </article>
                      </div>
                     
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="news-susan-dell.php">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/susan-dell.jpg" alt="IIT Delhi, Michael &amp; Susan Dell Foundation collaborate to support economically weaker students amid COVID-19">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">10</li>
                                  <li class="font-12 text-white text-uppercase">March</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="news-susan-dell.php">IIT Delhi, Michael &amp; Susan Dell Foundation collaborate to support economically weaker students amid COVID-19</a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="news-susan-dell.php">Know More </a>
                          </div>
                        </article>
                      </div>
                     
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="lecture-rohinigodbole.php">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/IWD1.jpg" alt="Institute lecture on the occassion of International Women's Day by Prof. Rohini Godbole">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">8</li>
                                  <li class="font-12 text-white text-uppercase">March</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="lecture-rohinigodbole.php">Institute lecture on the occassion of International Women's Day by Prof. Rohini Godbole</a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="lecture-rohinigodbole.php">Know More </a>
                          </div>
                        </article>
                      </div>
                      
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="uploads/IGES.pdf" target="_blank">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/iges.jpg" alt="International Women's Day">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">8</li>
                                  <li class="font-12 text-white text-uppercase">March</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="uploads/IGES.pdf" target="_blank">International Women's Day</a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="uploads/IGES.pdf" target="_blank">Know More </a>
                          </div>
                        </article>
                      </div>
                     
          
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="news-qs-ranking.php">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/qs-ranking1.jpg" alt="QS World University Rankings by Subject 2021- Four Academic Programmes Offered by IIT Delhi Achieve Top-100 Ranks Globally">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">8</li>
                                  <li class="font-12 text-white text-uppercase">March</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="news-qs-ranking.php">QS World University Rankings by Subject 2021- Four Academic Programmes Offered by IIT Delhi Achieve Top-100 Ranks Globally</a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="news-qs-ranking.php">Know More </a>
                          </div>
                        </article>
                      </div>
                      
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="http://cepqip.iitd.ac.in/pdf/CPBM.pdf" target="_blank">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/cep-bm.jpg" alt="Certificate Programme in 'Business Management'">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">1</li>
                                  <li class="font-12 text-white text-uppercase">March</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="http://cepqip.iitd.ac.in/pdf/CPBM.pdf" target="_blank">Certificate Programme in "Business Management"</a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="http://cepqip.iitd.ac.in/pdf/CPBM.pdf" target="_blank">Know More </a>
                          </div>
                        </article>
                      </div>
                      
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="news-rankings.php">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/nf12.jpg" alt="National Institutional Ranking Framework">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">26</li>
                                  <li class="font-12 text-white text-uppercase">Feb</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="news-rankings.php">National Institutional Ranking Framework </a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="news-rankings.php">Know More </a>
                          </div>
                        </article>
                      </div>
                      
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="institute-lecture-jp-holdren.php">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/jp-holdren.jpg" alt="Institute Lecture: Indo-US Cooperation on Science and Technology for Sustainability: History, Challenges, and Opportunities">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">25</li>
                                  <li class="font-12 text-white text-uppercase">Feb</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="institute-lecture-jp-holdren.php">Institute Lecture: Indo-US Cooperation on Science and Technology for Sustainability: History, Challenges, and Opportunities</a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="institute-lecture-jp-holdren.php">Know More </a>
                          </div>
                        </article>
                      </div>
                      
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="http://cepqip.iitd.ac.in/pdf/IITD_Finance+for+Non+Finance+Executives+Brochure.pdf" target="_blank">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/fnfe.jpg" alt="Certificate Programme in 'Finance for Non Finance Executives'">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">19</li>
                                  <li class="font-12 text-white text-uppercase">Feb</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="http://cepqip.iitd.ac.in/pdf/IITD_Finance+for+Non+Finance+Executives+Brochure.pdf" target="_blank">Certificate Programme in 'Finance for Non Finance Executives' </a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="http://cepqip.iitd.ac.in/pdf/IITD_Finance+for+Non+Finance+Executives+Brochure.pdf" target="_blank">Know More </a>
                          </div>
                        </article>
                      </div>
                     
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="http://cepqip.iitd.ac.in/sfrfprogramme.php" target="_blank">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/cep-sfrf2021.jpg" alt="Summer Faculty Research Fellow (SFRF) Programme">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">19</li>
                                  <li class="font-12 text-white text-uppercase">Feb</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="http://cepqip.iitd.ac.in/sfrfprogramme.php" target="_blank">Summer Faculty Research Fellow (SFRF) Programme </a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="http://cepqip.iitd.ac.in/sfrfprogramme.php" target="_blank">Know More </a>
                          </div>
                        </article>
                      </div>
                      
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="news-endowment2.php">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/endowment2.jpg" alt="IIT Delhi Inaugurates Endowment Centre and Foundation Office  " class="img-responsive img-fullwidth">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">18</li>
                                  <li class="font-12 text-white text-uppercase">Feb</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="news-endowment2.php">IIT Delhi Inaugurates Endowment Centre and Foundation Office </a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="news-endowment2.php">Know More </a>
                          </div>
                        </article>
                      </div>
                      
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="news-cerca-car.php">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/cerca.jpg" alt="Special Cover, Postmark Released to Commemorate Successful Launch of First Classic Retrofit Car Developed by CERCA, IIT Delhi" class="img-responsive img-fullwidth">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">9</li>
                                  <li class="font-12 text-white text-uppercase">Feb</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="news-cerca-car.php">Special Cover, Postmark Released to Commemorate Successful Launch of First Classic Retrofit Car Developed by CERCA, IIT Delhi</a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="news-cerca-car.php">Know More </a>
                          </div>
                        </article>
                      </div>
                     
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="news-aardo.php">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/aardo.jpg" alt="IIT Delhi, African-Asian Rural Development Organization Sign MoU for Agricultural and Rural Development" class="img-responsive img-fullwidth">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">3</li>
                                  <li class="font-12 text-white text-uppercase">Feb</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="news-aardo.php">IIT Delhi, African-Asian Rural Development Organization Sign MoU for Agricultural and Rural Development</a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="news-aardo.php">Know More </a>
                          </div>
                        </article>
                      </div>
                      
          
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="news-advanced-teaching.php">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/ad-teaching.jpg" alt="IIT Delhi establishes ‘Prof Ishwar Chandra Goyal Chair’ for Advance Teaching and Research in Physics" class="img-responsive img-fullwidth">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">2</li>
                                  <li class="font-12 text-white text-uppercase">Feb</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="news-advanced-teaching.php">IIT Delhi establishes ‘Prof Ishwar Chandra Goyal Chair’ for Advance Teaching and Research in Physics</a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="news-advanced-teaching.php">Know More </a>
                          </div>
                        </article>
                      </div>
                      
          
          
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="http://cepqip.iitd.ac.in/pdf/Digital%20Marketing%20Brochure.pdf" target="_blank">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/dm1.jpg" alt="CEP Certificate Programme on Digital Marketing" class="img-responsive img-fullwidth">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">1</li>
                                  <li class="font-12 text-white text-uppercase">Feb</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="http://cepqip.iitd.ac.in/pdf/Digital%20Marketing%20Brochure.pdf" target="_blank">CEP Certificate Programme on Digital Marketing</a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="http://cepqip.iitd.ac.in/pdf/Digital%20Marketing%20Brochure.pdf" target="_blank">Know More </a>
                          </div>
                        </article>
                      </div>
                      
          
                      <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="news-foundation-day.php">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/foundation.jpg" alt="" class="img-responsive img-fullwidth">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">28</li>
                                  <li class="font-12 text-white text-uppercase">Jan</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="news-foundation-day.php">IIT Delhi celebrates Foundation Day </a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="news-foundation-day.php">Know More </a>
                          </div>
                        </article>
                      </div>  -->
                      
          
          
                      <!-- <div class="item">
                        <article class="post clearfix mb-30">
                          <a href="news-72republic-day.php">
                            <div class="entry-header">
                              <div class="post-thumb thumb">
                                <img src="images/news/72republic-day.jpg" alt="" class="img-responsive img-fullwidth">
                              </div>
                              <div
                                class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                                <ul>
                                  <li class="font-16 text-white font-weight-600">26</li>
                                  <li class="font-12 text-white text-uppercase">Jan</li>
                                </ul><span id="news"></span>
                              </div>
                            </div>
                          </a>
                          <div class="entry-content bg-white p-15">
                            <div class="entry-meta media no-bg no-border mt-0 mb-10">
                              <div class="media-body pl-0">
                                <div class="event-content pull-left flip">
                                  <h4 class="entry-title text-white m-0 mt-5"><a href="news-72republic-day.php">In pics- IIT Delhi celebrates 72nd Republic Day</a></h4>
                                </div>
                              </div>
                            </div>
                            <a class="btn btn-default btn-sm font-12 mt-10" href="news-72republic-day.php">Read More </a>
                          </div>
                        </article>
                      </div> -->
                      
                      
                    <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-2830px, 0px, 0px); transition: all 0.25s ease 0s; width: 5976px;"><div class="owl-item cloned" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=373&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1696825603.jpg" alt="online CEP programme titled " executive="" programme="" in="" human="" resource="" management""="" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">09</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=373&amp;in_sections=News">online CEP programme titled "Executive Programme in Human Resource Management"</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=373&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item cloned" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=372&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1696565880.jpg" alt="online CEP programme titled " advanced="" certification="" programme="" in="" persuasive="" ux="" strategy""="" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">06</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=372&amp;in_sections=News">online CEP programme titled "Advanced Certification Programme in Persuasive UX Strategy"</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=372&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item cloned" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=371&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1696573716.jpg" alt="IIT Delhi and HORIBA India Jointly Hold Tech Symposium on ‘Solutions for Semiconductor Industry’" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">06</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=371&amp;in_sections=News">IIT Delhi and HORIBA India Jointly Hold Tech Symposium on ‘Solutions for Semiconductor Industry’</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=371&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item cloned" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=370&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1696505345.jpg" alt="In pictures: Birth Anniversary of Mahatma Gandhi and Shri Lal Bahadur Shastri Celebrated at IIT Delhi" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">05</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=370&amp;in_sections=News">In pictures: Birth Anniversary of Mahatma Gandhi and Shri Lal Bahadur Shastri Celebrated at IIT Delhi</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=370&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item cloned" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=369&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1696504646.jpg" alt="Vice President of the Dominican Republic Visits IIT Delhi; MoU Signed" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">05</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=369&amp;in_sections=News">Vice President of the Dominican Republic Visits IIT Delhi; MoU Signed</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=369&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=377&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1697438130.jpg" alt="DAKSH Centre of Excellence for Law and Technology at IIT Delhi Launches a Book Titled ‘Technology and Analytics for Law and Justice’" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">16</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=377&amp;in_sections=News">DAKSH
           Centre of Excellence for Law and Technology at IIT Delhi Launches a 
          Book Titled ‘Technology and Analytics for Law and Justice’</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=377&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=376&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1697198230.jpg" alt="Invitation of Applications for the post of Director. IIT Bombay" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">13</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=376&amp;in_sections=News">Invitation of Applications for the post of Director. IIT Bombay</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=376&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=375&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1697196874.jpg" alt="8th online CEP programme titled " project="" management""="" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">13</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=375&amp;in_sections=News">8th online CEP programme titled "Project Management"</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=375&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=374&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/dean-sa-award_1696826260.jpg" alt="37th Inter-IIT Aquatics Meet: IIT Delhi Wins Aquatics Men's Championship for First Time" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">09</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=374&amp;in_sections=News">37th Inter-IIT Aquatics Meet: IIT Delhi Wins Aquatics Men's Championship for First Time</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=374&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item active" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=373&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1696825603.jpg" alt="online CEP programme titled " executive="" programme="" in="" human="" resource="" management""="" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">09</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=373&amp;in_sections=News">online CEP programme titled "Executive Programme in Human Resource Management"</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=373&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item active" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=372&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1696565880.jpg" alt="online CEP programme titled " advanced="" certification="" programme="" in="" persuasive="" ux="" strategy""="" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">06</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=372&amp;in_sections=News">online CEP programme titled "Advanced Certification Programme in Persuasive UX Strategy"</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=372&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=371&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1696573716.jpg" alt="IIT Delhi and HORIBA India Jointly Hold Tech Symposium on ‘Solutions for Semiconductor Industry’" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">06</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=371&amp;in_sections=News">IIT Delhi and HORIBA India Jointly Hold Tech Symposium on ‘Solutions for Semiconductor Industry’</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=371&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=370&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1696505345.jpg" alt="In pictures: Birth Anniversary of Mahatma Gandhi and Shri Lal Bahadur Shastri Celebrated at IIT Delhi" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">05</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=370&amp;in_sections=News">In pictures: Birth Anniversary of Mahatma Gandhi and Shri Lal Bahadur Shastri Celebrated at IIT Delhi</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=370&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=369&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1696504646.jpg" alt="Vice President of the Dominican Republic Visits IIT Delhi; MoU Signed" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">05</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=369&amp;in_sections=News">Vice President of the Dominican Republic Visits IIT Delhi; MoU Signed</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=369&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item cloned" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=377&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1697438130.jpg" alt="DAKSH Centre of Excellence for Law and Technology at IIT Delhi Launches a Book Titled ‘Technology and Analytics for Law and Justice’" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">16</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=377&amp;in_sections=News">DAKSH
           Centre of Excellence for Law and Technology at IIT Delhi Launches a 
          Book Titled ‘Technology and Analytics for Law and Justice’</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=377&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item cloned" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=376&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1697198230.jpg" alt="Invitation of Applications for the post of Director. IIT Bombay" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">13</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=376&amp;in_sections=News">Invitation of Applications for the post of Director. IIT Bombay</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=376&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item cloned" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=375&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1697196874.jpg" alt="8th online CEP programme titled " project="" management""="" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">13</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=375&amp;in_sections=News">8th online CEP programme titled "Project Management"</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=375&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item cloned" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=374&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/dean-sa-award_1696826260.jpg" alt="37th Inter-IIT Aquatics Meet: IIT Delhi Wins Aquatics Men's Championship for First Time" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">09</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=374&amp;in_sections=News">37th Inter-IIT Aquatics Meet: IIT Delhi Wins Aquatics Men's Championship for First Time</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=374&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item cloned" style="width: 299.5px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=373&amp;in_sections=News">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1696825603.jpg" alt="online CEP programme titled " executive="" programme="" in="" human="" resource="" management""="" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">09</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=373&amp;in_sections=News">online CEP programme titled "Executive Programme in Human Resource Management"</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=373&amp;in_sections=News">Read more</a>
                    </div>
                    </article>
                  </div></div></div></div><div class="owl-nav"><button role="presentation" class="owl-prev"><i class="fa fa-chevron-left"></i></button><button role="presentation" class="owl-next"><i class="fa fa-chevron-right"></i></button></div><div class="owl-dots disabled"></div></div>
                  </div>
          
                 <div class="col-md-4">
                    
                    <h2 class="text-uppercase font-weight-600 mt-0 mt-sm-0 title">Upcoming <span class="text-theme-colored2">Events </span><i class="fa fa-calendar-plus-o"></i> <a href="https://home.iitd.ac.in/events-all.php" class="btn btn-theme-colored2 btn-xs ar-bt-margin">View all</a></h2>
                    <p class="text-uppercase mb-0">Programs on Platter</p>          <div class="double-line-bottom-theme-colored-2"></div>
          
                  <div id="newsticker-demo">
                      <div class="">
                        <!-- class= newsticker-jcarousellite -->
                        
                        <ul class="ar-link">
                  <p class="text-justify">IIT Delhi hosts a variety of events ranging from Seminars, Talks, Conferences, Fests, etc.<br> Currently, there are no upcoming events. Please check back soon.</p>        
                          
                        </ul>
                      </div>
                    </div>
                  </div>
          
                </div>
              </div>
            </div>
          </section>
            <!-- Section: Research-->
              <section id="research">
                <div class="container pb-40 ar-container-pad">
                  <div class="section-content">
                    <div class="row">
                      <!-- Section: Research -->
               <div class="col-md-8">
                       <h2 class="text-uppercase title mt-0">Latest <span class="text-theme-colored2">Research </span><i class="fa fa-flask"></i> <a href="https://home.iitd.ac.in/research-all.php" class="btn btn-theme-colored2 btn-xs ar-bt-margin">View all</a></h2>            
                        <p class="text-uppercase mb-0">CREATING NEW KNOWLEDGE</p>
                        <div class="double-line-bottom-theme-colored-2"></div>
          
                        <div class="owl-carousel-2col owl-nav-top owl-carousel owl-theme owl-loaded owl-drag" data-nav="true">
                    
                   
                           
                  <!-- Old Posts -->
                  <!-- ev -->
                  
                      <!--ev-->
                  <!-- Yoga -->
                  
                      <!--Yoga-->
                  <!-- Yoga -->
                  
                      <!--Yoga-->
                  <!-- Yoga -->
                  
                      <!--Yoga-->
                  <!-- hydrogen -->
                  
                      <!--hydrogen-->
                  <!-- air-pollutant -->
                  
                      <!--air-pollutant-->
                
                   <!-- Implant -->
                  
                      <!--Implant-->
                
                  <!-- vanadium -->
                  
                      <!--vanadium-->
                
                   <!-- self-reliant-economy -->
                  
                      <!--self-reliant-economy-->
                  
                  
                  <!-- Old Posts End-->
                        <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-2212px, 0px, 0px); transition: all 0.25s ease 0s; width: 8532px;"><div class="owl-item cloned" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-hydrogen-fuel.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/hydrogen.jpg" alt="IIT Delhi researchers generate clean fuel hydrogen from water at low-cost; demonstrates successful pilot-plant">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-air-pollutant.php">IIT Delhi researchers generate clean fuel hydrogen from water at low-cost; demonstrates successful pilot-plant </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-hydrogen-fuel.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item cloned" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-air-pollutant.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/pollutant.jpg" alt="IITD  study shows decline of air pollutant by more than 50 percent during  lockdown" class="img-responsive img-fullwidth">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-air-pollutant.php">IITD  study shows decline of air pollutant by more than 50 percent during  lockdown </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-air-pollutant.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item cloned" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-implant.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/implant.jpg" alt="" class="img-responsive img-fullwidth">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-implant.php">IIT Delhi Researchers Propose Non-Leachable Antimicrobial Coating to Deal with Implant-Associated Infection </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-implant.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item cloned" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-vanadium.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/vanadium.jpg" alt="" class="img-responsive img-fullwidth">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-vanadium.php">Vanadium Redox Flow Battery based Charging Station for Electronic Devices inaugurated at IIT Delhi </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-vanadium.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item cloned" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-self-reliant-economy.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/self-reliant-economy.jpg" alt="" class="img-responsive img-fullwidth">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-self-reliant-economy.php">IIT Delhi Faculty Comes Up with Mathematical Model to Implement India’s Vision of Self-Reliant Economy </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-self-reliant-economy.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item cloned" style="width: 301px; margin-right: 15px;"><div class="item">
                            <article class="post clearfix mb-30">
                              <a href="https://home.iitd.ac.in/news-green.php" aria-label="IITD Research">
                              <div class="entry-header">
                                <div class="post-thumb thumb"> 
                                  <img src="Home%20Page%20IIT%20Delhi_files/green.jpg" alt="" class="img-responsive img-fullwidth"> 
                                </div>                    
                                
                              </div>
                              </a>
                              <div class="entry-content bg-white p-15">
                                <div class="entry-meta media no-bg no-border mt-0 mb-10">
                                  <div class="media-body pl-0">
                                    <div class="event-content pull-left flip">
                                      <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-green.php">IIT Delhi Research Paves Way for a Secure, Sustainable and Green Energy Ecosystem in the Country </a></h4>
                                    </div>
                                  </div>
                                </div>
                                <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-green.php" aria-label="IITD Research">Read more</a>
                              </div>
                            </article>
                          </div></div><div class="owl-item cloned" style="width: 301px; margin-right: 15px;"><div class="item">
                            <article class="post clearfix mb-30">
                              <a href="https://home.iitd.ac.in/research-lmp.php" aria-label="IITD Research">
                              <div class="entry-header">
                                <div class="post-thumb thumb"> 
                                  <img src="Home%20Page%20IIT%20Delhi_files/land.jpg" alt="" class="img-responsive img-fullwidth"> 
                                </div>                    
                                
                              </div>
                              </a>
                              <div class="entry-content bg-white p-15">
                                <div class="entry-meta media no-bg no-border mt-0 mb-10">
                                  <div class="media-body pl-0">
                                    <div class="event-content pull-left flip">
                                      <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/research-lmp.php">Study Finds Impact of Environmental Changes and Land Management Practices on Wheat Production in India </a></h4>
                                    </div>
                                  </div>
                                </div>
                                <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/research-lmp.php" aria-label="IITD Research">Read more</a>
                              </div>
                            </article>
                          </div></div><div class="owl-item active" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=45&amp;in_sections=Research">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1697094024.jpg" alt="IIT Delhi Researchers Develop Scalable Wearable Pressure Sensor That Can Help Doctors and Specialists Analyze Gait Patterns and Postural Deformities" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">12</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=45&amp;in_sections=Research">IIT
           Delhi Researchers Develop Scalable Wearable Pressure Sensor That Can 
          Help Doctors and Specialists Analyze Gait Patterns and Postural 
          Deformities</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=45&amp;in_sections=Research">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item active" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=44&amp;in_sections=Research">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1696587969.jpg" alt="Researchers at IIT Delhi Achieve Trusted-node-free Secure Quantum Communication for 380 km in Standard Telecom Fiber" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">06</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=44&amp;in_sections=Research">Researchers at IIT Delhi Achieve Trusted-node-free Secure Quantum Communication for 380 km in Standard Telecom Fiber</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=44&amp;in_sections=Research">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-ev.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/ev.jpg" alt="IIT Delhi Develops Environmentally Friendly, Easily Scalable, Smart and Modular Electric Vehicle Charger">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-ev.php">IIT Delhi Develops Environmentally Friendly, Easily Scalable, Smart and Modular Electric Vehicle Charger </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-ev.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-e-waste.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/e-waste.jpg" alt="IIT Delhi Researchers Develop Zero-Emission Technology to Manage and Recycle E-Waste to Wealth">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-e-waste.php">IIT Delhi Researchers Develop Zero-Emission Technology to Manage and Recycle E-Waste to Wealth </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-e-waste.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-indoor-air-quality.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/iaq.jpg" alt="Survey Report Released with an Aim to Raise Awareness About Indoor Air Quality">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-indoor-air-quality.php">Survey Report Released with an Aim to Raise Awareness About Indoor Air Quality </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-indoor-air-quality.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-yoga.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/yoga.jpg" alt="Yoga practitioners had lower stress, anxiety and depression during COVID-19 lockdown: IIT Delhi study ">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-yoga.php">Yoga practitioners had lower stress, anxiety and depression during COVID-19 lockdown: IIT Delhi study </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-yoga.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-hydrogen-fuel.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/hydrogen.jpg" alt="IIT Delhi researchers generate clean fuel hydrogen from water at low-cost; demonstrates successful pilot-plant">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-air-pollutant.php">IIT Delhi researchers generate clean fuel hydrogen from water at low-cost; demonstrates successful pilot-plant </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-hydrogen-fuel.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-air-pollutant.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/pollutant.jpg" alt="IITD  study shows decline of air pollutant by more than 50 percent during  lockdown" class="img-responsive img-fullwidth">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-air-pollutant.php">IITD  study shows decline of air pollutant by more than 50 percent during  lockdown </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-air-pollutant.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-implant.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/implant.jpg" alt="" class="img-responsive img-fullwidth">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-implant.php">IIT Delhi Researchers Propose Non-Leachable Antimicrobial Coating to Deal with Implant-Associated Infection </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-implant.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-vanadium.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/vanadium.jpg" alt="" class="img-responsive img-fullwidth">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-vanadium.php">Vanadium Redox Flow Battery based Charging Station for Electronic Devices inaugurated at IIT Delhi </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-vanadium.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-self-reliant-economy.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/self-reliant-economy.jpg" alt="" class="img-responsive img-fullwidth">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-self-reliant-economy.php">IIT Delhi Faculty Comes Up with Mathematical Model to Implement India’s Vision of Self-Reliant Economy </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-self-reliant-economy.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item" style="width: 301px; margin-right: 15px;"><div class="item">
                            <article class="post clearfix mb-30">
                              <a href="https://home.iitd.ac.in/news-green.php" aria-label="IITD Research">
                              <div class="entry-header">
                                <div class="post-thumb thumb"> 
                                  <img src="Home%20Page%20IIT%20Delhi_files/green.jpg" alt="" class="img-responsive img-fullwidth"> 
                                </div>                    
                                
                              </div>
                              </a>
                              <div class="entry-content bg-white p-15">
                                <div class="entry-meta media no-bg no-border mt-0 mb-10">
                                  <div class="media-body pl-0">
                                    <div class="event-content pull-left flip">
                                      <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-green.php">IIT Delhi Research Paves Way for a Secure, Sustainable and Green Energy Ecosystem in the Country </a></h4>
                                    </div>
                                  </div>
                                </div>
                                <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-green.php" aria-label="IITD Research">Read more</a>
                              </div>
                            </article>
                          </div></div><div class="owl-item" style="width: 301px; margin-right: 15px;"><div class="item">
                            <article class="post clearfix mb-30">
                              <a href="https://home.iitd.ac.in/research-lmp.php" aria-label="IITD Research">
                              <div class="entry-header">
                                <div class="post-thumb thumb"> 
                                  <img src="Home%20Page%20IIT%20Delhi_files/land.jpg" alt="" class="img-responsive img-fullwidth"> 
                                </div>                    
                                
                              </div>
                              </a>
                              <div class="entry-content bg-white p-15">
                                <div class="entry-meta media no-bg no-border mt-0 mb-10">
                                  <div class="media-body pl-0">
                                    <div class="event-content pull-left flip">
                                      <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/research-lmp.php">Study Finds Impact of Environmental Changes and Land Management Practices on Wheat Production in India </a></h4>
                                    </div>
                                  </div>
                                </div>
                                <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/research-lmp.php" aria-label="IITD Research">Read more</a>
                              </div>
                            </article>
                          </div></div><div class="owl-item cloned" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=45&amp;in_sections=Research">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1697094024.jpg" alt="IIT Delhi Researchers Develop Scalable Wearable Pressure Sensor That Can Help Doctors and Specialists Analyze Gait Patterns and Postural Deformities" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">12</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=45&amp;in_sections=Research">IIT
           Delhi Researchers Develop Scalable Wearable Pressure Sensor That Can 
          Help Doctors and Specialists Analyze Gait Patterns and Postural 
          Deformities</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=45&amp;in_sections=Research">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item cloned" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/show.php?id=44&amp;in_sections=Research">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                      <img src="Home%20Page%20IIT%20Delhi_files/372246_1696587969.jpg" alt="Researchers at IIT Delhi Achieve Trusted-node-free Secure Quantum Communication for 380 km in Standard Telecom Fiber" class="img-responsive img-fullwidth"> 
                      </div>                    
                       <div class="entry-date media-left text-center flip bg-theme-colored border-top-theme-colored2-3px pt-5 pr-15 pb-5 pl-15">
                      <ul>
                        <li class="font-16 text-white font-weight-600">06</li>
                        <li class="font-12 text-white text-uppercase">Oct</li>
                      </ul><span id="news"></span>
                      </div>
                    </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white kk-bold m-0 mt-5"><a href="https://home.iitd.ac.in/show.php?id=44&amp;in_sections=Research">Researchers at IIT Delhi Achieve Trusted-node-free Secure Quantum Communication for 380 km in Standard Telecom Fiber</a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/show.php?id=44&amp;in_sections=Research">Read more</a>
                    </div>
                    </article>
                  </div></div><div class="owl-item cloned" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-ev.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/ev.jpg" alt="IIT Delhi Develops Environmentally Friendly, Easily Scalable, Smart and Modular Electric Vehicle Charger">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-ev.php">IIT Delhi Develops Environmentally Friendly, Easily Scalable, Smart and Modular Electric Vehicle Charger </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-ev.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item cloned" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-e-waste.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/e-waste.jpg" alt="IIT Delhi Researchers Develop Zero-Emission Technology to Manage and Recycle E-Waste to Wealth">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-e-waste.php">IIT Delhi Researchers Develop Zero-Emission Technology to Manage and Recycle E-Waste to Wealth </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-e-waste.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item cloned" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-indoor-air-quality.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/iaq.jpg" alt="Survey Report Released with an Aim to Raise Awareness About Indoor Air Quality">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-indoor-air-quality.php">Survey Report Released with an Aim to Raise Awareness About Indoor Air Quality </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-indoor-air-quality.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item cloned" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-yoga.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/yoga.jpg" alt="Yoga practitioners had lower stress, anxiety and depression during COVID-19 lockdown: IIT Delhi study ">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-yoga.php">Yoga practitioners had lower stress, anxiety and depression during COVID-19 lockdown: IIT Delhi study </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-yoga.php">Read More </a>
                    </div>
                    </article>
                      </div></div><div class="owl-item cloned" style="width: 301px; margin-right: 15px;"><div class="item">
                    <article class="post clearfix mb-30">
                    <a href="https://home.iitd.ac.in/news-hydrogen-fuel.php">
                      <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img src="Home%20Page%20IIT%20Delhi_files/hydrogen.jpg" alt="IIT Delhi researchers generate clean fuel hydrogen from water at low-cost; demonstrates successful pilot-plant">
                      </div>
                      </div>
                    </a>
                    <div class="entry-content bg-white p-15">
                      <div class="entry-meta media no-bg no-border mt-0 mb-10">
                      <div class="media-body pl-0">
                        <div class="event-content pull-left flip">
                        <h4 class="entry-title text-white m-0 mt-5"><a href="https://home.iitd.ac.in/news-air-pollutant.php">IIT Delhi researchers generate clean fuel hydrogen from water at low-cost; demonstrates successful pilot-plant </a></h4>
                        </div>
                      </div>
                      </div>
                      <a class="btn btn-default btn-sm font-12 mt-10" href="https://home.iitd.ac.in/news-hydrogen-fuel.php">Read More </a>
                    </div>
                    </article>
                      </div></div></div></div><div class="owl-nav"><button role="presentation" class="owl-prev"><i class="fa fa-chevron-left"></i></button><button role="presentation" class="owl-next"><i class="fa fa-chevron-right"></i></button></div><div class="owl-dots disabled"></div></div>
                      </div>			<!-- PhD Seminar -->
              <div class="col-md-4">
              <div class="col-md-12 bg-theme-iitd">
                <h2 class="title"><span class="text-theme-colored2">PhD</span> Seminars <i class="fa fa-graduation-cap"></i> <a href="https://home.iitd.ac.in/phd-seminar.php" class="btn btn-theme-colored2 btn-xs ar-bt-margin">View all</a></h2>
                 <p class="text-uppercase mb-0">See upcoming Seminars</p>
                 <p>Add PhD Seminar : <a href="https://internal.iitd.ernet.in/iitdapps/"> Click Here</a></p>
                 
                 
                 <p class="text-uppercase mb-0"></p>
                  <div class="double-line-bottom-theme-colored-2">
                  </div>
                  <div class="owl-carousel-1col ar-seminar owl-carousel owl-theme owl-loaded owl-drag" data-dots="true" data-nav="true">
            <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-526px, 0px, 0px); transition: all 0s ease 0s; width: 1315px;"><div class="owl-item cloned" style="width: 263px;"><div class="item">
                  <img src="Home%20Page%20IIT%20Delhi_files/sample.jpg" alt="">
                  <div class="entry-content bg-white p-15">
                  <p class="text-gray mt-5" style="text-align:justify !important">There are no upcoming scheduled PhD seminars.</p>
                  </div>
                </div></div><div class="owl-item cloned" style="width: 263px;"><div class="item">
                  <img src="Home%20Page%20IIT%20Delhi_files/sample.jpg" alt="">
                  <div class="entry-content bg-white p-15">
                  <p class="text-gray mt-5" style="text-align:justify !important">There are no upcoming scheduled PhD seminars.</p>
                  </div>
                </div></div><div class="owl-item active" style="width: 263px;"><div class="item">
                  <img src="Home%20Page%20IIT%20Delhi_files/sample.jpg" alt="">
                  <div class="entry-content bg-white p-15">
                  <p class="text-gray mt-5" style="text-align:justify !important">There are no upcoming scheduled PhD seminars.</p>
                  </div>
                </div></div><div class="owl-item cloned" style="width: 263px;"><div class="item">
                  <img src="Home%20Page%20IIT%20Delhi_files/sample.jpg" alt="">
                  <div class="entry-content bg-white p-15">
                  <p class="text-gray mt-5" style="text-align:justify !important">There are no upcoming scheduled PhD seminars.</p>
                  </div>
                </div></div><div class="owl-item cloned" style="width: 263px;"><div class="item">
                  <img src="Home%20Page%20IIT%20Delhi_files/sample.jpg" alt="">
                  <div class="entry-content bg-white p-15">
                  <p class="text-gray mt-5" style="text-align:justify !important">There are no upcoming scheduled PhD seminars.</p>
                  </div>
                </div></div></div></div><div class="owl-nav disabled"><button role="presentation" class="owl-prev"><i class="fa fa-chevron-left"></i></button><button role="presentation" class="owl-next"><i class="fa fa-chevron-right"></i></button></div><div class="owl-dots disabled"><button class="owl-dot active"><span></span></button></div></div>			</div>
                    </div>
                <!-- PhD Seminar end -->
                    </div>
                  </div>
                </div>
              </section>
            
            
             
            
            <section id="alumni" class="popup bg-silver-deep">
                <div class="container ar-container-pad">
                  <div class="section-content">
                    <div class="row">
                     <!-- Section: Startups-->
                        
                    </div>
                  </div>
                </div>
              </section>
            
            <section id="alumni" class="popup">
                <div class="container pb-40 ar-container-pad">
                  <div class="section-content">
                    <div class="row multi-row-clearfix">
                <div class="col-md-12">
                        <h2 class="title text-uppercase text-center"><span class="text-theme-colored2">Centers</span>@IITD</h2>   
                        <div class="double-line-bottom-centered-theme-colored-2"></div>
                      </div>
                      
                
                <div class="col-sm-6 col-md-6">
                        <div class="event-list bg-silver-light maxwidth500 mb-30">
                          <div class="thumb">
                  <a href="https://home.iitd.ac.in/cas.php">
                            <img src="Home%20Page%20IIT%20Delhi_files/cas.jpg" alt="C.A.S">
                          </a></div><a href="https://home.iitd.ac.in/cas.php">
                          </a><div class="event-list-details bg-white clearfix p-20 pt-15 pb-30"><a href="https://home.iitd.ac.in/cas.php">
                            </a><h4 class="text-uppercase font-weight-600 mb-5 text-center"><a href="https://home.iitd.ac.in/cas.php"></a><a href="https://home.iitd.ac.in/cas.php">Center For Atmospheric Sciences </a></h4>
                          </div>
                        </div>
                      </div>
                
                      <div class="col-sm-6 col-md-6">
                        <div class="event-list bg-silver-light maxwidth500 mb-30">
                          <div class="thumb">
                  <a href="https://home.iitd.ac.in/Renew-Power.php">
                            <img src="Home%20Page%20IIT%20Delhi_files/Renew-Power.jpg" alt="Renew-Power" class="img-fullwidth">
                  </a>
                          </div>
                          <div class="event-list-details bg-white clearfix p-20 pt-15 pb-30">
                            <h4 class="text-uppercase font-weight-600 mb-5 text-center"><a href="https://home.iitd.ac.in/Renew-Power.php">Center on ReNew Power </a></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            
                <!--start Funfacts Section-->
              <section id="stats" class="parallax layer-overlay overlay-theme-colored-9" data-bg-img="images/bg-06.jpg" data-parallax-ratio="0.4" "="" style="background-image: url(&quot;images/bg-06.jpg&quot;); background-position: 50% 377px;">
                <div class="container pt-90 pb-90 ar-container-pad">
                  <div class="section-content">
                    <div class="row">
                      <div class="col-xs-12 col-sm-6 col-md-4 mb-md-50">
                        <div class="funfact text-center">
                          <div class="text-white font-weight-600 font-48 odometer odometer-theme-minimal" data-value="10000" data-theme="minimal"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">1</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span><span class="odometer-formatting-mark">,</span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span></div></div>
                          <div class="double-line-bottom-centered-theme-colored-2 mt-0 mb-25"></div>
                          <h4 class="text-white text-uppercase mb-0">Students</h4>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-4 mb-md-50">
                        <div class="funfact text-center">
                          <div class="text-white font-weight-600 font-48 odometer odometer-theme-minimal" data-value="600" data-theme="minimal"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">6</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span></div></div>
                          <div class="double-line-bottom-centered-theme-colored-2 mt-0 mb-25"></div>
                          <h4 class="text-white text-uppercase mb-0">Faculty</h4>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-4 mb-md-50 staff">
                        <div class="funfact text-center">
                          <div class="text-white font-weight-600 font-48 odometer odometer-theme-minimal" data-value="700" data-theme="minimal"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">7</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span></div></div>
                          <div class="double-line-bottom-centered-theme-colored-2 mt-0 mb-25"></div>
                          <h4 class="text-white text-uppercase mb-0">Staff</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
          
              <!-- Section: Events -->
              <section id="faq">
                <div class="container pb-50 ar-container-pad">
                  <div class="section-content">
                    <div class="row">
                      <div class="col-md-5">
                        <h2 class="mt-0 mt-sm-0 text-left title"><span class="text-theme-colored2">FAQ</span>s <i class="fa fa-question-circle-o mr-10"></i> <a href="https://home.iitd.ac.in/faq.php" class="btn btn-theme-colored2 btn-xs ar-bt-margin">View all</a></h2>
                        <p class="text-uppercase mb-0">Frequently Asked Questions</p>
                        <div class="double-line-bottom-theme-colored-2"></div>
                        <div class="panel-group accordion-stylished-left-border accordion-icon-filled accordion-no-border accordion-icon-left accordion-icon-filled-theme-colored2" id="accordion6" role="tablist" aria-multiselectable="true">
          
                          <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading5">
                              <h6 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion6" href="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                 What will the newly created Dean, Diversity and Inclusion work on?
                                </a>
                              </h6>
                            </div>
                            <div id="collapse6" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5" aria-expanded="false" style="height: 0px;">
                              <div class="panel-body">
                                <p class="text-gray">Please visit the <a class="text-theme-colored2" target="_blank" href="https://odi.iitd.ac.in/">Office of Diversity and Inclusion Webpage </a></p>
                                
                              </div>
                            </div>
                          </div>
          
          
                          <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headin1">
                              <h6 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion6" href="#collaps1" aria-expanded="true" aria-controls="collaps1" class="active">
                                   Whom to contact for Postgraduate admissions?
                                </a>
                              </h6>
                            </div>
                            <div id="collaps1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headin1" aria-expanded="true" style="">
                              <div class="panel-body">
                                 <h4 class="m-0 kk-bold">Office of Academics (PG) </h4>
                                 <!-- <p class="text-gray">Post Graduate (PG)</p><br> -->
                                  <!-- <p class="text-gray">Joint Registrar (PGS &amp; R)<br> -->
                                  <a href="tel:+91-11-2659 1718"><i class="fa fa-phone mr-10"></i>+91-11-2659-1737</a><br>
                                  <i class="fa fa-envelope mr-10"></i> <a class="spamspan" href="mailto:drpgsr@admin.iitd.ac.in"><strong>drpgsr</strong>@admin.iitd.ac.in</a><p></p>
                              </div>
                            </div>
                          </div>
                          <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading2">
                              <h6 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion6" href="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                  Whom to contact for Undergraduate admissions?
                                </a>
                              </h6>
                            </div>
                            <div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2" aria-expanded="false" style="height: 0px;">
                              <div class="panel-body">
                        <h4 class="m-0 kk-bold">Office of Acadmics (UG)</h4>
                        <!-- <p class="text-gray">Under Graduate </p><br> -->
                                    <!-- <p class="text-gray">Assistant Registrar (UGS)<br> -->
                                    <a href="tel:+91-11-2659 1718"><i class="fa fa-phone mr-10"></i>+91-11-2659-1718</a><br>
                                    <i class="fa fa-envelope mr-10"></i> <a class="spamspan" href="mailto:drugs@admin.iitd.ac.in"><strong>drugs</strong>@admin.iitd.ac.in</a><p></p>
                              </div>
                            </div>
                          </div>
          
          
          
          
          
                          <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading3">
                              <h6 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion6" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                  Whom to contact for queries related to GATE?
                                </a>
                              </h6>
                            </div>
                            <div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3" aria-expanded="false" style="height: 0px;">
                              <div class="panel-body">
                                <h4 class="m-0 kk-bold">Chairman, GATE</h4>
                                <!-- <p class="text-gray">Organising Chairman, GATE 2020<br> -->
                                    <!-- Institute Chair Professor<br> -->
                                <a href="tel:+91-11-2659 1718"><i class="fa fa-phone mr-10"></i>+91-11-2659-1749/1750/6137</a><br>
                                <i class="fa fa-envelope mr-10"></i><a class="spamspan" href="mailto:chrgate@admin.iitd.ac.in"><strong>chrgate</strong>@admin.iitd.ac.in</a><p></p>
                              </div>
                            </div>
                          </div>
                          <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading4">
                              <h6 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion6" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                   How to pay fees online?
                                </a>
                              </h6>
                            </div>
                            <div id="collapse4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4" aria-expanded="false" style="height: 0px;">
                              <div class="panel-body">
                                <p class="text-gray">Please visit the <a class="text-theme-colored2" target="_blank" href="http://www.iitd.ac.in/icollect/epay/index.html">ePAY webpage</a>.</p>
                              </div>
                            </div>
                          </div>
                           <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading4">
                              <h6 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion6" href="#collapse5" aria-expanded="false" aria-controls="collapse4">
                                   Whom to contact for Faculty Recruitment ?
                                </a>
                              </h6>
                            </div>
                            <div id="collapse5" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4" aria-expanded="false" style="height: 0px;">
                              <div class="panel-body">
                                <p class="text-gray">Establishment Unit(1)<br>
                      <!-- Joint Registrar (Establishments)<br> -->
                      <a href="tel:+91-11-2659-1716">+91-11-2659-1716</a><br>
                      <a class="spamspan" href="mailto:ar_e1@admin.iitd.ac.in"><strong>ar_e1</strong>@admin.iitd.ac.in</a></p>
          
                              </div>
                            </div>
                          </div>
                        </div>
                  <hr>
                  <p><a href="https://home.iitd.ac.in/faq.php" class="text-theme-colored2"><strong>FAQs <i class="fa fa-question-circle-o mr-10"></i></strong>related to Hostel Allotment</a></p>
                      </div>
                
                <div class="col-md-7 ar-fa-color ar-phone-none">
                        <h2 class="text-uppercase mt-0 mt-sm-30 title">Photo <span class="text-theme-colored2">Gallery </span><i class="fa fa-photo mr-10"></i> <a href="https://home.iitd.ac.in/gallery.php" class="btn btn-theme-colored2 btn-xs ar-bt-margin">View all</a></h2>
                        <p class="text-uppercase mb-0">Multi-Hued Reflections</p>
                        <div class="double-line-bottom-theme-colored-2"></div>
                        <div class="gallery-isotope default-animation-effect grid-4 gutter clearfix" data-lightbox="gallery" style="position: relative; height: 282.784px;">
                          <!-- Portfolio Item Start -->
                          <div class="gallery-item" style="position: absolute; left: 0px; top: 0px;">
                            <div class="thumb">
                              <img alt="project" src="Home%20Page%20IIT%20Delhi_files/gallery-1.jpg" class="img-fullwidth">
                              <div class="overlay-shade"></div>
                              <div class="icons-holder">
                                <div class="icons-holder-inner">
                                  <div class="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                                    <a href="https://home.iitd.ac.in/images/gallery/gallery-lg1.jpg" data-lightbox-gallery="gallery"><i class="fa fa-search-plus"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Portfolio Item End -->
          
                                  <!-- Portfolio Item Start -->
                          <div class="gallery-item" style="position: absolute; left: 133px; top: 0px;">
                            <div class="thumb">
                              <img alt="project" src="Home%20Page%20IIT%20Delhi_files/gallery-6.jpg" class="img-fullwidth">
                              <div class="overlay-shade"></div>
                              <div class="icons-holder">
                                <div class="icons-holder-inner">
                                  <div class="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                                    <a href="https://home.iitd.ac.in/images/gallery/gallery-lg6.jpg" data-lightbox-gallery="gallery"><i class="fa fa-search-plus"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Portfolio Item End -->
                          
                          <!-- Portfolio Item Start -->
                          <div class="gallery-item" style="position: absolute; left: 267px; top: 0px;">
                            <div class="thumb">
                              <img alt="project" src="Home%20Page%20IIT%20Delhi_files/gallery-7.jpg" class="img-fullwidth">
                              <div class="overlay-shade"></div>
                              <div class="icons-holder">
                                <div class="icons-holder-inner">
                                  <div class="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                                    <a href="https://home.iitd.ac.in/images/gallery/gallery-lg7.jpg" data-lightbox-gallery="gallery"><i class="fa fa-search-plus"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Portfolio Item End -->
                          
                          <!-- Portfolio Item Start -->
                          <div class="gallery-item" style="position: absolute; left: 401px; top: 0px;">
                            <div class="thumb">
                              <img alt="project" src="Home%20Page%20IIT%20Delhi_files/gallery-8.jpg" class="img-fullwidth">
                              <div class="overlay-shade"></div>
                              <div class="icons-holder">
                                <div class="icons-holder-inner">
                                  <div class="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                                    <a href="https://home.iitd.ac.in/images/gallery/gallery-lg8.jpg" data-lightbox-gallery="gallery"><i class="fa fa-search-plus"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Portfolio Item End -->
          
                          
                          <!-- Portfolio Item Start -->
                          <div class="gallery-item" style="position: absolute; left: 0px; top: 90px;">
                            <div class="thumb">
                              <img alt="project" src="Home%20Page%20IIT%20Delhi_files/convo-3.jpg" class="img-fullwidth">
                              <div class="overlay-shade"></div>
                              <div class="icons-holder">
                                <div class="icons-holder-inner">
                                  <div class="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                                    <a href="https://home.iitd.ac.in/images/gallery/convo-3.jpg" data-lightbox-gallery="gallery"><i class="fa fa-search-plus"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Portfolio Item End -->
          
                              <!-- Portfolio Item Start -->
                          <div class="gallery-item" style="position: absolute; left: 133px; top: 90px;">
                            <div class="thumb">
                              <img alt="project" src="Home%20Page%20IIT%20Delhi_files/convo-5.jpg" class="img-fullwidth">
                              <div class="overlay-shade"></div>
                              <div class="icons-holder">
                                <div class="icons-holder-inner">
                                  <div class="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                                    <a href="https://home.iitd.ac.in/images/gallery/convo-5.jpg" data-lightbox-gallery="gallery"><i class="fa fa-search-plus"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Portfolio Item End -->
                          
                          <!-- Portfolio Item Start -->
                          <div class="gallery-item" style="position: absolute; left: 267px; top: 90px;">
                            <div class="thumb">
                              <img alt="project" src="Home%20Page%20IIT%20Delhi_files/gallery-3.jpg" class="img-fullwidth">
                              <div class="overlay-shade"></div>
                              <div class="icons-holder">
                                <div class="icons-holder-inner">
                                  <div class="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                                    <a href="https://home.iitd.ac.in/images/gallery/gallery-lg3.jpg" data-lightbox-gallery="gallery"><i class="fa fa-search-plus"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Portfolio Item End -->
                          
                          <!-- Portfolio Item Start -->
                          <div class="gallery-item" style="position: absolute; left: 401px; top: 90px;">
                            <div class="thumb">
                              <img alt="project" src="Home%20Page%20IIT%20Delhi_files/gallery-4.jpg" class="img-fullwidth">
                              <div class="overlay-shade"></div>
                              <div class="icons-holder">
                                <div class="icons-holder-inner">
                                  <div class="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                                    <a href="https://home.iitd.ac.in/images/gallery/gallery-lg4.jpg" data-lightbox-gallery="gallery"><i class="fa fa-search-plus"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Portfolio Item End -->
                          
                      
                          
                  
                          
                          <!-- Portfolio Item Start -->
                          <div class="gallery-item" style="position: absolute; left: 0px; top: 192px;">
                            <div class="thumb">
                              <img alt="project" src="Home%20Page%20IIT%20Delhi_files/gallery-9.jpg" class="img-fullwidth">
                              <div class="overlay-shade"></div>
                              <div class="icons-holder">
                                <div class="icons-holder-inner">
                                  <div class="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                                    <a href="https://home.iitd.ac.in/images/gallery/gallery-lg9.jpg" data-lightbox-gallery="gallery"><i class="fa fa-search-plus"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Portfolio Item End -->
                          
                          <!-- Portfolio Item Start -->
                          <div class="gallery-item" style="position: absolute; left: 133px; top: 192px;">
                            <div class="thumb">
                              <img alt="project" src="Home%20Page%20IIT%20Delhi_files/gallery-10.jpg" class="img-fullwidth">
                              <div class="overlay-shade"></div>
                              <div class="icons-holder">
                                <div class="icons-holder-inner">
                                  <div class="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                                    <a href="https://home.iitd.ac.in/images/gallery/gallery-lg10.jpg" data-lightbox-gallery="gallery"><i class="fa fa-search-plus"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Portfolio Item End -->
                          
                          <!-- Portfolio Item Start -->
                          <div class="gallery-item" style="position: absolute; left: 267px; top: 192px;">
                            <div class="thumb">
                              <img alt="project" src="Home%20Page%20IIT%20Delhi_files/gallery-11.jpg" class="img-fullwidth">
                              <div class="overlay-shade"></div>
                              <div class="icons-holder">
                                <div class="icons-holder-inner">
                                  <div class="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                                    <a href="https://home.iitd.ac.in/images/gallery/gallery-lg11.jpg" data-lightbox-gallery="gallery"><i class="fa fa-search-plus"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Portfolio Item End -->
                          
                          <!-- Portfolio Item Start -->
                          <div class="gallery-item" style="position: absolute; left: 401px; top: 192px;">
                            <div class="thumb">
                              <img alt="project" src="Home%20Page%20IIT%20Delhi_files/gallery-12.jpg" class="img-fullwidth">
                              <div class="overlay-shade"></div>
                              <div class="icons-holder">
                                <div class="icons-holder-inner">
                                  <div class="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                                    <a href="https://home.iitd.ac.in/images/gallery/gallery-lg12.jpg" data-lightbox-gallery="gallery"><i class="fa fa-search-plus"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Portfolio Item End -->
                        </div>
                      </div>
                <div class="col-md-4 ar-phone">
                          <a href="https://home.iitd.ac.in/gallery.php"><h2 class="text-uppercase mt-0 mt-sm-30 title">Photo <span class="text-theme-colored2">Gallery </span><i class="fa fa-photo mr-10"></i></h2></a>
                         <p class="text-uppercase mb-0">MULTI-HUED REFLECTIONS</p>
                          <div class="double-line-bottom-theme-colored-2"></div> 
                          <div class="owl-carousel-1col owl-carousel owl-theme owl-loaded owl-drag" data-dots="true" data-nav="true">
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                  <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s;"><div class="owl-item"><div class="item"><img src="Home%20Page%20IIT%20Delhi_files/g1.jpg" alt=""></div></div><div class="owl-item"><div class="item"><img src="Home%20Page%20IIT%20Delhi_files/g2.jpg" alt=""></div></div><div class="owl-item"><div class="item"><img src="Home%20Page%20IIT%20Delhi_files/g3.jpg" alt=""></div></div><div class="owl-item"><div class="item"><img src="Home%20Page%20IIT%20Delhi_files/g4.jpg" alt=""></div></div><div class="owl-item"><div class="item"><img src="Home%20Page%20IIT%20Delhi_files/g5.jpg" alt=""></div></div><div class="owl-item"><div class="item"><img src="Home%20Page%20IIT%20Delhi_files/g6.jpg" alt=""></div></div><div class="owl-item"><div class="item"><img src="Home%20Page%20IIT%20Delhi_files/g7.jpg" alt=""></div></div><div class="owl-item"><div class="item"><img src="Home%20Page%20IIT%20Delhi_files/g8.jpg" alt=""></div></div><div class="owl-item"><div class="item"><img src="Home%20Page%20IIT%20Delhi_files/g9.jpg" alt=""></div></div><div class="owl-item"><div class="item"><img src="Home%20Page%20IIT%20Delhi_files/g10.jpg" alt=""></div></div><div class="owl-item"><div class="item"><img src="Home%20Page%20IIT%20Delhi_files/g11.jpg" alt=""></div></div><div class="owl-item"><div class="item"><img src="Home%20Page%20IIT%20Delhi_files/g12.jpg" alt=""></div></div></div></div><div class="owl-nav"><button role="presentation" class="owl-prev"><i class="fa fa-chevron-left"></i></button><button role="presentation" class="owl-next"><i class="fa fa-chevron-right"></i></button></div><div class="owl-dots"><button class="owl-dot"><span></span></button><button class="owl-dot"><span></span></button><button class="owl-dot active"><span></span></button><button class="owl-dot"><span></span></button><button class="owl-dot"><span></span></button><button class="owl-dot"><span></span></button><button class="owl-dot"><span></span></button><button class="owl-dot"><span></span></button><button class="owl-dot"><span></span></button><button class="owl-dot"><span></span></button><button class="owl-dot"><span></span></button><button class="owl-dot"><span></span></button></div></div>
                    </div>          </div>
                  </div>
                </div>
              </section>
            
            <!-- Section: Voice -->
          <!--     <section id="iitd-voice">
                <div class="container ar-container-pad">
                  <div class="section-content">
                    <div class="row">
                      <div class="col-md-6">
                        <h3 class="font-weight-500 font-30 font- mt-10">Meet our new <span class="text-theme-colored"></span> Voice Assistant</h3>
                  <div class="double-line-bottom-theme-colored-2"></div>
                        <p class="text-justify">This website can <strong>talk!</strong> This website can <strong>hear</strong> you!<br>Yes, you read it right. When enabled, this site can hear and respond to what you are looking for. It is capable of navigating the whole website for you (like scroll page, go to a page, etc.), show tips and suggestions, print pages for you and much more. To view the list of accepted <a class="text-theme-colored2" href="voice-commands.php">voice commands</a>, please say: "commands" or "voice commands". <em>n.b.</em> The Voice Assistant is an experimental feature and may be withdrawn at any time. </p>
                  <div><a id="voice-get-started" href="" class="btn btn-theme-colored2 mb-sm-30">Get Started</a></div>
                      </div>
                      <div class="col-md-6">
                        <div class="box-hover-effect about-voice">
                          <div class="effect-wrapper">
                            <div class="thumb">
                              <i class="fa fa-comments-o icon-voice animated infinite pulse"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> -->
            
              <!-- Divider: Image -->
            
            <section>
               <div class="container-fluid pt-0 pb-0">
                  <div class="section-content">
                    <div class="row">
                      <figure>
                        <img class="img-fluid bottom-img" src="Home%20Page%20IIT%20Delhi_files/footer-bg.jpg">
                  <span class="bw2ckk" style="display: block"></span>
                      </figure>
                    </div>
                  </div>
                </div>
              </section>
          
          
            </div>
            <!-- Footer -->
            <footer id="footer" class="footer" data-bg-color="#212331" role="contentinfo" style="background: rgb(33, 35, 49) !important;">
              <div class="container pt-50 pb-15">
                <div class="row">
                  <div class="col-sm-6 col-md-3">
                    <div class="widget dark">
                      <img class="mt-5 mb-10 footer-logo d-block m-auto" alt="" src="Home%20Page%20IIT%20Delhi_files/logo-iit.png">
                      <h4 class="text-white text-center mb-0">Indian Institute of Technology Delhi</h4>
                      <p class="text-center text-gray2">Hauz Khas, New Delhi, Delhi 110016</p>
                      <ul class="list-inline mt-5 text-center">
                        <li class="m-0 pl-10 pr-10"> <i class="fa fa-phone text-white mr-5"></i> <a class="text-gray" href="tel:011-2659-7135">011-2659-7135</a> </li>
                        <li class="m-0 pl-10 pr-10"> <i class="fa fa-envelope-o text-white mr-5"></i> <a class="spamspan" href="mailto:info@iitd.ac.in"><strong>info</strong>@iitd.ac.in</a> </li>
                        <li class="m-0 pl-10 pr-10"> <i class="fa fa-globe text-white mr-5"></i> <a class="text-gray" href="javascript:void(0)">www.iitd.ac.in</a> </li>
                      </ul>
                      <ul class="styled-icons icon-sm icon-bordered icon-circled clearfix mt-10 text-center">
                        <li><a href="https://twitter.com/iitdelhi" target="_blank" aria-label="Twitter"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://linkedin.com/school/iitdelhi/" target="_blank" aria-label="Linkedin"><i class="fa fa-linkedin text-white"></i></a></li>
                        <li><a href="https://www.facebook.com/IITDelhi/" target="_blank" aria-label="Facebook"><i class="fa fa-facebook"></i></a></li> 
                      
                      </ul>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3 brdr-left">
                    <div class="widget dark">
                      <h4 class="widget-title line-bottom-theme-colored-2">Quick Links</h4>
                      <ul class="angle-double-right list-border">
                        <li><a href="https://home.iitd.ac.in/departments.php">Departments</a></li>
                        <li><a href="https://home.iitd.ac.in/centres.php">Centres</a></li>
                        <li><a href="https://home.iitd.ac.in/schools.php">Schools</a></li>
                        <li><a href="https://home.iitd.ac.in/centres-of-excellence.php">Centres of Excellence</a></li>
                  <li><a href="https://home.iitd.ac.in/compliance.php#antis">Anti-Sexual Harassment Policy</a></li>
                  <li><a href="https://home.iitd.ac.in/compliance.php#rti">Right to Information</a></li>
                 <li><a href="#" onclick="darkMode()" class="text-white" id="darkmode1"><i class="fa fa-moon-o" aria-hidden="true"></i> Switch to Dark Mode</a></li>
                 
                      </ul>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3 explore">
                    <div class="widget dark">
                      <h4 class="widget-title line-bottom-theme-colored-2">Explore</h4>
                <ul class="angle-double-right list-border">
                  <li><a href="https://home.iitd.ac.in/rules.php">Rules</a></li>
                        <li><a href="https://home.iitd.ac.in/gallery.php">Campus Life</a></li>
                        <li><a href="https://home.iitd.ac.in/institute-newsletters.php"> Institute Newsletter</a></li>
                  <li><a target="_blank" href="http://academics.iitd.ac.in/">Educational Programmes</a></li>
                        <li><a href="https://home.iitd.ac.in/phd-seminar.php">PhD Seminar</a></li>
                 <!--  <li><a href="social-initiative.php">Social Initiatives</a></li> -->
                  <li><a href="https://home.iitd.ac.in/climate-action-iitd.php">Climate Action Plan</a></li>
                  <li><a href="https://home.iitd.ac.in/contact.php">Contact Us</a></li>
                        
                      </ul>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3 weather">
                    <div class="widget dark">
                      <div class="report-container" data-toggle="tooltip" data-placement="top" title="" data-original-title="Source: OpenWeather">
                          <h4 class="widget-title line-bottom-theme-colored-2"><i class="fa fa-cloud"></i> New Delhi</h4>
                          <div class="time">
                              <div class="text-gray2">Wednesday 8:10 pm, 18th October, 2023</div>
                          </div>
                          <div class="weather-forecast mt-5 mb-5">
                              <img src="Home%20Page%20IIT%20Delhi_files/01n.png" class="weather-icon" alt="weather icon">
                    <div class="d-inline-block va-b text-gray2"><div class="text-white kk-bold">Clear Sky</div><span class="text-gray2">Temp: </span>27.88°C</div>
                          </div>
                          <div class="time">
                              <div class="text-gray2">Humidity: 29% &nbsp;&nbsp;Wind: 2.62km/h;</div>
                          </div>
                      </div>
                      <div id="aqi-blk"><a target="_blank" href="https://cerca.iitd.ac.in/"><h3 class="text-white m-0 p-5 aqi font-17" data-toggle="tooltip" data-placement="top" data-original-title="AQI: Good | Source: CERCA">Air Pollution (PM2.5) : <span>43.68 </span><i class="kk-lh2 font-22 fa fa-heart animated infinite heartBeat aqi-good"></i></h3></a><p class="m-0 p-0 font-12 text-right text-gray2">Source: <a target="_blank" href="https://cerca.iitd.ac.in/">CERCA</a></p></div>
                    </div>
                
                  </div>
                </div>
              </div>
              <div class="footer-bottom" data-bg-color="#2b2d3b" style="background: rgb(43, 45, 59) !important;">
                <div class="container pt-20 pb-20">
                  <div class="row">
                    <div class="col-md-8">
                  <span class="ml-20 text-white sw-nl"><i class="fa fa-rocket"></i> Switch to Light Version</span>			</p>
                    </div>
                    <div class="col-md-4 text-right">
                      <div class="widget no-border m-0">
                        <div class="col-md-12">
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <a class="scrollToTop" href="#" style="display: none;"><i class="fa fa-angle-up"></i></a>
            </div>
            
          <script type="text/javascript" src="Home%20Page%20IIT%20Delhi_files/spamspan.js"></script>
          <script type="text/javascript" src="Home%20Page%20IIT%20Delhi_files/printThis.js"></script>
          
          <script type="text/javascript">
              $( document ).ready(function() {
                  if ($('.aqi span').html() < 0) {
                $('.aqi span').html('0 ');
                      $('.aqi i').addClass('aqi-good');
                      $('.aqi').attr('data-toggle','tooltip');
                      $('.aqi').attr('data-placement','top');
                      $('.aqi').attr('data-original-title','AQI: Good | Source: CERCA');
                  }
              
              if ($('.aqi span').html() <= 50) {
                      $('.aqi i').addClass('aqi-good');
                      $('.aqi').attr('data-toggle','tooltip');
                      $('.aqi').attr('data-placement','top');
                      $('.aqi').attr('data-original-title','AQI: Good | Source: CERCA');
                  }
          
                  if ($('.aqi span').html() > 50 && $('.aqi span').html() <= 100) {
                      $('.aqi i').addClass('aqi-satisfactory');
                      $('.aqi').attr('data-toggle','tooltip');
                      $('.aqi').attr('data-placement','top');
                      $('.aqi').attr('data-original-title','AQI: Satisfactory | Source: CERCA');
                  }
          
                  if ($('.aqi span').html() > 100 && $('.aqi span').html() <= 200) {
                      $('.aqi i').addClass('aqi-moderate');
                      $('.aqi').attr('data-toggle','tooltip');
                      $('.aqi').attr('data-placement','top');
                      $('.aqi').attr('data-original-title','AQI: Moderate | Source: CERCA');
                  }
          
                  if ($('.aqi span').html() > 200 && $('.aqi span').html() <= 300) {
                      $('.aqi i').addClass('aqi-poor');
                $('.aqi').attr('data-toggle','tooltip');
                      $('.aqi').attr('data-placement','top');
                      $('.aqi').attr('data-original-title','AQI: Poor | Source: CERCA');
                  }
          
                  if ($('.aqi span').html() > 300 && $('.aqi span').html() <= 400) {
                      $('.aqi i').addClass('aqi-very-poor');
                $('.aqi').attr('data-toggle','tooltip');
                      $('.aqi').attr('data-placement','top');
                      $('.aqi').attr('data-original-title','AQI: Very Poor | Source: CERCA');
                  }
          
                  if ($('.aqi span').html() > 400 && $('.aqi span').html() <= 500) {
                      $('.aqi i').addClass('aqi-severe');
                $('.aqi').attr('data-toggle','tooltip');
                      $('.aqi').attr('data-placement','top');
                      $('.aqi').attr('data-original-title','AQI: Severe | Source: CERCA');
                  }
              
              if ($('.aqi span').html() > 500 && $('.aqi span').html() <= 900) {
                      $('.aqi i').addClass('aqi-severe');
                $('.aqi').attr('data-toggle','tooltip');
                      $('.aqi').attr('data-placement','top');
                      $('.aqi').attr('data-original-title','AQI: Severe | Source: CERCA');
                  }
              
              if ($('.aqi span').html() > 900) {
                $('#aqi-blk').remove();
                  }
              });
          </script>
          <script type="text/javascript">
          $(document).ready(function(){
              $(document).mouseup(function(e){
                if ($(".showhide").css('display') != 'none') {
                  var menu = $('.menuzord-menu');
                  if (!menu.is(e.target) // The target of the click isn't the container.
                  && menu.has(e.target).length === 0) // Nor a child element of the container
                   {
                      menu.slideUp();
                   }
                }
              });
          });
          
          $(window).load(function(){
            var heights = $(".owl-item .item article .entry-content").map(function() {
                  return $(this).height();
              }).get();
              maxHeight = Math.max.apply(null, heights);
              $(".owl-item .item article .entry-content").height(maxHeight);
          });
          </script>
          <script type="text/javascript">
                  (function ($) {
                $.fn.fontResize = function(options){
                var increaseCount = 0;
                var self = this;
          
                var changeFont = function(element, amount){
                  var baseFontSize = parseInt(element.css('font-size'), 10);
                  var baseLineHeight = parseInt(element.css('line-height'), 10);
                  element.css('font-size', (baseFontSize + amount) + 'px');
                  element.css('line-height', (baseLineHeight + amount) + 'px');
                };
          
                options.increaseBtn.on('click', function (e) {
                  e.preventDefault();
                  self.each(function(index, element){
                  changeFont($(element), 1);
                  });
                  increaseCount++;
                  });
          
                options.decreaseBtn.on('click', function (e) {
                  e.preventDefault();
                  if(increaseCount === -1){ return; }
                  self.each(function(index, element){
                  changeFont($(element), -2);
                  });
                  increaseCount--;
                });
                }
              })(jQuery);
          
              $(function () {
                $('body,h1,h2,h3,h4,h5,h6,p,ul,ol,a,input').fontResize({
                increaseBtn: $('#incfont'),
                decreaseBtn: $('#decfont')
                });
              });
          </script>
          <script type="text/javascript"> 
            $(document).ready(function() {
              $('.academics,.for-students,.for-faculty').click(function(e){
                  $(this).children('.megamenu').toggle();
                  e.stopPropagation();
              });
          
              $('.research .ar-inner-drop,.compliance .ar-inner-drop,.important .ar-inner-drop').click(function(e){
                  $(this).children('.dropdown').toggle();
                  e.stopPropagation();
              });
          
              // $('.research,.compliance,.important').click(function(e){
              //     $(this).children('.dropdown').toggle();
              //     e.stopPropagation();
              // });
          
            $('.megamenu.megamenu-bg-img').removeClass('nv');
            
            });
          </script>
          
          
          <script src="Home%20Page%20IIT%20Delhi_files/jcarousellite_1.0.1c4.js" type="text/javascript"></script>
          
          <script type="text/javascript">
          $(function() {
            $(".newsticker-jcarousellite").jCarouselLite({
              vertical: true,
              hoverPause:true,
              visible: 3,
              auto:500,
              speed:1000
            });
          });
          </script>
          <!-- 
          <script type="text/javascript">
            if (localStorage.firstVisit && localStorage.voiceNoSupport) {
              $('head').append('<script async src="https://w.appzi.io/bootstrap/bundle.js?token=wu0vE"><\/script>');
            }
            setTimeout(function(){
              $("div[id^=appzi-launch-button]").css('z-index', '1110');
            },3000);
          </script> -->
          
          <script type="text/javascript">
            if (!localStorage.firstVisit) {
              $("body:last").append('<script type="text/javascript" src="js/driver.min.js"><\/script>');
              $("body:last").append('<script type="text/javascript" src="js/intro.js"><\/script>');
            }
            
            var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            if(!iOS) {
              var isChromium = window.chrome;
              var winNav = window.navigator;
              var vendorName = winNav.vendor;
              var isOpera = typeof window.opr !== "undefined";
              var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
              var isIOSChrome = winNav.userAgent.match("CriOS");
          
              if (isIOSChrome) {
                 // is Google Chrome on IOS
              } else if(
                isChromium !== null &&
                typeof isChromium !== "undefined" &&
                vendorName === "Google Inc." &&
                isOpera === false &&
                isIEedge === false
              ) {
                var SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
                if ('SpeechRecognition' in window && localStorage.dev) {
                  $("body:last").append('<script type="text/javascript" src="https://code.responsivevoice.org/responsivevoice.js?key=nZTeggAE"><\/script>');
                  $("body:last").append('<script type="text/javascript" src="js/voice-recognition.js"><\/script>');
                  $("body:last").append('<script type="text/javascript" src="js/intro-voice.js"><\/script>');
                  // $("body:last").append('<script type="text/javascript" src="js/others-intro-voice.js"><\/script>');
                  // localStorage.voiceNoSupport = "1";
                }
                else {
                  $("body:last").append('<script type="text/javascript" src="js/others-intro-voice.js"><\/script>');
                  localStorage.voiceNoSupport = "1";
                }
              }
              else {
                $("body:last").append('<script type="text/javascript" src="js/others-intro-voice.js"><\/script>');
                
                if(!localStorage.voiceNoSupport) {
                  localStorage.voiceNoSupport = "1";
                }
              }
            }
            else {
              $("body:last").append('<script type="text/javascript" src="js/others-intro-voice.js"><\/script>');
              
              if(!localStorage.voiceNoSupport) {
                localStorage.voiceNoSupport = "1";
              }
            }
            
            if(localStorage.voiceNoSupport) {
              $(".voice-assistant").remove();
            }
            
            
            $(document).ready(function() {
              
              // if (localStorage.firstVisit && localStorage.voiceNoSupport) {
              // 	if (localStorage.feedbackEligible) {
              // 		if(parseInt(localStorage.feedbackEligible) < 11) {
              // 			localStorage.feedbackEligible = parseInt(localStorage.feedbackEligible) + 1;
              // 		}
              // 	}
              // 	else {
              // 		localStorage.feedbackEligible = 1;
              // 	}
              // }
          
              // if (parseInt(localStorage.feedbackEligible) == 10 ) {
              // 	setTimeout(function(){
              // 		if (confirm("Do you want to share your experience with the new website?")) {
              // 			$("div[id^=appzi-widget-backdrop]").css('z-index', '1109');
              // 			$("div[id^=appzi-widget-backdrop]").css('display', 'block');
              // 			$("div[id^=appzi-widget-backdrop]").css('background-color', 'rgba(0,0,0,0.9)');
              // 			$("div[id^=appzi-widget-backdrop]").append('<div class="feedback-bg">Click the Feedback button to start <i class="fa fa-arrow-right"></i></div>');
                    
              // 			setTimeout(function(){
              // 				$("div[id^=appzi-widget-backdrop]").css('display', '');
              // 				$("div[id^=appzi-widget-backdrop]").css('background-color', '');
              // 				$("div[id^=appzi-widget-backdrop] .feedback-bg").addClass('dn');
              // 			},3000);
              // 		}
              // 		else {
                    
              // 		}
              // 	},10000);
              // }
              
              var admnW = $("#admn-chh").map(function() {
                return $(this).width();
              }).get();
              
              $("#admn-ch").width(admnW);
                
              $("#admn-chh").remove();
              
              setTimeout(function(){
                $("#admn-ch a").typed({strings: [
                  "Administration",
                  "Leadership"
                  ],
                  typeSpeed: 0,
                  backDelay: 5000,
                  loop: true,
                  showCursor: false,
                  cursorChar: '',
                  autoInsertCss: false,
                  loopCount: Infinity,
                  callback: function(){}
                });
              },8000);
              
              //for hindi
              var admnWh = $("#admn-chh").map(function() {
                return $(this).width();
              }).get();
              
              $("#admnh-ch").width(admnWh);
                
              $("#admnh-chh").remove();
              
              setTimeout(function(){
                $("#admnh-ch a").typed({strings: [
                  "प्रशासन",
                  "लीडरशिप"
                  ],
                  typeSpeed: 0,
                  backDelay: 5000,
                  loop: true,
                  showCursor: false,
                  cursorChar: '',
                  autoInsertCss: false,
                  loopCount: Infinity,
                  callback: function(){}
                });
              },8000);
            });
            
            $( ".sw-nl" ).click(function() {
              cname = 'lightVersion';
              cvalue = '1';
              document.cookie = cname + "=" + cvalue + ";path=/";
              location.reload();
            });
            
            $( ".sw-ln" ).click(function() {
              cname = 'lightVersion';
              document.cookie = cname +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
              location.reload();
            });
          </script><script type="text/javascript" src="Home%20Page%20IIT%20Delhi_files/driver.min.js"></script><script type="text/javascript" src="Home%20Page%20IIT%20Delhi_files/intro.js"></script><script type="text/javascript" src="Home%20Page%20IIT%20Delhi_files/others-intro-voice.js"></script>
          
          <!--dark mode-->
          <script>
            checkDarkMode();
          </script>
          
          <script type="text/javascript">
            function internal() {
              var alerted = localStorage.getItem('alerted') || '';
              if (alerted != 'yes') {
                alert("This is an IIT Delhi Internal Link, Please click on OK to continue.");
                localStorage.setItem('alerted','yes');
              }
            }
          </script>
          <!--end-->
          
          <!-- IITD search -->
          <div id="search" class="iitd-scroll" tabindex="0">
            <button type="button" class="close"><i class="fa fa-close"></i></button>
              <div id="kk-typed" class="input-div">
                <h1 class="tagline text-white font-40">
                  <span class="typed-text-carousel" data-speed="90" data-back_delay="500" data-loop="true">Type the keyword(s) you are looking for, like</span><span class="typed-cursor">|</span>
                </h1>
              </div>
            <form id="iitd-search" method="post">
              <div class="kk-filter">
                <label>
                  <span class="label-text first">Search in:</span>
                </label>
                <label class="ml15">
                  <input value="all" type="radio" name="radio" checked="checked"><span class="label-text">Everything <i class="fa fa-asterisk"></i></span>
                </label>
                <!--<label class="ml25">
                  <input value="how" type="radio" name="radio"><span class="label-text">How to <i class="fa fa-question-circle"></i></span>
                </label>-->
                <label class="ml25">
                  <input value="people" type="radio" name="radio"> <span class="label-text">People <i class="fa fa-users"></i></span>
                </label>
              </div>
              <input id="kk-inp" onkeyup="showResult(this.value)" class="input-div dn" type="search" placeholder="What are you looking for?" autocomplete="off">
              <div id="search_results" class="s-results"></div>
            </form>
          </div> <!-- IITD search -->
          <script src="Home%20Page%20IIT%20Delhi_files/iitd-search.js"></script>
           <!-- end wrapper -->
          
          
          
          <!-- Footer Scripts -->
          <!-- JS | Custom script for all pages -->
          <script src="Home%20Page%20IIT%20Delhi_files/custom.js"></script>
          <script src="Home%20Page%20IIT%20Delhi_files/announcement.js"></script>
          <!-- SLIDER REVOLUTION 5.0 EXTENSIONS  
                (Load Extensions only on Local File Systems ! 
                 The following part can be removed on Server for On Demand Loading) -->
          <script type="text/javascript" src="Home%20Page%20IIT%20Delhi_files/revolution.extension.actions.min.js"></script>
          <script type="text/javascript" src="Home%20Page%20IIT%20Delhi_files/revolution.extension.carousel.min.js"></script>
          <script type="text/javascript" src="Home%20Page%20IIT%20Delhi_files/revolution.extension.kenburn.min.js"></script>
          <script type="text/javascript" src="Home%20Page%20IIT%20Delhi_files/revolution.extension.layeranimation.min.js"></script>
          <script type="text/javascript" src="Home%20Page%20IIT%20Delhi_files/revolution.extension.migration.min.js"></script>
          <script type="text/javascript" src="Home%20Page%20IIT%20Delhi_files/revolution.extension.navigation.min.js"></script>
          <script type="text/javascript" src="Home%20Page%20IIT%20Delhi_files/revolution.extension.parallax.min.js"></script>
          <script type="text/javascript" src="Home%20Page%20IIT%20Delhi_files/revolution.extension.slideanims.min.js"></script>
          <script type="text/javascript" src="Home%20Page%20IIT%20Delhi_files/revolution.extension.video.min.js"></script>
          
          <script type="text/javascript">
            $("#pre-main").addClass('dn');
            var  fig;
            var pre;
            fig = Math.random();
            pre = fig.toFixed(1)*10;
            $("#pre"+pre).removeClass('dn');
            
            var i = 0;
            
            while (($("#preloader").css("display") != "none") && i < 120) { 
              task(i); 
              i++; 
            } 
            function task(i) { 
              setTimeout(function() { 
                $("#pre"+pre).addClass('dn');
                fig = Math.random();
                pre_digit = fig.toFixed(1);
                if(pre_digit > 0.9) {
                  pre_digit = 0.8;
                }
                pre = pre_digit*10;
                $("#pre"+pre).removeClass('dn');
              }, 1000 * i); 
            } 
          </script>
          
          <script>
            $.fn.isInViewport = function() {
              var elementTop = $(this).offset().top;
              var elementBottom = elementTop + $(this).outerHeight();
          
              var viewportTop = $(window).scrollTop();
              var viewportBottom = viewportTop + $(window).height();
          
              return elementBottom > viewportTop && elementTop < viewportBottom;
            };
          
            $(window).on('resize scroll', function() {
              $('.bw2ckk').each(function() {
                if ($(this).isInViewport()) {
                  $('.bottom-img').addClass('color');
                } else {
                  $('.bottom-img').removeClass('color');
                }
              });
            });
          </script>
          <script>
            $(window).load(function(e) {
                  $("#bn1").breakingNews({
                effect		:"slide-h",
                autoplay	:true,
                timer		:10000,
                color		:"red"
              });
              });
           </script>
          
          <!-- Modal -->
          
          <!-- <div class="modal fade kk-index in" id="pmaddress" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog kk-pad1" role="document">
               <div class="modal-content">
                <div class="modal-header kk-model">
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                 <h3 class="modal-title kk-title" id="myModalLabel"><span class="blink">PG Admission including Ph.D.</span></h3>
                </div>
                <div class="modal-body">
                 <div class="row mtli-row-clearfix p-15 pb-0" text="center">
                  <a href="pg-admissions.php" target="_blank"><img src="images/iit-photo1.jpg" target="#"> <h4 class="text-center font-weight-bold blink">Last date for submission of online application and application fee has been extended to April 17, 2022 (4 pm). No further extension will be made</h4></a>
                     <div class="separator pb-0">
            <i class="fa fa-cog fa-spin"></i>
          </div>
                 </div>
                 <div class="kk-align-c pt-0">
                 <button type="button" class="btn btn-default "><a href="" target=""><strong class="text-theme-colored2">PG Admissions 2022</strong></a></button>
                </div>
                </div>
                <div class="modal-footer kk-align-c">
                 <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
               </div>
            </div>
          </div> --> 
          
          <!-- <script type="text/javascript">
              $(window).on('load', function() {
                  $('#pmaddress').modal('show');
              });
          </script> -->
          <!-- Modal end --> 
          
          <script>
            $(document).ready(function(){
              $("#myModal").modal('show');
            });
          </script>
          
          <!-- model -->
          <!-- <div id="myModal" class="modal fade" tabindex="-1" role="dialog">
              <div class="modal-dialog" style="top: 100px;">
                  <div class="modal-content">
                      <div class="modal-header ar-modal">
                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h3 class="modal-title gradient-heading" style="text-align: center;">"IIT DELHI 54th ANNUAL CONVOCATION"</h3>
                      </div>
                      <div class="modal-body" style="text-align: center; font-weight: bold;">
                          <div id="ytplayer"></div>
                          <div class="kk-align-c">
                              <button id="close_ps" type="button" class="btn btn-default text-theme-colored2" data-dismiss="modal"><strong>Continue to Main Website</strong></button>
                              <button type="button" class="btn btn-default text-theme-colored2">
                                  <a href="https://convocation.iitd.ac.in/" class="text-theme-colored2" target="_blank">
                                      <strong>Go to Convocation Website</strong>
                                  </a>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
          <script>
              var tag = document.createElement('script');
              tag.src = "https://www.youtube.com/player_api";
              var firstScriptTag = document.getElementsByTagName('script')[0];
              firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          
              var player;
              function onYouTubePlayerAPIReady() {
                  player = new YT.Player('ytplayer', {
                      height: '400',
                      width: '1140',
                      playerVars: {
                          autoplay: 1,
                          mute: 1 // Mute the video initially
                      },
                      videoId: 'FdmOyCK0ER0'
                  });
              }
          
              $(document).ready(function () {
                  $('#myModal').on('hidden.bs.modal', function () {
                      if (player) {
                          player.pauseVideo();
                          player.setVolume(0);
                      }
                  });
              });
          </script> -->
          
          
          
          
          
          
          
          
          <div id="driver-popover-item" class="one-step-popover-class" style="display: none; left: 800px; top: 6267.05px;">
              <div class="driver-popover-tip top position-center"></div>
              <div class="driver-popover-title">A new approach!</div>
              <div class="driver-popover-description">We've organised the main 
          menu to assist you in finding resources easily. May be it Academics, 
          Latest Research, Resources for students or for faculty, find them all in
           a quick glance.</div>
              <div class="driver-clearfix driver-popover-footer" style="display: block;">
                <button class="driver-close-btn">Close</button>
                <span class="driver-counter" style="display: inline-block;"></span>
                <span class="driver-btn-group driver-navigation-btns">
                  <button class="driver-prev-btn driver-disabled" style="display: inline-block;">← Previous</button>
                  <button class="driver-next-btn" style="display: inline-block;">Next →</button>
                </span>
              </div>
            </div></body></html>`
        }}/>
      </section>
    </main>
  );
}

export default App;
