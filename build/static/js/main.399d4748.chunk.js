(this["webpackJsonpciu-weather-app"]=this["webpackJsonpciu-weather-app"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(4),i=a.n(c),r=(a(14),a(3)),l=a.n(r),o=a(5),p=a(6),d=a(7),m=a(9),u=a(8),h=(a(16),a(17),a(0));var j=function(e){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"cards",children:[Object(h.jsx)("h1",{children:"William Morris"}),Object(h.jsx)("h5",{className:"py-4",children:Object(h.jsx)("i",{className:"wi wi-day-sunny display-1"})}),Object(h.jsxs)("h1",{className:"py2",children:[e.temp_celsius,"\xb0"]}),(t=e.temp_min,a=e.temp_max,Object(h.jsxs)("h3",{children:[Object(h.jsxs)("span",{className:"px4",children:[t,"\xb0"]}),Object(h.jsxs)("span",{className:"px4",children:[a,"\xb0"]})]})),Object(h.jsx)("h4",{className:"py3",children:e.descriptionDay})]})});var t,a},x=(a(19),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).getWeather=Object(o.a)(l.a.mark((function t(){var a,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=-34.576531&lon=-58.648291&exclude=current,hourly&appid=a0c9e2645798d486f9bd63caafbaf2f9");case 2:return a=t.sent,t.next=5,a.json();case 5:s=t.sent,console.log(s),e.setState({celsius:e.calCelsius(s.daily[0].temp.day),temp_max:e.calCelsius(s.daily[0].temp.max),temp_min:e.calCelsius(s.daily[0].temp.min),descriptionDay:s.daily[0].weather[0]});case 8:case"end":return t.stop()}}),t)}))),e.state={},e.state={icon:void 0,main:void 0,celsius:void 0,temp_max:void 0,temp_min:void 0,descriptionDay:"",error:!1},e.getWeather(),e}return Object(d.a)(a,[{key:"calCelsius",value:function(e){return Math.floor(e-273.15)}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(j,{temp_celsius:this.state.celsius,temp_max:this.state.temp_max,temp_min:this.state.temp_min,description:this.state.description})})}}]),a}(n.a.Component)),b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),b()}},[[20,1,2]]]);
//# sourceMappingURL=main.399d4748.chunk.js.map