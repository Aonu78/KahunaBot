var qa = {
    "intro": {
      "answer": "Hi. I am Your Assistant. How may I assist you. Please choose from the options below",
      "related": ["Availability", "Contact Me", "Schedule Appointment", "Community Info", "3D Tour", "Photos", "Current Resident"]
    },
    "Current Resident": {
        "answer": "Great to talk to a fellow resident! You’ve now entered the Current Resident informationarea. This is your go-to spot for accessing information available to our residents.",
        "answer1" : "Ready to get started? What can I help you with today?",
        "related": ["Resident FAQs", "Resident Portal", "Contacts"],
        "Back" : ["intro"]
    },
    "Resident FAQs": {
        "answer": "Please choose a category",
        "related" : ["Amenities FAQ","Community FAQ","Lease","Maintenance","Parking","Policies","Rent","Safety"],
        "Back" : ["intro"]
    },
    "Safety": {
        "answer": "Now select a question",
        "related" : ["What if there is a fire?"],
    },
    "What if there is a fire?": {
        "answer": "Call 911 & notify the office.",
    },
    "Rent": {
        "answer": "Now select a question",
        "related" : ["When is rent due?","Is there a late fee?"],
    },
    "When is rent due?": {
        "answer": "On the 1st of the month.",
    },
    "Is there a late fee?": {
        "answer": "Yes.",
    },
    "Policies": {
        "answer": "Now select a question",
        "related" : ["Do you require renters insurance?"],
    },
    "Do you require renters insurance?": {
        "answer": "Yes.",
    },
    "Parking": {
        "answer": "Now select a question",
        "related" : ["Is there VIP Parking?","Is there guest parking?"],
    },
    "Is there VIP Parking?": {
        "answer": "Yes. There is a monthly fee.",
    },
    "Is there guest parking?": {
        "answer": "Yes. Resident parking must have a permit.",
    },
    "Maintenance": {
        "answer": "Now select a question",
        "related" : ["A/C or Heat is out?","Non Emergency?"],
    },
    "A/C or Heat is out?": {
        "answer": "Call Office.",
    },
    "Non Emergency?": {
        "answer": "Put in a work order in resident portal.",
    },
    "Lease": {
        "answer": "Now select a question",
        "related" : ["How long's the lease?","Can I renew early?"],
    },
    "How long's the lease?": {
        "answer": "Annual",
    },
    "Can I renew early?": {
        "answer": "Contact office.",
    },
    "Community FAQ": {
        "answer": "Now select a question",
        "related" : ["What are quiet hours?","What are the office hours?"],
    },
    "What are quiet hours?": {
        "answer": "10PM to 7AM.",
    },
    "What are the office hours?": {
        "answer": "M-F 10AM to 6PM, Sat 10AM to 2PM, Sun CLOSED.",
    },
    "Amenities FAQ": {
        "answer": "Now select a question",
        "related" : ["When's the Community Room open?","When is the tanning bed open?"],
    },
    "When's the Community Room open?": {
        "answer": "24HR",
    },
    "When is the tanning bed open?": {
        "answer": "During office hours.",
    },
    "Resident Portal": {
        "answer": "You're leaving me, but no worries, I'll be here if you need me (sending to another page)",
        "related1" : ["<a href='https://kahunaeaglevillage.residentportal.com/auth'>Proceed to Portal</a>"],
        "Back" : ["intro"]
    },
    "Contacts": {
        "answer": "The following contact details are avaliable for contacts.",
        "answer1" : "Phone : 812-401-1454<br><br> Email : eve@kahunamgmt.com",
        "Back" : ["intro"]
    },
    "Schedule Appointment": {
      "answer": "Which Method whould you like to chose?",
      "related": ["In-Person", "Phone Call", "Self-Guided", "Live Video"],
      "Back" : ["intro"]
    },
    "Photos": {
      "answer": "Which Method whould you like to chose?",
      "related": ["Community Photo", "Apartments Photo", "Availability"],
      "Back" : ["intro"]
    },
    "Community Info": {
        "answer": "I’ve got some great info for you about our community.",
        "related": ["Pet Policy", "Amenities", "Neighborhood","FAQ","Brochure","Community Location","Community Map","Reviews & Ratings"],
        "Back" : ["intro"]
      },
    "Reviews & Ratings": {
    "answer": "Here's what people are saying about us.",
    // "img_slide" : ["<img src='https://i.ibb.co/JtTqRFR/Property-Map.jpg' alt='' style='width: 400px;'>"],
    "rating": [`<div class="sc-hYQoDq dWdoTO SpecialsWrapper" type="review" id='ratingid'><div class="sc-dwsomb bkqRJS ReviewQuicklinksContainer"><div class="sc-pVTma sc-eldixR kRPzFu ffjCOc ReviewQuicklinksWrapper"><div tabindex="0" role="button" class="sc-bkkfTU sc-jtXFOG llLJZS cqulfq"><div class="sc-iqsfdx sc-fFehDp sc-kiIAaw gGlNMg gqjeva fYYww ReviewText quicklinks rating-cls" tabindex="-1"><div class="sc-cLpA-Dr ljfpXX">4</div><img src="regular_5.svg" alt="Stars Rating" class="sc-iIUSfW heuGYt"><div class="sc-cvZATX jjgzVw"></div><div class="sc-avfBU gRwYBo" style="margin-right: 6rem;"><img src="static/img/google.png" alt="Logo Image" class="sc-gslxyl dgLPQS"><div color="#6F6E6E" class="sc-kmQMkS eoLnMo">236 Reviews</div></div></div></div></div></div></div>`],
    "Back" : ["intro"]
    },
    "Community Map": {
    "answer": "Here is the community map for the property",
    "img_slide" : ["<img src='https://i.ibb.co/JtTqRFR/Property-Map.jpg' alt='' style='width: 400px;'>"],
    "Back" : ["intro"]
    },
    "Community Location": {
        "answer": "Property located on:",
        "answer1" : '814 Schutte Rd, Evansville, IN 47712, USA',
        "rating": [`<div class='mapdiv' id="ratingid"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15437.547888567487!2d-87.67120700429226!3d37.96834022361399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8871d2d960cf52e7%3A0x4a49850cdd410d3f!2sEagle%20Village%20Student%20Apartments!5e0!3m2!1sen!2s!4v1696538815589!5m2!1sen!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`],
        "Back" : ["intro"]
        },
    "Brochure": {
        "answer": "Please give me your first and last name",
        "input" : `<div id="searchbox" class="sc-iJKOzS ipvcDU InputWrapper"><textarea type="text" id="valueBox" onkeyup="enterPressed(event)" class="sc-giYgFv eWnKHk StyledTextarea" placeholder="e.g. Bob Botter" maxlength="" rows="1" ></textarea><button onclick="postMessage()" class="sc-ezbkgU kYMLCs"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path></svg></button></div>`,
        // "related": [],
        // "href" : [],
        "Back" : ["Contact Me"]
    },
      "FAQ": {
        "answer": "Please choose a category",
        "related": ["Application Process", "Local Schools"],
        "Back" : ["intro"]
      },
      "Local Schools": {
        "answer": "Now select a question",
        "related": ["What are the local schools?"],
        "Back" : ["intro"]
      },
      "What are the local schools?": {
        "answer": "USI College<br>Reitz High School<br>Mater Dei Catholic High School<br>Perry Heights Middle School<br>Corpus Christi Catholic School<br>West Terrace Elementary School",
        "related": ["Neighborhood"],
      },
      "Application Process": {
        "answer": "Now select a question",
        "related": ["What are the application fees?"],
        "Back" : ["intro"]
      },
      "What are the application fees?": {
        "answer": "$150 Security Deposit",
        // "related": ["What are the application fees?"],
        "Back" : ["intro"]
      },
      "Neighborhood": {
        "answer": "Lots to do in this area. Here are a few things you might find of interest",
        "related": ["Dining & Cafes","Entertainment","Grocery","Gyms","Nightlife","Parks","Salon & Spa","Schools","Shopping","Transportation"], 
        "Back" : ["intro"]
      },
      "Transportation": {
        "answer": "Hitchin' a ride",
        "rating": [`<div class='mapdiv' id="ratingid"><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25161.689207419404!2d-87.66145655156451!3d37.97220136313624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTransportation!5e0!3m2!1sen!2s!4v1696540678163!5m2!1sen!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`],
      },
      "Shopping": {
        "answer": "If you need it, it's here...",
        "rating": [`<div class='mapdiv' id="ratingid"><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25161.690438700716!2d-87.66145656779563!3d37.972197770901715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sShopping!5e0!3m2!1sen!2s!4v1696540718986!5m2!1sen!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`],
      },
      "Schools": {
        "answer": "Gyms for your brain",
        "rating": [`<div class='mapdiv' id="ratingid"><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25161.691669981883!2d-87.6614565840267!3d37.97219417866731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSchools!5e0!3m2!1sen!2s!4v1696540783587!5m2!1sen!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`],
      },
      "Salon & Spa": {
        "answer": "Lookin' good!",
        "rating": [`<div class='mapdiv' id="ratingid"><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25161.692901262915!2d-87.66145660025776!3d37.97219058643302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSalon%20%26%20Spa!5e0!3m2!1sen!2s!4v1696540821306!5m2!1sen!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`],
      },
      "Parks": {
        "answer": "For some nice walks and exercise",
        "rating": [`<div class='mapdiv' id="ratingid"><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25161.694132543806!2d-87.66145661648883!3d37.97218699419885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sParks!5e0!3m2!1sen!2s!4v1696540869306!5m2!1sen!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`],
      },
      "Nightlife": {
        "answer": "Get your party on!",
        "rating": [`<div class='mapdiv' id="ratingid"><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25161.69536382456!2d-87.66145663271989!3d37.97218340196479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNightlife!5e0!3m2!1sen!2s!4v1696540900815!5m2!1sen!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`],
      },
      "Gyms": {
        "answer": "Let's stay in shape...",
        "rating": [`<div class='mapdiv' id="ratingid"><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25161.696595105175!2d-87.66145664895102!3d37.97217980973085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGyms!5e0!3m2!1sen!2s!4v1696540937991!5m2!1sen!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`],
      },
      "Grocery": {
        "answer": "Grocery shops and pharmacies nearby",
        "rating": [`<div class='mapdiv' id="ratingid"><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25161.69782638566!2d-87.66145666518213!3d37.972176217497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGrocery!5e0!3m2!1sen!2s!4v1696540971226!5m2!1sen!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`],
      },
      "Entertainment": {
        "answer": "Fun times ahead",
        "rating": [`<div class='mapdiv' id="ratingid"><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d100646.83317212028!2d-87.72325872927706!3d37.972145681279684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sEntertainment!5e0!3m2!1sen!2s!4v1696541004284!5m2!1sen!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`],
      },
      "Dining & Cafes": {
        "answer": "Local eats and coffee shops",
        "rating": [`<div class='mapdiv' id="ratingid"><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d100646.921831327!2d-87.72325800027744!3d37.97208101586279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDining%20%26%20Cafes!5e0!3m2!1sen!2s!4v1696541048856!5m2!1sen!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`],
      },

      "Pet Policy": {
        "answer": "Pets Negotiable<br>Dogs and Cats Allowed<br>$500 Fee & $25mo Fee<br>2 Pet Limits",
        "related": ["Contact Me","Availability"], 
        "Back" : ["intro"]
      },
      "Amenities": {
        "answer": "Select a category of amenities for more details",
        "related": ["Community", "Apartments", "Availability"],        
        "Back" : ["intro"]
      },
      "Community": {
        "answer": `<div class='sc-bBHHQT cbVbsH circle'><img src='static/img/check-icon-purple.png'></div>High Spped WiFi<br>
        <div class='sc-bBHHQT cbVbsH circle'><img src='static/img/check-icon-purple.png'></div>Central Air<br>
        <div class='sc-bBHHQT cbVbsH circle'><img src='static/img/check-icon-purple.png'></div>Heat<br>
        <div class='sc-bBHHQT cbVbsH circle'><img src='static/img/check-icon-purple.png'></div>Ceiling fans<br>
        <div class='sc-bBHHQT cbVbsH circle'><img src='static/img/check-icon-purple.png'></div>All Major Appliances<br>
        <div class='sc-bBHHQT cbVbsH circle'><img src='static/img/check-icon-purple.png'></div>Sasher & Dryer<br>
        <div class='sc-bBHHQT cbVbsH circle'><img src='static/img/check-icon-purple.png'></div>in unit & Dishwasher`,
        "related": ["Community Photo"],
        "Back" : ["intro"]
      },
      "Apartments": {
        "answer": `<div class='sc-bBHHQT cbVbsH circle'><img src='static/img/check-icon-purple.png'></div>Hardwood Floors<br>
        <div class='sc-bBHHQT cbVbsH circle'><img src='static/img/check-icon-purple.png'></div>Walk-In Closets<br>
        <div class='sc-bBHHQT cbVbsH circle'><img src='static/img/check-icon-purple.png'></div>Double PaneWindows<br>
        <div class='sc-bBHHQT cbVbsH circle'><img src='static/img/check-icon-purple.png'></div>Window Coverings<br>
        <div class='sc-bBHHQT cbVbsH circle'><img src='static/img/check-icon-purple.png'></div>Stainless Steel Applianves<br>
        <div class='sc-bBHHQT cbVbsH circle'><img src='static/img/check-icon-purple.png'></div>Oven<br>
        <div class='sc-bBHHQT cbVbsH circle'><img src='static/img/check-icon-purple.png'></div>Island Kitchen`,
        "answer1" : "Available only in select apartments",
        "related": ["Apartments Photo"],
        "Back" : ["intro"]
      },
    "Community Photo": {
      "answer": "Some Options",
      // "related": [],
      // "href" : ["<a href=''>Birds Eye</a>","<a href='https://1drv.ms/i/s!ArNdil_00Y9IhlWuYrAy3u_2C_6i?e=hCH410'>Building</a>","<a href='https://1drv.ms/i/s!ArNdil_00Y9IhlR2BYViS7huZ0EU?e=wLkRAb'>Front Office</a>","<a href='https://1drv.ms/i/s!ArNdil_00Y9IhlLYWs8mpZWvliHO?e=EVWK6a'>Guest Sitting Area</a>","<a href='https://1drv.ms/i/s!ArNdil_00Y9Ihk8iE3PfZ_p5-Ukz?e=Oi6cPy'>Vending Machines</a>"]
      "href" : ["https://i.ibb.co/LxDwV7y/Birds-Eye.jpg","https://i.ibb.co/vh947nN/Birds-Eye.jpg","https://i.ibb.co/C7p1JSM/Front-Office.jpg","https://i.ibb.co/wBNYzyt/Community-guest-sitting-area.jpg","https://i.ibb.co/q06kzMz/Vending-Machines.jpg"],
      "Back" : ["Photos"],
      "caption" : ["Birds Eye","Building","Front Office","Community guest sitting area","Vending Machines"]
    },
    "Apartments Photo": {
      "answer": "Some Options",
      // "related": [],
      "href" : ["https://i.ibb.co/P9yDdBK/Bedroom.jpg","https://i.ibb.co/3W9YxHd/Bedroom2.jpg","https://i.ibb.co/3v0RJS6/Kitchen.jpg","https://i.ibb.co/DKnb6h2/Living-room.jpg","https://i.ibb.co/88f5YtY/Bathroom.jpg"],
      "Back" : ["Photos"],
      "caption" : ["Bedroom 1","Bedroom 2","Kitchen","Living room","Bathroom "]
    },
    "Availability": {
      "answer": "In which term would you like to move in?",
      "related": ["Summer 2024", "Fall 2024"],
      "Back" : ["intro"]
    },
    "Fall 2024": {
      "answer": "Fall 2024 Term starts on 08/01/2024 and ends on 07/31/2025",
      "answer1": "Let's start with number of bedrooms",
      "related": [],
      "images" : ["<div class='sc-kDThTU sc-lbhJmS csGJDm lCpMk ImageBubbleWrapper'><div class='sc-iNGGwv IZIJi Bubble user-messages' title='selected-image' data='[object Object]'><img alt='beds:1 bedrooms image' src='static/img/1bd.png' class='sc-jeqYYF cSTbkS'  onclick='getOption(event)' value='1 Bed' id='1 Bed'><div></div></div></div>",
        // "<div class='sc-kDThTU sc-lbhJmS csGJDm lCpMk ImageBubbleWrapper'><div class='sc-iNGGwv IZIJi Bubble user-messages' title='selected-image' data='[object Object]'><img alt='beds:1 bedrooms image' src='1bd.png' class='sc-jeqYYF cSTbkS'  onclick='getOption(event)' value='2 Bad' id='2 Bad'><div></div></div></div>"
      ],
      "Back" : ["Availability"]
    },
    "Summer 2024": {
      "answer": "Summer 2024 Term starts on 05/01/2024 and ends on 06/30/2024",
      "answer1": "Let's start with number of bedrooms",
      "related": [],
      "images" : ["<div class='sc-kDThTU sc-lbhJmS csGJDm lCpMk ImageBubbleWrapper'><div class='sc-iNGGwv IZIJi Bubble user-messages' title='selected-image' data='[object Object]'><img alt='beds:1 bedrooms image' src='static/img/1bd.png' class='sc-jeqYYF cSTbkS'  onclick='getOption(event)' value='1 Bed' id='1 Bed'><div></div></div></div>",
        // "<div class='sc-kDThTU sc-lbhJmS csGJDm lCpMk ImageBubbleWrapper'><div class='sc-iNGGwv IZIJi Bubble user-messages' title='selected-image' data='[object Object]'><img alt='beds:1 bedrooms image' src='1bd.png' class='sc-jeqYYF cSTbkS'  onclick='getOption(event)' value='2 Bad' id='2 Bad'><div></div></div></div>"
      ],
      "Back" : ["Availability"]
    },
    "1 Bed": {
      "answer": "And how much are you looking to spend each month?",
      "related": ["Starting at $800", "Any"],
      "Back" : ["Summer 2024"]
    },
    "Any": {
      "answer": "You're in luck, I have exactly what you need. Check out the floorplans below",
      "img_slide" : ["<img src='https://eaglevillageonline.com/wp-content/uploads/2022/09/Eagle-Village-Floorplan-4x4-1.png' onclick='getOption(event)' value='Property 1' id='Property 1' alt='' style='width: 400px;'>"],
    },
    "Starting At $800.": {
      "answer": "You're in luck, I have exactly what you need. Check out the floorplans below",
      "answer1":"You are looking at floorplans in Fall 2024 (08/01/2024 - 07/31/2025).",
      "img_slide" : ["<img src='https://eaglevillageonline.com/wp-content/uploads/2022/09/Eagle-Village-Floorplan-4x4-1.png' onclick='getOption(event)' value='Property 1' id='Property 1' alt='' style='width: 400px;'>"],
      "related": [],
      "Back" : ["1 Bed"]
    },
    "Starting At $800": {
      "answer": "You're in luck, I have exactly what you need. Check out the floorplans below",
      "answer1":"You are looking at floorplans in Summer 2024 (05/01/2024 - 06/30/2024).",
      "img_slide" : ["<img src='https://eaglevillageonline.com/wp-content/uploads/2022/09/Eagle-Village-Floorplan-4x4-1.png' onclick='getOption(event)' value='Property 1' id='Property 1' alt='' style='width: 400px;'>"],
      "related": [],
      "Back" : ["1 Bed"]
    },
    "Property 1": {
      "answer": "I have lots of great info about our community. What do you want to know more about?",
      "related": ["3D Tour", "Schedule Appointment", "Photos","Availability","Contact Me","Community Info"],
    },
    "3D Tour": {
      "answer": "Choose a 3D Tour",
      "related": ["1 Bedroom", "Property Tours"],
      "Back" : ["Property 1"]
    },
    "Property Tours": {
      "answer": "Choose a 3D Tour",
      "related1": ["<a href='https://www.apartments.com/eagle-village-student-housing-evansville-in/dxvcllk/'>Apartments</a>","<a href='https://matterport.com/discover/space/4tdTZbXUF7A'>Matterport 1</a>","<a href='https://matterport.com/discover/space/pf3yPdi1fqd'>Matterport 1</a>"],
      "Back" : ["3D Tour"]
    },
    "1 Bedroom": {
      "answer": "Enjoy 3D Tour",
      "related": ["Contact Me","Schedule Appointment"],
      "d_img" : ["<div class='sc-pVTma kRPzFu' style='margin-left: 8%;' id='d_img'><iframe title='google-map' src='https://my.matterport.com/show/?m=4tdTZbXUF7A&amp;play=1' frameborder='0' scrolling='no' class='sc-hAcGfq ljIvEq'></iframe></div>"],
      // "href" : [],
      "Back" : ["Property Tours"]
    },
    "Contact Me": {
      "answer": "How would you like to be contacted?",
      "related": ["Phone","Email","Text"],
      // "href" : [],
      "Back" : ["intro"]
    },
    "Name": {
      "answer": "Please give me your first and last name",
      "input" : `<div id="searchbox" class="sc-iJKOzS ipvcDU InputWrapper">
      <input type="text" id="valueBox" onkeyup="enterPressed(event)" class="sc-giYgFv eWnKHk StyledTextarea" placeholder="e.g. Bob Botter" >
      <button onclick="postMessage()" class="sc-ezbkgU kYMLCs"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path></svg></button></div>`,
      // "related": [],
      // "href" : [],
      "Back" : ["Contact Me"]
    },
    "Email": {
      "answer": "Please Enter your Email address",
      "input" : `<div class="botMessageWrap" id="emailvalid" style="display:none">
      <div class="row">
        <div class="botName col-2"><img src="static/img/blank.png" alt="" class="fIpSMA"></div>
        <div class="botMessage col">Please Enter valid Email Address</div>
      </div>
  </div><div id="searchbox" class="sc-iJKOzS ipvcDU InputWrapper"><textarea type="email" id="valueBox" onkeyup="enterPressed(event)" class="sc-giYgFv eWnKHk StyledTextarea" placeholder="e.g. abc@xyz.com" maxlength="" rows="1" ></textarea><button onclick="postMessage()" class="sc-ezbkgU kYMLCs"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path></svg></button></div>`,
      // "related": [],
      // "href" : [],
      "Back" : ["Contact Me"]
    },
    "Phone": {
      "answer": "Please Enter Your Phone Number",
      "input" : `<div class="botMessageWrap" id="phonevalid" style="display:none">
      <div class="row">
        <div class="botName col-2"><img src="static/img/blank.png" alt="" class="fIpSMA"></div>
        <div class="botMessage col">Please Enter valid Phone Number</div>
      </div>
  </div><div id="searchbox" class="sc-iJKOzS ipvcDU InputWrapper"><input type="number" id="valueBox" onkeyup="enterPressed(event)" class="sc-giYgFv eWnKHk StyledTextarea" placeholder="(xxx) xxx-xxxx" maxlength="13"><button onclick="postMessage()" class="sc-ezbkgU kYMLCs"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path></svg></button></div>`,
      // "related": [],
      // "href" : [],
      "Back" : ["Contact Me"]
    },
    "Text": {
      "answer": "Enter your Name",
      "related": [],
      // "href" : [],
      "Back" : ["Contact Me"]
    },
    "Name Entered": {
      "answer": "Enter your Email",
      "related": [],
      // "href" : [],
      "Back" : ["Contact Me"]
    },
    "Email Entered": {
      "answer": "Enter your Phone",
      "related": [],
      // "href" : [],
      "Back" : ["Contact Me"]
    },
    "Phone Entered": {
      "answer": "Thanks we will contant you soon",
      "related": ["Availability", "Contact Me", "Schedule Appointment", "Community Info", "3D Tour", "Photos", "Current Resident"],
    },
    "thanks": {
      "answer": "thanks we will contact you soon"
    },
  }

