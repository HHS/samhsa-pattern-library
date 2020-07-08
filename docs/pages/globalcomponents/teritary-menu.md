---
layout: page
title: Teritary Menu
category: global-component
section: global-component
permalink: "/teritary-menu/"
---
<section id="content-outer-wrapper" class="outer-wrapper clearfix">
        <div style="float: right; width: 40%;">
            <p>List Template Example</p>
            <p>&nbsp;&nbsp;Include example here?</p>
            <p>CSS Styles</p>
            <p style="font-size: .8em;">Background color and fonts and other styles used throughout this menu are set using the menu and side-menu css class. These classes can be changed to suit your needs</p>
            <div style="margin-bottom: 15px;"><code>
               .menu {
                 background-color: #eee;
               }
            </code></div>
            <div style="margin-bottom: 15px;"><code>
               .side-menu {
                 font-size: 1.4rem;
               }
            </code></div> 
            <div style="margin-bottom: 15px;"><code>
            .side-menu .menu {
                 display: block;
                 margin: 0;
                 padding: 0;
             }</code></div>
             <div style="margin-bottom: 15px;"><code> 
             .side-menu a {
               text-decoration: none;
               font-family: Tahoma,Verdana,Segoe,sans-serif;
               padding: .75em;
               color: #000;
               font-weight: 400;
             }
             </code></div>       
            <p style="font-size: .8em;">Side menu title link is styled using the following css for an h2 ahd h2 link style</p>
            <div style="margin-bottom: 15px;"><code>
               .side-menu h2 {
                 margin: 0;
                 padding: .5em;
                 font-size: 1.1em;
                 color: #fff;
                 background-color: #cd3835;
                 font-weight: 700;
               }</code></div>
            <div style="margin-bottom: 15px;"><code>
               .side-menu h2 a {
                 display: block;
                 color: #fff;
                 font-weight: 700;
                 padding: 0;
               }</code></div>
               <p style="font-size: .8em;">Open menu items use the expanded and active classes</p>
               <div style="margin-bottom: 15px;"><code>
               .side-menu ul.menu li.menu-item--expanded {
                 background-color: $steel;
               }
               </code></div>
               <div style="margin-bottom: 15px;"><code>
               .menu-item--active a {
                 color: #000;
                 font-weight: 600;
               }
               </code></div>
               <p></p>
        </div>
        <div class="region">
        <p>Left Navigation bar with active page highlighted. Active page has no sub items.</p>
            <nav role="navigation" id="side-menu" class="side-menu">
                <h2><a href="#" title="About Us">About Us</a></h2>
                <ul class="menu">
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Who We Are</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Advisory Councils</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Strategic Plan FY2019-FY2023</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Accomplishments</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Budget</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Jobs and Internships</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Connect with SAMHSA</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Newsroom</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Frequently Asked Questions</a>
                    </li>
                    <li class="menu-item level-1 menu-item--active">
                        <a href="#" title="" class="is-active">Contact Us</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Directions</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Email Updates</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="region">
        <p>Left Navigation bar with active page highlighted. Active page has sub items.</p>
            <nav role="navigation" id="side-menu" class="side-menu">
                <h2><a href="#" title="About Us">About Us</a></h2>
                <ul class="menu">
                    <li class="menu-item level-1  menu-item--active">
                        <a href="#" title="" class="">Who We Are</a>
                    </li>
                    <ul>
                      <li class="menu-item level-2">
                        <a href="#" title="" class="">Leadership</a>
                      </li>
                       <li class="menu-item level-2">
                         <a href="#" title="" class="">Regional Administrators</a>
                       </li>
                      <li class="menu-item level-2">
                        <a href="#" title="" class="">Offices and Centers</a>
                      </li>
                       <li class="menu-item level-2">
                         <a href="#" title="" class="">Laws and Regulations</a>
                       </li>                                         
                    </ul>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Advisory Councils</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Strategic Plan FY2019-FY2023</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Accomplishments</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Budget</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Jobs and Internships</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Connect with SAMHSA</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Newsroom</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Frequently Asked Questions</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="is-active">Contact Us</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Directions</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Email Updates</a>
                    </li>
                </ul>
            </nav>
        </div>
       <div class="region">
        <p>Left Navigation bar with active page highlighted. Active page is a level 2 sub page that has sub items.</p>
            <nav role="navigation" id="side-menu" class="side-menu">
                <h2><a href="#" title="About Us">About Us</a></h2>
                <ul class="menu">
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Who We Are</a>
                    </li>
                    <ul>
                      <li class="menu-item level-2  menu-item--active">
                        <a href="#" title="" class="">Leadership</a>
                      </li>
                         <ul>
                           <li class="menu-item level-3">
                            <a href="#" title="" class="">Biographies</a>
                           </li>
                         </ul>
                       <li class="menu-item level-2">
                         <a href="#" title="" class="">Regional Administrators</a>
                       </li>
                      <li class="menu-item level-2">
                        <a href="#" title="" class="">Offices and Centers</a>
                      </li>
                       <li class="menu-item level-2">
                         <a href="#" title="" class="">Laws and Regulations</a>
                       </li>                                         
                    </ul>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Advisory Councils</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Strategic Plan FY2019-FY2023</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Accomplishments</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Budget</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Jobs and Internships</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Connect with SAMHSA</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Newsroom</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Frequently Asked Questions</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="is-active">Contact Us</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Directions</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Email Updates</a>
                    </li>
                </ul>
            </nav>
        </div>
       <div class="region">
        <p>Left Navigation bar with active page highlighted. Active page is a level 3 sub page that has sub items.</p>
            <nav role="navigation" id="side-menu" class="side-menu">
                <h2><a href="#" title="About Us">About Us</a></h2>
                <ul class="menu">
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Who We Are</a>
                    </li>
                    <ul>
                      <li class="menu-item level-2 ">
                        <a href="#" title="" class="">Leadership</a>
                      </li>
                         <ul>
                           <li class="menu-item level-3 menu-item--active">
                            <a href="#" title="" class="">Biographies</a>
                           </li>
                         </ul>
                       <li class="menu-item level-2">
                         <a href="#" title="" class="">Regional Administrators</a>
                       </li>
                      <li class="menu-item level-2">
                        <a href="#" title="" class="">Offices and Centers</a>
                      </li>
                       <li class="menu-item level-2">
                         <a href="#" title="" class="">Laws and Regulations</a>
                       </li>                                         
                    </ul>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Advisory Councils</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Strategic Plan FY2019-FY2023</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Accomplishments</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Budget</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Jobs and Internships</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Connect with SAMHSA</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Newsroom</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Frequently Asked Questions</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="is-active">Contact Us</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Directions</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Email Updates</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="region">
        <p>Left Navigation bar on landing page. Most landing pages don't actually have a menu, but if they did this this what it would look like.</p>
            <nav role="navigation" id="side-menu" class="side-menu">
                <h2><a href="#" title="About Us">About Us</a></h2>
                <ul class="menu">
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Who We Are</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Advisory Councils</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Strategic Plan FY2019-FY2023</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Accomplishments</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Budget</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Jobs and Internships</a>
                    </li>
                    <li class="menu-item level-1 menu-item--collapsed">
                        <a href="#" title="" class="">Connect with SAMHSA</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Newsroom</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Frequently Asked Questions</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="is-active">Contact Us</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Directions</a>
                    </li>
                    <li class="menu-item level-1">
                        <a href="#" title="" class="">Email Updates</a>
                    </li>
                </ul>
            </nav>
        </div>
</section>
