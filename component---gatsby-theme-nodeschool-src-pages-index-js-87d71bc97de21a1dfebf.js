(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0rpg":function(e,t,a){"use strict";a("kDPR")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},"0v8X":function(e,t,a){"use strict";a("NCol"),a("+5EW"),a("zpx+"),a("PN9k"),a("UQCJ"),Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=s(a("ERkP")),r=a("aWzz"),i=s(a("7ZDR"));function s(e){return e&&e.__esModule?e:{default:e}}var l=2*Math.PI/6,c=0;function d(e){return Number(e.toFixed(3))}function b(e,t){for(var a,n=e.diagonal/2,o=.868217054*e.diagonal/2,r=(a=90,Math.PI*a/180),i=n,s=[],c=0;c<6;c++){var b=r+c*l;s.push([t/2+o+i*Math.cos(b),t/1.5+n-i*Math.sin(b)])}return s.map((function(e){return e.map(d)}))}function u(e){var t=e.backgroundImage&&"bg-"+ ++c,a=function(e,t){var a={};for(var n in t)t.hasOwnProperty(n)&&(a[n]=t[n]);for(var o in e)void 0===a[o]&&e.hasOwnProperty(o)&&(a[o]=e[o]);return a}({fill:e.backgroundImage?"url(#"+t+")":"none",stroke:"#42873f",strokeWidth:.02*e.diagonal,cursor:e.onClick&&"pointer"},e.style),r={maxX:-1/0,maxY:-1/0,minX:1/0,minY:1/0},s=a.strokeWidth,l=Math.ceil(s/2),u=e.flatTop?function(e,t){var a=e.diagonal/2,n=.868217054*e.diagonal/2,o=n+(a-n),r=.866*a,i=.5*a;return[[o-i,a-r],[o+i,a-r],[o+a,a],[o+i,a+r],[o-i,a+r],[o-a,a]].map((function(e){return e.map(d)}))}(e):b(e,s),h=function(e){return{maxX:e.maxX-e.minX,maxY:e.maxY-e.minY,minX:e.minX,minY:e.minY}}(u.reduce((function(e,t){return{maxX:Math.ceil(Math.max(e.maxX,t[0]+l)),maxY:Math.ceil(Math.max(e.maxY,t[1]+l)),minX:Math.floor(Math.min(e.minX,t[0]-l)),minY:Math.floor(Math.min(e.minY,t[1]-l))}}),r)),m=[h.minX,h.minY,h.maxX+(h.minX<0?Math.abs(h.minX):0),h.maxY+(h.minY<0?Math.abs(h.minY):0)].join(" "),p=o.default.createElement("polygon",n({},e.hexProps,{onClick:e.onClick,style:a,points:u.map((function(e){return e.join(",")})).join(" ")})),g=e.href&&o.default.createElement("a",{xlinkHref:e.href,target:e.target},p);return o.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:e.className,viewBox:m},e.backgroundImage&&o.default.createElement(i.default,n({id:t},e)),g||p,e.children)}u.propTypes={diagonal:r.number,className:r.string,onClick:r.func,href:r.string,target:r.string,flatTop:r.bool,backgroundImage:r.string,backgroundWidth:r.number,backgroundHeight:r.number,backgroundScale:r.number,backgroundSize:r.number,hexProps:r.object,style:r.object,children:r.node},u.defaultProps={diagonal:500,flatTop:!1,style:{}},t.default=u},"27In":function(e){e.exports=JSON.parse('{"data":{"allMeetupEvent":{"edges":[]}}}')},"5b/i":function(e,t,a){var n;a("p+GS"),a("AA1/"),a("dtAy"),a("/CC1"),a("NlgC"),a("rmZQ"),function(o){"use strict";var r,i,s,l=(r=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,s=/[^-+\dA-Z]/g,function(e,t,a,n){if(1!==arguments.length||"string"!==u(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var o=(t=String(l.masks[t]||t||l.masks.default)).slice(0,4);"UTC:"!==o&&"GMT:"!==o||(t=t.slice(4),a=!0,"GMT:"===o&&(n=!0));var h=a?"getUTC":"get",m=e[h+"Date"](),p=e[h+"Day"](),g=e[h+"Month"](),f=e[h+"FullYear"](),y=e[h+"Hours"](),v=e[h+"Minutes"](),j=e[h+"Seconds"](),O=e[h+"Milliseconds"](),w=a?0:e.getTimezoneOffset(),S=d(e),M=b(e),k={d:m,dd:c(m),ddd:l.i18n.dayNames[p],dddd:l.i18n.dayNames[p+7],m:g+1,mm:c(g+1),mmm:l.i18n.monthNames[g],mmmm:l.i18n.monthNames[g+12],yy:String(f).slice(2),yyyy:f,h:y%12||12,hh:c(y%12||12),H:y,HH:c(y),M:v,MM:c(v),s:j,ss:c(j),l:c(O,3),L:c(Math.round(O/10)),t:y<12?l.i18n.timeNames[0]:l.i18n.timeNames[1],tt:y<12?l.i18n.timeNames[2]:l.i18n.timeNames[3],T:y<12?l.i18n.timeNames[4]:l.i18n.timeNames[5],TT:y<12?l.i18n.timeNames[6]:l.i18n.timeNames[7],Z:n?"GMT":a?"UTC":(String(e).match(i)||[""]).pop().replace(s,""),o:(w>0?"-":"+")+c(100*Math.floor(Math.abs(w)/60)+Math.abs(w)%60,4),S:["th","st","nd","rd"][m%10>3?0:(m%100-m%10!=10)*m%10],W:S,N:M};return t.replace(r,(function(e){return e in k?k[e]:e.slice(1,e.length-1)}))});function c(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function d(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);var o=(t-a)/6048e5;return 1+Math.floor(o)}function b(e){var t=e.getDay();return 0===t&&(t=7),t}function u(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}l.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},l.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},void 0===(n=function(){return l}.call(t,a,t,e))||(e.exports=n)}()},"7ZDR":function(e,t,a){"use strict";a("UQCJ"),Object.defineProperty(t,"__esModule",{value:!0});var n,o=a("ERkP"),r=(n=o)&&n.__esModule?n:{default:n},i=a("aWzz");function s(e){var t=e.diagonal,a=function(e){var t=e.diagonal,a=e.diagonal;return e.flatTop&&(t*=1.05,a*=1.05),e.backgroundScale?a=t*=e.backgroundScale:e.backgroundWidth?(t=e.backgroundWidth,a=e.backgroundHeight):e.backgroundSize&&(t=e.backgroundSize,a=e.backgroundSize),{width:t,height:a}}(e),n=a.width,o=a.height,i=n!==t,s=i?n:"100%",l=i?o:"100%",c=e.yOffset||0,d=void 0===e.xOffset&&e.flatTop?0-.065*s:0;return r.default.createElement("defs",null,r.default.createElement("pattern",{id:e.id,width:n,height:o,patternUnits:"userSpaceOnUse"},r.default.createElement("image",{x:d,y:c,width:s,height:l,xlinkHref:e.backgroundImage})))}s.propTypes={id:i.string.isRequired,flatTop:i.bool,backgroundImage:i.string.isRequired,backgroundScale:i.number,backgroundWidth:i.number,backgroundHeight:i.number,backgroundSize:i.number,xOffset:i.number,yOffset:i.number,diagonal:i.number},t.default=s},"8NJi":function(e,t,a){"use strict";a("kDPR")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"E9a/":function(e){e.exports=JSON.parse('{"data":{"allMeetupEvent":{"edges":[{"node":{"id":"705195d1-2d8c-5e19-bd44-e7d37c8dce14","description":"<p>Part of the 2019 Winter Is Here Series 🔥</p> <p>Cool! 🙂Read on...the usual spiel follows.</p> <p>Are you a beginner at using Node.js and/or JavaScript? Are you wanting a refresher? Are you looking to level up your knowledge?</p> <p>We don\'t have set classes, and as such it is considered a self study program. The NodeSchool organization has a lot of workshops for you to learn from, and we help out along the way, but that doesn\'t mean you have to do the workshops, we are a diverse group of people learning and growing together.</p> <p>Bring your laptops and, if you can, have Node.js installed before you arrive. It\'s time for another session of learning!</p> <p>We have regular mentors to help everyone learn. But we can\'t ever have too many people who want to help others learn, right?! We promise that by the end of the session you\'ll know enough to help the person sitting next to you learn too 💪</p> <p>RSVP \\"yes\\" and come learn and/or help others learn Node.js and/or JavaScript over a casual Saturday afternoon!</p> ","name":"💻 NodeSchool: Winter Is Here Series 🔥","venue":{"id":"26662678","address_1":"8th floor, 815 W Hastings St","address_2":null,"city":"Vancouver","country":"ca","lat":49.28638458251953,"localized_country_name":"Canada","lon":-123.11481475830078,"name":"LoginRadius Inc.","repinned":false,"state":"bc","zip":"V6C 3N9"},"time":1581192000000,"utc_offset":-28800000,"updated":1570043272000,"rsvp_limit":60,"member_pay_fee":false,"local_time":"12:00","link":"https://www.meetup.com/nodeschool-vancouver/events/265324737/","how_to_find_us":"8th floor, block away from waterfront skytrain station","duration":14400000,"date_in_series_pattern":false}}]}}}')},HzMS:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"title":"Unknown Nodeschool"}},"placeholderImage":{"id":"7e6c5f44-c48a-515c-a70a-b82cc383f49a","extension":"svg","publicURL":"/gatsby-theme-nodeschool/static/nodeschool-chapter-logo-2fd150dea7f3412d3e94f27e2a91cd57.svg"}}}')},Q49y:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"title":"Unknown Nodeschool","twitter":"NodeSchoolYVR","github":"nodeschool/vancouver","meetupGroup":"nodeschool-vancouver","mailchimpSubscribeUrl":"https://nodeschoolyvr.us20.list-manage.com/subscribe/post?u=703e823487e1f52bfbe0cc32d&amp;id=34f1146956","credits":{"logo":{"name":"Kenneth Ormandy","url":"https://kennethormandy.com/"}}}},"schoolhouseImage":{"id":"3102aeb0-b3e7-5085-837f-c6adb991486a","extension":"svg","publicURL":"/gatsby-theme-nodeschool/static/schoolhouse-beige-274d82f567d8ef2c4563572b3aa2e85b.svg"}}}')},"R+bq":function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"twitter":"NodeSchoolYVR","slack":""}}}}')},XT0R:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"twitter":"NodeSchoolYVR"}}}}')},XTDk:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"email":"organizers@nodeschoolyvr.com"}}}}')},YMoG:function(e,t,a){"use strict";a.r(t);a("yIC7");var n=a("Q49y"),o=a("ERkP"),r=a.n(o),i=a("liE7"),s=a("4ChH"),l=a("nmMi"),c=(a("PN9k"),a("27In")),d=a("l1C2"),b=function(e){var t=e.description,a=e.name,n=e.venue;return Object(d.b)("div",null,Object(d.b)("h1",null,a),Object(d.b)("div",{dangerouslySetInnerHTML:{__html:t}}),n&&Object(d.b)("div",null,n.name,n.repinned,n.address_1,n.address_2,n.city,n.state,n.zip,n.country,n.lat,",",n.lon,n.localized_country_name))};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var h=function(){return c.data.allMeetupEvent.edges.map((function(e){return Object(d.b)(b,u({key:e.node.id},e.node))}))},m=(a("0rpg"),a("E9a/")),p=a("5b/i"),g=a.n(p),f={en:"m/d/yyyy",pt:"dd/mm/yyyy","pt-br":"dd/mm/yyyy"},y=function(e,t){var a=f[t.toLowerCase()]||f.en;return g()(e,a)},v=function(){var e=Object(i.useTranslation)(),t=e.t,a=e.i18n;return m.data.allMeetupEvent.edges.map((function(e){var n=e.node.venue?[e.node.venue.name,e.node.venue.address_1,e.node.venue.address_2,[e.node.venue.city,e.node.venue.state].filter(Boolean).join(", "),e.node.venue.zip,e.node.venue.localized_country_name].filter(Boolean):[];return Object(d.b)("div",{key:e.node.id},Object(d.b)("p",{className:"register"},Object(d.b)("strong",null,Object(d.b)("a",{href:e.node.link,title:"Registration Link"},t("Register")))," ",t("for our event on")," ",Object(d.b)("strong",null,y(new Date(e.node.time),a.language))),e.node.venue&&Object(d.b)(r.a.Fragment,null,Object(d.b)("div",{className:"location"},Object(d.b)("p",null,Object(d.b)("strong",null,t("Location"),":")),Object(d.b)("address",null,n.map((function(e){return Object(d.b)("span",{key:e},e,Object(d.b)("br",null))}))),e.node.how_to_find_us),Object(d.b)("div",{className:"map"},Object(d.b)("iframe",{title:"google maps",src:"https://maps.google.com/maps?q="+encodeURIComponent(n.join("\n"))+"&t=&z=13&ie=UTF8&iwloc=&output=embed",width:"600",height:"450",frameBorder:"0",style:{border:0},allowFullScreen:!0}))))}))},j=function(){return Object(d.b)(r.a.Fragment,null,Object(d.b)(h,null),Object(d.b)("hr",null),Object(d.b)(v,null))},O=a("XT0R"),w=function(){var e=Object(i.useTranslation)().t,t=O.data;return Object(d.b)("p",null,Object(d.b)("a",{href:"https://twitter.com/"+t.site.siteMetadata.twitter,className:"twitter-follow-button","data-show-count":"false"},e("Follow")," @",t.site.siteMetadata.twitter))},S=a("R+bq"),M=function(){var e=Object(i.useTranslation)().t,t=S.data;return Object(d.b)(r.a.Fragment,null,Object(d.b)("h2",{id:"community"},e("Community")),Object(d.b)("p",null,e("The NodeSchool community is")," ",Object(d.b)("strong",null,e("open to anyone")),"."," ",e("Whether you're able to attend an event or not, you can join the discussion around learning Node")," ",[t.site.siteMetadata.slack?e("in our Slack channel"):null,t.site.siteMetadata.twitter?e("by following us on Twitter"):null].filter(Boolean).join(" "+e("or")+" ")))},k=function(){var e=Object(i.useTranslation)().t;return Object(d.b)(r.a.Fragment,null,Object(d.b)("h2",{id:"sponsors"},e("Sponsors")))},N=function(){return Object(d.b)(r.a.Fragment,null)},x=a("fwFn"),T=a("Iy7w"),I=a("0v8X"),H=a.n(I),D=Object(T.a)("div",{target:"ehcuf7z0"})({name:"8m2wph",styles:"display:grid;grid-gap:0px;grid-template-columns:repeat(auto-fit,minmax(120px,0.25fr));width:100%;z-index:900;transform:translate3d(-5%,0,0);position:relative;&:hover{svg{transition:opacity 0.3s,transform 0.2s;opacity:0.25;&:hover{opacity:1 !important;transform:scale(1.5);z-index:9999;}}}svg{padding:0;margin:0;polygon{stroke:transparent !important;stroke-width:0 !important;}}"}),P=function(e){var t=e.people;return Object(d.b)(D,null,t.map((function(e){return Object(d.b)(H.a,{key:e.id,href:e.twitter?"https://twitter.com/"+e.twitter:"https://github.com/"+e.github,backgroundImage:"https://avatars3.githubusercontent.com/"+e.github+"?v=3&amp;s=120",rel:"noopener noreferrer",target:"_blank"})})))},_=function(){var e=Object(i.useTranslation)().t,t=x.data;return Object(d.b)(r.a.Fragment,null,Object(d.b)("h2",{id:"mentors"},e("Mentors")),Object(d.b)(P,{people:t.allMentorsYaml.edges.map((function(e){return e.node}))}),Object(d.b)("p",null,e("If you want to help teach or contribute in anyway, make a")," ",Object(d.b)("strong",null,Object(d.b)("a",{href:"https://github.com/"+t.site.siteMetadata.github+"/pulls"},"Pull Request"))," ",e("and add your name to the list of available mentors"),"."," ",e("We also ask that you please read the")," ",Object(d.b)("a",{href:"https://github.com/nodeschool/organizers/wiki/Event-Mentor-Best-Practices#on-being-a-mentor"},'"',e("On Being a Mentor"),'"')," ",e("tips for")," ",Object(d.b)("strong",null,e("NodeSchool Organizers"))," ",e("before attending as a mentor"),"."))},z=(a("8NJi"),a("ssGl")),C=Object(T.a)("div",{target:"ebiwkhp0"})({name:"8m2wph",styles:"display:grid;grid-gap:0px;grid-template-columns:repeat(auto-fit,minmax(120px,0.25fr));width:100%;z-index:900;transform:translate3d(-5%,0,0);position:relative;&:hover{svg{transition:opacity 0.3s,transform 0.2s;opacity:0.25;&:hover{opacity:1 !important;transform:scale(1.5);z-index:9999;}}}svg{padding:0;margin:0;polygon{stroke:transparent !important;stroke-width:0 !important;}}"}),W=function(){var e=Object(i.useTranslation)().t,t=z.data;return Object(d.b)(r.a.Fragment,null,Object(d.b)("h2",{id:"photos"},e("Photos")),Object(d.b)(C,null,t.allFile.edges.map((function(e){return Object(d.b)(H.a,{key:e.node.id,href:e.node.childImageSharp.original.src,backgroundImage:e.node.childImageSharp.fixed.src,rel:"noopener noreferrer",target:"_blank"})}))))},F=a("HzMS"),R=function(){var e=Object(i.useTranslation)().t,t=F.data;return Object(d.b)("div",{style:{margin:"auto"}},Object(d.b)("div",{style:{width:"100%",height:"100%"}},Object(d.b)("img",{src:t.placeholderImage.publicURL,alt:t.site.siteMetadata.title,style:{marginLeft:"auto",marginRight:"auto",display:"block",width:"250px",maxWidth:"250px"}})),Object(d.b)("h1",{style:{fontSize:"50px",lineHeight:"140%",textAlign:"center",fontWeight:"300",margin:"0 auto 60px",letterSpacing:"-1px",color:"#C0493D"}},e("Welcome to"),Object(d.b)("br",null),t.site.siteMetadata.title))},E=a("XTDk"),A=function(){var e=Object(i.useTranslation)().t,t=E.data;return Object(d.b)("p",{className:"additional"},Object(d.b)("strong",null,"NodeSchool")," ",e("strives to be a welcoming and safe event for all attendees"),"."," ",e("Attendees should follow the"),"."," ",Object(d.b)("a",{href:"#codeofconduct"},e("Code of Conduct").toLowerCase()),"."," ",e("If you need further information about an event, please contact the organizers at"),"."," ",Object(d.b)("a",{style:{fontWeight:"bold"},href:"mailto:"+t.site.siteMetadata.email,rel:"noopener noreferrer",target:"_blank"}," "+t.site.siteMetadata.email))};t.default=function(){var e=Object(i.useTranslation)().t,t=n.data;return Object(d.b)(s.a,{noWrapper:!0},Object(d.b)(l.a,{title:"Home"}),Object(d.b)("main",{className:"main cf"},Object(d.b)("section",{className:"panel text"},Object(d.b)("div",{className:"container"},Object(d.b)(R,null),Object(d.b)(M,null),Object(d.b)(w,null),Object(d.b)("div",{className:"mailinglist"},Object(d.b)("h3",null,e("Get Notified")),Object(d.b)("p",null,e("Make sure you know what's going on within the community and whenever we're having an event by signing up to our mailing list below"),":"),Object(d.b)("form",{action:t.site.siteMetadata.mailchimpSubscribeUrl,method:"post",target:"_blank"},Object(d.b)("label",{className:"firstname"},Object(d.b)("span",null,e("First Name")),Object(d.b)("input",{type:"text",name:"FNAME",className:""})),Object(d.b)("label",{className:"lastname"},Object(d.b)("span",null,e("Last Name")),Object(d.b)("input",{type:"text",name:"LNAME",className:""})),Object(d.b)("label",{className:"email"},Object(d.b)("span",null,e("Email Address")),Object(d.b)("input",{type:"email",name:"EMAIL",className:"required email"})),Object(d.b)("input",{type:"submit",value:e("Subscribe"),name:"subscribe"}))),Object(d.b)("h2",{id:"events"},e("Events")),Object(d.b)("p",null,Object(d.b)("strong",null,t.site.siteMetadata.title)," ",e("events are run by an enthusiastic group of volunteers"),"."," ",e("The workshops will be held monthly and will always be free"),"."),Object(d.b)("p",null,e("The events offer a low-key environment to learn or practice Node and are generally three hours long"),"."),Object(d.b)("h2",{id:"faq"},e("Frequently Asked Questions")),Object(d.b)("h3",null,'"',e("What should I expect?"),'"'),Object(d.b)("p",null,e("NodeSchool is a self-directed learning environment, where you bring your own laptop to learn"),"."," ",e("The intention is for attendees to work on the Node workshops from")," ",Object(d.b)("a",{rel:"noopener noreferrer",target:"_blank",href:"http://nodeschool.io/#workshopper-list"},"nodeschool.io"),"."," ",e("But if you have a personal project you are working on, do it!")," ",e("The goal of NodeSchool is to help people explore and learn Node"),"."," ",e("There will be mentors on hand at the events to help you when you hit any road blocks"),"."),Object(d.b)("h3",null,'"',e("How do I install Node?"),' "'),Object(d.b)("p",null,e("Our recommended way to install Node is through something called"),'"Homebrew".'),Object(d.b)("p",{className:"indent"},Object(d.b)("strong",null,"1.")," ",e("Install Homebrew by copying the following command into a terminal/bash prompt"),":"),Object(d.b)("code",{className:"terminal"},Object(d.b)("pre",null,'$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"')),Object(d.b)("p",{className:"indent"},Object(d.b)("strong",null,"2.")," ",e("Once installed, run"),Object(d.b)("code",null,"brew install node"),e("which should install the latest version of Node"),"."),Object(d.b)("p",null,e("If you have any issues installing either Homebrew or Node no worries"),"."," ",e("We'll do our best to help you get set up once you arrive at an event"),"."),Object(d.b)("h3",null,'"',e("What is a Workshopper?"),'"'),Object(d.b)("p",null,e("Workshopper is the name used for the open source lesson modules associated with NodeSchool"),"."," ",e("All are self guided (you don't need to attend a workshop to do one) and most work offline"),"."),Object(d.b)("h3",null,'"',e("How do I run a Workshopper?"),'"'),Object(d.b)("p",null,e("To get started with a Workshopper tutorial you'll have to install and then run that program in terminal/bash"),"."," ",e("Here's an example of how to install and run the Beginner Node Workshopper"),":"),Object(d.b)("code",{className:"terminal"},Object(d.b)("pre",null,"$ npm install -g learnyounode"),Object(d.b)("pre",null,"$ learnyounode")),Object(d.b)(W,null),Object(d.b)("h2",{id:"codeofconduct"},e("Code of Conduct")),Object(d.b)("p",null,e("We, the organizers of")," ",Object(d.b)("strong",null,t.site.siteMetadata.title),","," ",e("are dedicated to providing a harassment-free community for everyone, regardless of sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs"),"."," ",e("We do not tolerate harassment of community members in any form"),"."," ",e("Participants violating these rules may be sanctioned or expelled from the community at the discretion of the organizers of")," ",Object(d.b)("strong",null,t.site.siteMetadata.title),"."),Object(d.b)("p",null,e("Harassment includes offensive verbal or written comments related to sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs, deliberate intimidation, threats, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention"),"."," ",e("Sexual language and imagery is not appropriate for any events at")," ",Object(d.b)("strong",null,t.site.siteMetadata.title)," ",e("meetups or in any related communication channels"),"."," ",e("Community members asked to stop any harassing behavior are expected to comply immediately"),"."," ",e("Sponsors and presenters are also subject to the anti-harassment policy"),"."),Object(d.b)("p",null,e("If a community member engages in harassing behavior, the organizers of")," ",Object(d.b)("strong",null,t.site.siteMetadata.title)," ",e("may take any action they deem appropriate, including warning the offender or expulsion from the community"),"."," ",e("If you are being harassed, notice that someone else is being harassed, or have any concerns, please contact an organizer immediately"),"."),Object(d.b)("div",{className:"footer"},Object(d.b)("h2",{id:"credit"},e("Credits")),Object(d.b)("p",{className:"credit"},e("credit-The")," ",t.site.siteMetadata.title," ",e("Hex Logo was kindly designed by")," ",Object(d.b)("a",{href:t.site.siteMetadata.credits.logo.url,rel:"noopener noreferrer",target:"_blank"},t.site.siteMetadata.credits.logo.name),"."),Object(d.b)("p",{className:"links"},t.site.siteMetadata.meetupGroup&&Object(d.b)(r.a.Fragment,null,Object(d.b)("a",{href:"https://www.meetup.com/"+t.site.siteMetadata.meetupGroup,title:t.site.siteMetadata.title+" "+e("Event")},e("Events")),Object(d.b)("span",{className:"divider"},"|")),Object(d.b)("a",{href:"https://twitter.com/"+t.site.siteMetadata.twitter,title:t.site.siteMetadata.title+" Twitter"},"Twitter"),Object(d.b)("span",{className:"divider"},"|"),Object(d.b)("a",{href:"https://github.com/"+t.site.siteMetadata.github,title:t.site.siteMetadata.title+" GitHub"},"GitHub"),Object(d.b)("span",{className:"divider"},"|"),Object(d.b)("a",{href:"http://nodeschool.io/",title:"NodeSchool"},"NodeSchool.io"))))),Object(d.b)("aside",{className:"panel side"},Object(d.b)("div",{className:"container"},Object(d.b)("div",{className:"inner"},Object(d.b)("a",{className:"logo",href:"http://nodeschool.io"},Object(d.b)("img",{src:t.schoolhouseImage.publicURL,alt:t.site.siteMetadata.title}),Object(d.b)("p",{className:"about"},Object(d.b)("strong",null,"NodeSchool")," ",e("is a selection of open source workshops that teach web software skills"),"."," ",e("You can do them on your own or at one of the monthly")," ",Object(d.b)("strong",null,t.site.siteMetadata.title)," ",e("events"),".")),Object(d.b)("div",{className:"event"},Object(d.b)(j,null),Object(d.b)(A,null)),Object(d.b)(_,null),Object(d.b)(N,null),Object(d.b)(k,null))))))}},fwFn:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"github":"nodeschool/vancouver"}},"allMentorsYaml":{"edges":[{"node":{"id":"a3784f25-4823-51d4-b155-b2a752ad9eab","github":"ayliao","name":"Albert Liao","twitter":null}},{"node":{"id":"78b8f097-1800-599d-b90d-ef4ddff73c2f","github":"vrunoa","name":"Bruno","twitter":"vrunoa"}},{"node":{"id":"09c20e9a-999d-524c-96e3-3e97dd182291","github":"halkeye","name":"Gavin Mogan","twitter":"halkeye"}},{"node":{"id":"8c8dbedd-e981-570a-a664-3cf05223ce0c","github":"keywordnew","name":"Manil","twitter":"keywordnew"}},{"node":{"id":"39f66f5a-e726-58b9-8e2c-d1589a644507","github":"nfg","name":"Nigel","twitter":"thaeus"}},{"node":{"id":"a7d5b821-978f-5819-a95d-33eba4610172","github":"qard","name":"Stephen Belanger","twitter":"stephenbelanger"}}]}}}')},kDPR:function(e,t,a){var n=a("7zcn"),o=a("oSRv"),r=a("yK4D"),i=/"/g,s=function(e,t,a,n){var o=String(r(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),s+">"+o+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},ssGl:function(e){e.exports=JSON.parse('{"data":{"allFile":{"edges":[{"node":{"childImageSharp":{"id":"b36fad06-99ac-5f88-80b9-5aa485bf72ef","fixed":{"src":"/gatsby-theme-nodeschool/static/cdcaa9122a493b88d4d9f6adb3841200/bae4e/20190914-nodeschool-1.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20190914-nodeschool-1-cdcaa9122a493b88d4d9f6adb3841200.jpg"}},"id":"25d30eda-560c-5ad2-a85d-10df3fa6e755","relativeDirectory":"photos","relativePath":"photos/20190914-nodeschool-1.jpg"}},{"node":{"childImageSharp":{"id":"bdf099d9-8e8f-5abb-b76f-5c88a62e8823","fixed":{"src":"/gatsby-theme-nodeschool/static/5e528e1a3e6c3ca6fc48d96bbc7d9865/bae4e/20190810.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20190810-5e528e1a3e6c3ca6fc48d96bbc7d9865.jpg"}},"id":"8c60925a-4c08-5edd-b80e-8a0a80e50f3b","relativeDirectory":"photos","relativePath":"photos/20190810.jpg"}},{"node":{"childImageSharp":{"id":"e943208c-859d-5fc7-a97e-22965e87081a","fixed":{"src":"/gatsby-theme-nodeschool/static/f5e962a21766c45752e56a45fc6cc60d/bae4e/20190413-SpringIsHere.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20190413-SpringIsHere-f5e962a21766c45752e56a45fc6cc60d.jpg"}},"id":"2a8ae6ba-0f55-54a4-8b7a-65b117396f38","relativeDirectory":"photos","relativePath":"photos/20190413-SpringIsHere.jpg"}},{"node":{"childImageSharp":{"id":"c67074b6-63ae-5627-baa6-59872d58aa19","fixed":{"src":"/gatsby-theme-nodeschool/static/c25a42e9460cc72e9a9fc8213350282e/bae4e/20190316-GettingStarted-OpenSource.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20190316-GettingStarted-OpenSource-c25a42e9460cc72e9a9fc8213350282e.jpg"}},"id":"703d3f6f-70db-5139-9806-9fe757eb4117","relativeDirectory":"photos","relativePath":"photos/20190316-GettingStarted-OpenSource.jpg"}},{"node":{"childImageSharp":{"id":"18eb0c54-5307-5867-a3d2-8c84bfa738e1","fixed":{"src":"/gatsby-theme-nodeschool/static/d79bcf1855a2489294fb9fbdd86aebb0/bae4e/20190209-SpringIsHereSeries-2.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20190209-SpringIsHereSeries-2-d79bcf1855a2489294fb9fbdd86aebb0.jpg"}},"id":"9de4f928-ba56-53b8-9050-83a90f342fad","relativeDirectory":"photos","relativePath":"photos/20190209-SpringIsHereSeries-2.jpg"}},{"node":{"childImageSharp":{"id":"89d55603-5d3e-5b9f-a70a-1460a335cccf","fixed":{"src":"/gatsby-theme-nodeschool/static/d38459e934826133e01b9577aaa5f013/bae4e/20190209-SpringIsHereSeries-1.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20190209-SpringIsHereSeries-1-d38459e934826133e01b9577aaa5f013.jpg"}},"id":"5a5e61d4-f89c-5bff-9b27-3c27a6f1892b","relativeDirectory":"photos","relativePath":"photos/20190209-SpringIsHereSeries-1.jpg"}},{"node":{"childImageSharp":{"id":"4450d749-4bc8-5888-b52d-cb9fce7a6347","fixed":{"src":"/gatsby-theme-nodeschool/static/8d716adf2cc40d7dc1ed2817da521eaf/bae4e/20181013-FallIsHere.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20181013-FallIsHere-8d716adf2cc40d7dc1ed2817da521eaf.jpg"}},"id":"e005fd2e-8ced-561b-8dce-d0147dcb8220","relativeDirectory":"photos","relativePath":"photos/20181013-FallIsHere.jpg"}},{"node":{"childImageSharp":{"id":"97d6e0bc-470f-593d-b018-043b23e091dc","fixed":{"src":"/gatsby-theme-nodeschool/static/05fd7a52d0f94a68552f580b849b72d7/f11e0/20180915-OpenSource-2.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20180915-OpenSource-2-05fd7a52d0f94a68552f580b849b72d7.jpg"}},"id":"db4e61ed-cdf0-56a7-9f88-0bb6777a7797","relativeDirectory":"photos","relativePath":"photos/20180915-OpenSource-2.jpg"}},{"node":{"childImageSharp":{"id":"2bac2e1d-8074-54fc-bde0-fdc7b52c3e7a","fixed":{"src":"/gatsby-theme-nodeschool/static/05fd7a52d0f94a68552f580b849b72d7/f11e0/20180915-OpenSource-1.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20180915-OpenSource-1-05fd7a52d0f94a68552f580b849b72d7.jpg"}},"id":"7a9f7db4-dfa4-5b4e-8165-79ea3d683118","relativeDirectory":"photos","relativePath":"photos/20180915-OpenSource-1.jpg"}},{"node":{"childImageSharp":{"id":"20e85bd0-11be-5a27-8c5a-800f30a5115c","fixed":{"src":"/gatsby-theme-nodeschool/static/15b7fe6882108631a056f11b5ed2017b/bae4e/20180908-SummerIsHere.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20180908-SummerIsHere-15b7fe6882108631a056f11b5ed2017b.jpg"}},"id":"c445ad12-e3c2-5a59-be92-283530959cd7","relativeDirectory":"photos","relativePath":"photos/20180908-SummerIsHere.jpg"}},{"node":{"childImageSharp":{"id":"54cfaacb-8005-5e03-8f1f-d34e00eca91d","fixed":{"src":"/gatsby-theme-nodeschool/static/865c2c327cb6d299c167b6f079664897/bae4e/20180519-SummerIsHere.jpg"},"original":{"src":"/gatsby-theme-nodeschool/static/20180519-SummerIsHere-865c2c327cb6d299c167b6f079664897.jpg"}},"id":"e539af84-971c-56dc-9316-35840d10cb11","relativeDirectory":"photos","relativePath":"photos/20180519-SummerIsHere.jpg"}}]}}}')}}]);
//# sourceMappingURL=component---gatsby-theme-nodeschool-src-pages-index-js-87d71bc97de21a1dfebf.js.map