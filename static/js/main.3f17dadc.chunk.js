(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(t,e,a){t.exports={profile:"Profile_profile__DjkYX",description:"Profile_description__3PNgc",avatar:"Profile_avatar__eqzqz",name:"Profile_name__2qAr0",tag:"Profile_tag__2SAJd",location:"Profile_location__2bZMC",stats:"Profile_stats__dBMjh",label:"Profile_label__1q14b",quantity:"Profile_quantity__2Gged"}},function(t,e,a){t.exports={item:"FriendListItem_item__1__DF",status:"FriendListItem_status__3MYRs",statusGreen:"FriendListItem_statusGreen__2cCyx",statusRed:"FriendListItem_statusRed__2fapK",itemGreen:"FriendListItem_itemGreen__1qZJ4",itemRed:"FriendListItem_itemRed__14EYY",avatar:"FriendListItem_avatar__22sCx",name:"FriendListItem_name__2JSfV"}},function(t,e,a){t.exports={statistics:"Statistics_statistics__RofsO",title:"Statistics_title__3anY0",statList:"Statistics_statList__1njwr",item:"Statistics_item__13_zL",percentage:"Statistics_percentage__362qb",label:"Statistics_label__3ZE7S"}},function(t){t.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,,function(t,e,a){t.exports={friendList:"FriendList_friendList__Wg8Io"}},function(t){t.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(t){t.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var s=a(5),i=a.n(s),n=a(7),c=a.n(n),l=(a(15),a(16),a(1)),r=a.n(l),o=a(0);var d=function(t){var e=t.name,a=t.tag,s=t.avatar,i=t.followers,n=t.views,c=t.likes;return Object(o.jsxs)("div",{className:r.a.profile,children:[Object(o.jsxs)("div",{className:r.a.description,children:[Object(o.jsx)("img",{src:s,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:r.a.avatar}),Object(o.jsx)("p",{className:r.a.name,children:e}),Object(o.jsxs)("p",{className:r.a.tag,children:["@",a]}),Object(o.jsx)("p",{className:r.a.location,children:"Salvador, Brasil"})]}),Object(o.jsxs)("ul",{className:r.a.stats,children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:r.a.lable,children:"Followers"}),Object(o.jsx)("span",{className:r.a.quantity,children:i})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:r.a.lable,children:"Views"}),Object(o.jsx)("span",{className:r.a.quantity,children:n})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:r.a.lable,children:"Likes"}),Object(o.jsx)("span",{className:r.a.quantity,children:c})]})]})]})},m=a(3),_=a.n(m);var j=function(t){var e=t.title,a=t.items;return Object(o.jsxs)("section",{className:_.a.statistics,children:[e&&Object(o.jsx)("h2",{className:_.a.title,children:e}),Object(o.jsx)("ul",{className:_.a.statList,children:a.map((function(t){return Object(o.jsxs)("li",{className:_.a.item,children:[Object(o.jsx)("span",{className:_.a.label,children:t.label}),Object(o.jsxs)("span",{className:_.a.percentage,children:[t.percentage,"%"]})]},t.id)}))})]})},p=a(2),v=a.n(p);var b=function(t){var e=t.avatar,a=t.name,s=t.isOnline;return Object(o.jsxs)("li",{className:"".concat(v.a.item," ").concat(s?v.a.itemGreen:v.a.itemRed),children:[Object(o.jsx)("span",{className:"".concat(v.a.status," ").concat(s?v.a.statusGreen:v.a.statusRed)}),Object(o.jsx)("img",{className:v.a.avatar,src:e,alt:a,width:"48"}),Object(o.jsx)("p",{className:v.a.name,children:a})]})},f=a(8),u=a.n(f);var O=function(t){var e=t.friends;return Object(o.jsx)("ul",{className:u.a.friendList,children:e.map((function(t){return Object(o.jsx)(b,{avatar:t.avatar,name:t.name,isOnline:t.isOnline},t.id)}))})},x=a(4),g=a(9),h=a(10);var w=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{name:x.name,tag:x.tag,avatar:x.avatar,followers:x.stats.followers,views:x.stats.views,likes:x.stats.likes}),Object(o.jsx)(j,{title:"Upload stats",items:g}),Object(o.jsx)(O,{friends:h})]})};c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.3f17dadc.chunk.js.map