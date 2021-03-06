angular.module('good-as-gold').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/assets/js/home/partials/_about.html',
    "<div class=\"clearfix\"></div>\n" +
    "\n" +
    "<div class=\"danielle-padding col-lg-4 col-lg-offset-2 col-md-4 col-md-offset-2 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1\">\n" +
    "    <img class=\"danielle-gif hidden-sm hidden-xs\" align=\"right\"\n" +
    "         ng-src=\"./assets/img/portrait_animations/danz268.gif\"/>\n" +
    "\n" +
    "    <img class=\"hidden-lg hidden-md img-responsive center-block\"\n" +
    "         ng-src=\"./assets/img/portrait_animations/danz268.gif\"/>\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "\n" +
    "    <p class=\"danielle-blurb\" align=\"left\">\n" +
    "        Danielle has been working in the design industry for four years now,\n" +
    "        mainly focusing on digital design. Particular area of expertise include Mobile and Web UX Design.\n" +
    "        Danielle was head of design at app development house Showoff for two years before making a\n" +
    "        move to go out on her own. Skills obtained while working in this role are UI Design,\n" +
    "        Interaction Design, and Product Development.\n" +
    "    </p>\n" +
    "</div>\n" +
    "\n" +
    "<br>\n" +
    "\n" +
    "<div class=\"lauren-padding col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1\">\n" +
    "    <img class=\"lauren-gif hidden-sm hidden-xs\" align=\"right\"\n" +
    "         ng-src=\"./assets/img/portrait_animations/268.gif\"/>\n" +
    "\n" +
    "    <img class=\"hidden-lg hidden-md img-responsive center-block\"\n" +
    "         ng-src=\"./assets/img/portrait_animations/268.gif\"/>\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "\n" +
    "    <p class=\"lauren-blurb\" align=\"left\">\n" +
    "        Lauren has over four years’ experience in the digital advertising industry working for\n" +
    "        one of the world’s largest online publishers, MailOnline. Here, she helped build and develop\n" +
    "        the digital advertising department from sales and strategy to most recently heading up the\n" +
    "        Ad Operations team. This year Lauren was amongst some of the first in Ireland to pass the\n" +
    "        Digital Media Sales Certificate as certified by the IAB. She also worked closely with the\n" +
    "        MailTV department over the past number of years as a presenter for both editorial and commercial shoots.\n" +
    "    </p>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('/assets/js/home/partials/_contact.html',
    "<div class=\"clearfix\"></div>\n" +
    "\n" +
    "<div class=\"col-lg-3 col-lg-offset-3 col-md-3 col-md-offset-3 col-sm-3 col-sm-offset-1 col-xs-10 col-xs-offset-1\">\n" +
    "    <h2 class=\"contact-title\">Contact</h2>\n" +
    "\n" +
    "    <hr class=\"contact-rule\">\n" +
    "\n" +
    "    <p class=\"contact-blurb\">\n" +
    "        We would love to hear from\n" +
    "        you no matter what stage of\n" +
    "        your digital journey you're on.\n" +
    "    </p>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-lg-5 col-lg-offset-0 col-md-5 col-md-offset-0 col-sm-7 col-sm-offset-0 col-xs-10 col-xs-offset-1 contact-form\">\n" +
    "    <form name=\"EmailForm\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"contact-name\" name=\"name\" ng-model=\"mail.NAME\">\n" +
    "            <label class=\"contact-label\" for=\"contact-name\">Name</label>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"contact-subject\" name=\"subject\"\n" +
    "                   ng-model=\"mail.SUBJECT\">\n" +
    "            <label class=\"contact-label\" for=\"contact-subject\">Subject</label>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "            <textarea class=\"form-control\" rows=\"5\" id=\"contact-message\" name=\"message\"\n" +
    "                      ng-model=\"mail.MESSAGE\" style=\"resize: none;\"></textarea>\n" +
    "            <label class=\"contact-label\" for=\"contact-message\">Message</label>\n" +
    "        </div>\n" +
    "\n" +
    "        <a class=\"btn btn-default contact-button\" ng-disabled=\"EmailForm.$invalid\"\n" +
    "        href=\"mailto:hello@goodasgold.ie?subject={{mail.NAME}} <{{mail.SUBJECT}}>&body={{mail.MESSAGE}}\">Email Us</a>\n" +
    "    </form>\n" +
    "</div>\n"
  );


  $templateCache.put('/assets/js/home/partials/_landing.html',
    "<div class=\"clearfix\"></div>\n" +
    "\n" +
    "<div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1\">\n" +
    "    <img class=\"good-as-gold-logo img-responsive center-block hidden-sm hidden-xs\" image-cache-buster\n" +
    "         src=\"./assets/img/animations/Good_as_Gold_Animation.gif\"/>\n" +
    "\n" +
    "    <img class=\"good-as-gold-logo img-responsive center-block hidden-lg hidden-md\" image-cache-buster\n" +
    "         src=\"./assets/img/svgs/Logo_With_Copy.svg\"/>\n" +
    "</div>"
  );


  $templateCache.put('/assets/js/home/partials/_services.html',
    "<div class=\"clearfix\"></div>\n" +
    "\n" +
    "<div class=\"services-logo-container col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2\">\n" +
    "    <img class=\"services-logo img-responsive center-block\" src=\"./assets/img/svgs/Services_Map.svg\"/>\n" +
    "    <span class=\"services-link content-packaging\" popover-placement=\"bottom\"\n" +
    "          uib-popover-template=\"'_content_packaging_popover.html'\"\n" +
    "          popover-trigger=\"mouseenter\">Content Packaging</span>\n" +
    "        \n" +
    "    <span class=\"services-link social-media\" popover-placement=\"bottom\"\n" +
    "          uib-popover-template=\"'_social_media_popover.html'\"\n" +
    "          popover-trigger=\"mouseenter\">Social Media</span>\n" +
    "\n" +
    "    <span class=\"services-link ui-design\" popover-placement=\"bottom\"\n" +
    "          uib-popover-template=\"'_ui_design_popover.html'\"\n" +
    "          popover-trigger=\"mouseenter\">UI Design</span>\n" +
    "\n" +
    "    <span class=\"services-link design\" popover-placement=\"bottom\"\n" +
    "          uib-popover-template=\"'_design_popover.html'\"\n" +
    "          popover-trigger=\"mouseenter\">Design</span>\n" +
    "\n" +
    "    <span class=\"services-link branding\" popover-placement=\"left\"\n" +
    "          uib-popover-template=\"'_branding_popover.html'\"\n" +
    "          popover-trigger=\"mouseenter\">Branding</span>\n" +
    "\n" +
    "    <span class=\"services-link ux-design\" popover-placement=\"left\"\n" +
    "          uib-popover-template=\"'_ux_design_popover.html'\"\n" +
    "          popover-trigger=\"mouseenter\">UX Design</span>\n" +
    "\n" +
    "    <span class=\"services-link digital-advertising\" popover-placement=\"bottom\"\n" +
    "          uib-popover-template=\"'_digital_advertising_popover.html'\"\n" +
    "          popover-trigger=\"mouseenter\">Digital Advertising</span>\n" +
    "\n" +
    "    <span class=\"services-link ad-operations\" popover-placement=\"left\"\n" +
    "          uib-popover-template=\"'_ad_operations_popover.html'\"\n" +
    "          popover-trigger=\"mouseenter\">Ad Operations</span>\n" +
    "\n" +
    "    <span class=\"services-link handover\" popover-placement=\"top\"\n" +
    "          uib-popover-template=\"'_handover_popover.html'\"\n" +
    "          popover-trigger=\"mouseenter\">Handover</span>\n" +
    "</div>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"_content_packaging_popover.html\">\n" +
    "    <div class=\"blah\">\n" +
    "        <span class=\"service-popover-label\">Content Packaging</span>\n" +
    "        <p class=\"service-popover-blurb\">\n" +
    "            Building content for your company that eloquently represents your brand\n" +
    "            whether that is for your website, App or through a press release.\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"_social_media_popover.html\">\n" +
    "    <div>\n" +
    "        <span class=\"service-popover-label\">Social Media</span>\n" +
    "        <p class=\"service-popover-blurb\">\n" +
    "            Establish and evaluate your social media channels including brand\n" +
    "            representation, social media strategy and approach. Advice of scheduling tools and how to\n" +
    "            implement. Get to know your audience and adapting your content based on their habits.\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"_ui_design_popover.html\">\n" +
    "    <div>\n" +
    "        <span class=\"service-popover-label\">UI Design</span>\n" +
    "        <p class=\"service-popover-blurb\">\n" +
    "            While we understand that a brand is much more than how something looks, we know that\n" +
    "            presentation is key. Every product should communicate a message with visual accuracy.\n" +
    "            Having a good understanding of website and mobile interfaces and patterns means that your\n" +
    "            product or brand will be as efficient and streamlined as possible.\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"_design_popover.html\">\n" +
    "    <div>\n" +
    "        <span class=\"service-popover-label\">Design</span>\n" +
    "        <p class=\"service-popover-blurb\">\n" +
    "            Good design is integral to every step of the company or product life cycle through a variety\n" +
    "            of mediums. By honouring content we help create successful design projects from branding\n" +
    "            executions to full website or App design. By paying attention to client needs, we provide\n" +
    "            design assets that will engage potential customers and ultimately visually communicate the\n" +
    "            company in the best possible manner.\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"_branding_popover.html\">\n" +
    "    <div>\n" +
    "        <span class=\"service-popover-label\">Branding</span>\n" +
    "        <p class=\"service-popover-blurb\">\n" +
    "            Visually communicating your brand is one of the most important exercises for any company.\n" +
    "            We will listen to you and work with you to help create the most accurate portrayal of what\n" +
    "            your brand represents.\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"_ux_design_popover.html\">\n" +
    "    <div>\n" +
    "        <span class=\"service-popover-label\">UX Design</span>\n" +
    "        <p class=\"service-popover-blurb\">\n" +
    "            Often a potential customer’s first exposure to your brand or product is via a digital platform. If\n" +
    "            you are building a product such as a website, app or software you can be sure good User\n" +
    "            Experience design is paramount. We will make sure that usability and User satisfaction is\n" +
    "            integrated in the early design process so your project has the best possible outcome and\n" +
    "            representation.\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"_digital_advertising_popover.html\">\n" +
    "    <div>\n" +
    "        <span class=\"service-popover-label\">Digital Advertising</span>\n" +
    "        <p class=\"service-popover-blurb\">\n" +
    "            Where, when and how you should be advertising on digital platforms\n" +
    "            from display and search to video and native.\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"_ad_operations_popover.html\">\n" +
    "    <div>\n" +
    "        <span class=\"service-popover-label\">Ad Operations</span>\n" +
    "        <p class=\"service-popover-blurb\">\n" +
    "            Setting up and implementing an ad server on your website or App.\n" +
    "            Campaign set-up, trafficking, terminology and training to establish and develop your\n" +
    "            advertising operations department.\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"_handover_popover.html\">\n" +
    "    <div>\n" +
    "        <span class=\"service-popover-label\">Handover</span>\n" +
    "        <p class=\"service-popover-blurb\">\n" +
    "            It is of great import to us that the final phases of design and strategy are properly\n" +
    "            presented back to the customer so they then can maintain and update their new digital\n" +
    "            offerings. At this point training sessions happen either in-person or remotely to ensure a\n" +
    "            client has the tools to go forward and feels confident doing so.\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</script>\n"
  );


  $templateCache.put('/assets/js/home/partials/_who_we_are.html',
    "<div class=\"clearfix\"></div>\n" +
    "\n" +
    "<div class=\"col-lg-7 col-lg-offset-2 col-md-7 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1\">\n" +
    "    <img class=\"who-we-are-logo img-responsive center-block\" src=\"./assets/img/svgs/who_we_are.svg\"/>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-lg-4 col-lg-offset-7 col-md-4 col-md-offset-7 col-sm-9 col-sm-offset-3 col-xs-10 col-xs-offset-1\">\n" +
    "    <p class=\"who-we-are-blurb\" align=\"left\">\n" +
    "        We work with a variety of clients which vary\n" +
    "        significantly in the level of their digital capabilities.\n" +
    "        We are all about ensuring your brand or product\n" +
    "        philosophy does not get lost in it's translation to the\n" +
    "        digital world. We are passionate about creating a great\n" +
    "        experience for our clients from start to finish through\n" +
    "        design, strategy and communication.\n" +
    "    </p>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('/assets/js/home/partials/_work.html',
    "<div class=\"clearfix\"></div>\n" +
    "\n" +
    "<div class=\"col-lg-5 col-lg-offset-3 col-md-5 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1\">\n" +
    "    <p class=\"projects-blurb\" align=\"left\">\n" +
    "        Each project requires a unique set of skills and a different approach. \n" +
    "        The focus for some clients is a full package combination from branding to \n" +
    "        PR strategies, for others they specifically need UX Consultancy, \n" +
    "        UI Design or a Social Media Strategy. \n" +
    "        Below are three of our most recent projects that showcase this.\n" +
    "    </p>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"clearfix\"></div>\n" +
    "\n" +
    "<div ng-repeat=\"project in projects | limitTo: 3 track by $index\" ng-if=\"!!projects\">\n" +
    "    <div project-tile-hover project-tile-url=\"https:{{::project.fields.thumbnail.fields.file.url}}\"\n" +
    "         ng-class=\"{ \n" +
    "         'col-lg-3 col-lg-offset-2 col-md-3 col-md-offset-2 col-sm-4 col-sm-offset-0 col-xs-10 col-xs-offset-1 project-one': $index === 0,\n" +
    "         'col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-4 col-sm-offset-0 col-xs-10 col-xs-offset-1 project-two': $index === 1,\n" +
    "         'col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-4 col-sm-offset-0 col-xs-10 col-xs-offset-1 project-three': $index === 2\n" +
    "         }\">\n" +
    "        <div class=\"project-tile\" text-fill ng-click=\"openProject(project)\">\n" +
    "            <span class=\"project-tile-tab pull-right\"></span>\n" +
    "            <p class=\"text-left\">{{::project.fields.name}}</p>\n" +
    "        </div>\n" +
    "        <span class=\"project-link\" ng-click=\"openProject(project)\">View Project &#8594;</span>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/assets/js/home/partials/main.html',
    "<nav class=\"hidden-sm hidden-xs br-fullpage-nav\">\n" +
    "    <ul>\n" +
    "        <li class=\"br-fullpage-nav-item landing\" du-scrollspy=\"LANDING\" ng-click=\"scrollToTheTop()\"></li>\n" +
    "        <li class=\"br-fullpage-nav-item\" du-scrollspy=\"WHO-WE-ARE\"><a href=\"#WHO-WE-ARE\" du-smooth-scroll>WHO WE ARE</a></li>\n" +
    "        <li class=\"br-fullpage-nav-item\" du-scrollspy=\"SERVICES\"><a href=\"#SERVICES\" du-smooth-scroll>SERVICES</a></li>\n" +
    "        <li class=\"br-fullpage-nav-item\" du-scrollspy=\"WORK\"><a href=\"#WORK\" du-smooth-scroll>WORK</a></li>\n" +
    "        <li class=\"br-fullpage-nav-item\" du-scrollspy=\"ABOUT\"><a href=\"#ABOUT\" du-smooth-scroll>ABOUT</a></li>\n" +
    "        <li class=\"br-fullpage-nav-item last\" du-scrollspy=\"CONTACT\"><a href=\"#CONTACT\" du-smooth-scroll>CONTACT</a></li>\n" +
    "        <li class=\"nav-blurb\">\n" +
    "            <p>Co Reg No. 568411</p>\n" +
    "\n" +
    "            <p>Tel +35312873712</p>\n" +
    "            \n" +
    "            <a href=\"http://www.goldeninsight.squarespace.com\" class=\"visit-our-blog\">Visit our blog</a>\n" +
    "        </li>\n" +
    "        <li class=\"social-item\">\n" +
    "            <a href=\"https://twitter.com/Goodasgold_ie\" target=\"_blank\"><i class=\"i-Twitter_Icon_Normal grey-icon\" white-hover></i></a>\n" +
    "            <a href=\"https://www.facebook.com/goodasgolddigital\" target=\"_blank\"><i class=\"i-Facebook_Icon right-icon-item grey-icon\" white-hover></i></a>\n" +
    "        </li>\n" +
    "        <li class=\"social-item\">\n" +
    "            <a href=\"https://instagram.com/goodasgold_ie\" target=\"_blank\"><i class=\"i-Instagram_Icon grey-icon\" white-hover></i></a>\n" +
    "            <a href=\"mailto:hello@goodasgold.ie?subject=Hello\" target=\"_blank\"><i class=\"i-mail_icon grey-icon right-icon-item\" white-hover></i></a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</nav>\n" +
    "\n" +
    "<nav class=\"navbar navbar-default navbar-fixed-top hidden-md hidden-lg\"\n" +
    "     role=\"navigation\" ng-init=\"navbarCollapsed = true\">\n" +
    "    <div class=\"navbar-header\" ng-class=\"navbarCollapsed ? 'nav-not-active' : 'nav-active'\">\n" +
    "        <button id=\"nav-toggle\" type=\"button\" class=\"navbar-toggle pull-left\"\n" +
    "                ng-click=\"navbarCollapsed = !navbarCollapsed\"\n" +
    "                ng-class=\"navbarCollapsed ? 'not-active' : 'active'\">\n" +
    "            <span></span>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"collapse navbar-collapse\" uib-collapse=\"navbarCollapsed\" id=\"small-nav-collapse\"\n" +
    "         ng-class=\"navbarCollapsed ? 'nav-not-active' : 'nav-active'\">\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "            <li du-scrollspy=\"LANDING\" ng-class=\"activeNav === 'HOME' ? 'active' : ''\">\n" +
    "                <a href=\"#LANDING\" class=\"text-center\"\n" +
    "                   du-smooth-scroll ng-click=\"navbarCollapsed = !navbarCollapsed; scrollToTheTop()\">HOME</a>\n" +
    "            </li>\n" +
    "            <li du-scrollspy=\"WHO-WE-ARE\" ng-class=\"activeNav === 'WHO WE ARE' ? 'active' : ''\">\n" +
    "                <a href=\"#WHO-WE-ARE\" class=\"text-center\"\n" +
    "                   du-smooth-scroll ng-click=\"navbarCollapsed = !navbarCollapsed\">WHO WE ARE</a>\n" +
    "            </li>\n" +
    "            <li du-scrollspy=\"SERVICES\" ng-class=\"activeNav === 'SERVICES' ? 'active' : ''\">\n" +
    "                <a href=\"#SERVICES\" class=\"text-center\"\n" +
    "                   du-smooth-scroll ng-click=\"navbarCollapsed = !navbarCollapsed\">SERVICES</a>\n" +
    "            </li>\n" +
    "            <li du-scrollspy=\"WORK\" ng-class=\"activeNav === 'WORK' ? 'active' : ''\">\n" +
    "                <a href=\"#WORK\" class=\"text-center\"\n" +
    "                   du-smooth-scroll ng-click=\"navbarCollapsed = !navbarCollapsed\">WORK</a>\n" +
    "            </li>\n" +
    "            <li du-scrollspy=\"ABOUT\" ng-class=\"activeNav === 'ABOUT' ? 'active' : ''\">\n" +
    "                <a href=\"#ABOUT\" class=\"text-center\"\n" +
    "                   du-smooth-scroll ng-click=\"navbarCollapsed = !navbarCollapsed\">ABOUT</a>\n" +
    "            </li>\n" +
    "            <li du-scrollspy=\"CONTACT\" ng-class=\"activeNav === 'CONTACT' ? 'active' : ''\">\n" +
    "                <a href=\"#CONTACT\" class=\"text-center\"\n" +
    "                   du-smooth-scroll ng-click=\"navbarCollapsed = !navbarCollapsed\">CONTACT</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.goldeninsight.squarespace.com\" class=\"text-center\">VISIT OUR BLOG</a>\n" +
    "            </li>\n" +
    "            <li class=\"text-center\" style=\"color: white; cursor: pointer\">\n" +
    "                <i class=\"i-Twitter_Icon_Normal\" ng-click=\"goToUrl('https://twitter.com/Goodasgold_ie')\"></i>\n" +
    "                <i class=\"i-Facebook_Icon\" ng-click=\"goToUrl('https://www.facebook.com/goodasgolddigital')\"></i>\n" +
    "                <i class=\"i-Instagram_Icon\" ng-click=\"goToUrl('https://instagram.com/goodasgold_ie')\"></i>\n" +
    "                <i class=\"i-mail_icon\" ng-click=\"goToUrl('mailto:hello@goodasgold.ie?subject=Hello')\"></i>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div id=\"good-as-gold-container\" class=\"container-fluid\" du-scroll-container>\n" +
    "    <div class=\"row page\" id=\"LANDING\">\n" +
    "        <div ng-include src=\"'/assets/js/home/partials/_landing.html'\"></div>\n" +
    "\n" +
    "        <i class=\"fa fa-angle-down arrows hidden-xs\" ng-click=\"scrollToPage('WHO-WE-ARE')\"></i>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row page who-we-are-background-image\" id=\"WHO-WE-ARE\">\n" +
    "        <div ng-include src=\"'/assets/js/home/partials/_who_we_are.html'\"></div>\n" +
    "\n" +
    "        <i class=\"fa fa-angle-down arrows hidden-xs\" ng-click=\"scrollToPage('SERVICES')\"></i>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row page services-background-image\" id=\"SERVICES\">\n" +
    "        <div ng-include src=\"'/assets/js/home/partials/_services.html'\"></div>\n" +
    "\n" +
    "        <i class=\"fa fa-angle-down arrows hidden-xs\" ng-click=\"scrollToPage('WORK')\"></i>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row page work-background-image\" id=\"WORK\">\n" +
    "        <div ng-include src=\"'/assets/js/home/partials/_work.html'\"></div>\n" +
    "\n" +
    "        <i class=\"fa fa-angle-down arrows hidden-xs\" ng-click=\"scrollToPage('ABOUT')\"></i>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row page about-background-image\" id=\"ABOUT\">\n" +
    "        <div ng-include src=\"'/assets/js/home/partials/_about.html'\"></div>\n" +
    "\n" +
    "        <i class=\"fa fa-angle-down arrows hidden-xs\" ng-click=\"scrollToPage('CONTACT')\"></i>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row page contact-background-image\" id=\"CONTACT\">\n" +
    "        <div ng-include src=\"'/assets/js/home/partials/_contact.html'\"></div>\n" +
    "\n" +
    "        <i class=\"fa fa-angle-up arrows hidden-xs\" ng-click=\"scrollToTheTop()\"></i>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<script>\n" +
    "    (function ($, viewport) {\n" +
    "        $(document).ready(function () {\n" +
    "            function _resize() {\n" +
    "                var winWidth = $(window).width();\n" +
    "                var winHeight = $(window).height();\n" +
    "\n" +
    "                var pages = $('.page');\n" +
    "                for (var i = 0; i < pages.length; i++) {\n" +
    "                    var page = pages[i];\n" +
    "                    $(page).css({\n" +
    "                        'min-width': winWidth,\n" +
    "                        'min-height': winHeight\n" +
    "                    });\n" +
    "                }\n" +
    "\n" +
    "                if (viewport.is(\"<=md\")) {\n" +
    "                    var nav = $('#small-nav-collapse');\n" +
    "\n" +
    "                    nav.css({\n" +
    "                        'min-width': winWidth,\n" +
    "                        'min-height': winHeight\n" +
    "                    });\n" +
    "                }\n" +
    "            }\n" +
    "\n" +
    "            _resize();\n" +
    "\n" +
    "            $(window).resize(function () {\n" +
    "                _resize();\n" +
    "            });\n" +
    "        });\n" +
    "    })(jQuery, ResponsiveBootstrapToolkit);\n" +
    "</script>\n"
  );


  $templateCache.put('/assets/js/projects/partials/project.html',
    "<div class=\"container\">\n" +
    "    <img class=\"cancel-link\" ng-src=\"./assets/img/svgs/x.svg\" ng-click=\"returnToHome()\"/>\n" +
    "\n" +
    "    <div class=\"row\" white-background>\n" +
    "        <div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1\">\n" +
    "            <img class=\"project-page-logo img-responsive center-block animated fadeIn\"\n" +
    "                 src=\"./assets/img/svgs/Logo.svg\"/>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"clearfix\"></div>\n" +
    "\n" +
    "        <div class=\"col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 animated fadeIn\">\n" +
    "            <h1 class=\"project-title text-center\">{{::project.fields.name}}</h1>\n" +
    "        \n" +
    "            <span ng-repeat=\"labelChunk in labelChunks\">\n" +
    "                <h2 class=\"project-labels text-center\">\n" +
    "                    <span ng-repeat=\"label in labelChunk track by $index\">\n" +
    "                        <span ng-if=\"$index === 1\">&bull;</span> {{::label}}\n" +
    "                    </span>\n" +
    "                </h2>\n" +
    "            </span>\n" +
    "\n" +
    "            <div class=\"project-page-blurb text-center\" center-images ng-bind-html=\"::project.fields.blurb | markdown\"></div>\n" +
    "\n" +
    "            <div class=\"col-lg-12 text-center\" ng-if=\"!!project.fields.caseStudy\">\n" +
    "                <button class=\"case-study-link\" ng-click=\"goToStudy(project.sys.id)\">\n" +
    "                    View Case Study\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"clearfix\"></div>\n" +
    "\n" +
    "        <div class=\"col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2\">\n" +
    "            <img class=\"project-image img-responsive center-block animated fadeIn\"\n" +
    "                 ng-repeat=\"photo in projectPhotos\"\n" +
    "                 ng-src=\"https:{{::photo.fields.file.url}}\"/>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/assets/js/projects/partials/study.html',
    "<div class=\"container\" center-images>\n" +
    "    <button class=\"study-home-link\" ng-click=\"returnToHome()\">\n" +
    "        Home\n" +
    "    </button>\n" +
    "\n" +
    "    <img class=\"cancel-link\" ng-src=\"./assets/img/svgs/x.svg\" ng-click=\"goToProject(project.sys.id)\"/>\n" +
    "\n" +
    "    <div class=\"row\" white-background>\n" +
    "        <div class=\"col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1\">\n" +
    "            <img class=\"study-page-logo img-responsive center-block animated fadeIn\" src=\"./assets/img/svgs/Logo.svg\"/>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"clearfix\"></div>\n" +
    "\n" +
    "        <div class=\"col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 animated fadeIn\">\n" +
    "            <h1 class=\"study-title text-center\">{{::project.fields.name}}</h1>\n" +
    "\n" +
    "            <h2 class=\"case-study-text text-center\">Case Study</h2>\n" +
    "\n" +
    "            <hr class=\"study-rule\">\n" +
    "\n" +
    "            <div class=\"study-page-blurb text-left\" ng-bind-html=\"::project.fields.caseStudy | markdown\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
