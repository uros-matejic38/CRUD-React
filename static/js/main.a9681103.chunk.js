(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(54)},54:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(23),l=a.n(r),o=a(56),c=a(7),i=a(8),m=a(10),u=a(9),b=a(11),h=(a(30),a(55)),d=a(58),p=a(57),g=a(2),v=a(12),E=a.n(v),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onChangePersonName=a.onChangePersonName.bind(Object(g.a)(Object(g.a)(a))),a.onChangeBusinessName=a.onChangeBusinessName.bind(Object(g.a)(Object(g.a)(a))),a.onChangeGstNumber=a.onChangeGstNumber.bind(Object(g.a)(Object(g.a)(a))),a.onSubmit=a.onSubmit.bind(Object(g.a)(Object(g.a)(a))),a.state={person_name:"",business_name:"",business_gst_number:""},a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"onChangePersonName",value:function(e){this.setState({person_name:e.target.value})}},{key:"onChangeBusinessName",value:function(e){this.setState({business_name:e.target.value})}},{key:"onChangeGstNumber",value:function(e){this.setState({business_gst_number:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={person_name:this.state.person_name,business_name:this.state.business_name,business_gst_number:this.state.business_gst_number};E.a.post("http://localhost:4000/business/add",t).then(function(e){return console.log(e.data)}),this.setState({person_name:"",business_name:"",business_gst_number:""})}},{key:"render",value:function(){return s.a.createElement("div",{style:{marginTop:10}},s.a.createElement("h3",null,"Add New Business"),s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Add Person Name: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.person_name,onChange:this.onChangePersonName})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Add Business Name: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.business_name,onChange:this.onChangeBusinessName})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Add GST Number: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.business_gst_number,onChange:this.onChangeGstNumber})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"submit",value:"Register Business",className:"btn btn-primary"}))))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onChangePersonName=a.onChangePersonName.bind(Object(g.a)(Object(g.a)(a))),a.onChangeBusinessName=a.onChangeBusinessName.bind(Object(g.a)(Object(g.a)(a))),a.onChangeGstNumber=a.onChangeGstNumber.bind(Object(g.a)(Object(g.a)(a))),a.onSubmit=a.onSubmit.bind(Object(g.a)(Object(g.a)(a))),a.state={person_name:"",business_name:"",business_gst_number:""},a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:4000/business/edit/"+this.props.match.params.id).then(function(t){e.setState({person_name:t.data.person_name,business_name:t.data.business_name,business_gst_number:t.data.business_gst_number})}).catch(function(e){console.log(e)})}},{key:"onChangePersonName",value:function(e){this.setState({person_name:e.target.value})}},{key:"onChangeBusinessName",value:function(e){this.setState({business_name:e.target.value})}},{key:"onChangeGstNumber",value:function(e){this.setState({business_gst_number:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={person_name:this.state.person_name,business_name:this.state.business_name,business_gst_number:this.state.business_gst_number};E.a.post("http://localhost:4000/business/update/"+this.props.match.params.id,t).then(function(e){return console.log(e.data)}),this.props.history.push("/index"),window.location.reload()}},{key:"render",value:function(){return s.a.createElement("div",{style:{marginTop:10}},s.a.createElement("h3",{align:"center"},"Update Business"),s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Person Name: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.person_name,onChange:this.onChangePersonName})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Business Name: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.business_name,onChange:this.onChangeBusinessName})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"GST Number: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.business_gst_number,onChange:this.onChangeGstNumber})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"submit",value:"Update Business",className:"btn btn-primary"}))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onDelete=a.onDelete.bind(Object(g.a)(Object(g.a)(a))),a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"onDelete",value:function(){E.a.get("http://localhost:4000/business/delete/"+this.props.obj._id).then(console.log("Deleted")).catch(function(e){return console.log(e)}),window.location.reload()}},{key:"render",value:function(){return s.a.createElement("tr",null,s.a.createElement("td",null,this.props.obj.person_name),s.a.createElement("td",null,this.props.obj.business_name),s.a.createElement("td",null,this.props.obj.business_gst_number),s.a.createElement("td",null,s.a.createElement(h.a,{to:"/edit/"+this.props.obj._id,className:"btn btn-primary"},"Edit")),s.a.createElement("td",null,s.a.createElement("button",{onClick:this.onDelete,className:"btn btn-danger"},"Delete")))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={business:[]},a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:4000/business").then(function(t){e.setState({business:t.data})}).catch(function(e){console.log(e)})}},{key:"tabRow",value:function(){return this.state.business.map(function(e,t){return s.a.createElement(f,{obj:e,key:t})})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",{align:"center"},"Business List"),s.a.createElement("table",{className:"table table-striped",style:{marginTop:20}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Person"),s.a.createElement("th",null,"Business"),s.a.createElement("th",null,"GST Number"),s.a.createElement("th",{colSpan:"2"},"Action"))),s.a.createElement("tbody",null,this.tabRow())))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onChangeSenderName=a.onChangeSenderName.bind(Object(g.a)(Object(g.a)(a))),a.onChangeSenderEmailPasswd=a.onChangeSenderEmailPasswd.bind(Object(g.a)(Object(g.a)(a))),a.onChangeReceiverName=a.onChangeReceiverName.bind(Object(g.a)(Object(g.a)(a))),a.onChangeSubject=a.onChangeSubject.bind(Object(g.a)(Object(g.a)(a))),a.onChangeContents=a.onChangeContents.bind(Object(g.a)(Object(g.a)(a))),a.onSubmit=a.onSubmit.bind(Object(g.a)(Object(g.a)(a))),a.state={sender_name:"",sender_email_passwd:"",receiver_name:"",subject:"",contents:""},a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"onChangeSenderName",value:function(e){this.setState({sender_name:e.target.value})}},{key:"onChangeSenderEmailPasswd",value:function(e){this.setState({sender_email_passwd:e.target.value})}},{key:"onChangeReceiverName",value:function(e){this.setState({receiver_name:e.target.value})}},{key:"onChangeSubject",value:function(e){this.setState({subject:e.target.value})}},{key:"onChangeContents",value:function(e){this.setState({contents:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={sender_name:this.state.sender_name,sender_email_passwd:this.state.sender_email_passwd,receiver_name:this.state.receiver_name,subject:this.state.subject,contents:this.state.contents};E.a.post("http://localhost:4000/business/sendemail",t).then(function(e){return console.log(e.data)}).catch(function(e){alert(e)}),this.setState({sender_name:"",sender_email_passwd:"",receiver_name:"",subject:"",contents:""})}},{key:"render",value:function(){return s.a.createElement("div",{style:{marginTop:20}},s.a.createElement("h3",null,"Send Email"),s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Sender Email Address: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.sender_name,onChange:this.onChangeSenderName})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Sender Email Password: "),s.a.createElement("input",{type:"password",className:"form-control",value:this.state.sender_email_passwd,onChange:this.onChangeSenderEmailPasswd})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Receiver Email Address: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.receiver_name,onChange:this.onChangeReceiverName})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Subject: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.subject,onChange:this.onChangeSubject})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Contents: "),s.a.createElement("textarea",{type:"text",className:"form-control",value:this.state.contents,onChange:this.onChangeContents})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"submit",value:"Send",className:"btn btn-primary"}))))}}]),t}(n.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(o.a,null,s.a.createElement("div",{className:"container"},s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},s.a.createElement(h.a,{to:"/",className:"navbar-brand"},"React CRUD Example"),s.a.createElement("nav",{className:"navbar navbar-expand-sm bg-primary navbar-dark"},s.a.createElement("ul",{className:"navbar-nav mr-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(h.a,{to:"/",className:"nav-link"},"Home")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(h.a,{to:"/create",className:"nav-link"},"Create")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(h.a,{to:"/index",className:"nav-link"},"Index")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(h.a,{to:"/sendemail",className:"nav-link"},"SendEmail")))))," ",s.a.createElement("br",null),s.a.createElement("h2",null,"Welcome to React CRUD Tutorial")," ",s.a.createElement("br",null),s.a.createElement(d.a,null,s.a.createElement(p.a,{expect:!0,path:"/create",component:N}),s.a.createElement(p.a,{expect:!0,path:"/edit/:id",component:_}),s.a.createElement(p.a,{expect:!0,path:"/index",component:j}),s.a.createElement(p.a,{expect:!0,path:"/sendemail",component:C}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(o.a,null,s.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.a9681103.chunk.js.map